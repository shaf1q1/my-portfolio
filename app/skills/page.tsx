"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SKILLS_DATA = {
  Frontend: [
    { name: "Next.js", level: 90, icon: "🚀", sub: "App Router, SSR, Server Actions" },
    { name: "Tailwind CSS", level: 95, icon: "🎨", sub: "Responsive Design, Framer Motion" },
    { name: "React", level: 92, icon: "⚛️", sub: "Hooks, Context API, Performance" },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: "📦", sub: "Express, Middleware, REST APIs" },
    { name: "SQL", level: 80, icon: "💾", sub: "PostgreSQL, Prisma, Schema Design" },
    { name: "Authentication", level: 75, icon: "🔐", sub: "NextAuth, JWT, OAuth" },
  ],
  Tools: [
    { name: "Git", level: 88, icon: "🌿", sub: "Version Control, Collaboration" },
    { name: "Vercel/Netlify", level: 90, icon: "☁️", sub: "CI/CD, Deployment" },
    { name: "Postman", level: 85, icon: "📮", sub: "API Testing & Documentation" },
  ],
};

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof SKILLS_DATA>("Frontend");

  return (
    <div className="relative py-24 px-6 max-w-5xl mx-auto min-h-[90vh]">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">My Arsenal</h1>
        <p className="text-muted-foreground max-w-xl mx-auto italic">
          Select a category to see my technical depth and specialization.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center gap-2 mb-12 p-1.5 bg-card/50 border border-border/50 rounded-2xl backdrop-blur-md w-fit mx-auto">
        {Object.keys(SKILLS_DATA).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeTab === tab 
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]" 
                : "hover:bg-primary/10 text-muted-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Content */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {SKILLS_DATA[activeTab].map((skill, i) => (
              <div 
                key={skill.name}
                className="group relative p-6 bg-card/30 border border-border/50 rounded-2xl hover:border-primary/40 transition-all overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">
                      {skill.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg">{skill.name}</h3>
                      <p className="text-xs text-muted-foreground">{skill.sub}</p>
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="w-full md:w-64 space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                      <span>Proficiency</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-primary neon-glow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}