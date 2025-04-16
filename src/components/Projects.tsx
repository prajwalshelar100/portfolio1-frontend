import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  date: string;
  website?: string;
}

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: 'IMD Rainfall Analyzer',
      description: 'Developed an automated tool to analyze and visualize IMD rainfall data, integrating statistical analysis and custom modules with a user-friendly GUI. Added a chatbot for enhanced interactivity.',
      image: 'IMDRA.png',
      technologies: ['Python', 'Langchain-HuggingFace', 'OpenAI', 'Scikit-learn', 'CustomTkinter'],
      github: 'https://github.com/prajwalshelar100/imd-rainfall-analyzer',
      date: 'July 2024',
    },

    {
      title: 'Automated Image Recognition and Capturing System - OpenCV Microservice',
      description: 'A Spring Boot-based microservice providing image processing and face detection features using OpenCV. It includes RESTful APIs to convert images to grayscale, detect faces, and provides a foundation for face recognition. Designed with modularity and future extensibility in mind.',
      image: 'AFRICS.png',
      technologies: ['Java 17', 'Spring Boot 3', 'OpenCV 4.8', 'Maven'],
      github: 'https://github.com/prajwalshelar100/opencv-microservice',
      date: 'December 2023',
    },
    
    {
      title: 'Profile Manager/Launcher',
      description: 'A versatile desktop and web application built with TypeScript that helps users manage and launch frequently used apps, websites, and files. It allows saving custom workflows as profiles for quick access, with features like auto-launch, profile editing, and a responsive interface for improved productivity.',
      image: 'profile-manager.png',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
      github: 'https://github.com/prajwalshelar100/profile-manager_launcher',
      website: 'https://profile-manager-launcher.vercel.app/',
      date: 'March 2024',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div 
                className="h-48 bg-gray-200 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-java-dark">{project.title}</CardTitle>
                  <span className="text-xs text-gray-500">{project.date}</span>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-java/10 text-java hover:bg-java/20">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
              
              <CardFooter className="mt-auto pt-4">
                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="flex items-center gap-2 bg-java hover:bg-java-dark" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    </Button>
                  )}
                  {project.website && (
                    <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <a href={project.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        <span>Visit Site</span>
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Image Expansion Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none [&>button]:hidden">
            <div className="relative">
              {selectedImage && (
                <img 
                  src={selectedImage} 
                  alt="Expanded project view" 
                  className="w-full h-auto rounded-lg"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
