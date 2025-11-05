import { Shield, Brain, Lock, Code, Database, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: Shield,
      title: "Ethical Hacking",
      description: "Penetration testing and vulnerability assessment",
    },
    /*{
      icon: Lock,
      title: "Cryptography",
      description: "Encryption algorithms and secure communication",
    },*/
    {
      icon: Brain,
      title: "AI Security",
      description: "Machine learning security and adversarial attacks",
    },
   /* {
      icon: Code,
      title: "Secure Coding",
      description: "Writing secure and resilient applications",
    }*/,
    {
      icon: Database,
      title: "Data Protection",
      description: "Database security and privacy compliance",
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Firewall configuration and intrusion detection",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-neon">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-neon"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 mr-16 ml-16">
          <div className="space-y-6 animate-slide-up">
            {/*<div className="border-l-4 border-primary pl-6 glow-neon">
              <h3 className="text-2xl font-bold mb-3 text-neon">MCA in Cybersecurity</h3>
              <p className="text-muted-foreground mb-2">
                Lovely Professional University
              </p>
              <p className="text-foreground">
                Currently pursuing Master of Computer Applications with a specialization in 
                Cybersecurity, focusing on emerging threats and defense mechanisms in the 
                digital landscape.
              </p>
            </div>*/}

            <p className="text-foreground leading-relaxed text-justify">
              I’m Arun Kumar, an MCA student specializing in Cybersecurity at Lovely Professional University, passionate about securing the digital world. My interests lie in ethical hacking, penetration testing, network defense, and AI-based threat detection.

<br/>I focus on understanding real-world cyber threats and creating intelligent solutions that protect data, systems, and networks from evolving attacks. With a strong foundation in BCA, and continuous learning in network security, encryption, and vulnerability assessment, I aim to become a skilled Cybersecurity Professional capable of defending and innovating in the modern cyber landscape.

<br/>My portfolio showcases my projects, certifications, and research interests that reflect my journey toward mastering cybersecurity and ethical hacking.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-mono">
                C Language
              </span>
              <span className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-mono">
                Kali Linux
              </span>
              <span className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-mono">
                Metasploit
              </span>
              <span className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-mono">
                Wireshark
              </span>
              <span className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-mono">
                Burp Suite
              </span>
              <span className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-mono">
                SQL
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 hover:glow-neon transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-2 text-sm">{skill.title}</h4>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
