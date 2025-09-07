import { Download, MessageSquare } from "lucide-react";
import { useEffect, useRef } from "react";

interface HeroProps {
  scrollTo: (id: string) => void;
}

const skills = [
  "⚛️ React",
  "🟨 JavaScript",
  "🟦 TypeScript",
  "💻 Next.js",
  "🌐 Node.js",
  "⚡ Express",
  "🍃 MongoDB",
  "🐬 MySQL",
  "☁️ AWS",
  "🐳 Docker",
  "🔗 Web3.js",
];

const Hero = ({ scrollTo }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle sparkles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let particles: { x: number; y: number; r: number; dx: number; dy: number }[] = [];

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/RachnaGautam_Resume.pdf";
    link.download = "RachnaGautam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#2B1B3B] to-[#1C0F2A]"
    >
      {/* Sparkle Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#52357B]/40 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-[#6453B3]/30 blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#9B82D8]/30 blur-3xl animate-blob animation-delay-3000"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#B2D8CE]/20 blur-3xl animate-blob"></div>
      </div>

      {/* Floating Skills */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="absolute text-xs md:text-sm font-semibold text-white/20 backdrop-blur-sm px-2 py-1 rounded-xl
              border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] animate-float"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1C0F2A]/80 to-[#1C0F2A] z-20"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-30">
       <h1 className="text-5xl md:text-7xl font-extrabold text-gray-100 mb-6 leading-tight 
  drop-shadow-[0_0_30px_rgba(155,130,216,0.8)] hover:scale-105 transform transition duration-500">
  Rachna{" "}
  <span className="text-transparent bg-clip-text 
    bg-gradient-to-r from-[#B29BFF] via-[#7A67C9] to-[#648DB3] 
    drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
    Gautam
  </span>
</h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-[0_0_20px_rgba(100,83,179,0.6)]">
          🚀 Full Stack Developer | Turning ideas into scalable apps
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-[#9B82D8] to-[#6453B3] hover:from-[#52357B] hover:to-[#9B82D8] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 shadow-2xl flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#1C0F2A]/80 text-gray-100 border-2 border-gray-700 hover:border-[#9B82D8] hover:text-[#9B82D8] px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 shadow-2xl flex items-center space-x-2"
          >
            <MessageSquare size={20} />
            <span>Contact Me</span>
          </button>
        </div>
      </div>

      {/* Animations */}
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

          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
            50% { transform: translateY(-20px) rotate(4deg); opacity: 0.3; }
            100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          }
          .animate-float {
            animation: float 14s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
