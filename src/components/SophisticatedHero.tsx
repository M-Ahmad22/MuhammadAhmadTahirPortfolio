"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const SophisticatedHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "Chief Executive Officer",
    "Full Stack Developer", 
    "AI/ML Specialist",
    "Flutter Expert",
    "Tech Innovator"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 120;
    const currentText = titles[currentIndex] || '';

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 container-elegant py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            className="font-display text-2xl font-semibold text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            MATalogics
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm tracking-wide"
              >
                {item}
              </a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              variant="outline" 
              className="border-elegant hover:bg-primary hover:text-primary-foreground font-body"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-elegant relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Professional Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full border-elegant glass-elegant"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-scale-gentle"></div>
              <span className="text-sm font-body text-muted-foreground tracking-wide">
                Available for new projects
              </span>
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-display font-light text-primary leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Muhammad Ahmad
                <br />
                <span className="text-secondary">Tahir</span>
              </motion.h1>
              
              <motion.div 
                className="h-12 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="text-xl font-body text-muted-foreground">
                  {displayText}
                  <span className="typewriter-elegant ml-1"></span>
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg font-body text-muted-foreground leading-relaxed max-w-xl text-refined"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Leading MATalogics with a vision to transform businesses through innovative technology solutions. 
              Specializing in full-stack development, mobile applications, and artificial intelligence with 
              <span className="text-primary font-medium"> 8+ professional certifications</span> and 
              <span className="text-primary font-medium"> 50+ successful projects</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium px-8 py-3 card-hover"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-elegant hover:bg-muted font-body font-medium px-8 py-3 card-hover"
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Mail, href: 'mailto:ahmad@matalogics.com', label: 'Email' }
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-full border-elegant glass-elegant flex items-center justify-center hover:bg-muted transition-all duration-300 card-hover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Section */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              
              {/* Profile Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border border-elegant glass-elegant animate-float-gentle">
                <img 
                  src={profileImage} 
                  alt="Muhammad Ahmad Tahir - CEO MATalogics"
                  className="w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-125"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Professional Tags */}
              <motion.div 
                className="absolute -top-6 -right-6 px-4 py-2 rounded-lg border-elegant glass-elegant"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-mono text-primary">CEO</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 px-4 py-2 rounded-lg border-elegant glass-elegant"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <span className="text-sm font-mono text-secondary">8+ Certs</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-12 px-4 py-2 rounded-lg border-elegant glass-elegant"
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-sm font-mono text-tertiary">AI/ML</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-12 px-4 py-2 rounded-lg border-elegant glass-elegant"
                animate={{ x: [3, -3, 3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              >
                <span className="text-sm font-mono text-quaternary">Flutter</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs font-body text-muted-foreground tracking-wider">SCROLL</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </motion.div>
    </section>
  );
};

export default SophisticatedHero;