
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Ntsane Foulo",
      title: "CEO & Co-Founder",
      image: "/lovable-uploads/ntsane-foulo.jpg",
      bio: "Ntsane Foulo is a tech visionary with extensive experience in software development and business strategy. Holding a degree in computer science and various industry certificates and a seasoned Full Stack Engineer, he brings deep expertise in application development, with a strong focus on AI-powered solutions that drive business transformation and innovation. Ntsane is highly proficient in both frontend and backend development, and has built a wide array of intelligent applications across various industries. He is an expert in a broad range of AI frameworks and automation platforms, including n8n, LangChain, LangGraph, TensorFlow, PyTorch, Hugging Face Transformers, and OpenAI's API stack, among others. His ability to combine technical depth with strategic insight allows him to create solutions that are innovative and practical.",
      expertise: ["AI-Powered Solutions", "Full Stack Development", "Business Strategy", "Software Architecture"]
    },
    {
      id: 2,
      name: "McMarsh Dzwimbu",
      title: "COO & Co-Founder",
      image: "/lovable-uploads/mcmarsh-dzwimbu.jpg",
      bio: "McMarsh Dzwimbu is an operations expert specializing in business process optimization and team management. He holds a distinction honors Degree in data science and Artificial Intelligence. He currently serves as a Full Stack AI Engineer and App Developer at Innovation Imperial, where he has led and contributed to numerous projects involving live AI applications. McMarsh specializes in building AI agents, automations, and scalable web applications tailored for business and industrial use cases. His technical expertise spans the MERN stack for web development, as well as Python, Pydantic, n8n, LangChain, LangGraph, and various AI frameworks used in intelligent system development. In his current role, McMarsh designs, plans, and builds practical AI-driven solutions for businesses of all sizes looking to meaningfully integrate AI into their operations.",
      expertise: ["AI Agents & Automation", "MERN Stack", "Business Process Optimization", "Enterprise Systems"]
    },
    {
      id: 3,
      name: "Enock Ndoy",
      title: "CTO",
      image: "/lovable-uploads/enock-ndoy.jpg",
      bio: "Enock Ndoy brings exceptional technical leadership and innovation to Imperial Axis as our Chief Technology Officer. With extensive experience in enterprise software architecture and cutting-edge technology implementation, Enock leads our technical vision and ensures our platform remains at the forefront of financial technology innovation.",
      expertise: ["Technical Leadership", "Software Architecture", "Platform Innovation", "Team Management"]
    },
    {
      id: 4,
      name: "Tonderai Dzwimbu",
      title: "CFO",
      image: "/lovable-uploads/tonderai-dzwimbu.jpg",
      bio: "Tonderai Dzwimbu is a qualified Chartered Accountant [CA (Z)] with over four years of experience in accounting and assurance. He possesses strong management skills and extensive knowledge of various accounting, assurance, and related service frameworks. Tonderai is proficient in a range of computer and web-based programs commonly used in the accounting and audit field, including SAP, QuickBooks, and Oracle. His professional experience spans multiple countries—Zimbabwe, Namibia, and South Africa—where he has served renowned and sizeable clients across diverse industries such as insurance, manufacturing, mining, and software as a service (SaaS).",
      expertise: ["Financial Management", "International Accounting", "Risk Assessment", "Regulatory Compliance"]
    },
    {
      id: 5,
      name: "Mtandazo Dube",
      title: "CSO",
      image: "/lovable-uploads/mtandazo-dube.jpg",
      bio: "Mtandazo Dube serves as our Chief Strategy Officer, bringing strategic vision and operational excellence to Imperial Axis. With a focus on market expansion and strategic partnerships, Mtandazo ensures our platform continues to grow and adapt to meet the evolving needs of our global client base.",
      expertise: ["Strategic Planning", "Market Analysis", "Partnership Development", "Business Growth"]
    }
  ];

  return (
    <PageLayout title="About Imperial Axis">
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Pioneering the Future of Financial Technology
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            At Imperial Axis, we combine cutting-edge technology with deep financial expertise to create 
            trading platforms that empower investors and institutions worldwide.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Founded 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Global Operations</span>
            </div>
            <div className="flex items-center gap-1">
              <ExternalLink className="w-4 h-4" />
              <a 
                href="https://innovationimperial.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Innovation Imperial
              </a>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to professional-grade financial tools and insights, 
                empowering traders and investors of all levels to make informed decisions 
                in global markets through innovative technology and exceptional user experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted and advanced financial trading platform, 
                setting new standards for innovation, security, and user empowerment in 
                the global financial technology landscape.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              finance, and business strategy to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary" className="flex-1">
                            <Mail className="w-4 h-4 mr-1" />
                            Contact
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.title}</p>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                      {member.bio}
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Key Expertise:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-muted text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">I</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously pushing boundaries to create cutting-edge solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust</h3>
              <p className="text-sm text-muted-foreground">
                Building lasting relationships through transparency and reliability
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Delivering exceptional quality in every aspect of our platform
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Trading?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of traders who trust Imperial Axis for their financial success.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Trading Today
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
