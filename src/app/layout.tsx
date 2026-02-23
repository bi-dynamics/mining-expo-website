import type { Metadata } from "next";
import { Rubik, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/Navbar-mobile";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

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
  metadataBase: new URL("https://miningexponamibia.com"),
  title: {
    template: "%s | MINING EXPO Namibia",
    default: "MINING EXPO Namibia",
  },
  description:
    "Mining Expo & Conference 2026 in Windhoek, Namibia. Located at Windhoek Show Grounds - Public Entry is Free. Stay Connected by Downloading our Mobile Application",
  openGraph: {
    type: "website",
    url: "https://miningexponamibia.com/",
    title: "Mining Expo & Conference Namibia 2024",
    description:
      "Mining Expo & Conference 2026 in Windhoek, Namibia. Located at Windhoek Show Grounds - Public Entry is Free. Stay Connected by Downloading our Mobile Application",
    siteName: "Mining Expo & Conference Namibia",
  },
  twitter: {
    card: "summary",
    title: "Mining Expo & Conference Namibia 2024",
    images:
      "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2FExpo-logo1.jpg?alt=media&token=14132796-0eb1-49a8-8d06-3bc81720d78c",
    description:
      "Mining Expo & Conference 2026 in Windhoek, Namibia. Located at Windhoek Show Grounds - Public Entry is Free. Stay Connected by Downloading our Mobile Application",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable} antialiased`}>
        <Navbar />
        <NavbarMobile />
        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-KP5Q2L8Q" />
      </body>
    </html>
  );
}
