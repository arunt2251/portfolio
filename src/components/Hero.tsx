import { Shield, Lock, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cyber-hero.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

      {/* Hero Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="Cybersecurity Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Shield className="w-12 h-12 text-primary opacity-30" />
      </div>
      <div
        className="absolute top-60 right-20 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Lock className="w-10 h-10 text-primary opacity-30" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Code2 className="w-14 h-14 text-primary opacity-30" />
      </div>
      <div
        className="absolute bottom-20 right-32 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Terminal className="w-12 h-12 text-primary opacity-30" />
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-line"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 animate-slide-up">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary glow-neon-lg animate-pulse-glow shadow-xl">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-120px object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neon animate-glow">
            Arun Kumar
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-justify">
           I am MCA student specializing in Cybersecurity at <span className="text-primary font-semibold">
              Lovely Professional University,
            </span> passionate about securing the digital world. My interests lie in ethical hacking, penetration testing, network defense, and AI-based threat detection.
          
          
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
            <Button
              size="lg"
              className="group border-neon bg-primary hover:bg-primary/90 text-primary-foreground glow-neon"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <Code2 className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
              <Terminal className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 border border-muted rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors">
              <Lock className="w-5 h-5" />
              <span className="text-sm font-mono">Ethical Hacking</span>
            </div>
           
            <div className="flex items-center gap-2 px-4 py-2 border border-muted rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors">
              <Terminal className="w-5 h-5" />
              <span className="text-sm font-mono">Penetration Testing</span>
            </div>
           
           
            <div className="flex items-center gap-2 px-4 py-2 border border-muted rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-mono">Network Security</span>
            </div>
           
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
