"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink } from "lucide-react"; // Added ExternalLink icon
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
  ];

  // Helper to handle smooth scroll if already on the home page
  const handleHireMeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/60 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg">
            <Code2 className="h-5 w-5 text-primary-foreground" />
          </div>
       
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary font-bold" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons (Resume + Hire Me) */}
        <div className="flex items-center gap-3">
          {/* Resume Link - Styled as a subtle ghost button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2"
          >
            Resume
            <ExternalLink className="h-3 w-3 opacity-50" />
          </a>

          {/* Hire Me Button */}
          <Button asChild variant="default" size="sm" className="rounded-full px-5 shadow-lg shadow-primary/20">
            <Link 
              href="/#contact" 
              onClick={handleHireMeClick}
            >
              Hire Me
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}