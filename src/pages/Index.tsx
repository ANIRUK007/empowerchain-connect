
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, GraduationCap, Award, Database, Users, BookOpen, BarChart3 } from "lucide-react";

const Index = () => {
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Feature list
  const features = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Personalized Skill Development",
      description: "AI-driven learning paths tailored to your goals and interests"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Real-world Projects",
      description: "Collaborate on impactful projects focused on sustainable development"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Mentorship",
      description: "Connect with industry professionals for guidance and feedback"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Verified Credentials",
      description: "Blockchain-secured certifications to validate your achievements"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Blockchain Portfolio",
      description: "Showcase your work in a tamper-proof decentralized portfolio"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Skills Analytics",
      description: "Track your progress and identify areas for growth"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden" ref={heroRef}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-empowered-50/50 to-transparent dark:from-empowered-950/30 dark:to-transparent -z-10"></div>
        
        {/* Background decorations */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-empowered-300/10 dark:bg-empowered-700/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-300/10 dark:bg-blue-700/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-empowered-200 dark:border-empowered-800/40 rounded-full bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm">
            <span className="bg-empowered-500 text-white text-xs px-2 py-0.5 rounded-full mr-2">New</span>
            <span className="text-sm">Introducing blockchain credentials</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-empowered-700 to-empowered-500 dark:from-empowered-400 dark:to-empowered-200">
            Learn, Build, Verify
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            An AI-powered platform connecting students with personalized skill development, 
            real-world projects, and mentors, with blockchain-verified credentials.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-empowered-500 hover:bg-empowered-600 text-white"
              asChild
            >
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <Link to="/projects">
                Explore Projects
              </Link>
            </Button>
          </div>
          
          <div className="mt-20 relative">
            <div className="absolute -inset-4 blur-xl bg-gradient-to-r from-blue-100 to-empowered-100 dark:from-blue-900/20 dark:to-empowered-900/20 rounded-2xl -z-10"></div>
            <GlassCard className="overflow-hidden border border-white/50 dark:border-gray-800/50">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Students collaborating" 
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 md:py-32 relative" ref={featuresRef}>
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Students for the Future</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with blockchain technology to create 
              a transformative educational experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlassCard 
                key={index} 
                className="animate-on-scroll opacity-0 flex flex-col items-start h-full" 
                style={{ animationDelay: `${index * 0.1}s` }}
                hoverEffect
              >
                <div className="p-3 rounded-xl bg-empowered-100 dark:bg-empowered-800/30 text-empowered-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blockchain Integration Section */}
      <section className="py-20 bg-gradient-to-b from-white to-empowered-50/30 dark:from-gray-900 dark:to-empowered-950/10 relative">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 blur-xl bg-gradient-to-r from-blue-100/50 to-empowered-100/50 dark:from-blue-900/20 dark:to-empowered-900/20 rounded-2xl -z-10"></div>
                <GlassCard className="overflow-hidden border border-white/50 dark:border-gray-800/50">
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" 
                    alt="Blockchain Technology" 
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </GlassCard>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Aptos Blockchain Integration</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                We've integrated with Aptos blockchain to provide you with secure, 
                tamper-proof credentials and a decentralized portfolio.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Tamper-proof digital skill credentials stored on-chain</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Decentralized student portfolios for immutable achievement records</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Potential support for decentralized grant/funding mechanisms</span>
                </li>
              </ul>
              
              <Button 
                className="bg-empowered-500 hover:bg-empowered-600"
                asChild
              >
                <Link to="/credentials">
                  Learn More About Verification
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Empower Your Education?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Join our platform today and start your journey towards verified skills, 
              meaningful projects, and a brighter future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-empowered-500 hover:bg-empowered-600"
                asChild
              >
                <Link to="/dashboard">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <Link to="/mentors">
                  Find a Mentor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
