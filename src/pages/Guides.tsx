
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LightbulbIcon, BookOpen, Users, Award, GraduationCap, 
  FileText, ArrowRight, Clock, PuzzleIcon, RotateCw
} from "lucide-react";

const Guides = () => {
  const guideCategories = [
    {
      id: "general",
      name: "General",
      guides: [
        {
          title: "Getting Started with EmpowerEd",
          time: "5 min read",
          description: "Learn how to set up your account and navigate the platform",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          title: "Understanding Your Dashboard",
          time: "8 min read",
          description: "Make the most of your personalized dashboard",
          icon: <LightbulbIcon className="h-5 w-5" />
        }
      ]
    },
    {
      id: "portfolio",
      name: "Portfolio",
      guides: [
        {
          title: "Building Your Digital Portfolio",
          time: "10 min read",
          description: "Create a compelling portfolio that showcases your skills",
          icon: <FileText className="h-5 w-5" />
        },
        {
          title: "Showcasing Your Projects",
          time: "7 min read",
          description: "Add projects to your portfolio and highlight your achievements",
          icon: <Award className="h-5 w-5" />
        }
      ]
    },
    {
      id: "mentorship",
      name: "Mentorship",
      guides: [
        {
          title: "Finding the Right Mentor",
          time: "6 min read",
          description: "How to search, connect with, and learn from mentors",
          icon: <Users className="h-5 w-5" />
        },
        {
          title: "Making the Most of Mentoring Sessions",
          time: "9 min read",
          description: "Prepare for and participate effectively in mentoring sessions",
          icon: <Clock className="h-5 w-5" />
        }
      ]
    },
    {
      id: "projects",
      name: "Projects",
      guides: [
        {
          title: "Joining a Project",
          time: "5 min read",
          description: "How to find and join projects that match your interests",
          icon: <PuzzleIcon className="h-5 w-5" />
        },
        {
          title: "Tracking Your Progress",
          time: "8 min read",
          description: "Monitor your skill development and project contributions",
          icon: <RotateCw className="h-5 w-5" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Guides</h1>
            <p className="text-lg text-muted-foreground">
              Step-by-step guides to help you make the most of the EmpowerEd platform.
            </p>
          </div>

          <Tabs defaultValue="general" className="mb-8">
            <TabsList className="w-full max-w-2xl mx-auto flex justify-between mb-8 flex-wrap">
              {guideCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex-1 min-w-[100px] my-1"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {guideCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.guides.map((guide, index) => (
                    <GlassCard 
                      key={index} 
                      className="flex flex-col h-full"
                      hoverEffect
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 rounded-lg bg-empowered-100 dark:bg-empowered-800/30 text-empowered-500">
                          {guide.icon}
                        </div>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> {guide.time}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                      <p className="text-muted-foreground mb-4">{guide.description}</p>
                      
                      <div className="mt-auto">
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-empowered-500 hover:text-empowered-600 hover:bg-empowered-50 dark:hover:bg-empowered-950/20"
                        >
                          Read Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guides;
