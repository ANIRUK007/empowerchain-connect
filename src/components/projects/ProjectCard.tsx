
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";
import { Users, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Project } from "./Project";

interface ProjectCardProps {
  project: Project;
  className?: string;
  featured?: boolean;
}

const ProjectCard = ({ project, className, featured }: ProjectCardProps) => {
  // Helper to render the skill level indicator
  const getSkillLevelColor = () => {
    const level = project.skillLevel || project.difficulty || "intermediate";
    
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "intermediate":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "advanced":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  // Handle different skill property names
  const skills = project.requiredSkills || project.skillsRequired || [];
  
  // Handle different image property names
  const imageUrl = project.imageUrl || project.image || "";

  return (
    <GlassCard 
      className={cn(
        "h-full flex flex-col", 
        featured ? "lg:flex-row lg:items-stretch" : "",
        className
      )}
      hoverEffect
    >
      {imageUrl && (
        <div className={cn(
          "w-full relative overflow-hidden", 
          featured 
            ? "lg:w-2/5 h-60 lg:h-auto -mx-6 -mt-6 lg:-ml-6 lg:mr-0 lg:-mt-6 lg:-mb-6 lg:rounded-l-xl lg:rounded-tr-none" 
            : "h-40 -mx-6 -mt-6 mb-4 rounded-t-xl"
        )}>
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30" />
          {project.sdgGoals && project.sdgGoals.length > 0 && (
            <div className="absolute bottom-3 left-3 flex gap-1">
              {project.sdgGoals.map((goal) => (
                <div
                  key={goal}
                  className="w-8 h-8 rounded-full bg-white/90 p-1 flex items-center justify-center"
                  title={`SDG Goal ${goal}`}
                >
                  <img
                    src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${goal.toString().padStart(2, '0')}.jpg`}
                    alt={`SDG Goal ${goal}`}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={cn(
        "flex flex-col flex-1",
        featured && imageUrl ? "lg:w-3/5 lg:p-4" : "",
      )}>
        <div className="flex items-center justify-between mb-3">
          <Badge className="capitalize">{project.category}</Badge>
          <Badge className={cn("capitalize", getSkillLevelColor())}>
            {project.skillLevel || project.difficulty || "Intermediate"}
          </Badge>
        </div>

        <h3 className={cn(
          "font-semibold",
          featured ? "text-xl mb-2" : "text-lg mb-2"
        )}>
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-2">
          {project.organization || "EmpowerEd Community"}
        </p>
        
        <p className={cn(
          "text-sm mb-4",
          featured ? "flex-1" : ""
        )}>
          {project.shortDescription || project.description}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5 mr-1.5" />
            {project.duration}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5 mr-1.5" />
            {project.participants} participants
            {project.maxParticipants && ` / ${project.maxParticipants}`}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs font-medium mb-2">Required Skills:</div>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Button 
          className="w-full mt-auto bg-empowered-500 hover:bg-empowered-600"
          asChild
        >
          <Link to={`/projects/${project.id}`}>
            <BookOpen className="h-4 w-4 mr-2" />
            View Project
          </Link>
        </Button>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
