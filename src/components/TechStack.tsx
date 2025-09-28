import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend Development',
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      technologies: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Sass/SCSS', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      color: 'bg-green-500/10 text-green-400 border-green-500/20',
      technologies: [
        { name: 'Node.js', level: 93 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Redis', level: 78 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    {
      title: 'Mobile Development',
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      technologies: [
        { name: 'Flutter', level: 92 },
        { name: 'Dart', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'Firebase', level: 88 },
        { name: 'SQLite', level: 80 },
        { name: 'Native APIs', level: 82 }
      ]
    },
    {
      title: 'AI/ML & Data Science',
      color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      technologies: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 82 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 87 },
        { name: 'OpenCV', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      color: 'bg-red-500/10 text-red-400 border-red-500/20',
      technologies: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Linux', level: 88 },
        { name: 'Nginx', level: 80 },
        { name: 'CI/CD', level: 78 }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies I love working with
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="glass hover:glow-primary transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-8">
                  <Badge className={`${category.color} text-lg px-4 py-2 font-semibold`}>
                    {category.title}
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="group animate-fade-in-up"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.05)}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {tech.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${tech.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20 text-center animate-fade-in-up stagger-5">
          <h3 className="text-2xl font-bold gradient-text mb-8">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'AWS Certified Developer',
              'MongoDB Certified',
              'Google Cloud Professional',
              'Meta React Developer',
              'Flutter Certified',
              'TensorFlow Developer',
              'Docker Certified',
              'Kubernetes Expert'
            ].map((cert, index) => (
              <Card 
                key={index} 
                className="glass hover:glow-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * (index + 10)}s` }}
              >
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-center text-foreground">
                    {cert}
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

export default TechStack;