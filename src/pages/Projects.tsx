
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Users, Calendar, Shield, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";

const Projects = () => {
  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter state
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  // Categories
  const categories = [
    "Sustainability", 
    "Blockchain", 
    "Education", 
    "Healthcare", 
    "Climate Action"
  ];
  
  // Mock data for projects
  const projectsData = [
    {
      id: "proj-001",
      title: "Clean Water Access Platform",
      shortDescription: "Develop a platform to map and coordinate clean water access initiatives in underserved regions.",
      description: "This project aims to create a centralized platform for tracking, coordinating, and optimizing clean water access initiatives in underserved regions. Participants will develop both technical solutions for data collection and visualization, as well as governance frameworks for community management of water resources.",
      category: "Sustainability",
      difficulty: "Intermediate",
      skillsRequired: ["Web Development", "Data Visualization", "Community Engagement"],
      skillsGained: ["Full-stack Development", "GIS Mapping", "Stakeholder Management"],
      duration: "8 weeks",
      sdgGoals: [6, 10, 17], // Clean Water, Reduced Inequalities, Partnerships
      image: "https://images.unsplash.com/photo-1544401943-6e975ddd34b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      participants: 12,
      maxParticipants: 15,
      startDate: "2023-07-15",
      mentorId: "mentor-001",
      mentorName: "Dr. Sarah Chen",
      featured: true,
      credentialOffered: true,
      status: "active"
    },
    {
      id: "proj-002",
      title: "Decentralized Educational Credentials",
      shortDescription: "Build a system for issuing and verifying educational credentials on the Aptos blockchain.",
      description: "This project focuses on developing a decentralized application (dApp) on the Aptos blockchain for issuing, storing, and verifying educational credentials. Participants will work on smart contract development, frontend interfaces, and integration with educational institutions.",
      category: "Blockchain",
      difficulty: "Advanced",
      skillsRequired: ["Blockchain Development", "Smart Contracts", "React"],
      skillsGained: ["Aptos Development", "DApp Architecture", "Digital Identity Management"],
      duration: "10 weeks",
      sdgGoals: [4, 9, 17], // Quality Education, Industry & Innovation, Partnerships
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      participants: 8,
      maxParticipants: 10,
      startDate: "2023-07-01",
      mentorId: "mentor-002",
      mentorName: "James Wilson",
      featured: true,
      credentialOffered: true,
      status: "active"
    },
    {
      id: "proj-003",
      title: "AI for Crop Disease Detection",
      shortDescription: "Develop a mobile application using AI to identify crop diseases and suggest treatments.",
      description: "This project involves creating a mobile application that uses machine learning algorithms to identify crop diseases from photos and provide appropriate treatment recommendations. The application will be designed for use in regions with limited internet connectivity and will support multiple languages.",
      category: "Agriculture",
      difficulty: "Intermediate",
      skillsRequired: ["Mobile Development", "Machine Learning", "UI/UX Design"],
      skillsGained: ["TensorFlow/PyTorch", "Cross-platform Development", "Offline-first Design"],
      duration: "12 weeks",
      sdgGoals: [2, 9, 15], // Zero Hunger, Industry & Innovation, Life on Land
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      participants: 5,
      maxParticipants: 8,
      startDate: "2023-08-10",
      mentorId: "mentor-003",
      mentorName: "Dr. Maya Patel",
      featured: false,
      credentialOffered: true,
      status: "upcoming"
    },
    {
      id: "proj-004",
      title: "Community Solar Initiative",
      shortDescription: "Design a framework for implementing community-owned solar energy systems in rural areas.",
      description: "This project focuses on creating both technical designs and governance frameworks for community-owned solar energy systems. Participants will work on technical aspects such as system sizing and grid integration, as well as social aspects like community engagement and financial sustainability models.",
      category: "Sustainability",
      difficulty: "Intermediate",
      skillsRequired: ["Renewable Energy", "Community Development", "Financial Modeling"],
      skillsGained: ["Solar System Design", "Social Enterprise Development", "Impact Assessment"],
      duration: "16 weeks",
      sdgGoals: [7, 11, 13], // Affordable & Clean Energy, Sustainable Cities, Climate Action
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      participants: 7,
      maxParticipants: 12,
      startDate: "2023-09-05",
      mentorId: "mentor-004",
      mentorName: "Carlos Rodriguez",
      featured: false,
      credentialOffered: true,
      status: "upcoming"
    },
    {
      id: "proj-005",
      title: "Accessible Educational Platform",
      shortDescription: "Create an educational platform optimized for users with disabilities and low bandwidth.",
      description: "This project aims to develop an educational content platform with a strong focus on accessibility for users with various disabilities and those in low-bandwidth environments. The platform will support multiple content formats, offline access, and be optimized for assistive technologies.",
      category: "Education",
      difficulty: "Intermediate",
      skillsRequired: ["Web Development", "Accessibility Design", "Content Management"],
      skillsGained: ["WCAG Compliance", "Progressive Web Apps", "Inclusive Design"],
      duration: "10 weeks",
      sdgGoals: [4, 10], // Quality Education, Reduced Inequalities
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
      participants: 10,
      maxParticipants: 15,
      startDate: "2023-07-20",
      mentorId: "mentor-005",
      mentorName: "Olivia Thompson",
      featured: true,
      credentialOffered: true,
      status: "active"
    },
    {
      id: "proj-006",
      title: "Disaster Response Coordination",
      shortDescription: "Build a system to coordinate disaster response efforts using blockchain and mobile technology.",
      description: "This project involves creating a decentralized platform for coordinating disaster response efforts, including resource tracking, volunteer management, and secure communication channels. The system will leverage blockchain for transparent resource allocation and mobile technology for field deployment.",
      category: "Humanitarian",
      difficulty: "Advanced",
      skillsRequired: ["Blockchain", "Mobile Development", "System Architecture"],
      skillsGained: ["Crisis Management Systems", "Offline Data Synchronization", "Humanitarian Tech"],
      duration: "14 weeks",
      sdgGoals: [3, 11, 13], // Good Health, Sustainable Cities, Climate Action
      image: "https://images.unsplash.com/photo-1551301622-6fa01fb0cb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      participants: 4,
      maxParticipants: 12,
      startDate: "2023-08-15",
      mentorId: "mentor-006",
      mentorName: "Alex Kim",
      featured: false,
      credentialOffered: true,
      status: "upcoming"
    }
  ];
  
  // Filter projects based on search term and category
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = !searchTerm || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.skillsRequired.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = !categoryFilter || project.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get featured projects
  const featuredProjects = filteredProjects.filter(project => project.featured);
  
  // Get active and upcoming projects
  const activeProjects = filteredProjects.filter(project => project.status === "active");
  const upcomingProjects = filteredProjects.filter(project => project.status === "upcoming");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container px-4 md:px-6 mx-auto pt-28 pb-16 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Explore Projects</h1>
            <p className="text-muted-foreground">Find real-world projects to develop your skills and make an impact</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              className="bg-empowered-500 hover:bg-empowered-600"
              asChild
            >
              <Link to="/projects/my-projects">
                <BookOpen className="mr-2 h-4 w-4" />
                My Projects
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search projects..." 
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Badge 
                      key={category}
                      variant={categoryFilter === category ? "default" : "outline"}
                      className={`cursor-pointer ${categoryFilter === category ? 'bg-empowered-500' : ''}`}
                      onClick={() => setCategoryFilter(categoryFilter === category ? null : category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredProjects.slice(0, 2).map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}
        
        {/* Active Projects */}
        {activeProjects.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Active Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
        
        {/* Upcoming Projects */}
        {upcomingProjects.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
        
        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <GlassCard className="p-8 text-center my-8">
            <p className="text-lg mb-4">No projects found matching your criteria</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter(null);
              }}
            >
              Clear Filters
            </Button>
          </GlassCard>
        )}
        
        {/* Project Benefits */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Why Join Projects</CardTitle>
            <CardDescription>Gain valuable skills and make a real-world impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Learn By Doing</h3>
                <p className="text-muted-foreground">Develop practical skills through hands-on experience on real projects</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Verified Credentials</h3>
                <p className="text-muted-foreground">Earn blockchain-verified credentials that showcase your achievements</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full bg-empowered-100 dark:bg-empowered-900/30 text-empowered-600 dark:text-empowered-400 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Connect & Collaborate</h3>
                <p className="text-muted-foreground">Work with peers and mentors to solve real-world challenges</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Propose a Project */}
        <Card className="bg-gradient-to-br from-empowered-50 to-blue-50 dark:from-empowered-950/50 dark:to-blue-950/50 border-empowered-100 dark:border-empowered-800">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Have a Project Idea?</h2>
                <p className="text-muted-foreground mb-4">
                  Propose your own project and lead a team to make your vision a reality. We provide resources, mentorship and a platform to showcase your work.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm">Get implementation support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm">Connect with skilled teammates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm">Develop leadership skills</span>
                  </div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-empowered-500 hover:bg-empowered-600 whitespace-nowrap"
                asChild
              >
                <Link to="/projects/propose">
                  Propose a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
