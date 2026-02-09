type NavItem = {
    label: string;
    href: string;
  };
  
  type HeaderProps = {
    logo: string;
    navItems: NavItem[];
  };
  
  const Header = ({ logo, navItems }: HeaderProps) => {
    return (
      <header className="fixed top-0 z-50 w-full bg-white border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="font-bold text-lg">{logo}</div>
  
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  