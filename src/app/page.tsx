import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <Header
        logo="MyLogo"
        navItems={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <main className="pt-16">
      </main>
    </>
  );
}