import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Preference Engine",
      description: "Multimodal recommendation engine with FastAPI backend and React.js frontend. Integrated CLIP for embeddings, FAISS for similarity search, and LangChain for chatbot assistance.",
      tech: ["FastAPI", "React.js", "CLIP", "FAISS", "LangChain", "Redis"],
      features: [
        "Text and image input via chat interface",
        "Semantic similarity search",
        "Real-time chatbot assistance",
        "Web-sourced result generation",
      ],
    },
    {
      title: "Brain Tumor Detection",
      description: "CNN-based deep learning model for brain tumor identification from MRI scans, achieving 92% accuracy.",
      period: "November 2024 - January 2025",
      tech: ["Python", "TensorFlow", "CNN", "OpenCV", "NumPy", "Matplotlib"],
      features: [
        "Automated MRI scan analysis",
        "92% detection accuracy",
        "Real-time prediction capabilities",
      ],
    },
    {
      title: "Expense Tracker",
      description: "Full-stack expense tracking application with responsive design and intuitive user interface.",
      period: "February 2024 - March 2024",
      tech: ["HTML", "CSS", "JavaScript", "Python", "SQLite"],
      features: [
        "Responsive frontend design",
        "40% improvement in user experience",
        "SQLite database integration",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card 
              key={idx}
              className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                {project.period && (
                  <CardDescription className="text-sm">{project.period}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIdx) => (
                    <Badge 
                      key={techIdx} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
