
import React from "react";
import { cn } from "@/lib/utils";
import { Progress } from "./progress";

interface CustomProgressProps extends React.ComponentProps<typeof Progress> {
  indicatorClassName?: string;
}

export const CustomProgress = ({ 
  className, 
  value, 
  indicatorClassName,
  ...props 
}: CustomProgressProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-full bg-muted", className)} {...props}>
      <div
        className={cn("h-full w-full flex-1 bg-empowered-500 transition-all", indicatorClassName)}
        style={{ width: value ? `${value}%` : "0%" }}
      />
    </div>
  );
};
