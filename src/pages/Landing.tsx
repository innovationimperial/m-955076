import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Shield, TrendingUp, Brain, Smartphone, BarChart3, Users, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function Landing() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [marketData, setMarketData] = useState({
    totalTrades: 1247892,
    activeUsers: 45678,
    volumeTraded: 50.2,
    uptime: 99.9
  });
  const [expandedBios, setExpandedBios] = useState<{[key: string]: boolean}>({});

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Portfolio Manager",
      company: "Goldman Sachs",
      content: "Imperial Axis has revolutionized our trading workflow. The AI insights have increased our portfolio performance by 23%.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Marcus Rodriguez",
      title: "Hedge Fund Manager",
      company: "Citadel",
      content: "The real-time analytics and risk management tools are unparalleled. We've reduced our risk exposure by 40%.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Elena Volkov",
      title: "Quantitative Analyst",
      company: "Renaissance Technologies",
      content: "The platform's institutional-grade infrastructure handles our high-frequency trading with zero latency issues.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Advanced charting tools with 100+ technical indicators and live market data streams.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms analyze market patterns and predict trends with 95% accuracy.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Portfolio Management",
      description: "Comprehensive portfolio tracking with automated rebalancing and risk assessment.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced risk metrics with real-time position sizing and stop-loss automation.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Full-featured mobile app with biometric security and instant order execution.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      icon: Users,
      title: "Institutional Grade",
      description: "Bank-level security with 99.9% uptime and institutional-grade infrastructure.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&h=400&auto=format&fit=crop"
    }
  ];

  const teamMembers = [
    {
      id: "tonderai",
      name: "Tonderai Dzwimbu",
      title: "CFO",
      image: "/lovable-uploads/82fbcd9e-0b32-44a7-8b66-adaa726c1bda.png",
      bio: "Tonderai Dzwimbu is a qualified Chartered Accountant [CA (Z)] with over four years of experience in accounting and assurance. He possesses strong management skills and extensive knowledge of various accounting, assurance, and related service frameworks. Tonderai is proficient in a range of computer and web-based programs commonly used in the accounting and audit field, including SAP, QuickBooks, and Oracle. His professional experience spans multiple countries—Zimbabwe, Namibia, and South Africa—where he has served renowned and sizeable clients across diverse industries such as insurance, manufacturing, mining, and software as a service (SaaS)."
    },
    {
      id: "mcmarsh",
      name: "McMarsh Dzwimbu",
      title: "COO and Co-Founder",
      image: "/lovable-uploads/3c47af11-7f88-47b0-9588-448936217d9c.png",
      bio: "McMarsh Dzwimbu is an operations expert specializing in business process optimization and team management. He holds a distinction honors Degree in data science and Artificial Intelligence He currently serves as a Full Stack AI Engineer and App Developer at Innovation Imperial, where he has led and contributed to numerous projects involving live AI applications. McMarsh specializes in building AI agents, automations, and scalable web applications tailored for business and industrial use cases. His technical expertise spans the MERN stack for web development, as well as Python, Pydantic, n8n, LangChain, LangGraph, and various AI frameworks used in intelligent system development. In his current role, McMarsh designs, plans, and builds practical AI-driven solutions for businesses of all sizes looking to meaningfully integrate AI into their operations. He also collaborates with business buyers and sellers to develop ERP, accounting, HR, and other enterprise systems that enhance the functionality and value of their software infrastructure."
    },
    {
      id: "ntsane",
      name: "Ntsane Foulo",
      title: "CEO & Co-Founder",
      image: "/lovable-uploads/9e036a07-effb-44b3-9ce2-c76a75731adf.png",
      bio: "Ntsane Foulo is a tech visionary with extensive experience in software development and business strategy. Holding a degree in computer science and various industry certificates and a seasoned Full Stack Engineer, he brings deep expertise in application development, with a strong focus on AI-powered solutions that drive business transformation and innovation. Ntsane is highly proficient in both frontend and backend development, and has built a wide array of intelligent applications across various industries. He is an expert in a broad range of AI frameworks and automation platforms, including n8n, LangChain, LangGraph, TensorFlow, PyTorch, Hugging Face Transformers, and OpenAI's API stack, among others. His ability to combine technical depth with strategic insight allows him to create solutions that are not only technically sound but also strategically aligned with business objectives."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => ({
        ...prev,
        totalTrades: prev.totalTrades + Math.floor(Math.random() * 10),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    window.location.href = '/stocks';
  };

  const toggleBio = (memberId: string) => {
    setExpandedBios(prev => ({
      ...prev,
      [memberId]: !prev[memberId]
    }));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "27697906374";
    const message = "Hi! I'm interested in Imperial Axis trading platform.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-[#1A1A1A]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#C0C0C0] to-[#E8E8E8] rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent">
                Imperial Axis
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-[#C0C0C0] hover:text-white transition-colors">Platform</a>
              <a href="#features" className="text-[#C0C0C0] hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-[#C0C0C0] hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-[#C0C0C0] hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-[#C0C0C0] hover:text-white transition-colors">Contact</a>
            </div>
            
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-[#C0C0C0] to-[#E8E8E8] text-black hover:from-[#B8B8B8] hover:to-[#C0C0C0] transition-all duration-300"
            >
              Start Trading
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/ff15a05f-cc71-4f51-bc6d-ce224ee93d51.png')"
          }}
        />
        
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-6 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#E8E8E8] to-[#C0C0C0] bg-clip-text text-transparent animate-slide-up">
              Command Your Financial Empire
            </h1>
            <p className="text-xl md:text-2xl text-[#C0C0C0] mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              Professional-grade trading platform with real-time analytics and AI-powered insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-gradient-to-r from-[#C0C0C0] to-[#E8E8E8] text-black hover:from-[#B8B8B8] hover:to-[#C0C0C0] transition-all duration-300 text-lg px-8 py-4"
              >
                Launch Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#C0C0C0] text-[#C0C0C0] hover:bg-[#C0C0C0] hover:text-black transition-all duration-300 text-lg px-8 py-4"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Innovation Imperial Product Tag */}
            <div className="mt-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <p className="text-sm text-[#C0C0C0] font-light">
                An Innovation Imperial Product
              </p>
            </div>
          </div>
        </div>

        {/* Floating Dashboard Preview */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block animate-float">
          <div className="bg-[#1A1A1A]/80 border border-[#C0C0C0]/20 rounded-lg p-4 w-80 backdrop-blur-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-[#C0C0C0]">Live Dashboard</h3>
              <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-xs text-[#C0C0C0]">AAPL</span>
                <span className="text-xs text-[#00FF88]">+2.34%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[#C0C0C0]">MSFT</span>
                <span className="text-xs text-[#00FF88]">+1.87%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[#C0C0C0]">GOOGL</span>
                <span className="text-xs text-[#FF4444]">-0.45%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Market Data Section */}
      <section id="platform" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent">
              Live Market Pulse
            </h2>
            <div className="w-8 h-8 mx-auto bg-[#00FF88] rounded-full animate-pulse" />
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-[#0A0A0A] border-[#C0C0C0]/20 text-center p-6">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-[#00FF88] mb-2">
                  {marketData.totalTrades.toLocaleString()}+
                </div>
                <div className="text-sm text-[#C0C0C0]">Trades Executed</div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A0A0A] border-[#C0C0C0]/20 text-center p-6">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-[#00FF88] mb-2">
                  {marketData.activeUsers.toLocaleString()}+
                </div>
                <div className="text-sm text-[#C0C0C0]">Active Users</div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A0A0A] border-[#C0C0C0]/20 text-center p-6">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-[#00FF88] mb-2">
                  ${marketData.volumeTraded}B+
                </div>
                <div className="text-sm text-[#C0C0C0]">Volume Traded</div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A0A0A] border-[#C0C0C0]/20 text-center p-6">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-[#00FF88] mb-2">
                  {marketData.uptime}%
                </div>
                <div className="text-sm text-[#C0C0C0]">Uptime</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent">
              Platform Features
            </h2>
            <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto">
              Experience the power of institutional-grade trading technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-[#1A1A1A] border-[#C0C0C0]/20 hover:border-[#C0C0C0]/40 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <feature.icon className="w-8 h-8 text-[#C0C0C0] mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-[#C0C0C0]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent">
              Trusted by Financial Leaders
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#0A0A0A] border-[#C0C0C0]/20 p-8">
              <CardContent className="p-0 text-center">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-[#C0C0C0]"
                />
                <p className="text-lg md:text-xl text-[#C0C0C0] mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-[#C0C0C0] text-sm">
                  {testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].company}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentTestimonial ? "bg-[#C0C0C0]" : "bg-[#C0C0C0]/30"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent">
              Choose Your Trading Level
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential Plan */}
            <Card className="bg-[#1A1A1A] border-[#C0C0C0]/20 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
                <div className="text-4xl font-bold text-[#C0C0C0] mb-6">$29<span className="text-lg">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    Real-time market data
                  </li>
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    Basic charting tools
                  </li>
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    Portfolio tracking
                  </li>
                </ul>
                <Button className="w-full bg-[#C0C0C0] text-black hover:bg-[#B8B8B8]">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-[#1A1A1A] border-[#C0C0C0] p-8 relative scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#C0C0C0] to-[#E8E8E8] text-black">
                Most Popular
              </Badge>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-[#C0C0C0] mb-6">$99<span className="text-lg">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    All Essential features
                  </li>
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    AI-powered insights
                  </li>
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    Advanced risk management
                  </li>
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    Mobile app access
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-[#C0C0C0] to-[#E8E8E8] text-black hover:from-[#B8B8B8] hover:to-[#C0C0C0]">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-[#1A1A1A] border-[#C0C0C0]/20 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-[#C0C0C0] mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    All Professional features
                  </li>
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    White-label solutions
                  </li>
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-[#C0C0C0]">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <Button className="w-full bg-[#C0C0C0] text-black hover:bg-[#B8B8B8]">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto">
              The visionaries behind Imperial Axis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card 
                key={member.id} 
                className="bg-[#0A0A0A] border-[#C0C0C0]/20 hover:border-[#C0C0C0]/40 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto border-4 border-[#C0C0C0]/30 group-hover:border-[#C0C0C0]/60 transition-all duration-300 object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#C0C0C0] font-semibold mb-4">{member.title}</p>
                  
                  <div className="text-left">
                    <p className="text-[#C0C0C0] text-sm leading-relaxed">
                      {expandedBios[member.id] 
                        ? member.bio
                        : `${member.bio.substring(0, 150)}...`
                      }
                    </p>
                    
                    <button
                      onClick={() => toggleBio(member.id)}
                      className="mt-3 flex items-center text-[#C0C0C0] hover:text-white transition-colors text-sm font-medium"
                    >
                      {expandedBios[member.id] ? (
                        <>
                          Show Less <ChevronUp className="ml-1 w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown className="ml-1 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] border-t border-[#C0C0C0]/20 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#C0C0C0] to-[#E8E8E8] rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent">
                  Imperial Axis
                </span>
              </div>
              <p className="text-[#C0C0C0] mb-4">
                Professional-grade trading platform for the modern investor.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="text-[#C0C0C0] hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#C0C0C0]/20 mt-12 pt-8 text-center">
            <p className="text-[#C0C0C0] mb-4">
              © 2024 Imperial Axis. All rights reserved. | 
              <span className="text-[#00FF88] ml-2">Markets are open</span>
            </p>
            
            {/* Innovation Imperial Tag */}
            <div className="inline-block">
              <img 
                src="/lovable-uploads/b1047f6d-7896-45ed-8ecf-3a4678a42398.png" 
                alt="Created and Powered by Innovation Imperial"
                className="h-8 mx-auto"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
