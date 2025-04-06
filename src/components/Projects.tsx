
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  date: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'IMD Rainfall Analyzer',
      description: 'Developed an automated tool to analyze and visualize IMD rainfall data, integrating statistical analysis and custom modules with a user-friendly GUI. Added a chatbot for enhanced interactivity.',
      image: 'IMDRA.png',
      technologies: ['Python', 'Langchain-HuggingFace', 'OpenAI', 'Scikit-learn', 'CustomTkinter'],
      github: 'https://github.com/prajwalshelar100',
      date: 'July 2024',
    },
    {
      title: 'Automated Image Recognition and Capturing System',
      description: 'Established a system that can detect faces and automatically capture pictures using Computer Vision. Leveraged Java and the OpenCV library for seamless integration and user-friendly operation.',
      image: 'AFRICS.png',
      technologies: ['Java', 'Java Swing', 'JDBC', 'OpenCV'],
      github: 'https://github.com/prajwalshelar100',
      date: 'December 2023',
    },
    {
      title: 'Profile Manager Utility',
      description: 'Designed a lightweight desktop tool using Python and Tkinter to manage frequently used applications and URLs. Allows saving/loading profiles for quick setup of daily workflows.',
      image: 'profile-manager.jpg', 
      technologies: ['Python', 'Tkinter', 'JSON', 'File I/O'],
      github: 'https://github.com/prajwalshelar100', 
      date: 'April 2025',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
