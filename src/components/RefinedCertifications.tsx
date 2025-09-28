"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award,
  Shield,
  Star,
  Trophy,
  CheckCircle,
  Zap,
  Globe,
  Code
} from 'lucide-react';

const RefinedCertifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      level: "Professional",
      icon: Shield,
      description: "Advanced cloud architecture and scalable systems design",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023", 
      level: "Professional",
      icon: Globe,
      description: "Cloud platform expertise and infrastructure management",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      title: "Meta React Developer",
      issuer: "Meta (Facebook)",
      year: "2022",
      level: "Professional",
      icon: Code,
      description: "Advanced React.js development and component architecture",
      color: "text-cyan-400", 
      bgColor: "bg-cyan-400/10"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2022",
      level: "Associate",
      icon: CheckCircle,
      description: "Database design, optimization, and advanced querying",
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      year: "2022",
      level: "Associate", 
      icon: Zap,
      description: "Container orchestration and deployment strategies",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      title: "Flutter Certified Developer",
      issuer: "Google Developers",
      year: "2021",
      level: "Professional",
      icon: Star,
      description: "Cross-platform mobile application development",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google/TensorFlow",
      year: "2021",
      level: "Professional",
      icon: Trophy,
      description: "Machine learning and neural network implementation",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    },
    {
      title: "Kubernetes Application Developer", 
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
      level: "Associate",
      icon: Award,
      description: "Container orchestration and cloud-native applications",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10"
    }
  ];

  const getLevelBadgeStyle = (level: string) => {
    switch (level) {
      case 'Professional':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Associate':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

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
            <Award className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-body text-muted-foreground tracking-wide">Professional Certifications</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-display font-light text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Validated
            <br />
            <span className="text-secondary">Expertise</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl font-body text-muted-foreground max-w-3xl mx-auto text-refined leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Continuously advancing skills through rigorous certification programs from industry leaders
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-elegant glass-elegant card-hover h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  
                  {/* Icon & Level */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${cert.bgColor} flex items-center justify-center`}>
                      <cert.icon className={`w-6 h-6 ${cert.color}`} />
                    </div>
                    <Badge className={`${getLevelBadgeStyle(cert.level)} border font-mono text-xs`}>
                      {cert.level}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-display font-medium text-primary leading-tight">
                      {cert.title}
                    </h3>
                    
                    <div className="text-sm text-muted-foreground font-body">
                      <div className="font-medium">{cert.issuer}</div>
                      <div className="text-xs opacity-75">{cert.year}</div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground font-body text-refined leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Verification Badge */}
                  <div className="mt-4 pt-4 border-t border-muted/20">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>Verified Credential</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "8", label: "Total Certifications" },
            { number: "5", label: "Professional Level" }, 
            { number: "3", label: "Associate Level" },
            { number: "2023", label: "Latest Achievement" }
          ].map((stat, index) => (
            <Card key={index} className="border-elegant glass-elegant text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-display font-semibold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-body text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RefinedCertifications;