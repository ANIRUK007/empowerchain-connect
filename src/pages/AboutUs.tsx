
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Target, 
  Heart, 
  Users, 
  BarChart3, 
  Award, 
  Sparkles,
  ArrowRight,
  Mail
} from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education First",
      description: "We believe that education is the foundation for personal and societal growth."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Impact-Driven",
      description: "Every feature and project is designed to create meaningful impact."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community-Focused",
      description: "We build strong communities where collaboration thrives."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Inclusivity",
      description: "We create opportunities for learners from all backgrounds."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Innovation",
      description: "We embrace new technologies to enhance learning experiences."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do."
    }
  ];
  
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Former professor with 15+ years experience in education technology",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Blockchain expert with a passion for educational innovation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Head of Education",
      bio: "Curriculum design specialist with a focus on skill-based learning",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "David Okafor",
      role: "Head of Partnerships",
      bio: "Building bridges between education and industry for 10+ years",
      image: "https://images.unsplash.com/photo-1563832853-e2ab2d9a3c8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-empowered-50/50 to-transparent dark:from-empowered-950/30 dark:to-transparent -z-10"></div>
          <div className="container px-4 sm:px-6 mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Empowering the next generation with verified skills, 
              meaningful projects, and personalized learning journeys.
            </p>
            <Button 
              size="lg" 
              className="bg-empowered-500 hover:bg-empowered-600"
              asChild
            >
              <Link to="/projects">
                Explore Our Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="mb-16">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    EmpowerEd began in 2019 when our founder, Dr. Sarah Chen, recognized a gap between 
                    traditional education and the rapidly evolving skills needed in today's world.
                  </p>
                  <p>
                    After years of research in educational technology and skill development, she 
                    assembled a team of educators, technologists, and industry partners to build a 
                    platform that would bridge this gap.
                  </p>
                  <p>
                    Today, EmpowerEd serves thousands of students across the globe, connecting them 
                    with personalized learning paths, hands-on projects, and mentorship from industry 
                    experts.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 blur-xl bg-gradient-to-r from-blue-100/50 to-empowered-100/50 dark:from-blue-900/20 dark:to-empowered-900/20 rounded-2xl -z-10"></div>
                <GlassCard className="overflow-hidden border border-white/50 dark:border-gray-800/50 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="EmpowerEd Team" 
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="mb-16 bg-gradient-to-b from-white to-empowered-50/30 dark:from-gray-900 dark:to-empowered-950/10 py-12">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These core principles guide everything we do at EmpowerEd.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <GlassCard 
                  key={index} 
                  className="flex flex-col items-start"
                  hoverEffect
                >
                  <div className="p-3 rounded-xl bg-empowered-100 dark:bg-empowered-800/30 text-empowered-500 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="mb-16">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the passionate individuals behind EmpowerEd.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <GlassCard 
                  key={index} 
                  className="text-center"
                  hoverEffect
                >
                  <div className="mb-4 relative mx-auto w-24 h-24 overflow-hidden rounded-full border-2 border-empowered-100 dark:border-empowered-800/50">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-empowered-500 text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Impact Metrics */}
        <section className="mb-16">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-6">
                  <GlassCard className="text-center p-6">
                    <BarChart3 className="h-10 w-10 mx-auto mb-4 text-empowered-500" />
                    <div className="text-4xl font-bold mb-2">10k+</div>
                    <p className="text-muted-foreground">Students Empowered</p>
                  </GlassCard>
                  <GlassCard className="text-center p-6">
                    <GraduationCap className="h-10 w-10 mx-auto mb-4 text-empowered-500" />
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <p className="text-muted-foreground">Skills Verified</p>
                  </GlassCard>
                  <GlassCard className="text-center p-6">
                    <Target className="h-10 w-10 mx-auto mb-4 text-empowered-500" />
                    <div className="text-4xl font-bold mb-2">250+</div>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </GlassCard>
                  <GlassCard className="text-center p-6">
                    <Users className="h-10 w-10 mx-auto mb-4 text-empowered-500" />
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <p className="text-muted-foreground">Active Mentors</p>
                  </GlassCard>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At EmpowerEd, we measure our success by the positive impact we create 
                    in the lives of our students and communities.
                  </p>
                  <p>
                    Through our platform, students have gained valuable skills, completed 
                    real-world projects, and connected with mentors who have helped shape 
                    their educational and career journeys.
                  </p>
                  <p>
                    We're proud of what we've accomplished, but we're just getting started. 
                    Our vision is to empower millions of learners worldwide with the skills 
                    and opportunities they need to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <div className="container px-4 sm:px-6 mx-auto">
            <GlassCard className="text-center p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us in Our Mission</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Whether you're a student, educator, mentor, or industry partner, there's a place for you in the EmpowerEd community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-empowered-500 hover:bg-empowered-600"
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
                  <Link to="/support">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
