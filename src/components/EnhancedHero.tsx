"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { FloatingDock } from "./aceternity/FloatingDock";
import { FlipWords } from "./aceternity/FlipWords";
import { TypewriterEffect } from "./aceternity/TypewriterEffect";
import { removeBackground, loadImage } from "@/lib/backgroundRemoval";
import { useState, useEffect } from "react";
import logo from "../assets/logoWhite.png";

const EnhancedHero = () => {
  const roles = [
    "MERN Stack Developer",
    "Flutter App Developer",
    "AI Automation Expert",
    "AI/ML/DL Specialist",
  ];

  const nameWords = [
    { text: "Muhammad Ahmad Tahir", className: "text-primary font-display" },
    { text: "CEO MATalogics", className: "text-secondary font-display" },
    { text: "Tech Innovator", className: "text-primary font-display" },
  ];

  const dockItems = [
    {
      title: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
    },
    {
      title: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:ahmad@matalogics.com",
    },
  ];

  const [processedImageUrl, setProcessedImageUrl] =
    useState<string>(profileImage);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);

        // Load the original image
        const response = await fetch(profileImage);
        const blob = await response.blob();
        const img = await loadImage(blob);

        // Remove background
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);

        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error("Failed to process image:", error);
        // Keep original image if processing fails
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern"></div>

      {/* Navigation */}
      <nav className="relative z-50 container-elegant py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="font-display text-2xl font-semibold text-primary flex justify-center items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="" className="w-[50px] h-[40px]" />
            MATalogics
          </motion.div>

          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {["About", "Experience", "Projects", "Contact"].map(
              (item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm tracking-wide"
                >
                  {item}
                </a>
              )
            )}
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
      <div
        className="container-elegant relative z-10 flex items-center"
        style={{ minHeight: "calc(100vh - 175px)" }}
      >
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

            {/* Typewriter Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <TypewriterEffect words={nameWords} className="text-left" />
            </motion.div>

            {/* Flip Words Role */}
            <motion.div
              className="h-12 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              <span className="text-xl font-body text-muted-foreground mr-3">
                I'm a
              </span>
              <FlipWords words={roles} className="text-xl font-semibold" />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg font-body text-muted-foreground leading-relaxed max-w-xl text-refined"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 }}
            >
              Leading MATalogics with a vision to transform businesses through
              innovative technology solutions. Specializing in full-stack
              development, mobile applications, and artificial intelligence with
              <span className="text-primary font-medium">
                {" "}
                8+ professional certifications
              </span>{" "}
              and
              <span className="text-primary font-medium">
                {" "}
                50+ successful projects
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
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
              <div className="relative">
                {/* Simple White Border Ring */}
                <div className="absolute inset-0 w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"></div>

                {/* Profile Image Container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-white/30 bg-white/5 backdrop-blur-sm animate-float-gentle">
                  {isProcessing ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900/50 rounded-full">
                      <div className="animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full"></div>
                    </div>
                  ) : (
                    <img
                      src={processedImageUrl}
                      alt="Muhammad Ahmad Tahir - CEO MATalogics"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110 rounded-full"
                    />
                  )}

                  {/* Subtle White Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full pointer-events-none"></div>
                </div>
              </div>

              {/* Floating Professional Tags */}
              <motion.div
                className="absolute -top-6 -right-6 px-4 py-2 rounded-lg border-elegant glass-elegant"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm font-mono text-primary">CEO</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 px-4 py-2 rounded-lg border-elegant glass-elegant"
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <span className="text-sm font-mono text-secondary">
                  8+ Certs
                </span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-12 px-4 py-2 rounded-lg border-elegant glass-elegant"
                animate={{ x: [-3, 3, -3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-sm font-mono text-tertiary">AI/ML</span>
              </motion.div>

              <motion.div
                className="absolute top-[10px] -left-4 px-4 py-2 rounded-lg border-elegant glass-elegant"
                animate={{ x: [-3, 3, -3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-sm font-mono text-tertiary">MERN</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 px-4 py-2 rounded-lg border-elegant glass-elegant"
                animate={{ x: [3, -3, 3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
              >
                <span className="text-sm font-mono text-quaternary">
                  Flutter
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Dock for Social Links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <FloatingDock items={dockItems} />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 right-8 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs font-body text-muted-foreground tracking-wider">
            SCROLL
          </span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHero;
