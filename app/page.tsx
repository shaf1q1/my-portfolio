import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/10">
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20 pb-16">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border text-xs font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1]">
            Building digital <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              experiences
            </span> that matter.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-[650px] mx-auto leading-relaxed">
            Hi, I'm <span className="text-foreground font-medium">Muhammad Shafiq</span>. 
            A Full-stack Developer crafting high-performance, accessible, and beautiful web applications with Next.js.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            {/* Link to Projects Section */}
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
              <a href="#projects">View My Work <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            
            {/* Link to Contact Section */}
            <Button asChild variant="ghost" size="lg" className="rounded-full px-8 h-12 text-base">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-10">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                className="p-3 rounded-full border bg-card hover:bg-accent hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card */}
          <div className="group bg-card border rounded-3xl overflow-hidden hover:border-primary/50 transition-all">
            <div className="aspect-video bg-muted flex items-center justify-center">
              
              {/* The Image Box */}
            <div className="aspect-video bg-muted overflow-hidden">
              <img 
                src="/project1.png"  // Change this to your file name in the public folder
                alt="ICT4U Project Screenshot" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Internal UKM Portal</h3>
              <p className="text-muted-foreground text-sm mb-4">Developed a specialized testing dashboard for internal university projects.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-secondary text-[10px] font-bold rounded">TAILWIND</span>
                <span className="px-2 py-1 bg-secondary text-[10px] font-bold rounded">PHP</span>
                 <span className="px-2 py-1 bg-secondary text-[10px] font-bold rounded">HTML</span>
                  <span className="px-2 py-1 bg-secondary text-[10px] font-bold rounded">CODEIGNITER 4</span>
              </div>
              <Button variant="link" className="p-0 h-auto text-primary">View Project <ExternalLink className="ml-1 h-3 w-3" /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 bg-slate-50 border rounded-2xl">
            <span className="text-2xl mb-2">🚀</span>
            <span className="font-bold">Next.js</span>
            <span className="text-xs text-muted-foreground text-center">Frontend Framework</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-50 border rounded-2xl">
            <span className="text-2xl mb-2">🎨</span>
            <span className="font-bold">Tailwind</span>
            <span className="text-xs text-muted-foreground text-center">Modern CSS</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-50 border rounded-2xl">
            <span className="text-2xl mb-2">📦</span>
            <span className="font-bold">Node.js</span>
            <span className="text-xs text-muted-foreground text-center">Backend Logic</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-50 border rounded-2xl">
            <span className="text-2xl mb-2">💾</span>
            <span className="font-bold">SQL</span>
            <span className="text-xs text-muted-foreground text-center">Database Management</span>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE SECTION */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Experience</h2>
          <div className="space-y-12">
            <div className="flex gap-6 border-l-2 border-primary pl-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1" />
              <div>
                <span className="text-sm font-bold text-primary">Sept 2025 - Feb 2026</span>
                <h3 className="text-xl font-bold">Web Developer Intern</h3>
                <p className="text-md font-medium text-muted-foreground italic mb-2">Universiti Kebangsaan Malaysia (UKM)</p>
                <p className="text-sm text-slate-600">I build and test websites for the UKM's internal projects.</p>
              </div>
            </div>
            <div className="flex gap-6 border-l-2 border-slate-200 pl-6 relative">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -left-[7.5px] top-1" />
              <div>
                <span className="text-sm font-bold text-slate-400">2024 - 2025</span>
                <h3 className="text-xl font-bold">Barista</h3>
                <p className="text-md font-medium text-muted-foreground italic mb-2">Richiamo Coffee</p>
                <p className="text-sm text-slate-600">I prepared and served coffee and pastries to customers in a fast-paced environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="relative container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Let's collaborate</h2>
            <p className="text-muted-foreground text-lg max-w-[500px]">
              Have a project in mind? Drop me a message and let's build something incredible together.
            </p>
          </div>
          <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm">
            <form className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Name</label>
                  <Input placeholder="John Doe" className="bg-background h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Message</label>
                <Textarea placeholder="Tell me about your project..." className="bg-background min-h-[150px] resize-none" />
              </div>
              <Button size="lg" className="w-full h-14 text-lg font-bold rounded-xl transition-transform active:scale-[0.98]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t bg-muted/30">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2026 <span className="text-foreground font-medium">Muhammad Shafiq</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#" className="hover:text-primary transition-colors">Resume</a>
            <a href="#" className="hover:text-primary transition-colors inline-flex items-center">
              Source <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}