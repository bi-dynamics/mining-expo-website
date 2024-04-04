import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Maps from "@/components/Maps";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch. Call Exhibitions Coordinator, Loide Armas at +264 81 235 0298/ +264 61 237 925 or Email us info@chamberofmines.org.na or www.chamberofmines.org.na",
  openGraph: {
    images: [{ url: "../../opengraph-image.jpg" }],
    description:
      "Get in touch. Call Exhibitions Coordinator, Loide Armas at +264 81 235 0298/ +264 61 237 925 or Email us info@chamberofmines.org.na or www.chamberofmines.org.na",
  },
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
