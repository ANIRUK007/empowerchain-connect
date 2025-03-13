
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Filter, Download, Share2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioItem, { PortfolioProject } from "@/components/portfolio/PortfolioItem";

const Portfolio = () => {
  // Portfolio project data
  const projects: PortfolioProject[] = [
    {
      id: "proj-001",
      title: "Sustainable Water Filtration System",
      description: "Designed and prototyped a low-cost water filtration system for developing regions using locally available materials.",
      date: "2023-05-10",
      tags: ["Sustainability", "Engineering", "Water Systems"],
      imageUrl: "https://images.unsplash.com/photo-1544401943-6e975ddd34b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      link: "https://example.com/water-filtration",
      onChainVerification: true,
      verificationHash: "0x8a98bde7731c87437a79112596975a287c7289e08b42f54ce91eb0f5ca292a2c"
    },
    {
      id: "proj-002",
      title: "Community Solar Initiative",
      description: "Led a team designing a community-based solar power distribution system for rural communities.",
      date: "2023-03-22",
      tags: ["Renewable Energy", "Community Development", "Project Management"],
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      link: "https://example.com/community-solar",
      onChainVerification: true,
      verificationHash: "0x2c8b24e31f4bd63b5ea24c56aeae45399e62717ac98e512c36bfed4b5a314a9d"
    },
    {
      id: "proj-003",
      title: "Blockchain Identity Management",
      description: "Developed a proof-of-concept for secure identity management using Aptos blockchain for humanitarian aid distribution.",
      date: "2023-06-05",
      tags: ["Blockchain", "Identity", "Humanitarian"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80",
      link: "https://example.com/blockchain-identity",
      onChainVerification: true,
      verificationHash: "0x4a98bde7731c87437a79112596975a287c7289e08b42f54ce91eb0f5ca292b3d"
    },
    {
      id: "proj-004",
      title: "Educational Resource Platform",
      description: "Created an accessible platform for sharing educational resources in under-resourced communities, featuring offline capabilities.",
      date: "2023-02-18",
      tags: ["Education", "Web Development", "Accessibility"],
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
      link: "https://example.com/educational-resources",
      onChainVerification: false
    },
    {
      id: "proj-005",
      title: "AI-Powered Crop Disease Detection",
      description: "Implemented a machine learning model for early detection of crop diseases using smartphone cameras to support sustainable agriculture.",
      date: "2023-04-12",
      tags: ["Machine Learning", "Agriculture", "Mobile Development"],
      imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "https://example.com/crop-disease-detection",
      onChainVerification: false
    },
    {
      id: "proj-006",
      title: "Waste Management Optimization",
      description: "Analyzed waste collection routes and proposed optimization strategies for a local municipality, resulting in 30% efficiency improvement.",
      date: "2023-01-25",
      tags: ["Data Analysis", "Urban Planning", "Sustainability"],
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "https://example.com/waste-management",
      onChainVerification: false
    }
  ];

  // Filter options
  const [filter, setFilter] = useState('all');
  
  // Filter projects based on selected filter
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'verified' 
      ? projects.filter(project => project.onChainVerification) 
      : projects.filter(project => !project.onChainVerification);

  // Stats
  const verifiedCount = projects.filter(p => p.onChainVerification).length;
  const totalCount = projects.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container px-4 md:px-6 mx-auto pt-28 pb-16 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Your Portfolio</h1>
            <p className="text-muted-foreground">Showcase your projects and achievements</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <Button 
              className="bg-empowered-500 hover:bg-empowered-600"
              asChild
            >
              <Link to="/portfolio/new">
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Link>
            </Button>
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        
        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 p-6">
            <div className="h-12 w-12 rounded-full bg-empowered-100 dark:bg-empowered-900/30 text-empowered-600 dark:text-empowered-400 flex items-center justify-center">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Verified Projects</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">{verifiedCount}/{totalCount}</h3>
                <Badge className="bg-empowered-500">
                  {Math.round((verifiedCount / totalCount) * 100)}%
                </Badge>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6 col-span-2">
            <h3 className="font-semibold mb-2">Portfolio Strength</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Technical Skills</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full w-[85%] bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Project Diversity</span>
                  <span>70%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full w-[70%] bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Verification Status</span>
                  <span>{Math.round((verifiedCount / totalCount) * 100)}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full w-[50%] bg-empowered-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        
        {/* Filter Controls */}
        <div className="flex mb-6">
          <Button 
            variant="outline" 
            className={filter === 'all' ? 'bg-muted' : ''}
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
          <Button 
            variant="outline" 
            className={`ml-2 ${filter === 'verified' ? 'bg-muted' : ''}`}
            onClick={() => setFilter('verified')}
          >
            <Shield className="mr-2 h-4 w-4" />
            Verified
          </Button>
          <Button 
            variant="outline" 
            className={`ml-2 ${filter === 'unverified' ? 'bg-muted' : ''}`}
            onClick={() => setFilter('unverified')}
          >
            Unverified
          </Button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredProjects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
        
        {/* Blockchain Verification Information */}
        <Card>
          <CardHeader>
            <CardTitle>Blockchain-Verified Portfolio</CardTitle>
            <CardDescription>
              Projects with blockchain verification have been authenticated and recorded on the Aptos blockchain
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Blockchain verification adds an extra layer of credibility to your portfolio by creating an immutable record of your work. 
                Verified projects include a transaction hash that can be used to verify the authenticity and timestamp of your project on the blockchain.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Benefits of verification:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Tamper-proof record of your work</li>
                  <li>Credible proof of completion date</li>
                  <li>Enhanced trust for employers and collaborators</li>
                  <li>Permanent storage of your achievement history</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="mr-2" 
              asChild
            >
              <Link to="/help/verification">
                Learn More
              </Link>
            </Button>
            <Button 
              className="bg-empowered-500 hover:bg-empowered-600" 
              asChild
            >
              <Link to="/portfolio/verify">
                Verify More Projects
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
