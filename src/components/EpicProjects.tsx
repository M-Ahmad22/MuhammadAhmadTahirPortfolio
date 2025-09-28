"use client";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Rocket, Brain, Globe, Shield, Smartphone } from 'lucide-react';
import { BackgroundBeams } from './aceternity/BackgroundBeams';

const EpicProjects = () => {
  const projects = [
    {
      title: "AI-POWERED E-COMMERCE EMPIRE",
      category: "Full Stack + AI",
      description: "Revolutionary e-commerce platform with ML-powered recommendations, real-time inventory optimization, and predictive analytics dashboard.",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      textColor: "text-purple-400",
      glowColor: "glow-primary",
      features: ["AI Recommendations", "Real-time Analytics", "Multi-vendor Support", "Payment Gateway"],
      technologies: ["React.js", "Node.js", "TensorFlow", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      status: "LIVE & SCALING"
    },
    {
      title: "FLUTTER SOCIAL REVOLUTION",
      category: "Mobile + Cloud",
      description: "Next-gen social media platform with AR filters, real-time messaging, and blockchain integration for content monetization.",
      icon: Smartphone,
      color: "from-cyan-600 to-blue-600",
      textColor: "text-cyan-400",
      glowColor: "glow-secondary",
      features: ["AR Filters", "Blockchain Integration", "Real-time Chat", "Content Monetization"],
      technologies: ["Flutter", "Firebase", "WebRTC", "Blockchain", "AR Kit"],
      github: "#",
      live: "#",
      status: "VIRAL SUCCESS"
    },
    {
      title: "ENTERPRISE AI AUTOMATION",
      category: "AI/ML + Enterprise",
      description: "Intelligent automation suite that transforms business processes using natural language processing and computer vision.",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      textColor: "text-green-400",
      glowColor: "glow-accent",
      features: ["NLP Processing", "Computer Vision", "Process Automation", "Enterprise Integration"],
      technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Docker"],
      github: "#",
      live: "#",
      status: "ENTERPRISE READY"
    },
    {
      title: "BLOCKCHAIN FINTECH PLATFORM",
      category: "Web3 + Finance",
      description: "Decentralized finance platform with smart contracts, DeFi protocols, and advanced trading algorithms.",
      icon: Shield,
      color: "from-orange-600 to-red-600",
      textColor: "text-orange-400",
      glowColor: "glow-tertiary",
      features: ["Smart Contracts", "DeFi Protocols", "Trading Algorithms", "Wallet Integration"],
      technologies: ["Solidity", "Web3.js", "React.js", "Node.js", "Ethereum"],
      github: "#",
      live: "#",
      status: "REVOLUTIONARY"
    },
    {
      title: "IOT SMART CITY NETWORK",
      category: "IoT + Big Data",
      description: "Comprehensive IoT ecosystem for smart cities with real-time monitoring, predictive maintenance, and energy optimization.",
      icon: Globe,
      color: "from-indigo-600 to-purple-600",
      textColor: "text-indigo-400",
      glowColor: "glow-primary",
      features: ["IoT Sensors", "Predictive Maintenance", "Energy Optimization", "Real-time Dashboard"],
      technologies: ["Python", "InfluxDB", "MQTT", "React.js", "TensorFlow"],
      github: "#",
      live: "#",
      status: "CITY APPROVED"
    },
    {
      title: "HEALTHCARE AI DIAGNOSTICS",
      category: "AI + Healthcare",
      description: "Revolutionary medical diagnostic system using deep learning for accurate disease prediction and treatment recommendations.",
      icon: Zap,
      color: "from-teal-600 to-cyan-600",
      textColor: "text-teal-400",
      glowColor: "glow-secondary",
      features: ["Disease Prediction", "Treatment Recommendations", "Medical Imaging", "Patient Management"],
      technologies: ["Python", "TensorFlow", "OpenCV", "React.js", "PostgreSQL"],
      github: "#",
      live: "#",
      status: "LIFE SAVING"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE & SCALING':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'VIRAL SUCCESS':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'ENTERPRISE READY':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'REVOLUTIONARY':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'CITY APPROVED':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'LIFE SAVING':
        return 'bg-pink-500/10 text-pink-400 border-pink-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Epic Section Header */}
        <div className="relative mb-20">
          <motion.div 
            className="vertical-text absolute -right-16 top-0 text-6xl font-black text-primary/10 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            PORTFOLIO
          </motion.div>
          
          <div className="text-center">
            <motion.h2 
              className="text-6xl lg:text-8xl font-black gradient-text-rainbow mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              LEGENDARY
              <br />
              <span className="gradient-text-primary">PROJECTS</span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Groundbreaking applications that are <span className="gradient-text-secondary font-bold">changing the world</span>
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className={`glass-morphism rounded-2xl border-neon overflow-hidden ${project.glowColor} hover:scale-[1.02] transition-all duration-500`}>
                
                {/* Header with Icon */}
                <div className={`relative p-8 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <project.icon size={200} className="absolute -top-8 -right-8 rotate-12" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <project.icon className="w-12 h-12 text-white" />
                      <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-2">
                      {project.title}
                    </h3>
                    <div className={`text-sm font-mono ${project.textColor} mb-4`}>
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3">🚀 Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-white font-bold mb-3">⚡ Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-muted/20 text-gray-300 rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      className={`flex-1 bg-gradient-to-r ${project.color} hover:scale-105 transition-all duration-300 font-bold`}
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LAUNCH PROJECT
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className={`border-2 ${project.textColor} border-current hover:bg-current hover:text-black transition-all duration-300`}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-4xl font-black gradient-text-primary mb-6">
            READY TO CREATE THE NEXT LEGEND?
          </h3>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-xl glow-epic hover:scale-110 transition-all duration-300"
          >
            <Rocket className="mr-2 w-6 h-6" />
            LET'S BUILD SOMETHING EPIC
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EpicProjects;