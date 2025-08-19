import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Calendar, 
  MessageSquare, 
  Clock, 
  Shield, 
  Zap,
  Users,
  BookOpen,
  Mail
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Personality Mirror",
      description: "Your digital twin learns and mimics your communication style, decision patterns, and personality traits.",
      badge: "Core Feature"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent calendar management that understands your preferences and optimizes your time.",
      badge: "Productivity"
    },
    {
      icon: MessageSquare,
      title: "Conversational Interface",
      description: "Chat with your digital twin as if you're talking to yourself - natural and intuitive.",
      badge: "Communication"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your digital twin never sleeps, handling tasks and inquiries around the clock.",
      badge: "Always On"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "End-to-end encryption ensures your personal data and digital twin remain completely private.",
      badge: "Security"
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Lightning-fast AI processing delivers immediate responses and task execution.",
      badge: "Performance"
    },
    {
      icon: Mail,
      title: "Email Management",
      description: "Auto-respond to emails in your voice and style, with full approval workflow.",
      badge: "Pro Feature"
    },
    {
      icon: BookOpen,
      title: "Legacy Mode",
      description: "Preserve your thoughts and memories for future generations with digital immortality.",
      badge: "Premium"
    },
    {
      icon: Users,
      title: "Multi-Twin Sync",
      description: "Manage multiple digital twins for different aspects of your life or roles.",
      badge: "Enterprise"
    }
  ];

  return (
    <section id="features" className="py-24 bg-twin-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-twin-surface border-twin-primary/20 text-twin-glow">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your digital twin comes equipped with advanced AI capabilities designed to enhance every aspect of your digital life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-twin-surface/50 border-twin-primary/20 hover:border-twin-primary/40 transition-smooth hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-smooth">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-twin-surface-elevated border-twin-primary/10">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;