import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer"; // Import your new Footer
import PageTransition from "@/components/PageTransition";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shafiq | Full-stack Developer",
  description: "Portfolio of Muhammad Shafiq, a Full-stack Developer specializing in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <NextTopLoader 
          color="#3b82f6" 
          showSpinner={false} 
          shadow="0 0 10px #3b82f6,0 0 5px #3b82f6"
        />
        
        <Navbar />
        
        {/* flex-1 ensures the footer stays at the bottom on short pages */}
        <main className="pt-16 flex-1">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        <Footer />
      </body>
    </html>
  );
}