
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";
import { Users, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  description: string;
  organization: string;
  organizationLogo?: string;
  duration: string;
  skillLevel: "beginner" | "intermediate" | "advanced";
  requiredSkills: string[];
  category: string;
  participants: number;
  imageUrl?: string;
  sdgGoals?: number[];
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  // Helper to render the skill level indicator
  const getSkillLevelColor = () => {
    switch (project.skillLevel) {
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

  return (
    <GlassCard 
      className={cn("h-full flex flex-col", className)}
      hoverEffect
    >
      {project.imageUrl && (
        <div className="w-full h-40 -mx-6 -mt-6 mb-4 relative overflow-hidden rounded-t-xl">
          <img
            src={project.imageUrl}
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

      <div className="flex items-center justify-between mb-3">
        <Badge className="capitalize">{project.category}</Badge>
        <Badge className={cn("capitalize", getSkillLevelColor())}>
          {project.skillLevel}
        </Badge>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        {project.organizationLogo && (
          <img
            src={project.organizationLogo}
            alt={project.organization}
            className="h-6 w-auto"
          />
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-1">{project.organization}</p>
      <p className="text-sm mb-4 flex-1">{project.description}</p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 mr-1.5" />
          {project.duration}
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Users className="h-3.5 w-3.5 mr-1.5" />
          {project.participants} participants
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs font-medium mb-2">Required Skills:</div>
        <div className="flex flex-wrap gap-1">
          {project.requiredSkills.map((skill) => (
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
    </GlassCard>
  );
};

export default ProjectCard;
