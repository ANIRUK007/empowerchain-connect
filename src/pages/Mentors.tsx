
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Calendar, Clock, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MentorCard from "@/components/mentors/MentorCard";

const Mentors = () => {
  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter state
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Mock data for mentors
  const mentors = [
    {
      id: "mentor-001",
      name: "Dr. Sarah Chen",
      title: "Sustainable Development Expert",
      organization: "Global Green Initiative",
      bio: "15+ years experience in sustainable development projects across Asia and Africa. Specializes in water conservation and renewable energy solutions.",
      expertise: ["Sustainable Development", "Water Conservation", "Renewable Energy"],
      rating: 4.9,
      reviews: 24,
      availability: "Mon, Wed, Fri",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      verified: true
    },
    {
      id: "mentor-002",
      name: "James Wilson",
      title: "Blockchain Developer & Educator",
      organization: "Aptos Foundation",
      bio: "Core contributor to Aptos blockchain. Passionate about educating the next generation of blockchain developers and creating accessible learning resources.",
      expertise: ["Blockchain Development", "Smart Contracts", "Aptos"],
      rating: 4.8,
      reviews: 31,
      availability: "Tue, Thu, Sat",
      imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      verified: true
    },
    {
      id: "mentor-003",
      name: "Dr. Maya Patel",
      title: "AI & Sustainability Researcher",
      organization: "Tech for Good Institute",
      bio: "Researching applications of AI for environmental monitoring and climate change mitigation. Previously led machine learning teams at major tech companies.",
      expertise: ["Artificial Intelligence", "Machine Learning", "Environmental Science"],
      rating: 4.7,
      reviews: 19,
      availability: "Mon, Wed, Fri",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      verified: true
    },
    {
      id: "mentor-004",
      name: "Carlos Rodriguez",
      title: "Social Entrepreneurship Coach",
      organization: "Impact Ventures",
      bio: "Founded two successful social enterprises addressing education and healthcare challenges in Latin America. Now mentoring aspiring social entrepreneurs.",
      expertise: ["Social Entrepreneurship", "Business Development", "Impact Assessment"],
      rating: 4.9,
      reviews: 27,
      availability: "Tue, Thu",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      verified: false
    },
    {
      id: "mentor-005",
      name: "Olivia Thompson",
      title: "UX Designer for Accessibility",
      organization: "Inclusive Design Studio",
      bio: "Specializes in creating accessible digital experiences for diverse user groups. Advocate for inclusive design principles and technology access for all.",
      expertise: ["UX/UI Design", "Accessibility", "Inclusive Design"],
      rating: 4.6,
      reviews: 15,
      availability: "Mon, Wed, Fri",
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      verified: true
    },
    {
      id: "mentor-006",
      name: "Alex Kim",
      title: "Project Management Expert",
      organization: "Global Development Solutions",
      bio: "Certified PMP with experience managing large-scale international development projects. Focuses on building local capacity and sustainable project outcomes.",
      expertise: ["Project Management", "International Development", "Team Leadership"],
      rating: 4.8,
      reviews: 22,
      availability: "Tue, Thu, Sat",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      verified: false
    }
  ];
  
  // Expertise areas (for filtering)
  const expertiseAreas = [
    "Sustainable Development", 
    "Blockchain Development", 
    "Artificial Intelligence", 
    "Social Entrepreneurship", 
    "UX/UI Design", 
    "Project Management"
  ];
  
  // Handle search and filter
  const filteredMentors = mentors.filter(mentor => {
    // Apply search filter
    const searchMatch = !searchTerm || 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply expertise filter  
    const expertiseMatch = !activeFilter || 
      mentor.expertise.some(skill => skill === activeFilter);
      
    return searchMatch && expertiseMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container px-4 md:px-6 mx-auto pt-28 pb-16 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Connect with Mentors</h1>
            <p className="text-muted-foreground">Get guidance from industry experts and professionals</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              className="bg-empowered-500 hover:bg-empowered-600"
              asChild
            >
              <Link to="/mentors/sessions">
                <Calendar className="mr-2 h-4 w-4" />
                My Sessions
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
                    placeholder="Search by name, expertise, or keywords..." 
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {expertiseAreas.map(area => (
                    <Badge 
                      key={area}
                      variant={activeFilter === area ? "default" : "outline"}
                      className={`cursor-pointer ${activeFilter === area ? 'bg-empowered-500' : ''}`}
                      onClick={() => setActiveFilter(activeFilter === area ? null : area)}
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Featured Mentors */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors
              .filter(mentor => mentor.verified)
              .slice(0, 3)
              .map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} featured />
              ))}
          </div>
        </div>
        
        {/* All Mentors */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">All Mentors</h2>
          {filteredMentors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          ) : (
            <GlassCard className="p-8 text-center">
              <p className="text-lg mb-4">No mentors found matching your criteria</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter(null);
                }}
              >
                Clear Filters
              </Button>
            </GlassCard>
          )}
        </div>
        
        {/* Become a Mentor */}
        <Card className="bg-gradient-to-br from-empowered-50 to-blue-50 dark:from-empowered-950/50 dark:to-blue-950/50 border-empowered-100 dark:border-empowered-800">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Become a Mentor</h2>
                <p className="text-muted-foreground mb-4">
                  Share your expertise and guide the next generation of professionals. Join our mentorship program to make a lasting impact.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Flexible scheduling</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Build your reputation</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Make connections</span>
                  </div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-empowered-500 hover:bg-empowered-600 whitespace-nowrap"
                asChild
              >
                <Link to="/mentors/apply">
                  Apply Now
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

export default Mentors;
