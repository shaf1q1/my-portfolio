"use client";
import { motion } from "framer-motion";
import { ExternalLink, FolderCode, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { easeOut } from "framer-motion";

const PROJECTS = [
  {
    title: "Ict4u Management System",
    desc: "Developed a specialized testing dashboard for internal university projects to streamline QA workflows and enhance team productivity.",
    tags: ["Tailwind", "PHP", "CodeIgniter 4", "MySQL"],
    image: "/project1.png", 
    link: "#",
    github: "#" // Added github link field
  },
  {
    title: "Project New Project",
    desc: "A modern approach to data visualization and management for academic research tracking and collaborative data entry.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/project2.png", 
    link: "#",
    github: "#"
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

export default function ProjectsPage() {
  return (
    <div className="py-32 px-6 max-w-6xl mx-auto min-h-screen">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
          Selected Work
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
          A focused collection of digital products where <span className="text-primary font-medium">performance</span> meets <span className="text-primary font-medium">user-centric design</span>.
        </p>
      </motion.div>

      {/* Grid Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={idx}
            variants={cardVariants}
            className="group bg-card border rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-white/10 flex flex-col"
          >
            {/* Image Container */}
            <div className="aspect-[16/10] bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent z-10 opacity-60" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback Icon */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <FolderCode className="h-16 w-16 text-muted-foreground/10" />
              </div>
              
              {/* Floating Tech Badges on Image */}
              <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-20">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="px-3 py-1 bg-background/80 backdrop-blur-md text-[10px] font-bold rounded-full border border-white/10 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-10 flex flex-col flex-1">
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                {project.desc}
              </p>
              
              <div className="flex items-center gap-4 pt-8 border-t border-border/50">
                <Button className="rounded-full px-8 h-12 shadow-lg shadow-primary/20" asChild>
                   <a href={project.link}>
                     View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                   </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/10 hover:text-primary" asChild>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}