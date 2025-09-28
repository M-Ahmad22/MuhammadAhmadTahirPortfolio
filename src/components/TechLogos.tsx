"use client";
import { motion } from "framer-motion";
import {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandFlutter,
  IconBrandFirebase,
  IconBrandCpp,
  IconDatabase,
  IconBrain,
  IconApi,
  IconCloud,
  IconDeviceMobile,
  IconRobot,
  IconCode,
} from "@tabler/icons-react";

const TechLogos = () => {
  const technologies = [
    // Frontend
    { name: "React.js", icon: IconBrandReact, color: "text-blue-400" },
    { name: "Next.js", icon: IconBrandNextjs, color: "text-white" },
    { name: "TypeScript", icon: IconBrandTypescript, color: "text-blue-500" },
    { name: "JavaScript", icon: IconBrandJavascript, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: IconBrandTailwind, color: "text-cyan-400" },
    { name: "HTML5", icon: IconBrandHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: IconBrandCss3, color: "text-blue-400" },

    // Backend
    { name: "Node.js", icon: IconBrandNodejs, color: "text-green-500" },
    { name: "Express.js", icon: IconApi, color: "text-gray-400" },
    { name: "MongoDB", icon: IconBrandMongodb, color: "text-green-400" },
    { name: "PostgreSQL", icon: IconDatabase, color: "text-blue-500" },
    { name: "Supabase", icon: IconCloud, color: "text-green-400" },

    // Mobile
    { name: "Flutter", icon: IconBrandFlutter, color: "text-blue-400" },
    { name: "Firebase", icon: IconBrandFirebase, color: "text-orange-400" },
    { name: "React Native", icon: IconDeviceMobile, color: "text-blue-400" },

    // AI/ML
    { name: "Python", icon: IconBrandPython, color: "text-yellow-400" },
    { name: "TensorFlow", icon: IconBrain, color: "text-orange-400" },
    { name: "Scikit-learn", icon: IconBrain, color: "text-blue-400" },
    { name: "PyTorch", icon: IconBrain, color: "text-red-400" },
    { name: "OpenAI", icon: IconRobot, color: "text-green-400" },

    // Automation & Integration
    { name: "Zapier", icon: IconApi, color: "text-orange-400" },
    { name: "Make.com", icon: IconRobot, color: "text-purple-400" },
    { name: "n8n", icon: IconCode, color: "text-red-400" },
    { name: "GraphQL", icon: IconDatabase, color: "text-pink-400" },

    // Additional
    { name: "C++", icon: IconBrandCpp, color: "text-blue-500" },
    { name: "Docker", icon: IconCloud, color: "text-blue-400" },
    { name: "AWS", icon: IconCloud, color: "text-orange-400" },
    { name: "Git", icon: IconCode, color: "text-red-400" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full border-elegant glass-elegant mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <IconCode className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-body text-muted-foreground tracking-wide">
              Technology Stack
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-display font-light text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technical
            <br />
            <span className="text-secondary">Arsenal</span>
          </motion.h2>

          <motion.p
            className="text-xl font-body text-muted-foreground max-w-3xl mx-auto text-refined leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Mastering cutting-edge technologies to build scalable, intelligent
            applications
          </motion.p>
        </div>

        {/* Technology Grid - Direct Display */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-7 gap-10 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center text-center p-4 rounded-[7px] border-elegant glass-elegant card-hover"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div
                className={`w-16 h-16 mb-4 flex items-center justify-center ${tech.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <tech.icon size={45} />
              </div>
              <span className="text-xs font-body text-muted-foreground group-hover:text-primary transition-colors font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "28+", label: "Technologies", icon: IconCode },
            {
              number: "8+",
              label: "Programming Languages",
              icon: IconBrandPython,
            },
            { number: "12+", label: "Frameworks", icon: IconBrandReact },
            { number: "15+", label: "Tools & Platforms", icon: IconCloud },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border-elegant glass-elegant card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-display font-semibold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-body text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechLogos;
