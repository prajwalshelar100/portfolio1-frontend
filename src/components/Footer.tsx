
import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-java-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
          <span className="font-bold text-xl">
            Prajwal Shelar | <span className="text-java-light">Code. Create. Evolve.</span>
          </span>


            <p className="mt-2 text-gray-300 max-w-xs">
            Turning ideas into code and code into impactful products.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:example@email.com" className="text-gray-300 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-java-light/10 hover:bg-java-light/20 text-white p-2 rounded-full transition-colors"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
