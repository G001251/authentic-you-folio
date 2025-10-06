import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "CORIZO WIPRO",
      role: "Machine Learning Intern",
      period: "April 2025 - Present",
      location: "Coimbatore, TN",
      achievements: [
        "Built a stock price prediction model using regression and time-series analysis",
        "Developed a cardiovascular disease risk predictor achieving 80% accuracy",
        "Completed 15-module ML course and 7 Python lab modules",
      ],
      tech: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Scikit-learn"],
    },
    {
      company: "CODSOFT",
      role: "AI Intern",
      period: "April 2025 - May 2025",
      location: "Coimbatore, TN",
      achievements: [
        "Created a rule-based chatbot with string matching algorithms",
        "Engineered a recommendation system using Minimax algorithm, improving accuracy by 15%",
        "Applied game theory principles to predict user preferences",
      ],
      tech: ["Python", "Minimax Algorithm", "Game Theory"],
    },
    {
      company: "CODSOFT",
      role: "Web Development Intern",
      period: "2025",
      location: "Coimbatore, TN",
      achievements: [
        "Developed responsive portfolio website",
        "Designed modern landing pages",
        "Built a functional web calculator application",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card 
              key={idx}
              className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{exp.company}</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">
                      {exp.role}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIdx) => (
                    <li key={achIdx} className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((tech, techIdx) => (
                    <Badge 
                      key={techIdx} 
                      variant="outline"
                      className="border-accent/30 text-accent"
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

export default Experience;
