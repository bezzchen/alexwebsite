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
      <header className="fixed top-0 z-50 w-full bg-white">
      </header>
    );
  };
  
  export default Header;