import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, CheckCircle, Clock, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AptosIntegration from "@/components/credentials/AptosIntegration";
import CredentialCard from "@/components/credentials/CredentialCard";

const Credentials = () => {
  // Filter state for credentials
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending'>('all');
  
  // Mock data for credentials
  const credentialData = [
    {
      id: "cred-001",
      title: "Introduction to Blockchain Development",
      issuer: "EmpowerEd Academy",
      issueDate: "May 15, 2023",
      expiryDate: "",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      description: "This credential verifies proficiency in blockchain fundamentals, including distributed ledger technology, consensus mechanisms, and basic smart contract development.",
      skills: ["Blockchain", "Smart Contracts", "Distributed Systems"],
      status: "verified",
      txHash: "0x7a98bde7731c87437a79112596975a287c7289e08b42f54ce91eb0f5ca292a2c",
    },
    {
      id: "cred-002",
      title: "Sustainable Development Goals Project",
      issuer: "United Nations Partnership",
      issueDate: "April 2, 2023",
      expiryDate: "",
      image: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      description: "Completed a project addressing UN Sustainable Development Goals with focus on clean water and climate action. Demonstrated expertise in sustainability principles.",
      skills: ["Sustainability", "Project Management", "Climate Solutions"],
      status: "verified",
      txHash: "0x3c8b24e31f4bd63b5ea24c56aeae45399e62717ac98e512c36bfed4b5a314a9d",
    },
    {
      id: "cred-003",
      title: "Advanced Data Analysis",
      issuer: "Data Science Institute",
      issueDate: "June 1, 2023",
      expiryDate: "",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Mastery of data analysis techniques using Python and R, including statistical analysis, data visualization, and machine learning fundamentals.",
      skills: ["Data Analysis", "Python", "R", "Statistics"],
      status: "pending",
      txHash: "",
    },
    {
      id: "cred-004",
      title: "Digital Education Leadership",
      issuer: "EmpowerEd Academy",
      issueDate: "March 10, 2023",
      expiryDate: "",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      description: "Recognition for leading digital education initiatives and mentoring fellow students in technology adoption for learning environments.",
      skills: ["Leadership", "Digital Education", "Mentoring"],
      status: "verified",
      txHash: "0x1d8b24e31f4bd63b5ea24c56aeae45399e62717ac98e512c36bfed4b5a314b8e",
    }
  ];
  
  // Filter credentials based on current filter
  const filteredCredentials = credentialData.filter(credential => {
    if (filter === 'all') return true;
    return credential.status === filter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container px-4 md:px-6 mx-auto pt-28 pb-16 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Your Credentials</h1>
            <p className="text-muted-foreground">Blockchain-verified achievements and skills</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <Button 
              variant="outline" 
              className={filter === 'all' ? 'bg-muted' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button 
              variant="outline" 
              className={filter === 'verified' ? 'bg-muted' : ''}
              onClick={() => setFilter('verified')}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Verified
            </Button>
            <Button 
              variant="outline" 
              className={filter === 'pending' ? 'bg-muted' : ''}
              onClick={() => setFilter('pending')}
            >
              <Clock className="mr-2 h-4 w-4" />
              Pending
            </Button>
          </div>
        </div>
        
        {/* Aptos Integration */}
        <div className="mb-8">
          <AptosIntegration />
        </div>
        
        {/* Credentials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredCredentials.map((credential) => (
            <CredentialCard key={credential.id} credential={credential} />
          ))}
        </div>
        
        {/* Verified on Blockchain */}
        <div className="mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Verified on Aptos Blockchain</CardTitle>
              <CardDescription>These credentials are securely stored and verified on the Aptos blockchain</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {credentialData
                  .filter(cred => cred.status === 'verified')
                  .map((credential, index) => (
                    <div key={index} className="p-4 border rounded-lg flex flex-col gap-2">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{credential.title}</h3>
                        <Badge variant="outline" className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                          Verified
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Issued by {credential.issuer} on {credential.issueDate}</p>
                      <div className="mt-2 bg-muted/50 p-2 rounded-md font-mono text-xs overflow-hidden text-ellipsis">
                        <span className="text-muted-foreground">TX: </span> 
                        <span>{credential.txHash}</span>
                      </div>
                      <div className="flex justify-end mt-2">
                        <Button size="sm" variant="ghost" asChild>
                          <a href={`https://explorer.aptoslabs.com/txn/${credential.txHash}?network=testnet`} target="_blank" rel="noopener noreferrer">
                            View on Explorer
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* FAQ Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Blockchain Verification FAQ</CardTitle>
              <CardDescription>Common questions about blockchain-verified credentials</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">What is blockchain verification?</h3>
                  <p className="text-muted-foreground">Blockchain verification uses distributed ledger technology to create tamper-proof records of your credentials. Once issued, these credentials cannot be altered or deleted, providing a permanent and verifiable record of your achievements.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">How do I verify my credentials?</h3>
                  <p className="text-muted-foreground">Your credentials are automatically verified when issued by authorized partners on our platform. Once verified, they receive a unique transaction hash that can be used to check their authenticity on the Aptos blockchain.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Can I share my verified credentials?</h3>
                  <p className="text-muted-foreground">Yes! You can share your verified credentials with employers, educational institutions, or on professional platforms. Each credential includes a verification link that allows others to confirm its authenticity on the blockchain.</p>
                </div>
                <div className="pt-4 mt-4 border-t flex items-start gap-3">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-full">
                    <Info className="h-5 w-5" />
                  </div>
                  <p className="text-sm">
                    Need more help? Visit our <Link to="/help/credentials" className="text-empowered-500 hover:text-empowered-600 underline">detailed guide</Link> on blockchain credentials or <Link to="/contact" className="text-empowered-500 hover:text-empowered-600 underline">contact support</Link>.
                  </p>
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

export default Credentials;
