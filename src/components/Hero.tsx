import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 bg-gradient-to-b from-white to-blue-50 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 animate-fade-in">
          <p className="text-java text-lg font-medium mb-2">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Prajwal Shelar <br />
            <span className="text-java font-semibold block min-h-[30px] min-w-[240px] text-3xl md:text-4xl mt-4">
              <Typewriter
                words={[
                  'Aspiring Software Developer',
                  'Critical Thinker',
                  'Fast Learner',
                  'Technology Enthusiast',
                  'Java Developer',
                  'Spring Boot Developer',
                  'Web3 Explorer',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            I specialize in Java development with a strong command of Spring Boot, RESTful APIs, and Microservices. I'm committed to building efficient, scalable backend systems and continuously enhancing my expertise by working with complementary technologies such as Docker, Rust, and Go.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-java hover:bg-java-dark text-white" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" className="border-java text-java hover:bg-java/10" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links with Tooltips */}
          <div className="flex space-x-6">
            {/* GitHub */}
            <div className="relative group inline-block">
              <a
                href="https://github.com/prajwalshelar100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-java transition-colors"
              >
                <Github size={24} />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub Profile 
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group inline-block">
              <a
                href="https://linkedin.com/in/prajwalshelar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-java transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn Profile
              </span>
            </div>

            {/* Email */}
            <div className="relative group inline-block">
              <a
                href="mailto:shelar.prajwal.99@gmail.com"
                className="text-gray-600 hover:text-java transition-colors"
              >
                <Mail size={24} />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </span>
            </div>

            {/* LeetCode */}
            <div className="relative group inline-block">
              <a
                href="https://leetcode.com/u/prajwalshelar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-java transition-colors"
              >
                <Code size={24} />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                LeetCode Profile 
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-java rounded-full flex items-center justify-center opacity-90">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/profile.jpg"
                alt="Prajwal Shelar"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="mt-16 animate-bounce">
        <a href="#skills" className="text-gray-500 hover:text-java transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
