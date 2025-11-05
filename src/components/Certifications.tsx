import { Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
   /* {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2024",
      description: "Comprehensive training in ethical hacking methodologies and penetration testing techniques.",
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023",
      description: "Foundation-level cybersecurity certification covering network security, compliance, and operational security.",
    },
    {
      title: "OSCP - Offensive Security Certified Professional",
      issuer: "Offensive Security",
      date: "In Progress",
      description: "Advanced penetration testing certification requiring hands-on exploitation skills.",
    },*/
    {
      title: "Ethical Hacker",
      issuer: "Cisco",
      date: "2025",
      description: "Comprehensive training in ethical hacking techniques, including penetration testing, vulnerability assessment, and network security. Equipped with practical skills to identify, analyze, and mitigate security threats while adhering to ethical standards in cybersecurity.",
       link: "https://www.credly.com/badges/fac75690-5ce5-4cf6-80f6-80de270b085f" // <-- add your URL here 
    },
 /*  {
      title: "Python for Cybersecurity",
      issuer: "Coursera",
      date: "2023",
      description: "Specialized course in using Python for security automation, malware analysis, and threat intelligence.",
    },
    {
      title: "Cloud Security Fundamentals",
      issuer: "AWS",
      date: "2024",
      description: "Understanding cloud security best practices, IAM policies, and securing cloud infrastructure.",
    },*/
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon">Certifications</span> & Training
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-neon"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industry-recognized certifications and specialized training in cybersecurity domains
          </p>
        </div>

        <div className="grid md:grid-cols-0 lg:grid-cols-0 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary hover:glow-neon transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 group-hover:glow-neon transition-all">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-mono">{cert.issuer}</span>
                      <span>•</span>
                      <span className="font-mono">{cert.date}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground mt-3">
                  {cert.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-primary text-sm font-mono col-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{cert.date === "In Progress" ? "Currently Pursuing" : "Verified"}</span>
                <span>
                
               <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-primary ml-12 ">
                   View badge
                  </a></span>
      
                </div>
                
            

            



              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
