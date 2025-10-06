import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = {
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "SIET",
    location: "Coimbatore, TN",
    year: "September 2023",
  };

  const certifications = [
    {
      title: "Artificial Intelligence",
      issuer: "Infosys",
      type: "Course Completion",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      type: "Certification",
    },
    {
      title: "Hackronyx Hackathon",
      issuer: "Unstop",
      type: "Participation",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text">Education & Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/50 hover:border-accent/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <h3 className="text-lg font-semibold">{education.degree}</h3>
              <p className="text-muted-foreground">{education.institution}</p>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span>{education.location}</span>
                <span>•</span>
                <span>{education.year}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-accent/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="font-semibold">{cert.title}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
