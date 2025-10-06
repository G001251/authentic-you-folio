import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="gradient-text">Athulya A M</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            AI/ML Engineer & Web Developer
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about building intelligent systems and creating seamless web experiences. 
          Specialized in Machine Learning, Deep Learning, and Full-Stack Development.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[hsl(240,80%,60%)] to-[hsl(280,80%,65%)] hover:opacity-90 transition-opacity"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
          <Button size="lg" variant="outline">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center pt-4">
          <a 
            href="mailto:athulya001am@gmail.com" 
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
