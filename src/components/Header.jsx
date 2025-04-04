import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 flex items-center px-4 md:px-6 py-4 z-50 border-b border-gray-300">
      {/* Logo */}
      <div className="text-xl font-bold font-oswald">
        <img src={logo} alt="Logo" className="h-8 md:h-10" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex ml-auto justify-end items-center space-x-6">
        <a href="#about" className="text-sm hover:text-slate-800 font-inter transition-colors">About</a>
        <a href="#projects" className="text-sm hover:text-slate-800 font-inter transition-colors">Projects</a>
        <a href="#skills" className="text-sm hover:text-slate-800 font-inter transition-colors">Skills</a>
      </div>

      {/* Language Buttons */}
      <div className="hidden md:flex space-x-2 ml-6">
        <button className="border border-gray-400 px-2 py-0.5 text-xs rounded font-inter">EN</button>
        <button className="px-2 py-0.5 text-xs font-inter">FI</button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden ml-auto text-2xl focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center space-y-4 py-4 px-6 md:hidden">
          <a href="#about" className="text-sm hover:text-slate-600 font-inter w-full text-center py-2">About</a>
          <a href="#projects" className="text-sm hover:text-slate-600 font-inter w-full text-center py-2">Projects</a>
          <a href="#skills" className="text-sm hover:text-slate-600 font-inter w-full text-center py-2">Skills</a>
          <div className="flex space-x-2 pt-2">
            <button className="border border-gray-400 px-4 py-1 text-xs rounded font-inter">EN</button>
            <button className="px-4 py-1 text-xs font-inter">FI</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;