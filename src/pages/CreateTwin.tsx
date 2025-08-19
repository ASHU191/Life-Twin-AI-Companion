import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Brain, Sparkles } from "lucide-react";
import { createTwin } from "@/lib/gemini";

const CreateTwin = () => {
  const [formData, setFormData] = useState({
    name: '',
    personality: '',
    interests: '',
    goals: '',
    communication_style: '',
    background: ''
  });
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const result = await createTwin(formData);
      if (result.success) {
        toast({
          title: "Digital Twin Created!",
          description: "Your AI twin is ready to assist you.",
        });
        window.location.href = '/dashboard';
      } else {
        throw new Error('Failed to create twin');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create your digital twin. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-twin-primary mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Create Your Digital Twin
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Help us understand you better to create your perfect AI assistant
          </p>
        </div>

        <Card className="bg-twin-surface border-twin-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-twin-glow" />
              Personality Profile
            </CardTitle>
            <CardDescription>
              Tell us about yourself so your twin can mirror your personality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="communication_style">Communication Style</Label>
                  <Input
                    id="communication_style"
                    value={formData.communication_style}
                    onChange={(e) => handleInputChange('communication_style', e.target.value)}
                    placeholder="Formal, casual, funny, direct..."
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="personality">Personality Description</Label>
                <Textarea
                  id="personality"
                  value={formData.personality}
                  onChange={(e) => handleInputChange('personality', e.target.value)}
                  placeholder="Describe your personality traits, how you think and behave..."
                  rows={4}
                  required
                />
              </div>

              <div>
                <Label htmlFor="interests">Interests & Hobbies</Label>
                <Textarea
                  id="interests"
                  value={formData.interests}
                  onChange={(e) => handleInputChange('interests', e.target.value)}
                  placeholder="What do you enjoy doing? Your passions, hobbies, interests..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="goals">Goals & Aspirations</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange('goals', e.target.value)}
                  placeholder="What are your short-term and long-term goals?"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="background">Background & Context</Label>
                <Textarea
                  id="background"
                  value={formData.background}
                  onChange={(e) => handleInputChange('background', e.target.value)}
                  placeholder="Your professional background, life experiences, anything that shapes who you are..."
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:opacity-90 text-white"
                disabled={isCreating}
              >
                {isCreating ? (
                  <>
                    <Brain className="w-4 h-4 mr-2 animate-spin" />
                    Creating Your Twin...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Create My Digital Twin
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateTwin;