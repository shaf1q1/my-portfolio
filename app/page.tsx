"use client"; // Required for Framer Motion

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layout, Server, Database, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const SERVICES = [
  {
    title: "Frontend Development",
    desc: "Crafting visually stunning, responsive, and accessible user interfaces using Next.js and Tailwind CSS.",
    icon: <Layout className="h-8 w-8 text-primary" />,
    features: ["React / Next.js", "TypeScript", "Framer Motion"]
  },
  {
    title: "Backend Solutions",
    desc: "Building robust server-side logic and scalable APIs to power your web applications.",
    icon: <Server className="h-8 w-8 text-primary" />,
    features: ["Node.js / Express", "API Integration", "CodeIgniter 4"]
  },
  {
    title: "Database Design",
    desc: "Designing efficient database schemas and managing data integrity for high-performance apps.",
    icon: <Database className="h-8 w-8 text-primary" />,
    features: [ "MySQL", "HeidiSQL"]
  },
];

function Services() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          I provide end-to-end development services to help you turn your ideas into 
          <span className="text-foreground font-medium"> production-ready </span> products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Glow on Hover */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="mb-6 p-4 w-fit rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {service.desc}
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {service.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-8 text-left animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border/50 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[0.9]">
              Building digital <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                experiences
              </span> <br />
              that matter.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-[500px] leading-relaxed">
              Hi, I'm <span className="text-foreground font-semibold underline decoration-primary/30 underline-offset-4">Muhammad Shafiq</span>. 
              Full-stack Developer crafting high-performance applications with Next.js.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-base shadow-xl hover:shadow-primary/20 transition-all">
                <Link href="/projects">View My Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-base backdrop-blur-sm">
                <Link href="#contact">Get in touch</Link>
              </Button>
            </div>
          </div>

          {/* Right Side: Framed Image */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] lg:translate-x-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] rotate-6 scale-105 -z-10 border border-primary/10" />
              <div className="absolute inset-0 border-2 border-primary/10 rounded-[3rem] -rotate-3 -z-10" />
              
              <div className="w-full h-full overflow-hidden rounded-[3rem] border-4 border-background shadow-2xl relative z-10">
                <img 
                  src="/shafiq.jpeg" 
                  alt="Muhammad Shafiq"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              <div className="absolute -bottom-4 -left-8 bg-card border border-border/50 p-4 rounded-2xl shadow-2xl z-20 hidden md:flex items-center gap-3 animate-bounce-slow">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Expertise</p>
                  <p className="text-sm font-bold text-foreground">Next.js & React</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Mouse Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex">
          <div className="w-[22px] h-[35px] border-2 border-foreground rounded-full flex justify-center p-1">
             <div className="w-1 h-2 bg-foreground rounded-full animate-scroll-dot" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Contact Section with Scroll Reveal */}
      <motion.section 
        id="contact" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 py-32 px-6 max-w-3xl mx-auto w-full"
      >
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's collaborate</h2>
          <p className="text-muted-foreground text-lg">Have a project in mind? Let's build something incredible.</p>
        </div>
        <ContactForm />
      </motion.section>
    </div>
  );
}