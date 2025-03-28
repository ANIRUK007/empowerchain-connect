
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
              <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the EmpowerEd platform operated by EmpowerEd Inc.</p>
              
              <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
              
              <p><strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</strong></p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Accounts</h2>
              
              <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
              
              <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
              
              <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
              
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of EmpowerEd Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of EmpowerEd Inc.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Links To Other Web Sites</h2>
              
              <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by EmpowerEd Inc.</p>
              
              <p>EmpowerEd Inc. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that EmpowerEd Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.</p>
              
              <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Termination</h2>
              
              <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              
              <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Governing Law</h2>
              
              <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
              
              <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes</h2>
              
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
              
              <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
              
              <p>If you have any questions about these Terms, please contact us at legal@empowered.edu.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
