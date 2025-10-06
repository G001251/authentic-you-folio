import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <Card className="border-border/50">
          <CardContent className="p-8 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:athulya001am@gmail.com" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-[hsl(240,80%,60%)] to-[hsl(280,80%,65%)] hover:opacity-90 transition-opacity"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  athulya001am@gmail.com
                </Button>
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="h-5 w-5" />
              <span>8220777579</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
