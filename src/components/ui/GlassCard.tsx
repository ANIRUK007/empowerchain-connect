
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  fadeIn?: boolean;
}

const GlassCard = ({
  children,
  className,
  hoverEffect = false,
  fadeIn = false,
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hoverEffect && "hover:shadow-lg hover:border-white/30 dark:hover:border-gray-800/50 transition-all duration-300",
        fadeIn && "animate-fade-in",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
