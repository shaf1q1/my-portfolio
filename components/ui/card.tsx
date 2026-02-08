import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* 1. HERO SECTION (The Big Introduction) */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
          Available for Work
        </p>
        <h1 className="text-5xl font-black mb-6">
          I build websites that <span className="text-blue-600">look great.</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Hi, I'm [Your Name]. I am a web developer. I help people build 
          fast and clean websites using Next.js and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg">
            My Projects <ArrowRight className="ml-2" />
          </Button>
          <Button variant="outline" className="px-8 py-6 rounded-lg">
            Email Me using <Mail className="ml-2" />  
          </Button>
        </div>
      </header>

      {/* 2. PROJECTS SECTION (Simple Boxes) */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">My Best Work</h2>
          
          {/* We use a simple grid: 1 column on mobile, 3 on big screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project Box 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-2">E-Commerce Store</h3>
              <p className="text-slate-600 mb-4 text-sm">A shop website with a shopping cart and payment system.</p>
              <div className="flex gap-2 mb-6">
                <span className="bg-slate-100 px-2 py-1 text-xs rounded">Next.js</span>
                <span className="bg-slate-100 px-2 py-1 text-xs rounded">Stripe</span>
              </div>
              <a href="#" className="text-blue-600 font-semibold flex items-center text-sm">
                View Project <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>

            {/* Project Box 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Health Dashboard</h3>
              <p className="text-slate-600 mb-4 text-sm">A private app to track daily exercise and food intake.</p>
              <div className="flex gap-2 mb-6">
                <span className="bg-slate-100 px-2 py-1 text-xs rounded">React</span>
                <span className="bg-slate-100 px-2 py-1 text-xs rounded">Firebase</span>
              </div>
              <a href="#" className="text-blue-600 font-semibold flex items-center text-sm">
                View Project <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>

            {/* Project Box 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Travel Blog</h3>
              <p className="text-slate-600 mb-4 text-sm">A personal blog to share photos and stories from trips.</p>
              <div className="flex gap-2 mb-6">
                <span className="bg-slate-100 px-2 py-1 text-xs rounded">Tailwind</span>
                <span className="bg-slate-100 px-2 py-1 text-xs rounded">MDX</span>
              </div>
              <a href="#" className="text-blue-600 font-semibold flex items-center text-sm">
                View Project <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOOTER SECTION */}
      <footer className="py-12 text-center border-t">
        <div className="flex justify-center gap-8 mb-6">
          <Github className="w-6 h-6 text-slate-400 hover:text-blue-600 cursor-pointer" />
          <Linkedin className="w-6 h-6 text-slate-400 hover:text-blue-600 cursor-pointer" />
          <Mail className="w-6 h-6 text-slate-400 hover:text-blue-600 cursor-pointer" />
        </div>
        <p className="text-slate-500 text-sm">
          © 2026 Muhammad Shafiq. All rights reserved.
        </p>
      </footer>

    </div>
  );
}