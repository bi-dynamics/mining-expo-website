import type { Metadata } from "next";
import { Rubik, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/Navbar-mobile";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | MINING EXPO Namibia",
    default: "MINING EXPO Namibia",
  },
  description:
    "Mining Expo & Conference 2024 07-08 August, 2024 Windhoek, Namibia Windhoek Show Grounds Public Entry is Free.. Stay Connected by Downloading our Mobile Application Welcome to the Mining Expo & Conf 2024 The 11th edition of the Mining Expo & Conference will be held from 07 – 08 August, 2024 at the Windhoek Show Grounds.",
  openGraph: {
    type: "website",
    url: "https://new.miningexponamibia.com/",
    title: "%s | Mining Expo Namibia 2024",
    description:
      "Mining Expo & Conference 2024 07-08 August, 2024 Windhoek, Namibia Windhoek Show Grounds Public Entry is Free.. Stay Connected by Downloading our Mobile Application Welcome to the Mining Expo & Conf 2024 The 11th edition of the Mining Expo & Conference will be held from 07 – 08 August, 2024 at the Windhoek Show Grounds.",
    siteName: "Mining Expo & Conference Namibia",
  },
  twitter: {
    card: "summary",
    title: "Mining Expo & Conference Namibia 2024",
    images:
      "https://miningexponamibia.com/wp-content/uploads/2023/07/Expo-logo1-2048x1245.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <Navbar />
        <NavbarMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
