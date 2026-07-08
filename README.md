This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Create a local env file from the example:

```bash
cp .env.example .env.local
```

Set the Google Maps Embed API key in `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_embed_api_key
```

Set up the contact form with [Resend](https://resend.com):

1. Verify `alexanderinn.co.nz` as a sending domain in Resend.
2. Create a Resend API key.
3. Add the following values to `.env.local` and to the Vercel project:

```bash
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL_TO=info@alexanderinn.co.nz,barry.phasel235@gmail.com
```

`CONTACT_EMAIL_TO` accepts multiple comma-separated recipients. The form uses
the guest's submitted email address as `Reply-To`, so replying to an enquiry
from the recipient's mail client responds directly to the guest. Enquiries are
sent from `Alexander Inn <info@alexanderinn.co.nz>`.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Add this environment variable in Vercel under Project Settings → Environment Variables:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
RESEND_API_KEY
CONTACT_EMAIL_TO
```

Configure the values for Production, Preview, and Development as needed. Never
prefix `RESEND_API_KEY` with `NEXT_PUBLIC_`; it must remain server-only.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
