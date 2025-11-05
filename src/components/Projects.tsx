import { Shield, Lock, Terminal, Fingerprint, Wifi, Bug } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      icon: Lock,
      title: "RAT(Remote Access Trojan)",
      description: "Educational client–server tool in C demonstrating remote command execution, file transfer, and secure logging for authorized lab use.",
      tags: ["C Language", "Bash Scripting", "Networking"],
      status: "Completed",
      link: "https://github.com/arunt2251/rat" // <-- add your live link here
    },
    /*{
      icon: Shield,
      title: "Secure File Encryption Tool",
      description: "End-to-end encrypted file sharing application with AES-256 encryption and multi-factor authentication.",
      tags: ["C++", "OpenSSL", "RSA"],
      status: "In Progress",
    },
    {
      icon: Terminal,
      title: "Vulnerability Scanner",
      description: "Automated web application security scanner that identifies OWASP Top 10 vulnerabilities and generates detailed reports.",
      tags: ["Python", "OWASP", "SQL Injection"],
      status: "Completed",
    },
    {
      icon: Fingerprint,
      title: "Biometric Authentication System",
      description: "Multi-modal biometric authentication combining fingerprint and facial recognition for enhanced security.",
      tags: ["Python", "OpenCV", "Deep Learning"],
      status: "Completed",
    },
    {
      icon: Wifi,
      title: "Wireless Security Auditor",
      description: "Comprehensive WiFi security assessment tool for detecting weak encryption and unauthorized access points.",
      tags: ["Kali Linux", "Aircrack-ng", "Bash"],
      status: "In Progress",
    },
    {
      icon: Bug,
      title: "Malware Analysis Sandbox",
      description: "Isolated environment for analyzing malicious software behavior with automated threat intelligence gathering.",
      tags: ["Docker", "Python", "Reverse Engineering"],
      status: "Planning",
    },*/
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 cyber-grid opacity-5 "></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-neon">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-neon"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing cybersecurity projects focusing on networking fundamentals and ethical hacking concepts, implemented as a controlled client-server tool in C.
          </p>
        </div>

        <div className="<!--grid md:grid-cols-0 lg:grid-cols-3 gap-6 --> flex justify-center">
          {projects.map((project, index) => (
            
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary hover:glow-neon transition-all duration-300 group animate-slide-up "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 group-hover:glow-neon transition-all">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                    className="font-mono text-xs"
                  >
                    {project.status}
                  </Badge>
                  
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}

                  
                </CardDescription>
                
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-xs font-mono text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                   {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-xs font-mono text-primary"
      >
        View Project
      </a>
    )}
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
