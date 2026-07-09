import { Resend } from "resend";

const DEFAULT_RECIPIENT =
  "info@alexanderinn.co.nz,barry.phasel235@gmail.com";
const DEFAULT_FROM = "Alexander Inn <info@alexanderinn.co.nz>";
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_ACTION = "contact_form";
const RECAPTCHA_MIN_SCORE = 0.5;

type RecaptchaVerificationResult =
  | { ok: true }
  | { ok: false; message: string; status: 400 | 502 | 503 };

type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

const topicLabels = {
  booking: "Booking",
  parking: "Parking",
  arrival: "Arrival",
  general: "General enquiry",
} as const;

type Topic = keyof typeof topicLabels;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function getRecipients() {
  return (process.env.CONTACT_EMAIL_TO ?? DEFAULT_RECIPIENT)
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);
}

async function verifyRecaptcha(
  token: string,
): Promise<RecaptchaVerificationResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    console.error("reCAPTCHA environment variables are not configured.");
    return {
      ok: false,
      message:
        "Email is temporarily unavailable. Please call Alexander Inn directly.",
      status: 503,
    };
  }

  if (!token) {
    return {
      ok: false,
      message: "Please verify the form and try again.",
      status: 400,
    };
  }

  let response: Response;

  try {
    response = await fetch(RECAPTCHA_VERIFY_URL, {
      body: new URLSearchParams({
        secret,
        response: token,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });
  } catch (error) {
    console.error("reCAPTCHA verification request failed.", error);
    return {
      ok: false,
      message: "We could not verify your request. Please try again.",
      status: 502,
    };
  }

  if (!response.ok) {
    console.error("reCAPTCHA verification returned an error response.");
    return {
      ok: false,
      message: "We could not verify your request. Please try again.",
      status: 502,
    };
  }

  const result = (await response.json()) as RecaptchaVerifyResponse;

  if (
    !result.success ||
    result.action !== RECAPTCHA_ACTION ||
    typeof result.score !== "number" ||
    result.score < RECAPTCHA_MIN_SCORE
  ) {
    console.warn("reCAPTCHA rejected a contact form submission.", {
      action: result.action,
      errorCodes: result["error-codes"],
      score: result.score,
    });

    return {
      ok: false,
      message: "We could not verify your request. Please try again.",
      status: 400,
    };
  }

  return { ok: true };
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json(
      { message: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const name = readString(payload.name);
  const email = readString(payload.email).toLowerCase();
  const phone = readString(payload.phone);
  const topic = readString(payload.topic);
  const message = readString(payload.message);
  const website = readString(payload.website);
  const recaptchaToken = readString(payload.recaptchaToken);

  // Silently accept bot submissions caught by the honeypot.
  if (website) {
    return Response.json({
      message:
        "Your enquiry has been sent. Alexander Inn will reply as soon as possible.",
    });
  }

  if (
    name.length < 2 ||
    name.length > 100 ||
    /[\r\n]/.test(name) ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    phone.length > 50 ||
    message.length < 10 ||
    message.length > 5000 ||
    !(topic in topicLabels)
  ) {
    return Response.json(
      { message: "Please complete all required fields with valid details." },
      { status: 400 },
    );
  }

  const recaptchaResult = await verifyRecaptcha(recaptchaToken);

  if (!recaptchaResult.ok) {
    return Response.json(
      { message: recaptchaResult.message },
      { status: recaptchaResult.status },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipients = getRecipients();

  if (
    !apiKey ||
    recipients.length === 0 ||
    recipients.some((recipient) => !emailPattern.test(recipient))
  ) {
    console.error("Contact email environment variables are not configured.");
    return Response.json(
      {
        message:
          "Email is temporarily unavailable. Please call Alexander Inn directly.",
      },
      { status: 503 },
    );
  }

  const topicLabel = topicLabels[topic as Topic];
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedPhone = escapeHtml(phone);
  const escapedMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: DEFAULT_FROM,
      to: recipients,
      replyTo: email,
      subject: `[Website enquiry] ${topicLabel} — ${name}`,
      text: [
        `New ${topicLabel.toLowerCase()} enquiry from the Alexander Inn website`,
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Topic: ${topicLabel}`,
        "",
        "Message:",
        message,
        "",
        `Reply to this email to respond directly to ${email}.`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #1c1917; line-height: 1.6;">
          <h1 style="font-size: 24px;">New Alexander Inn website enquiry</h1>
          <table style="border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 6px 16px 6px 0;"><strong>Name</strong></td><td>${escapedName}</td></tr>
            <tr><td style="padding: 6px 16px 6px 0;"><strong>Email</strong></td><td><a href="mailto:${escapedEmail}">${escapedEmail}</a></td></tr>
            <tr><td style="padding: 6px 16px 6px 0;"><strong>Phone</strong></td><td>${escapedPhone || "Not provided"}</td></tr>
            <tr><td style="padding: 6px 16px 6px 0;"><strong>Topic</strong></td><td>${topicLabel}</td></tr>
          </table>
          <h2 style="font-size: 18px;">Message</h2>
          <p>${escapedMessage}</p>
          <p style="margin-top: 24px; color: #57534e;">Reply to this email to respond directly to ${escapedEmail}.</p>
        </div>
      `,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Resend could not send the contact enquiry.", error);
    return Response.json(
      {
        message:
          "We could not send your enquiry. Please try again or call Alexander Inn directly.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    message:
      "Your enquiry has been sent. Alexander Inn will reply as soon as possible.",
  });
}
