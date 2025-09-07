import { Briefcase, FolderOpen, Phone, User } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

const Navbar = ({ activeSection, scrollTo }: NavbarProps) => {
  const links = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 
      bg-gradient-to-r from-[#2B1B3B]/90 via-[#1C0F2A]/85 to-[#2B1B3B]/90 
      backdrop-blur-md shadow-lg border-b border-[#52357B]/40">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-[#9B82D8] via-[#6453B3] to-[#52357B] 
          drop-shadow-[0_0_15px_rgba(155,130,216,0.7)] tracking-wide cursor-pointer">
          RG
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          {links.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                ${
                  activeSection === id
                    ? "text-[#9B82D8] bg-[#52357B]/30 shadow-md shadow-[#9B82D8]/30 scale-105"
                    : "text-gray-300 hover:text-[#B2D8CE] hover:bg-[#52357B]/20 hover:scale-105"
                }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
