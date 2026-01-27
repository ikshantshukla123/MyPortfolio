import React from "react";
import ContactHeader from "./ContactHeader";
import AvailabilityBanner from "./AvailabilityBanner";
import ContactButtons from "./ContactButtons";
import ServicesSection from "./ServicesSection";
import ContactFooter from "./ContactFooter";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-neutral-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <ContactHeader />
        <AvailabilityBanner />
        <ContactButtons />
        <ServicesSection />
        <ContactFooter />
      </div>
    </div>
  );
};

export default Contact;
