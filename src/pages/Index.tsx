import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      
      <footer className="py-8 px-4 text-center text-muted-foreground border-t border-border/50">
        <p>© 2025 Athulya A M. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Index;
