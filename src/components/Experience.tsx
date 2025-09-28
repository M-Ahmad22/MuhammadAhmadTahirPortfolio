import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'CEO & Founder',
      company: 'MATalogics',
      duration: '2021 - Present',
      location: 'Pakistan',
      type: 'Full-time',
      description: 'Leading a dynamic tech company specializing in full-stack development, mobile applications, and AI/ML solutions. Successfully delivered 50+ projects for clients worldwide.',
      achievements: [
        'Built and scaled MATalogics from concept to a successful tech company',
        'Led development teams on 50+ successful project deliveries',
        'Established partnerships with international clients',
        'Implemented AI/ML solutions for enterprise clients'
      ],
      technologies: ['MERN Stack', 'Flutter', 'AI/ML', 'Leadership', 'Project Management']
    },
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Hub',
      duration: '2020 - 2021',
      location: 'Remote',
      type: 'Contract',
      description: 'Developed scalable web applications and mobile solutions for startups and established businesses. Specialized in React.js, Node.js, and Flutter development.',
      achievements: [
        'Architected and developed 15+ full-stack applications',
        'Reduced application load times by 40% through optimization',
        'Mentored junior developers and established coding standards',
        'Integrated third-party APIs and payment gateways'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Flutter', 'AWS']
    },
    {
      title: 'MERN Stack Developer',
      company: 'Digital Solutions Co.',
      duration: '2019 - 2020',
      location: 'Pakistan',
      type: 'Full-time',
      description: 'Focused on building responsive web applications using MongoDB, Express.js, React.js, and Node.js. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Developed 20+ responsive web applications',
        'Implemented real-time features using Socket.io',
        'Optimized database queries improving performance by 35%',
        'Created reusable component libraries'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartTech Solutions',
      duration: '2018 - 2019',
      location: 'Pakistan',
      type: 'Full-time',
      description: 'Started my professional journey in web development, learning modern technologies and best practices while contributing to various client projects.',
      achievements: [
        'Successfully completed 10+ client projects',
        'Learned and implemented modern JavaScript frameworks',
        'Contributed to open-source projects',
        'Earned multiple certifications in web technologies'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'jQuery', 'PHP', 'MySQL']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Contract':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default:
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey in technology
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 animate-fade-in-up ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2 pl-12 md:pl-0`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-auto md:right-0 md:transform md:translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center glow-primary">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              
              {/* Experience Card */}
              <Card className="glass hover:glow-primary transition-all duration-500 group">
                <CardContent className="p-8">
                  
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="text-lg font-semibold text-primary">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-muted/50 text-foreground hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up stagger-5">
          {[
            { number: '5+', label: 'Years of Experience' },
            { number: '50+', label: 'Projects Delivered' },
            { number: '4', label: 'Companies Worked With' }
          ].map((stat, index) => (
            <Card key={index} className="glass text-center hover:glow-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;