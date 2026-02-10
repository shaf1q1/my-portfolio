import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define what a "Project" looks like
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

export default function ProjectCard({ title, description, tags, image, link, github }: ProjectProps) {
  return (
    <div className="group bg-card border rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500">
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-secondary text-[10px] font-bold rounded-full tracking-wider uppercase">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <a href={link} target="_blank">Live Demo <ExternalLink className="ml-2 h-3 w-3" /></a>
          </Button>
          {github && (
            <Button variant="ghost" size="sm" asChild className="rounded-full">
              <a href={github} target="_blank"><Github className="mr-2 h-4 w-4" /> Code</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}