import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Smartphone, Globe, Brain, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack Web App',
      description: 'A complete e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Socket.io'],
      features: [
        'Real-time inventory tracking',
        'Multi-vendor support',
        'Advanced analytics dashboard',
        'Secure payment integration'
      ],
      icon: ShoppingCart,
      color: 'bg-green-500/10 text-green-400 border-green-500/20',
      github: '#',
      live: '#',
      status: 'Completed'
    },
    {
      title: 'AI-Powered Mobile App',
      category: 'Flutter Mobile App',
      description: 'An intelligent mobile application using machine learning for image recognition and natural language processing.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'TensorFlow', 'Firebase', 'Python', 'Google ML Kit'],
      features: [
        'Real-time image recognition',
        'Natural language processing',
        'Offline AI capabilities',
        'Cloud synchronization'
      ],
      icon: Brain,
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      github: '#',
      live: '#',
      status: 'In Development'
    },
    {
      title: 'Social Media Dashboard',
      category: 'Web Application',
      description: 'A comprehensive social media management platform with analytics, scheduling, and multi-platform integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
      features: [
        'Multi-platform posting',
        'Advanced analytics',
        'Content scheduling',
        'Team collaboration tools'
      ],
      icon: Globe,
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      github: '#',
      live: '#',
      status: 'Completed'
    },
    {
      title: 'Task Management System',
      category: 'Progressive Web App',
      description: 'A modern task management system with real-time collaboration, file sharing, and project tracking capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'GraphQL', 'Node.js', 'MongoDB', 'WebRTC'],
      features: [
        'Real-time collaboration',
        'File sharing & comments',
        'Project timeline tracking',
        'Mobile-responsive design'
      ],
      icon: Smartphone,
      color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      github: '#',
      live: '#',
      status: 'Completed'
    },
    {
      title: 'Healthcare Management',
      category: 'Enterprise Solution',
      description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Express.js', 'MySQL', 'WebRTC', 'AWS S3'],
      features: [
        'Patient record management',
        'Appointment scheduling',
        'Telemedicine integration',
        'HIPAA compliant'
      ],
      icon: Globe,
      color: 'bg-red-500/10 text-red-400 border-red-500/20',
      github: '#',
      live: '#',
      status: 'Completed'
    },
    {
      title: 'IoT Monitoring Platform',
      category: 'IoT & Data Visualization',
      description: 'Real-time IoT device monitoring platform with data visualization, alerts, and predictive analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Python', 'InfluxDB', 'MQTT', 'TensorFlow'],
      features: [
        'Real-time device monitoring',
        'Predictive maintenance',
        'Custom alert system',
        'Data visualization dashboards'
      ],
      icon: Brain,
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      github: '#',
      live: '#',
      status: 'Completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'In Development':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      default:
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my latest work and innovations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass hover:glow-primary transition-all duration-500 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                  <project.icon className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <Badge className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Header */}
                  <div>
                    <Badge className={`${project.color} mb-2`}>
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-muted/30 text-muted-foreground hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-muted/30 text-muted-foreground">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in-up stagger-5">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-primary"
          >
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;