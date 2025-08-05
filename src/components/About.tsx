import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';

interface Certification {
  id: number;
  year: string;
  title: string;
  issuer: string;
  status: 'completed' | 'in-progress';
}

const certifications: Certification[] = [
  {
    id: 1,
    year: "2024",
    title: "Azure Developer Associate",
    issuer: "Microsoft",
    status: "completed"
  },
  {
    id: 2,
    year: "2024",
    title: "Azure Data Fundamentals",
    issuer: "Microsoft",
    status: "completed"
  },
  {
    id: 3,
    year: "2025",
    title: "Azure DevOps Engineer",
    issuer: "Microsoft",
    status: "in-progress"
  },
  {
    id: 4,
    year: "2025",
    title: "Azure Database Administrator Associate",
    issuer: "Microsoft",
    status: "in-progress"
  }
];

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Left Column - Avatar */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-400/25">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='48' fill='%2300D4FF' text-anchor='middle' dominant-baseline='middle'%3EN%3C/text%3E%3C/svg%3E"
                  alt="Nicolette Mashaba"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-pulse opacity-50"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 space-y-8"
          >
            {/* Header */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-inter mb-4">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack software engineering student with a deep love for 
                artificial intelligence and cloud technologies. My journey in tech has been driven 
                by curiosity and a desire to create innovative solutions that make a real impact.
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                With expertise in C#, .NET, ASP.NET Core, and modern web technologies like React and TypeScript, 
                I specialize in building scalable, cloud-native applications. My Microsoft Azure certifications 
                demonstrate my commitment to mastering cloud technologies and staying current with industry best practices.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm particularly fascinated by AI and machine learning, constantly exploring ways to integrate 
                intelligent features into my applications. Whether it's natural language processing, computer vision, 
                or predictive analytics, I love pushing the boundaries of what's possible with AI.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "C# & .NET", "ASP.NET Core", "Entity Framework", 
                  "SQL Server", "MongoDB", "React", "TypeScript", 
                  "Azure Cloud", "Docker", "Git", "REST APIs", "Microservices"
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-cyan-400 text-sm font-medium text-center hover:bg-gray-700 transition-colors duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-pink-500" />
                Certifications & Achievements
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-400 hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-500" />
                        <span className="text-pink-500 font-semibold">{cert.year}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        cert.status === 'completed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-gray-900'
                      }`}>
                        {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold mb-1">{cert.title}</h4>
                    <p className="text-gray-300 text-sm">{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-gray-900 rounded-full font-semibold hover:from-pink-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 