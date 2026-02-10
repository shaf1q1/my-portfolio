import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t bg-muted/30 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2026 <span className="text-foreground font-medium">Muhammad Shafiq</span>. All rights reserved.
            </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
          
          {/* Added download attribute and ensured path is absolute */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download="Muhammad_Shafiq_Resume.pdf"
            className="hover:text-primary transition-colors inline-flex items-center"
          >
            Resume <ExternalLink className="ml-1 h-3 w-3" />
          </a>

          <div className="h-4 w-[1px] bg-border hidden md:block" />
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:your@email.com" className="hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}