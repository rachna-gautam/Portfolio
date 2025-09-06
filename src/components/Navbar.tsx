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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">Rachna Gautam</div>
        <div className="hidden md:flex space-x-8">
          {links.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === id
                  ? "text-teal-600 bg-teal-50"
                  : "text-gray-600 hover:text-teal-600 hover:bg-teal-50"
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
