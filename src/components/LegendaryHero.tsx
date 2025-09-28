"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Download, Play, Zap } from 'lucide-react';
import { SpotlightPreview } from './aceternity/SpotlightPreview';
import { BackgroundBeams } from './aceternity/BackgroundBeams';
import { FloatingIcons } from './aceternity/FloatingIcons';
import profileImage from '@/assets/profile.jpg';

const LegendaryHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const heroTexts = [
    "REVOLUTIONARY TECH LEADER",
    "AI/ML MASTERMIND", 
    "FULL-STACK ARCHITECT",
    "FLUTTER VIRTUOSO",
    "MERN STACK WIZARD"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const currentText = heroTexts[currentIndex] || '';

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % heroTexts.length);
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
  }, [displayText, currentIndex, isDeleting, heroTexts]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <SpotlightPreview>
        <BackgroundBeams className="opacity-30" />
        <FloatingIcons />
        
        {/* Matrix Background Grid */}
        <div className="absolute inset-0 matrix-bg opacity-20"></div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* LEFT: Epic Text Content */}
              <div className="space-y-8 lg:pr-8">
                
                {/* Vertical Label */}
                <motion.div 
                  className="vertical-text fixed left-8 top-1/2 transform -translate-y-1/2 text-sm font-mono tracking-[0.3em] text-primary/60 z-50 hidden lg:block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  CEO & FOUNDER MATALOGICS
                </motion.div>

                {/* Main Hero Content */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  
                  {/* Top Badge */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border-neon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-mono gradient-text-primary">8+ CERTIFICATIONS • 50+ PROJECTS</span>
                  </motion.div>

                  {/* Name */}
                  <motion.h1 
                    className="text-6xl lg:text-8xl font-black gradient-text-rainbow glow-text-primary leading-none"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    MUHAMMAD
                    <br />
                    <span className="gradient-text-secondary">AHMAD</span>
                    <br />
                    <span className="text-white">TAHIR</span>
                  </motion.h1>

                  {/* Animated Role */}
                  <motion.div 
                    className="h-20 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <h2 className="text-2xl lg:text-4xl font-bold text-primary font-mono">
                      {displayText}
                      <span className="typewriter-cursor"></span>
                    </h2>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    Transforming revolutionary ideas into <span className="gradient-text-primary font-semibold">digital masterpieces</span>. 
                    Leading MATalogics with cutting-edge expertise in MERN Stack, Flutter, and AI/ML technologies.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <Button 
                      size="lg" 
                      className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 text-lg glow-primary"
                    >
                      <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                      LET'S CREATE MAGIC
                      <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold px-8 py-4 text-lg glow-secondary group"
                    >
                      <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                      DOWNLOAD RESUME
                    </Button>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    {[
                      { Icon: Github, href: '#', label: 'GitHub', glow: 'glow-primary' },
                      { Icon: Linkedin, href: '#', label: 'LinkedIn', glow: 'glow-secondary' },
                      { Icon: Twitter, href: '#', label: 'Twitter', glow: 'glow-tertiary' },
                      { Icon: Mail, href: 'mailto:ahmad@matalogics.com', label: 'Email', glow: 'glow-accent' }
                    ].map(({ Icon, href, label, glow }, index) => (
                      <motion.a
                        key={index}
                        href={href}
                        className={`w-14 h-14 rounded-full glass-morphism border-neon flex items-center justify-center hover:scale-110 transition-all duration-300 ${glow} group`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* RIGHT: Epic Profile Section */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 1.2, type: "spring" }}
                >
                  {/* Epic Glow Ring */}
                  <motion.div 
                    className="absolute inset-0 w-96 h-96 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, hsl(264 100% 75%), hsl(195 100% 70%), hsl(340 100% 70%), hsl(120 100% 70%), hsl(264 100% 75%))'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Profile Image Container */}
                  <motion.div 
                    className="relative w-80 h-80 m-8 rounded-full overflow-hidden border-4 border-white/20 float-epic"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={profileImage} 
                      alt="Muhammad Ahmad Tahir - CEO MATalogics"
                      className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-purple-500/20"></div>
                    
                    {/* Status Indicator */}
                    <motion.div 
                      className="absolute bottom-4 right-4 w-8 h-8 bg-green-400 rounded-full border-4 border-white pulse-epic"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Floating Tech Badges */}
                  <motion.div 
                    className="absolute -top-8 -left-8 px-4 py-2 rounded-full glass-morphism border-neon"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-sm font-mono gradient-text-primary">MERN STACK</span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-8 -right-8 px-4 py-2 rounded-full glass-morphism border-neon"
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    <span className="text-sm font-mono gradient-text-secondary">AI/ML EXPERT</span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 -left-16 px-4 py-2 rounded-full glass-morphism border-neon"
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <span className="text-sm font-mono text-cyan-400">FLUTTER</span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 -right-16 px-4 py-2 rounded-full glass-morphism border-neon"
                    animate={{ x: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  >
                    <span className="text-sm font-mono text-pink-400">CEO</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center glow-primary">
            <motion.div 
              className="w-2 h-4 bg-primary rounded-full mt-2"
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </SpotlightPreview>
    </section>
  );
};

export default LegendaryHero;