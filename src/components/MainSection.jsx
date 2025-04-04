import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import besImage from '../assets/BES.png';

function MainSection() {
  return (
    <section className="pt-32 pb-16 px-4 md:px-20 lg:px-40 xl:px-72" id="home">
      <div className="relative flex flex-col items-center">
        {/* Image with Gradient Overlay */}
        <div className="relative w-full max-w-xl h-50 md:h-130">
          <img src={besImage} alt="BES" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>

        {/* Name with Line */}
        <div className="relative inline-block text-center mt-8 md:mt-4">
          {/* Vertical Line */}
          <div className="absolute -left-1 top-[-34px] h-20 md:h-38 w-1 bg-[#456268]"></div>

          {/* Name */}
          <h1 className="text-gray-800 text-4xl md:text-6xl lg:text-8xl font-bold font-oswald relative inline-block pl-5 mb-6">
            SAKHI HASHMAT
            {/* Full Horizontal Line */}
            <div className="absolute left-0 bottom-[-12px] md:bottom-[-22px] w-full h-1 bg-[#456268]"></div>
          </h1>
        </div>

        {/* Social Icons and Job Title */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mt-4">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/sakhi-hashmat/" className="text-[#0077B5] hover:text-blue-600 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={24} className="md:w-7 md:h-7" />
            </a>
            <a href="https://github.com/Sakhi97" className="text-black hover:text-blue-600 transition-colors" aria-label="GitHub">
              <FaGithub size={24} className="md:w-7 md:h-7" />
            </a>
            <a href="mailto:sakhi.hashmat7@gmail.com" className="text-red-600 hover:text-red-700 transition-colors" aria-label="Email">
              <FaEnvelope size={24} className="md:w-7 md:h-7" />
            </a>
          </div>

          {/* Job Title */}
          <span className="text-xl md:text-2xl text-[#456268] font-oswald md:border-l-2 md:border-[#456268] md:pl-4">
            Full-stack Developer
          </span>
        </div>
      </div>
    </section>
  );
}

export default MainSection;