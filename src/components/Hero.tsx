import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Hello World,",
    "Turning ideas into",
    "interactive realities",
    "on every screen,", 
    "everywhere."
  ];

  const roles = [
    "MERN STACK DEVELOPER",
    "FLUTTER DEVELOPER", 
    "AI/ML/DL EXPERT",
    "CEO & FOUNDER"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = texts[currentIndex] || '';

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
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
  }, [displayText, currentIndex, isDeleting, texts]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 animated-bg opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-16 flex items-center">
                <h1 className="text-2xl md:text-4xl font-mono text-foreground">
                  {displayText}
                  <span className="typewriter"></span>
                </h1>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text animate-fade-in-up stagger-2">
                Muhammad Ahmad Tahir
              </h2>
              
              <div className="h-12 flex items-center animate-fade-in-up stagger-3">
                <p className="text-lg md:text-xl text-primary font-semibold">
                  {roles[currentRole]}
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up stagger-4">
              CEO & Founder of MATalogics. Full-stack developer specializing in MERN stack, 
              Flutter mobile development, and AI/ML solutions. Transforming innovative ideas into 
              powerful digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-5">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group"
              >
                Let's Connect!
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Portfolio
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in-up stagger-5">
              {[
                { Icon: Github, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Mail, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-primary"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image & Laptop Mockup */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Laptop Frame */}
              <div className="bg-card rounded-2xl p-8 glass animate-float">
                <div className="bg-background rounded-lg p-4 space-y-4">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img 
                        src={profileImage} 
                        alt="Muhammad Ahmad Tahir"
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary glow-primary"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Code Editor UI */}
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-muted-foreground">// Portfolio.js</div>
                    <div className="text-primary">const developer = {"{"}</div>
                    <div className="pl-4 text-foreground">
                      name: <span className="text-success">"Ahmad Tahir"</span>,
                    </div>
                    <div className="pl-4 text-foreground">
                      role: <span className="text-success">"Full Stack Developer"</span>,
                    </div>
                    <div className="pl-4 text-foreground">
                      skills: <span className="text-warning">[</span><span className="text-success">"MERN", "Flutter", "AI/ML"</span><span className="text-warning">]</span>
                    </div>
                    <div className="text-primary">{"}"};</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
              <div 
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-success/20 rounded-full animate-pulse"
                style={{ animationDelay: '0.5s' }}
              ></div>
              <div 
                className="absolute top-1/2 -right-8 w-8 h-8 bg-warning/20 rounded-full animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;