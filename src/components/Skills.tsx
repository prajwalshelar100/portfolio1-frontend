
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming',
      skills: [
        { name: 'Java (Core and Advanced)', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'C', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'SQL', level: 80 },
        { name: 'Go', level: 30 },
        { name: 'Rust', level: 20 },
      ],
    },
    {
      name: 'Backend Technologies',
      skills: [
        { name: 'Spring Boot', level: 85 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Spring Data JPA', level: 80 },
        { name: 'Microservices', level: 75 },
        { name: 'JDBC', level: 70 },
        { name: 'Docker', level: 70 },
      ],
    },
    {
      name: 'Frontend & Tools',
      skills: [
        { name: 'HTML/CSS', level: 75 },
        { name: 'Bootstrap', level: 70 },
        { name: 'Git', level: 85 },
        { name: 'IntelliJ/Eclipse', level: 90 },
      ],
    },
    {
      name: 'Languages',
      skills: [
        { name: 'English (Proficient)', level: 100 },
        { name: 'German (B2 Level)', level: 65 },
        { name: 'Hindi (Native)', level: 100 },
      ],
    },
    {
      name: 'Other Skills',
      skills: [
        { name: 'Data Structures & Algorithms', level: 60 },
        { name: 'AWS/Azure Fundamentals', level: 70 },
        { name: 'CI/CD Basics', level: 65 },
        { name: 'Linux (Ubuntu, Arch, Kali)', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-java-dark">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-java h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
