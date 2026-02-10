"use client";
import { motion } from "framer-motion";

const JOBS = [
  {
    date: "Sept 2025 - Feb 2026",
    role: "Web Developer Intern",
    company: "Universiti Kebangsaan Malaysia (UKM)",
    desc: "Architecting internal digital solutions and performing rigorous QA testing.",
    current: true
  },
  {
    date: "2024 - 2025",
    role: "Barista",
    company: "Richiamo Coffee",
    desc: "Mastered high-pressure multitasking and efficient communication.",
    current: false
  }
];

export default function ExperiencePage() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center">My Journey</h1>
      <div className="space-y-8">
        {JOBS.map((job, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className={`p-8 rounded-[2rem] border ${job.current ? 'bg-card border-primary/20 shadow-lg' : 'bg-background'}`}
          >
            <span className={`text-sm font-bold ${job.current ? 'text-primary' : 'text-muted-foreground'}`}>{job.date}</span>
            <h3 className="text-2xl font-bold mt-2">{job.role}</h3>
            <p className="text-lg font-medium italic text-muted-foreground mb-4">{job.company}</p>
            <p className="text-muted-foreground leading-relaxed">{job.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}