"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Users,
  Award,
  Briefcase,
  Code,
  Brain,
  Smartphone,
  Globe,
} from "lucide-react";
import { CodeBlock } from "./aceternity/CodeBlock";

const ElegantAbout = () => {
  const stats = [
    { number: "8+", label: "Certifications", icon: Award },
    { number: "50+", label: "Projects Delivered", icon: Briefcase },
    { number: "3+", label: "Years Leadership", icon: Users },
    { number: "100%", label: "Client Satisfaction", icon: Building },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Architecting scalable web applications with modern MERN stack technologies, ensuring optimal performance and user experience.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TypeScript",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications with Flutter, delivering native performance across iOS and Android platforms.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Native APIs",
        "App Store Deployment",
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Implementing intelligent solutions using modern ML frameworks, from predictive analytics to computer vision applications.",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Python",
        "Computer Vision",
        "NLP",
      ],
    },
    {
      icon: Globe,
      title: "Leadership & Strategy",
      description:
        "Leading technical teams and driving strategic initiatives at MATalogics, fostering innovation and delivering business value.",
      technologies: [
        "Team Leadership",
        "Project Management",
        "Technical Strategy",
        "Client Relations",
      ],
    },
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
            <span className="text-sm font-body text-muted-foreground tracking-wide">
              About Me
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-display font-light text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Digital
            <br />
            <span className="text-secondary">Excellence</span>
          </motion.h2>

          <motion.p
            className="text-xl font-body text-muted-foreground max-w-3xl mx-auto text-refined leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Leading MATalogics with a passion for transformative technology
            solutions that bridge innovation and practical business needs.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-elegant glass-elegant card-hover"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-display font-medium text-primary mb-6">
                My Journey
              </h3>
              <div className="space-y-6 text-muted-foreground font-body text-refined leading-relaxed">
                <p>
                  As the{" "}
                  <span className="text-primary font-medium">
                    CEO & Founder of MATalogics
                  </span>
                  , I've dedicated my career to pushing the boundaries of what's
                  possible with technology. My journey began with a fascination
                  for code and has evolved into leading a company that delivers
                  transformative digital solutions.
                </p>

                <p>
                  With expertise spanning{" "}
                  <span className="text-primary font-medium">
                    MERN stack development, Flutter mobile applications, and
                    AI/ML implementations
                  </span>
                  , I bring a comprehensive understanding of modern technology
                  ecosystems to every project.
                </p>

                <p>
                  My approach combines technical excellence with strategic
                  business thinking, ensuring that every solution we develop not
                  only meets immediate needs but positions our clients for
                  future growth and success.
                </p>
              </div>
            </div>

            {/* Code Block */}
            <CodeBlock />
          </motion.div>

          {/* Right: Expertise Areas */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-2xl font-display font-medium text-primary mb-8">
              Core Expertise
            </h3>

            {expertise.map((area, index) => (
              <Card
                key={index}
                className="border-elegant glass-elegant card-hover"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h4 className="text-lg font-display font-medium text-primary">
                        {area.title}
                      </h4>
                      <p className="text-muted-foreground font-body text-refined leading-relaxed text-sm">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-muted/30 text-muted-foreground hover:bg-muted/50 font-mono text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* Philosophy */}
            <Card className="border-elegant glass-elegant">
              <CardContent className="p-6">
                <h4 className="text-lg font-display font-medium text-primary mb-[18px]">
                  Philosophy
                </h4>
                <p className="text-muted-foreground font-body text-refined leading-relaxed">
                  "Technology should amplify human potential, not complicate it.
                  Every line of code, every design decision, every strategic
                  choice should ultimately serve to make people's lives better
                  and businesses more successful."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ElegantAbout;
