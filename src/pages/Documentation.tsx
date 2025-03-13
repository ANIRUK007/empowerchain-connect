
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FileText, MessageCircle, ExternalLink } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const Documentation = () => {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of EmpowerEd platform and how to set up your account",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/documentation/getting-started"
    },
    {
      title: "User Guides",
      description: "Step-by-step guides to help you make the most of our platform",
      icon: <FileText className="h-6 w-6" />,
      link: "/documentation/guides"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers integrating with our platform",
      icon: <ExternalLink className="h-6 w-6" />,
      link: "/documentation/api"
    },
    {
      title: "FAQs",
      description: "Common questions and answers about our platform",
      icon: <MessageCircle className="h-6 w-6" />,
      link: "/documentation/faqs"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about using the EmpowerEd platform effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {documentationSections.map((section, index) => (
              <GlassCard 
                key={index}
                className="flex flex-col h-full"
                hoverEffect
              >
                <div className="p-3 rounded-xl bg-empowered-100 dark:bg-empowered-800/30 text-empowered-500 mb-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-muted-foreground mb-4">{section.description}</p>
                <div className="mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link to={section.link}>
                      View Documentation
                    </Link>
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
