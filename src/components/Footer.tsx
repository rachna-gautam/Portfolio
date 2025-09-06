const Footer = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  return (
    <footer className="bg-[#2B1B3B] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-[#B2D8CE]">Rachna Gautam</h3>
            <p className="text-gray-300">Full Stack Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-8">
            {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-gray-400 hover:text-[#648DB3] transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#52357B]/50 mt-8 pt-6 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; 2025 Rachna Gautam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
