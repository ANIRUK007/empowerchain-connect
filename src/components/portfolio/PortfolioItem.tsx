
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import { Calendar, Link as LinkIcon, ExternalLink, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
  onChainVerification?: boolean;
  verificationHash?: string;
}

interface PortfolioItemProps {
  project: PortfolioProject;
  className?: string;
}

const PortfolioItem = ({ project, className }: PortfolioItemProps) => {
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  });

  return (
    <GlassCard 
      className={cn("flex flex-col h-full", className)}
      hoverEffect
    >
      {project.imageUrl && (
        <div className="w-full h-40 -mx-6 -mt-6 mb-4 relative overflow-hidden rounded-t-xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {project.onChainVerification && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-empowered-500 hover:bg-empowered-600 flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>Verified</span>
              </Badge>
            </div>
          )}
        </div>
      )}

      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            {formattedDate}
          </div>
        </div>

        <p className="text-sm mb-4 text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {project.onChainVerification && project.verificationHash && (
        <div className="mb-4 px-3 py-2 bg-muted/50 rounded-md">
          <p className="text-xs font-mono text-muted-foreground truncate">
            {project.verificationHash}
          </p>
        </div>
      )}

      <div className="flex justify-between mt-auto pt-4">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/portfolio/${project.id}`}>
            <LinkIcon className="h-3.5 w-3.5 mr-1.5" />
            Details
          </Link>
        </Button>
        {project.link && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
              View Project
            </a>
          </Button>
        )}
      </div>
    </GlassCard>
  );
};

export default PortfolioItem;
