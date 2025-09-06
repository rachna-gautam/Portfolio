import SkillsSlider from "./SkillsSlider";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About <span className="text-teal-600">Me</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Passionate full-stack developer with expertise in modern web technologies. 
          I specialize in building scalable applications using the MERN stack and have 
          extensive experience with cloud technologies.
        </p>
        <SkillsSlider />
      </div>
    </section>
  );
};

export default About;
