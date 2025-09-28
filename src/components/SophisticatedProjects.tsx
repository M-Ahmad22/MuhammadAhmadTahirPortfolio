"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight, Briefcase, Users, Code, Brain } from 'lucide-react';

const SophisticatedProjects = () => {
  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      category: "Full Stack Development",
      description: "Comprehensive e-commerce solution with real-time inventory management, advanced analytics, and multi-vendor support serving 10,000+ users daily.",
      icon: Briefcase,
      technologies: ["React.js", "Node.js", "MongoDB", "Redis", "AWS"],
      metrics: ["10K+ Users", "99.9% Uptime", "50% Faster Load Times"],
      status: "Production",
      year: "2023",
      github: "#",
      live: "#"
    },
    {
      title: "AI-Powered Mobile Application", 
      category: "Mobile & Machine Learning",
      description: "Cross-platform mobile app leveraging machine learning for intelligent user experiences, featuring computer vision and natural language processing.",
      icon: Brain,
      technologies: ["Flutter", "TensorFlow", "Firebase", "Python", "GCP"],
      metrics: ["95% Accuracy", "500K+ Downloads", "4.8★ Rating"],
      status: "Scaling", 
      year: "2023",
      github: "#",
      live: "#"
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Software",
      description: "Comprehensive healthcare platform with patient management, telemedicine capabilities, and HIPAA-compliant data handling for medical institutions.",
      icon: Users,
      technologies: ["Next.js", "PostgreSQL", "WebRTC", "Node.js", "Docker"],
      metrics: ["HIPAA Compliant", "24/7 Availability", "300+ Doctors"],
      status: "Production",
      year: "2022", 
      github: "#",
      live: "#"
    },
    {
      title: "Financial Trading Platform",
      category: "Fintech & Real-time Systems",
      description: "High-performance trading platform with real-time market data, advanced charting, and algorithmic trading capabilities for professional traders.",
      icon: Code,
      technologies: ["React.js", "WebSocket", "Redis", "Express.js", "MongoDB"],
      metrics: ["<10ms Latency", "$2M+ Traded", "Real-time Data"],
      status: "Production",
      year: "2022",
      github: "#", 
      live: "#"
    },
    {
      title: "Smart City IoT Network",
      category: "IoT & Data Analytics",
      description: "Comprehensive IoT ecosystem for smart city infrastructure with sensor networks, predictive maintenance, and energy optimization systems.",
      icon: Briefcase,
      technologies: ["Python", "InfluxDB", "React.js", "MQTT", "TensorFlow"],
      metrics: ["1000+ Sensors", "30% Energy Saved", "Predictive Analytics"],
      status: "Expanding",
      year: "2021",
      github: "#",
      live: "#"
    },
    {
      title: "Content Management Platform",
      category: "Web Development & CMS",
      description: "Modern headless CMS with GraphQL API, real-time collaboration, and advanced content workflows for enterprise content management.",
      icon: Users,
      technologies: ["GraphQL", "React.js", "Node.js", "PostgreSQL", "AWS"],
      metrics: ["Multi-tenant", "Real-time Collab", "GraphQL API"],
      status: "Production",
      year: "2021",
      github: "#",
      live: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-green-400/10 text-green-400 border-green-400/20';
      case 'Scaling':
        return 'bg-blue-400/10 text-blue-400 border-blue-400/20';
      case 'Expanding':
        return 'bg-purple-400/10 text-purple-400 border-purple-400/20';
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
            <Briefcase className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-body text-muted-foreground tracking-wide">Selected Projects</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-display font-light text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Portfolio
            <br />
            <span className="text-secondary">Highlights</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl font-body text-muted-foreground max-w-3xl mx-auto text-refined leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A curated selection of impactful projects demonstrating technical excellence 
            and innovative problem-solving across diverse industries
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-elegant glass-elegant card-hover h-full group">
                <CardContent className="p-8">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-muted/20 flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge className={`${getStatusColor(project.status)} border font-mono text-xs mb-2`}>
                          {project.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground font-mono">{project.year}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-display font-medium text-primary group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="text-sm text-tertiary font-mono tracking-wide">
                      {project.category}
                    </div>
                    
                    <p className="text-muted-foreground font-body text-refined leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <Badge 
                        key={metricIndex}
                        variant="secondary"
                        className="bg-muted/20 text-muted-foreground font-mono text-xs"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <div className="text-sm font-body text-muted-foreground mb-3">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-accent/50 text-accent-foreground rounded-full font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-elegant hover:bg-muted font-body flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-body flex-1"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="border-elegant glass-elegant inline-block">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-display font-medium text-primary mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground font-body text-refined mb-6 max-w-md">
                Let's discuss how we can bring your vision to life with cutting-edge technology solutions
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body"
              >
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SophisticatedProjects;