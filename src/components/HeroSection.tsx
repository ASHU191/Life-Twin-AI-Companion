import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import { Sparkles, Brain, Calendar, MessageSquare, User, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-twin-glow rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 bg-twin-surface border-twin-primary/20 text-twin-glow hover:bg-twin-surface-elevated transition-smooth">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Advanced AI
          </Badge>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight mt-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Meet Your</span>
            <br />
            <span className="relative text-blue-400">
              Digital Twin
              <div className="absolute -inset-1 bg-blue-500/30 blur-2xl opacity-50 animate-pulse" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Your AI-powered digital twin that learns your personality, manages your life, 
            and represents you in the digital world. Experience the future of personal AI assistance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.location.href = '/create-twin'}
            >
              Create Your Twin
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-twin-primary/30 text-foreground hover:bg-twin-surface">
              Watch Demo
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-glow blur-3xl opacity-50" />
            <img 
              src={heroImage} 
              alt="LifeTwin Digital Twin Interface"
              className="relative w-full rounded-2xl shadow-elevated"
            />
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Brain, label: "AI Personality" },
              { icon: Calendar, label: "Smart Scheduling" },
              { icon: MessageSquare, label: "Chat Interface" },
              { icon: User, label: "Personal Assistant" }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-twin-surface border border-twin-primary/20 flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <Icon className="w-8 h-8 text-twin-primary" />
                </div>
                <span className="text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;