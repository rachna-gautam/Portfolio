import { Code, Server, Database, Globe, Cpu, Box, Cloud, Brain, Layers, GitBranch, Wallet } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  // --- Frontend ---
  { name: "HTML5", icon: Code, color: "bg-orange-100 text-orange-600" },
  { name: "CSS3", icon: Code, color: "bg-blue-100 text-blue-600" },
  { name: "JavaScript", icon: Code, color: "bg-yellow-100 text-yellow-600" },
  { name: "TypeScript", icon: Code, color: "bg-blue-100 text-blue-700" },
  { name: "React", icon: Code, color: "bg-cyan-100 text-cyan-600" },
  { name: "Next.js", icon: Code, color: "bg-gray-100 text-gray-800" },
  { name: "TailwindCSS", icon: Code, color: "bg-sky-100 text-sky-600" },
   { name: "TanStack Query", icon: Code, color: "bg-rose-100 text-rose-600" },

  // --- Backend ---
  { name: "Node.js", icon: Server, color: "bg-green-100 text-green-600" },
  { name: "Express.js", icon: Server, color: "bg-gray-100 text-gray-600" },
  { name: "REST APIs", icon: Globe, color: "bg-indigo-100 text-indigo-600" },

  // --- Databases ---
  { name: "MongoDB", icon: Database, color: "bg-green-100 text-green-700" },
  { name: "MySQL", icon: Database, color: "bg-indigo-100 text-indigo-600" },

  { name: "Solidity", icon: Code, color: "bg-gray-100 text-gray-900" },
  { name: "Web3.js", icon: Globe, color: "bg-green-100 text-green-700" },
  { name: "Ethers.js", icon: Globe, color: "bg-indigo-100 text-indigo-700" },
  { name: "Wallet Integration", icon: Wallet, color: "bg-orange-100 text-orange-700" },


  // --- DevOps / Cloud ---
  { name: "AWS", icon: Globe, color: "bg-orange-100 text-orange-600" },
  { name: "Docker", icon: Box, color: "bg-teal-100 text-teal-600" },
  { name: "CI/CD", icon: GitBranch, color: "bg-gray-100 text-gray-700" },

  // --- AI / ML ---
  { name: "OpenAI API", icon: Brain, color: "bg-purple-100 text-purple-700" },
  { name: "Python", icon: Cpu, color: "bg-yellow-100 text-yellow-700" },


  // --- Tools ---
  { name: "Git & GitHub", icon: GitBranch, color: "bg-gray-100 text-gray-800" },
  { name: "VS Code", icon: Code, color: "bg-indigo-100 text-indigo-700" },
];

const SkillsSlider = () => {
  return (
    <Swiper
      className="p-3 w-full max-w-5xl"
      speed={300}
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
      loop={true}
      autoplay={{ delay: 2000 }}
    >
      {skills.map((skill) => (
        <SwiperSlide key={skill.name}>
          <div
            className={`${skill.color} p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer`}
          >
            <skill.icon size={32} className="mx-auto mb-3" />
            <h3 className="font-semibold">{skill.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SkillsSlider;
