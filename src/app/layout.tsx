import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header
          logo="MyLogo"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}