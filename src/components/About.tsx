
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-java-dark mb-4">Who Am I?</h3>
            <p className="text-gray-700 mb-4">
              I'm Prajwal Shelar, a passionate Java Developer pursuing my Master's in Computer Applications (MCA) at Dayananda Sagar College of Engineering.
              With a strong foundation in both backend and frontend technologies, I'm eager to apply my skills to real-world challenges.
            </p>
            <p className="text-gray-700 mb-4">
              My expertise includes Java, Spring Boot, RESTful APIs, and data analysis with Python. I enjoy tackling complex problems
              and building efficient, scalable solutions to make a positive impact.
            </p>
            <p className="text-gray-700">
              I'm multilingual, speaking fluent English, German (B2), and Hindi (native). I believe in continuous learning
              and am always exploring new technologies to expand my skill set.
            </p>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-java/10 p-3 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-java" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-java-dark">Education</h4>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="font-medium">Master's of Computer Application (MCA)</p>
                        <p className="text-sm text-gray-600">Dayananda Sagar College of Engineering, Bengaluru</p>
                        <p className="text-sm text-gray-600">Oct 2022 - Oct 2024 | CGPA: 9.41/10</p>
                      </div>
                      <div>
                        <p className="font-medium">Bachelor of Science in Physics (Hons.)</p>
                        <p className="text-sm text-gray-600">Amity University, Mumbai</p>
                        <p className="text-sm text-gray-600">Aug 2017 - Aug 2020 | CGPA: 9.40/10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-java/10 p-3 rounded-full mr-4">
                    <Briefcase className="h-6 w-6 text-java" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-java-dark">Experience</h4>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="font-medium">Research Project Intern</p>
                        <p className="text-sm text-gray-600">Dayananda Sagar College of Engineering, Bangalore</p>
                        <p className="text-sm text-gray-600">Apr 2024 - Jul 2024</p>
                        <p className="text-sm text-gray-600">Performed spatio-temporal analysis on IMD rainfall data using Python libraries. Developed "IMD Rainfall Analyzer" application.</p>
                      </div>
                      <div>
                        <p className="font-medium">Java Developer Intern</p>
                        <p className="text-sm text-gray-600">Motioncut, Bangalore</p>
                        <p className="text-sm text-gray-600">Nov 2023 - Dec 2023</p>
                        <p className="text-sm text-gray-600">Expanded Java full stack applications utilizing JavaSE and EE, Spring, JDBC, and Git. Enhanced a system to track daily expenses using Data Structures and EJB.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-java/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-java" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-java-dark">Achievements</h4>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="font-medium">Patent</p>
                        <p className="text-sm text-gray-600">Patent Number: 118561, Published in The Patent Office Journal No. 50/2024</p>
                        <p className="text-sm text-gray-600">Lead inventor of a system for analyzing large-scale rainfall data</p>
                      </div>
                      <div>
                        <p className="font-medium">Event Lead - Aminova</p>
                        <p className="text-sm text-gray-600">Amity University, Mumbai (2018)</p>
                        <p className="text-sm text-gray-600">Led a team of 16 people, winning the "Best Event Award"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
