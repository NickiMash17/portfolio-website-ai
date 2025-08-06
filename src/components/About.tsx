import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Database, Cloud, Brain, Zap, Heart, Palette, Music, BookOpen, Globe, Coffee } from 'lucide-react';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'technical' | 'soft';
}

interface Interest {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: "2024",
    title: "Azure Database Administrator Associate",
    description: "Pursuing advanced Azure database administration and optimization skills.",
    icon: <Database className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 2,
    date: "2023",
    title: "Azure DevOps Engineer",
    description: "Achieved certification in Azure DevOps practices and CI/CD pipelines.",
    icon: <Zap className="w-6 h-6 text-blue-400" />
  },
  {
    id: 3,
    date: "2023",
    title: "Azure Developer Associate",
    description: "Certified in Azure development with focus on cloud-native applications.",
    icon: <Cloud className="w-6 h-6 text-purple-500" />
  },
  {
    id: 4,
    date: "2022",
    title: "Azure Data Fundamentals",
    description: "Foundation certification in Azure data services and analytics.",
    icon: <Brain className="w-6 h-6 text-emerald-400" />
  }
];

const skills: Skill[] = [
  { name: "C# & .NET", level: 95, icon: <Code className="w-5 h-5" />, category: 'technical' },
  { name: "React & TypeScript", level: 90, icon: <Code className="w-5 h-5" />, category: 'technical' },
  { name: "Azure Cloud", level: 88, icon: <Cloud className="w-5 h-5" />, category: 'technical' },
  { name: "SQL Server", level: 85, icon: <Database className="w-5 h-5" />, category: 'technical' },
  { name: "MongoDB", level: 80, icon: <Database className="w-5 h-5" />, category: 'technical' },
  { name: "AI/ML", level: 75, icon: <Brain className="w-5 h-5" />, category: 'technical' },
  { name: "Problem Solving", level: 92, icon: <Brain className="w-5 h-5" />, category: 'soft' },
  { name: "Team Collaboration", level: 88, icon: <Heart className="w-5 h-5" />, category: 'soft' },
  { name: "Communication", level: 85, icon: <Globe className="w-5 h-5" />, category: 'soft' }
];

const interests: Interest[] = [
  {
    name: "AI & Machine Learning",
    description: "Passionate about exploring cutting-edge AI technologies and their applications in real-world scenarios.",
    icon: <Brain className="w-6 h-6 text-blue-400" />
  },
  {
    name: "Creative Design",
    description: "Love creating beautiful user interfaces and exploring the intersection of technology and art.",
    icon: <Palette className="w-6 h-6 text-purple-500" />
  },
  {
    name: "Music & Technology",
    description: "Fascinated by the fusion of music and technology, especially in AI-generated compositions.",
    icon: <Music className="w-6 h-6 text-emerald-400" />
  },
  {
    name: "Continuous Learning",
    description: "Always eager to learn new technologies and stay updated with industry trends.",
    icon: <BookOpen className="w-6 h-6 text-blue-400" />
  },
  {
    name: "Coffee & Code",
    description: "Perfect combination for productive coding sessions and creative problem-solving.",
    icon: <Coffee className="w-6 h-6 text-purple-500" />
  }
];

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'skills' | 'interests'>('certifications');

  return (
    <section id="about" className="relative py-12 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern technologies and cloud solutions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column - Avatar and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="text-center lg:text-left">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative mb-8"
              >
                <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto lg:mx-0 rounded-full border-4 border-blue-400 overflow-hidden shadow-2xl">
                  <img
                    src="https://via.placeholder.com/300x300/00D4FF/FFFFFF?text=N"
                    alt="Nicolette Mashaba"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              {/* Bio */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Full-Stack Software Engineer
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate full-stack software engineering student with a strong foundation in modern web technologies. 
                  My expertise spans from backend development with C#, .NET, and ASP.NET Core to frontend development with React, 
                  TypeScript, and Tailwind CSS.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As a Microsoft certified Azure professional, I specialize in cloud-native applications and DevOps practices. 
                  My passion for AI drives me to explore cutting-edge technologies and create innovative solutions that make a difference.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Tabbed Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            {/* Tab Navigation */}
            <div className="flex bg-gray-800 rounded-lg p-1 mb-8">
              <button
                onClick={() => setActiveTab('certifications')}
                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 text-sm ${
                  activeTab === 'certifications'
                    ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Certifications
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 text-sm ${
                  activeTab === 'skills'
                    ? 'bg-gradient-to-r from-purple-500 to-emerald-400 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('interests')}
                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 text-sm ${
                  activeTab === 'interests'
                    ? 'bg-gradient-to-r from-emerald-400 to-blue-400 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Interests
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'certifications' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-white mb-6">
                    Professional Certifications
                  </h3>
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-400 hover:bg-gray-700 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-purple-400 font-semibold text-sm">
                              {item.date}
                            </span>
                          </div>
                          <h4 className="text-white font-semibold mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Technical Skills
                    </h3>
                    <div className="space-y-3">
                      {skills.filter(skill => skill.category === 'technical').map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-blue-400">
                                {skill.icon}
                              </span>
                              <span className="text-white font-medium">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-gray-300 text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Soft Skills
                    </h3>
                    <div className="space-y-3">
                      {skills.filter(skill => skill.category === 'soft').map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-purple-500">
                                {skill.icon}
                              </span>
                              <span className="text-white font-medium">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-gray-300 text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="bg-gradient-to-r from-purple-500 to-emerald-400 h-2 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'interests' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white mb-6">
                    Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 border-l-4 border-emerald-400"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            {interest.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-2">
                              {interest.name}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {interest.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 shadow-lg"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 