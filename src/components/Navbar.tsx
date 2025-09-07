import { Briefcase, FolderOpen, Home, Phone, User } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

const Navbar = ({ activeSection, scrollTo }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Phone },
];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? "bg-[#1C0F2A] shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="px-4 py-2 rounded-xl bg-[#52357B]/30 backdrop-blur-md 
          text-2xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-[#9B82D8] via-[#6453B3] to-[#52357B] 
          drop-shadow-[0_0_20px_rgba(155,130,216,0.8)] cursor-pointer"
        >
          RG
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {links.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                ${
                  activeSection === id
                    ? "text-[#9B82D8] bg-[#52357B]/30 shadow-md shadow-[#9B82D8]/30 scale-105"
                    : "text-gray-200 hover:text-[#B2D8CE] hover:bg-[#52357B]/20 hover:scale-105"
                }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-[#52357B]/20 transition"
          >
            {menuOpen ? (
              // Close icon
              <svg
                className="w-6 h-6 text-gray-200"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6 text-gray-200"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
  <>
    {/* Overlay */}
    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 bg-[#1C0F2A]/95 backdrop-blur-md z-40 transition-opacity duration-300"
    ></div>

    {/* Mobile Menu */}
    <div className="md:hidden fixed inset-0 z-50 flex flex-col p-6 space-y-6">
      {/* Close Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setMenuOpen(false)}
          className="p-2 rounded-lg text-gray-200 hover:text-white transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col mt-6 space-y-4">
        {links.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => {
              scrollTo(id);
              setMenuOpen(false);
            }}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300
              ${
                activeSection === id
                  ? "text-[#9B82D8] bg-[#52357B]/30 shadow-md"
                  : "text-gray-200 hover:text-[#B2D8CE] hover:bg-[#52357B]/20"
              }`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  </>
)}

    </nav>
  );
};

export default Navbar;
