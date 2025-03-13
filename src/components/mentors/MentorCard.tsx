
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";
import { MessageSquare, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  expertise: string[];
  avatarUrl?: string;
  rating: number;
  availability: "available" | "limited" | "unavailable";
}

interface MentorCardProps {
  mentor: Mentor;
  className?: string;
}

const MentorCard = ({ mentor, className }: MentorCardProps) => {
  // Helper to display availability status
  const getAvailabilityStatus = () => {
    switch (mentor.availability) {
      case "available":
        return {
          label: "Available",
          color: "text-green-500 bg-green-100 dark:bg-green-900/20",
        };
      case "limited":
        return {
          label: "Limited Availability",
          color: "text-orange-500 bg-orange-100 dark:bg-orange-900/20",
        };
      case "unavailable":
        return {
          label: "Currently Unavailable",
          color: "text-red-500 bg-red-100 dark:bg-red-900/20",
        };
      default:
        return {
          label: "Unknown",
          color: "text-gray-500 bg-gray-100 dark:bg-gray-900/20",
        };
    }
  };

  const availability = getAvailabilityStatus();

  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(mentor.rating);
    const hasHalfStar = mentor.rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-yellow-400"
          >
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            <path d="M12 17.75l0 -14.5" fill="currentColor" />
          </svg>
        );
      } else {
        stars.push(
          <Star
            key={i}
            className="h-4 w-4 text-muted-foreground/30"
          />
        );
      }
    }

    return stars;
  };

  return (
    <GlassCard 
      className={cn("flex flex-col h-full", className)}
      hoverEffect
    >
      <div className="flex items-center space-x-4 mb-4">
        {mentor.avatarUrl ? (
          <img
            src={mentor.avatarUrl}
            alt={mentor.name}
            className="h-16 w-16 rounded-full object-cover border-2 border-white/50 dark:border-gray-800/50"
          />
        ) : (
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-xl font-medium text-muted-foreground">
            {mentor.name.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-lg">{mentor.name}</h3>
          <p className="text-sm text-muted-foreground">
            {mentor.title} at {mentor.company}
          </p>
          <div className="flex mt-1">
            {renderStars()}
            <span className="text-xs ml-1 text-muted-foreground self-center">
              ({mentor.rating.toFixed(1)})
            </span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <Badge className={cn("text-xs font-normal", availability.color)}>
          {availability.label}
        </Badge>
      </div>

      <p className="text-sm mb-4 flex-1">{mentor.bio}</p>

      <div className="mb-4">
        <div className="text-xs font-medium mb-2">Areas of Expertise:</div>
        <div className="flex flex-wrap gap-1">
          {mentor.expertise.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <Button 
        disabled={mentor.availability === "unavailable"}
        className={cn(
          "w-full mt-auto",
          mentor.availability === "available" 
            ? "bg-empowered-500 hover:bg-empowered-600" 
            : ""
        )}
      >
        <MessageSquare className="h-4 w-4 mr-2" />
        Request Mentorship
      </Button>
    </GlassCard>
  );
};

export default MentorCard;
