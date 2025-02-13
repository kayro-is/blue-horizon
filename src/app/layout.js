import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import About from "@/app/about/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blue Horizon",
  description: "Blue Horizon est une initiative engagée pour la préservation des océans et la lutte contre la pollution marine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      
      </body>
    </html>
  );
}
