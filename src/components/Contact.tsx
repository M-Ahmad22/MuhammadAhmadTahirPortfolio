import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Clock,
  Globe,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmad@matalogics.com",
      href: "mailto:ahmad@matalogics.com",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 300 1234567",
      href: "tel:+923001234567",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: "#",
      color: "text-red-400",
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Mon - Fri, 9 AM - 6 PM",
      href: "#",
      color: "text-orange-400",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "#",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "#",
      color: "hover:text-sky-400",
    },
    {
      icon: MessageSquare,
      name: "Discord",
      href: "#",
      color: "hover:text-indigo-400",
    },
  ];

  const services = [
    "Full Stack Development",
    "Mobile App Development",
    "AI/ML Solutions",
    "Technical Consulting",
    "Code Review & Optimization",
    "Team Leadership",
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work
            together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up stagger-2">
            <Card className="glass">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24
                    hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project..."
                      rows={6}
                      required
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 glow-primary"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Details */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/20 transition-colors group"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-muted/20 flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform`}
                      >
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {info.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Services I Offer
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex items-center gap-3 p-3 rounded-lg glass hover:glow-primary transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Badge */}
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for New Projects
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Currently accepting new clients and projects. Let's discuss
                  your next big idea!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
