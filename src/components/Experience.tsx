import { Calendar, MapPin } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Work <span className="text-coral-500">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development and the key
            contributions I've made.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-purple-400"></div>

            {[
              {
                role: "Full Stack Developer",
                company: "Decrypt Block",
                duration: "Apr 2022 – Present",
                location: "Mohali, Punjab (On-Site)",
                contributions: [
                  "Worked actively with diverse teams to develop user-friendly and functional web applications.",
                  "Integrated frontend and backend code to build effective and optimized applications.",
                  "Fixed bugs and refactored cluttered codebases to ensure seamless project delivery.",
                  "Contributed to a wide range of websites across different domains and categories.",
                  "Delegated tasks effectively across the team to improve productivity.",
                  "Actively participated in daily scrums and stand-ups for better collaboration.",
                ],
              },
              {
                role: "Web Developer",
                company: "People Tech Group",
                duration: "Jul 2020 – May 2021",
                location: "Hyderabad, India",
                contributions: [
                  "Actively developed applications within agile methodologies and sprint frameworks.",
                  "Built responsive frontend web applications with a focus on user accessibility and usability.",
                  "Designed and implemented user-friendly interfaces to enhance customer experience.",
                  "Collaborated closely with design and product teams to ensure alignment with business goals.",
                  "Participated in sprint planning, reviews, and retrospectives for continuous improvement.",
                ],
              },
            ].map((exp, index) => (
              <div key={index} className="relative pl-20 pb-12">
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-teal-400 rounded-full shadow-lg"></div>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:scale-102">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-purple-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.contributions.map((contribution, i) => (
                      <li
                        key={i}
                        className="text-gray-600 flex items-start space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
