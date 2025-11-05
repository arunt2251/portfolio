import { Mail, Linkedin, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "arunt2251@gmail.com",
      link: "mailto:arunt2251@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/arun-kumar-204437381/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects",
      link: "https://github.com/arunt2251",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-neon">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-neon"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's connect and discuss cybersecurity projects, collaborations, or opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary hover:glow-neon transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 inline-block mb-4 group-hover:glow-neon transition-all">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{method.label}</h3>
                  <a 
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-mono transition-colors"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/80 backdrop-blur border-primary/20 glow-neon animate-slide-up">
            <CardContent className="p-8 text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-lg border border-primary/30 mb-6">
                <Terminal className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Ready to <span className="text-neon">Collaborate</span>?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Whether you're looking for a cybersecurity consultant, a project collaborator, 
                or just want to discuss the latest security trends, I'm always open to connecting 
                with fellow security enthusiasts and professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="border-neon bg-primary hover:bg-primary/90 text-primary-foreground glow-neon"
                  onClick={() => window.location.href = "mailto:arunt2251@gmail.com"}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10"
                  onClick={() => window.open("https://www.linkedin.com/in/arun-kumar-204437381/", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 text-muted-foreground text-sm font-mono animate-slide-up">
          <p>&copy; 2024 Arun kumar Portfolio. Built with React & Tailwind CSS.</p>
         {/*<p className="mt-2">
                        <span className="text-primary">&lt;/&gt;</span> Secure by design
          </p>*/}
        </div>
      </div>
    </section>
  );
};

export default Contact;
