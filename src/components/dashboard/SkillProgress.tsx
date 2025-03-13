
import React from "react";
import { CustomProgress } from "@/components/ui/custom-progress";
import { cn } from "@/lib/utils";

export interface Skill {
  id: string;
  name: string;
  progress: number;
  category: string;
  isVerified?: boolean;
}

interface SkillProgressProps {
  skill?: Skill;
  className?: string;
  name?: string;
  progress?: number;
  category?: string;
  isVerified?: boolean;
}

const SkillProgress = ({ skill, className, name, progress, category, isVerified }: SkillProgressProps) => {
  // Use either direct props or skills object
  const skillName = name || (skill?.name || "");
  const skillProgress = progress || (skill?.progress || 0);
  const skillCategory = category || (skill?.category || "");
  const skillIsVerified = isVerified || skill?.isVerified;

  // Different colors based on category
  const getProgressColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "technical":
        return "bg-blue-500";
      case "communication":
        return "bg-green-500";
      case "leadership":
        return "bg-purple-500";
      case "creativity":
        return "bg-orange-500";
      default:
        return "bg-empowered-500";
    }
  };

  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{skillName}</span>
          {skillIsVerified && (
            <span className="inline-flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.552L9.83 3.44l2.096-.218.45 2.083 1.88 1.196-1.051 1.822.356 2.083-2.075.505L9.83 12.56 8 11.448 6.17 12.56l-1.756-1.649-2.075-.505.356-2.083-1.05-1.822 1.88-1.196.45-2.083 2.095.218L8 1.552Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </div>
        <span className="text-xs text-muted-foreground">{skillProgress}%</span>
      </div>
      <CustomProgress 
        value={skillProgress} 
        className="h-1.5"
        indicatorClassName={getProgressColor(skillCategory)}
      />
      <div className="mt-1">
        <span className="text-xs text-muted-foreground">{skillCategory}</span>
      </div>
    </div>
  );
};

export default SkillProgress;
