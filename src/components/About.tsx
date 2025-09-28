import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '8+', label: 'Certifications', icon: Badge },
    { number: '50+', label: 'Projects Completed', icon: Rocket },
    { number: '3+', label: 'Years Experience', icon: Code },
    { number: '100+', label: 'Happy Clients', icon: Users }
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing for speed, efficiency, and user experience in every project I undertake.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong relationships with clients and teams to achieve exceptional results.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground">
            Turning Code Into Craft ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up stagger-2">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As the <span className="text-primary font-semibold">CEO & Founder of MATalogics</span>, 
                I lead a team dedicated to transforming innovative ideas into powerful digital solutions. 
                My journey in technology spans across multiple domains, from full-stack web development 
                to mobile applications and artificial intelligence.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in <span className="text-primary font-semibold">MERN Stack, Flutter, and AI/ML/DL</span>, 
                I bridge the gap between complex technical challenges and user-friendly solutions. 
                My passion lies in creating scalable applications that not only meet current needs 
                but anticipate future requirements.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Having earned <span className="text-primary font-semibold">8+ professional certifications</span> 
                and completed numerous high-impact projects, I bring both theoretical knowledge and 
                practical experience to every endeavor. I believe in continuous learning and staying 
                at the forefront of technological advancement.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="glass hover:glow-primary transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 3)}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              What Drives Me
            </h3>
            
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass hover:glow-primary transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 6)}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;