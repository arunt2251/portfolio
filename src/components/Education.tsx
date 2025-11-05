import { GraduationCap, School, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      label: "BCA",
      value: "Himachal Pradesh University",
      link: "https://www.hpuniv.ac.in/",
    },
    {
      icon: School,
      label: "12th",
      value: "HP Board",
      link: "https://www.hpbose.org/",
    },
    {
      icon: BookOpen,
      label: "10th",
      value: "HP Board",
      link: "https://www.hpbose.org/",
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="text-neon">Qualification</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-neon"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Completed BCA from Himachal Pradesh University, and 12th & 10th from HP Board, building a strong foundation in computer applications, mathematics, and analytical skills.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {education.map((item, index) => (
              <Card 
                key={index}
                className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary hover:glow-neon transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 inline-block mb-4 group-hover:glow-neon transition-all">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{item.label}</h3>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-mono transition-colors mt-2 inline-block"
                    aria-label={`Visit ${item.value} website`}
                  >
                    {item.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
