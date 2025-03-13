
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  Database, 
  Shield, 
  Key, 
  CheckCircle, 
  X, 
  AlertCircle, 
  Loader2 
} from "lucide-react";
import GlassCard from "../ui/GlassCard";

const AptosIntegration = () => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  const handleConnect = () => {
    setConnecting(true);
    
    // Simulate connection to Aptos wallet
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
      setAddress("0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t");
      toast.success("Successfully connected to Aptos network", {
        description: "Your credentials can now be stored on-chain",
      });
    }, 2000);
  };

  const handleDisconnect = () => {
    setConnected(false);
    setAddress("");
    toast("Disconnected from Aptos network");
  };

  const features = [
    {
      icon: <Database className="h-5 w-5" />,
      title: "Tamper-proof Storage",
      description: "All your credentials are stored securely on the Aptos blockchain, making them immutable and tamper-proof."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Verifiable Credentials",
      description: "Your achievements can be instantly verified by employers and educational institutions."
    },
    {
      icon: <Key className="h-5 w-5" />,
      title: "Self-Sovereign Identity",
      description: "Maintain complete control over your digital credentials and choose how to share them."
    }
  ];

  return (
    <GlassCard className="mb-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Aptos Blockchain Integration</h3>
          <p className="text-sm text-muted-foreground">Secure your credentials on the blockchain</p>
        </div>
        <div className="flex items-center">
          <span className={`h-2 w-2 rounded-full mr-2 ${connected ? 'bg-green-500' : 'bg-orange-500'}`}></span>
          <span className="text-sm">{connected ? 'Connected' : 'Not Connected'}</span>
        </div>
      </div>

      <Tabs defaultValue="connect" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="connect">Connect</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
        </TabsList>

        <TabsContent value="connect" className="space-y-4">
          {!connected ? (
            <div className="text-center py-4">
              <div className="mb-6">
                <div className="bg-muted/30 p-6 rounded-full inline-flex items-center justify-center mb-4">
                  <img
                    src="https://aptoslabs.com/assets/aptos_word_dark.svg"
                    alt="Aptos Logo"
                    className="h-8 dark:invert"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">Connect to Aptos</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect your Aptos wallet to store your credentials on the blockchain
                </p>
              </div>
              <Button 
                onClick={handleConnect} 
                className="w-full bg-empowered-500 hover:bg-empowered-600"
                disabled={connecting}
              >
                {connecting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>Connect Wallet</>
                )}
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Don't have an Aptos wallet? <a href="#" className="text-empowered-500 hover:text-empowered-600">Learn how to create one</a>
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30 rounded-md flex items-start">
                <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-300 text-sm">Successfully connected</h4>
                  <p className="text-green-700 dark:text-green-400 text-xs mt-1">Your wallet is now connected to EmpowerEd</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Connected Address</label>
                <div className="flex gap-2">
                  <Input 
                    value={address} 
                    readOnly 
                    className="font-mono text-xs"
                  />
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => {
                      navigator.clipboard.writeText(address);
                      toast("Address copied to clipboard");
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </Button>
                </div>
              </div>
              
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  className="w-full text-red-500 hover:text-red-600 hover:border-red-200"
                  onClick={handleDisconnect}
                >
                  <X className="h-4 w-4 mr-2" />
                  Disconnect Wallet
                </Button>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="features">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3 p-3 rounded-lg hover:bg-muted/40 transition-colors">
                <div className="h-10 w-10 rounded-full bg-empowered-100 dark:bg-empowered-900/30 flex items-center justify-center text-empowered-500">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="p-4 mt-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-md flex items-start">
              <AlertCircle className="text-blue-500 h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-300 text-sm">Using Aptos Testnet</h4>
                <p className="text-blue-700 dark:text-blue-400 text-xs mt-1">
                  EmpowerEd is currently using the Aptos Testnet. All credentials are stored securely but no real tokens are used.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </GlassCard>
  );
};

export default AptosIntegration;
