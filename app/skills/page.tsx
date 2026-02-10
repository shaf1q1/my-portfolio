"use client";
import { motion } from "framer-motion";

const SKILLS = [
  { icon: "🚀", name: "Next.js", sub: "Frontend Framework" },
  { icon: "🎨", name: "Tailwind", sub: "Modern CSS" },
  { icon: "📦", name: "Node.js", sub: "Backend Logic" },
  { icon: "💾", name: "SQL", sub: "Database Management" },
];

export default function SkillsPage() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Technical Skills</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I specialize in building full-stack applications with modern tools and clean architecture.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {SKILLS.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center p-8 bg-card border rounded-[2rem] hover:border-primary/50 transition-all shadow-sm"
          >
            <span className="text-4xl mb-4">{skill.icon}</span>
            <span className="font-bold text-lg">{skill.name}</span>
            <span className="text-xs text-muted-foreground text-center mt-1">{skill.sub}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}