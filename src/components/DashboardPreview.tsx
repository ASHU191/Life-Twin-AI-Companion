import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Calendar, 
  Activity, 
  User, 
  Send,
  Clock,
  CheckCircle
} from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-twin-surface border-twin-primary/20 text-twin-glow">
            <Activity className="w-4 h-4 mr-2" />
            Dashboard Preview
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Your Command Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the intuitive interface where you and your digital twin collaborate seamlessly.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="bg-twin-surface/50 border-twin-primary/20 h-[500px] flex flex-col">
                <CardHeader className="border-b border-twin-primary/10">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    Chat with Your Twin
                    <Badge variant="secondary" className="ml-auto bg-green-500/20 text-green-400 border-green-500/20">
                      Online
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-6 flex flex-col">
                  <div className="flex-1 space-y-4 mb-4">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-twin-primary/20 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">Can you schedule my team meeting for tomorrow at 2 PM?</p>
                      </div>
                    </div>
                    
                    {/* Twin response */}
                    <div className="flex justify-start">
                      <div className="bg-twin-surface-elevated rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">I've checked your calendar and scheduled the team meeting for tomorrow at 2 PM. I also sent invites to your usual team members and booked the conference room. Anything else you need for the meeting?</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3" />
                          <span>Calendar updated</span>
                        </div>
                      </div>
                    </div>

                    {/* Twin thinking */}
                    <div className="flex justify-start">
                      <div className="bg-twin-surface-elevated rounded-lg p-3 max-w-[80%] border-2 border-dashed border-twin-primary/30">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-twin-primary rounded-full animate-pulse" />
                          <p className="text-sm text-twin-primary">Your twin is thinking...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input area */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-twin-surface-elevated rounded-lg px-4 py-2 border border-twin-primary/20 focus-within:border-twin-primary/40 transition-smooth">
                      <input 
                        type="text" 
                        placeholder="Ask your digital twin anything..."
                        className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                      />
                    </div>
                    <Button variant="hero" size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar widgets */}
            <div className="space-y-6">
              {/* Twin Status */}
              <Card className="bg-twin-surface/50 border-twin-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    Twin Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Learning Progress</span>
                    <Badge variant="secondary" className="bg-twin-primary/20 text-twin-primary border-twin-primary/20">
                      87%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Personality Match</span>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/20">
                      Excellent
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Tasks Completed</span>
                    <span className="text-sm font-semibold">247</span>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Tasks */}
              <Card className="bg-twin-surface/50 border-twin-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    Upcoming
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { time: "2:00 PM", task: "Team Meeting", type: "Meeting" },
                    { time: "4:30 PM", task: "Project Review", type: "Task" },
                    { time: "6:00 PM", task: "Workout Reminder", type: "Personal" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-twin-surface-elevated">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.task}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;