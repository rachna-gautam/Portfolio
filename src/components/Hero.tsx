import { Download, MessageSquare } from "lucide-react";

interface HeroProps {
  scrollTo: (id: string) => void;
}

const Hero = ({ scrollTo }: HeroProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/RachnaGautam_Resume.pdf"; // Your resume in public folder
    link.download = "RachnaGautam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#2B1B3B] to-[#1C0F2A]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#52357B]/40 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-[#6453B3]/30 blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#9B82D8]/30 blur-3xl animate-blob animation-delay-3000"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#B2D8CE]/20 blur-3xl animate-blob"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-100 mb-6 leading-tight">
          Rachna{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B82D8] via-[#6453B3] to-[#52357B]">
            Gautam
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Full Stack Developer
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-[#9B82D8] to-[#6453B3] hover:from-[#52357B] hover:to-[#9B82D8] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-xl flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#1C0F2A] text-gray-100 border-2 border-gray-700 hover:border-[#9B82D8] hover:text-[#9B82D8] px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-xl flex items-center space-x-2"
          >
            <MessageSquare size={20} />
            <span>Contact Me</span>
          </button>
        </div>
      </div>

      {/* TailwindCSS blob animation */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-3000 { animation-delay: 3s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}
      </style>
    </section>
  );
};

export default Hero;
