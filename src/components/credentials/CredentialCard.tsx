
import React from "react";
import { Clock, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  image?: string;
  description: string;
  skills: string[];
  status: string;
  txHash?: string;
  imageUrl?: string;
}

interface CredentialCardProps {
  credential: Credential;
  className?: string;
}

const CredentialCard = ({ credential, className }: CredentialCardProps) => {
  const formattedDate = new Date(credential.issueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Check if status is "verified"
  const isVerified = credential.status === "verified";

  return (
    <GlassCard
      className={cn("relative overflow-hidden", className)}
      hoverEffect
    >
      {isVerified && (
        <div className="absolute -right-12 -top-6 transform rotate-45 bg-empowered-500 text-white px-12 py-1 text-xs">
          Verified
        </div>
      )}
      <div className="flex items-start mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{credential.title}</h3>
          <p className="text-muted-foreground text-sm">{credential.issuer}</p>
        </div>
        {(credential.image || credential.imageUrl) && (
          <div className="w-12 h-12 rounded-md overflow-hidden border border-border">
            <img
              src={credential.image || credential.imageUrl}
              alt={credential.issuer}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      <p className="text-sm mb-4">{credential.description}</p>

      <div className="flex items-center text-xs text-muted-foreground mb-3">
        <Clock size={14} className="mr-1" />
        <span>Issued: {formattedDate}</span>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {credential.skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>

      {credential.txHash && (
        <div className="bg-muted/50 rounded-md p-2 mb-4 overflow-hidden">
          <p className="text-xs font-mono text-muted-foreground truncate">
            {credential.txHash}
          </p>
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="outline" size="sm" className="text-xs">
          <Award className="h-3.5 w-3.5 mr-1" />
          View Details
        </Button>
        {isVerified && (
          <Button variant="ghost" size="sm" className="text-xs">
            <ExternalLink className="h-3.5 w-3.5 mr-1" />
            Verify on Aptos
          </Button>
        )}
      </div>
    </GlassCard>
  );
};

export default CredentialCard;
