
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
              <p>EmpowerEd Inc. ("us", "we", or "our") operates the EmpowerEd platform. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</p>
              
              <p>We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection And Use</h2>
              
              <p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email address, postal address, and phone number ("Personal Information").</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Log Data</h2>
              
              <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Communications</h2>
              
              <p>We may use your Personal Information to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies</h2>
              
              <p>Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.</p>
              
              <p>Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security</h2>
              
              <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. International Transfer</h2>
              
              <p>Your information, including Personal Information, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
              
              <p>If you are located outside the United States and choose to provide information to us, please note that we transfer the information, including Personal Information, to the United States and process it there.</p>
              
              <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes To This Privacy Policy</h2>
              
              <p>This Privacy Policy is effective as of the date at the top of this page and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
              
              <p>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
              
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@empowered.edu.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
