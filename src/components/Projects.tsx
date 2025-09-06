import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="text-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Digital Arms Marketplace",
              description:
                "A comprehensive e-commerce platform for digital assets with secure payment integration and user management.",
              tech: ["React", "Node.js", "MongoDB", "Stripe", "Web3", "Blockchain", "NFT", "Ethers"],
              demo: "https://marketplace.digital-arms.com",
            },
            {
              title: "AIA Consortium Portal",
              description:
                "Professional portal for consortium management with research funding and collaboration features.",
              tech: ["React", "TypeScript","Node.js", "Express", "DynamoDB", "AWS", "Blockchain"],
              demo: "https://portal.aiaconsortium.com.au/",
            },
            {
              title: "Plan A - Project Management",
              description:
                "Intuitive project management tool with real-time collaboration and job/task tracking capabilities.",
              tech: ["React", "Pusher", "MySQL"],
              demo: "https://planav3.netlify.app/",
            },
            {
              title: "FTA Portal",
              description:
                "A management portal for Flinn Taekwondo Academy in Australia where instructors can assign belts, manage grades, and provide a kiosk-based login for students.",
              tech: ["Next.js", "Zustand", "TailwindCSS"],
              demo: "https://my.flinntkd.com.au/landing",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://api.microlink.io/?url=${encodeURIComponent(
                    project.demo
                  )}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 ">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
