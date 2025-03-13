
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from "@/components/ui/GlassCard";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  Send,
  LifeBuoy
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Support request submitted",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  const supportOptions = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Send us an email at support@empowered.edu",
      action: "Email Us"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Call us at +1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "FAQ",
      description: "Find answers to common questions",
      action: "View FAQ"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-empowered-100 dark:bg-empowered-800/30 text-empowered-500">
              <LifeBuoy className="h-6 w-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help?</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our support team. We're here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is your inquiry about?" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-empowered-500 hover:bg-empowered-600">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Support Options</h2>
              <div className="space-y-4">
                {supportOptions.map((option, index) => (
                  <GlassCard key={index} className="flex items-start p-4" hoverEffect>
                    <div className="p-2 rounded-lg bg-empowered-100 dark:bg-empowered-800/30 text-empowered-500 mr-4">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{option.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="px-0 text-empowered-500 hover:text-empowered-600 hover:bg-transparent"
                      >
                        {option.action} →
                      </Button>
                    </div>
                  </GlassCard>
                ))}
                
                <GlassCard className="p-4 mt-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-empowered-500" />
                    <h3 className="font-medium">Support Hours</h3>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </p>
                    <p className="text-sm flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </p>
                    <p className="text-sm flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
