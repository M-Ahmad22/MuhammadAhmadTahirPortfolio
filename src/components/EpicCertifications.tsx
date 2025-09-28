"use client";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./aceternity/BentoGrid";
import { 
  IconCertificate,
  IconTrophy,
  IconStar,
  IconBrandAws,
  IconBrandGoogle,
  IconBrandMeta,
  IconBrandDocker,
  IconCloud
} from "@tabler/icons-react";

const EpicCertifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      description: "Professional level certification for designing distributed systems on AWS",
      header: <CertificationSkeleton />,
      icon: <IconBrandAws className="h-4 w-4 text-orange-500" />,
      className: "md:col-span-2",
    },
    {
      title: "Google Cloud Professional",
      description: "Advanced expertise in Google Cloud Platform services and architecture",
      header: <CertificationSkeleton />,
      icon: <IconBrandGoogle className="h-4 w-4 text-blue-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Meta React Developer",
      description: "Certified React.js developer with advanced component architecture skills",
      header: <CertificationSkeleton />,
      icon: <IconBrandMeta className="h-4 w-4 text-blue-600" />,
      className: "md:col-span-1",
    },
    {
      title: "MongoDB Certified Developer",
      description: "Expert level database design and optimization with MongoDB",
      header: <CertificationSkeleton />,
      icon: <IconCertificate className="h-4 w-4 text-green-500" />,
      className: "md:col-span-2",
    },
    {
      title: "Docker Certified Associate",
      description: "Container orchestration and deployment expertise",
      header: <CertificationSkeleton />,
      icon: <IconBrandDocker className="h-4 w-4 text-blue-400" />,
      className: "md:col-span-1",
    },
    {
      title: "Flutter Certified Developer",
      description: "Mobile app development mastery with Flutter framework",
      header: <CertificationSkeleton />,
      icon: <IconTrophy className="h-4 w-4 text-cyan-400" />,
      className: "md:col-span-1",
    },
    {
      title: "TensorFlow Developer Certificate",
      description: "Machine learning and AI model development with TensorFlow",
      header: <CertificationSkeleton />,
      icon: <IconStar className="h-4 w-4 text-yellow-400" />,
      className: "md:col-span-1",
    },
    {
      title: "Kubernetes Application Developer",
      description: "Container orchestration and cloud-native application deployment",
      header: <CertificationSkeleton />,
      icon: <IconCloud className="h-4 w-4 text-purple-500" />,
      className: "md:col-span-1",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header with Vertical Text */}
        <div className="relative mb-16">
          <motion.div 
            className="vertical-text absolute -left-16 top-0 text-6xl font-black text-primary/10 hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            ACHIEVEMENTS
          </motion.div>
          
          <div className="text-center">
            <motion.h2 
              className="text-5xl lg:text-7xl font-black gradient-text-rainbow mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              LEGENDARY
              <br />
              <span className="gradient-text-secondary">CERTIFICATIONS</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              8+ Professional certifications showcasing expertise across the entire tech stack
            </motion.p>
          </div>
        </div>

        {/* Bento Grid Certifications */}
        <BentoGrid className="max-w-6xl mx-auto">
          {certifications.map((cert, i) => (
            <BentoGridItem
              key={i}
              title={cert.title}
              description={cert.description}
              header={cert.header}
              icon={cert.icon}
              className={cert.className}
            />
          ))}
        </BentoGrid>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {[
            { number: "8+", label: "Certifications", color: "text-purple-400" },
            { number: "100%", label: "Pass Rate", color: "text-cyan-400" },
            { number: "5", label: "Years Learning", color: "text-pink-400" },
            { number: "∞", label: "Passion Level", color: "text-green-400" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center glass-morphism p-6 rounded-xl border-neon hover:glow-primary transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
            >
              <div className={`text-4xl font-black mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CertificationSkeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: [-100, 300] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <IconCertificate className="w-12 h-12 text-primary/30" />
      </div>
    </div>
  );
};

export default EpicCertifications;