
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkillProgress from "@/components/dashboard/SkillProgress";

const Dashboard = () => {
  // Mock data for dashboard
  const studentInfo = {
    name: "Alex Johnson",
    level: "Intermediate",
    joinDate: "August 2023",
    completedProjects: 12,
    credentialsEarned: 8,
    mentorSessions: 15,
  };

  const recommendedSkills = [
    { name: "Data Visualization", progress: 45, category: "Technical" },
    { name: "Project Management", progress: 68, category: "Soft Skill" },
    { name: "Blockchain Development", progress: 32, category: "Technical" },
  ];

  const upcomingEvents = [
    {
      title: "Sustainable Development Workshop",
      date: "June 15, 2023",
      time: "2:00 PM - 4:00 PM",
    },
    {
      title: "Mentor Session: Career Paths in Tech",
      date: "June 18, 2023",
      time: "10:00 AM - 11:00 AM",
    },
    {
      title: "Group Project Kickoff Meeting",
      date: "June 20, 2023",
      time: "3:30 PM - 5:00 PM",
    },
  ];

  const recentCredentials = [
    {
      title: "Introduction to Blockchain",
      issuer: "EmpowerEd Academy",
      date: "May 25, 2023",
      verified: true,
    },
    {
      title: "Sustainable Development Fundamentals",
      issuer: "Green Tech Institute",
      date: "April 10, 2023",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container px-4 md:px-6 mx-auto pt-28 pb-16 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Welcome, {studentInfo.name}</h1>
            <p className="text-muted-foreground">Your personalized learning dashboard</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              className="bg-empowered-500 hover:bg-empowered-600"
              asChild
            >
              <Link to="/portfolio">
                View Your Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground text-sm mb-1">Completed Projects</p>
            <h3 className="text-3xl font-bold mb-1">{studentInfo.completedProjects}</h3>
            <Link to="/projects" className="text-sm text-empowered-500 hover:text-empowered-600">View all projects</Link>
          </GlassCard>
          
          <GlassCard className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 rounded-full bg-empowered-100 dark:bg-empowered-900/30 text-empowered-600 dark:text-empowered-400 flex items-center justify-center mb-4">
              <Award className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground text-sm mb-1">Credentials Earned</p>
            <h3 className="text-3xl font-bold mb-1">{studentInfo.credentialsEarned}</h3>
            <Link to="/credentials" className="text-sm text-empowered-500 hover:text-empowered-600">View all credentials</Link>
          </GlassCard>
          
          <GlassCard className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground text-sm mb-1">Mentor Sessions</p>
            <h3 className="text-3xl font-bold mb-1">{studentInfo.mentorSessions}</h3>
            <Link to="/mentors" className="text-sm text-empowered-500 hover:text-empowered-600">Connect with mentors</Link>
          </GlassCard>
        </div>

        {/* Skill Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Skill Development</h2>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/dashboard/skills">View all skills</Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  {recommendedSkills.map((skill, index) => (
                    <SkillProgress 
                      key={index}
                      name={skill.name}
                      progress={skill.progress}
                      category={skill.category}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Upcoming Events</h2>
                  <Button variant="ghost" size="sm">View all</Button>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-b border-border pb-3 last:border-0 last:pb-0">
                      <h3 className="font-medium mb-1">{event.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{event.date}</span>
                        <span className="mx-2">•</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Credentials */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Credentials</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/credentials">View all credentials</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentCredentials.map((credential, index) => (
                  <div key={index} className="border rounded-lg p-4 flex flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium mb-1">{credential.title}</h3>
                        <p className="text-sm text-muted-foreground">{credential.issuer}</p>
                      </div>
                      {credential.verified && (
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-2 py-1 rounded-full">
                          Verified
                        </div>
                      )}
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">{credential.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Growth */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Learning Journey</h2>
              <div className="relative">
                <div className="h-2 bg-secondary rounded-full mb-8">
                  <div className="h-full w-3/5 bg-gradient-to-r from-empowered-400 to-blue-500 rounded-full"></div>
                </div>
                <div className="absolute top-0 left-0 w-full flex justify-between text-xs text-muted-foreground">
                  <div className="absolute left-0 -top-1 h-4 w-4 bg-empowered-500 rounded-full"></div>
                  <div className="absolute left-1/4 -top-1 h-4 w-4 bg-blue-400 rounded-full"></div>
                  <div className="absolute left-3/5 -top-1 h-4 w-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                  <div className="absolute left-4/5 -top-1 h-4 w-4 bg-muted rounded-full"></div>
                  <div className="absolute right-0 -top-1 h-4 w-4 bg-muted rounded-full"></div>
                </div>
                <div className="flex justify-between">
                  <div className="text-center">
                    <span className="block text-xs text-muted-foreground">Beginner</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs text-muted-foreground">Foundations</span>
                  </div>
                  <div className="text-center relative">
                    <span className="block text-xs font-medium text-empowered-600">Current</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs text-muted-foreground">Advanced</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs text-muted-foreground">Expert</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
