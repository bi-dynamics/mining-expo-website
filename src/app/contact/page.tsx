import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Maps from "@/components/Maps";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <div className="flex flex-col  w-full h-full">
      <PageBanner title="Contact" />
      <ContactForm />
      <Maps />
    </div>
  );
};

export default ContactPage;
