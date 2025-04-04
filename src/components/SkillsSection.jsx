import { FaJava, FaJs, FaCss3Alt, FaHtml5, FaReact, FaGitAlt, FaPython, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiExpress, SiHeroku, SiFlutter, SiSpringboot } from "react-icons/si";

const skills = [
  { icon: FaJava, name: "Java", color: "#f89820" },
  { icon: FaJs, name: "JavaScript", color: "#f7df1e" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
  { icon: FaNodeJs, name: "Node.js", color: "#68a063" },
  { icon: FaCss3Alt, name: "CSS", color: "#2965f1" },
  { icon: FaHtml5, name: "HTML", color: "#e44d26" },
  { icon: FaReact, name: "React", color: "#61dbfb" },
  { icon: FaGitAlt, name: "Git", color: "#f05032" },
  { icon: SiSpringboot, name: "Spring Boot", color: "#6db33f" },
  { icon: SiMongodb, name: "MongoDB", color: "#4db33d" },
  { icon: SiExpress, name: "Express", color: "#000000" },
  { icon: SiHeroku, name: "Heroku", color: "#430098" },
  { icon: FaAngular, name: "Angular", color: "#dd0031" },
  { icon: FaPython, name: "Python", color: "#306998" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" }
];

function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-24 px-6 md:px-12 lg:px-32">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 font-oswald text-center">Skills & Technologies</h2>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 md:gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="flex flex-col items-center p-2">
              <Icon size={40} className="md:w-16 md:h-16" style={{ color: skill.color }} />
              <span className="text-xs mt-2 text-center">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;