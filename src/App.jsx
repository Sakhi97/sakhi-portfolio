import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-inter">
      <Header />
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;