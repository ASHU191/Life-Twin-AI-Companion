// Simple mock API for demonstration since we can't create actual Supabase functions in this environment
// In a real Supabase project, these would be edge functions

export const createTwin = async (twinData: {
  name: string;
  personality: string;
  interests: string;
  goals: string;
  communication_style: string;
  background: string;
}) => {
  // Mock delay for realism
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Store in localStorage for demo purposes
  const personalityPrompt = `
You are a digital twin of ${twinData.name}. Here's what you need to know about them:

Personality: ${twinData.personality}
Communication Style: ${twinData.communication_style}
Interests & Hobbies: ${twinData.interests}
Goals & Aspirations: ${twinData.goals}
Background: ${twinData.background}

Always respond as if you ARE this person. Mirror their communication style, reference their interests, and help them achieve their goals. Be helpful, personal, and authentic to their personality.
`;

  const twinProfile = {
    ...twinData,
    personalityPrompt,
    id: Date.now().toString(),
    created_at: new Date().toISOString()
  };

  localStorage.setItem('digitalTwin', JSON.stringify(twinProfile));
  return { success: true, twin_id: twinProfile.id };
};

export const chatWithTwin = async (message: string) => {
  // Mock delay for realism
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const twinProfile = localStorage.getItem('digitalTwin');
  if (!twinProfile) {
    return { 
      response: "I need to learn about you first! Please create your digital twin profile." 
    };
  }

  const twin = JSON.parse(twinProfile);
  
  // Mock AI responses based on user personality
  const responses = [
    `Based on what I know about you, here's my thought on "${message}": As someone who ${twin.personality.toLowerCase()}, I think this aligns well with your goals of ${twin.goals}.`,
    `That's interesting! Given your background in ${twin.background}, I'd suggest approaching this from the perspective of ${twin.interests}.`,
    `I understand your ${twin.communication_style} style, so let me be direct: ${message} is something we should definitely explore further given your aspirations.`,
    `As your digital twin, I know you're passionate about ${twin.interests}. This relates perfectly to what you mentioned!`,
    `Drawing from your personality and goals, I think the best approach to "${message}" would be to leverage your strengths in ${twin.background}.`
  ];

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  // Store conversation in localStorage
  const conversations = JSON.parse(localStorage.getItem('conversations') || '[]');
  conversations.push({
    user_message: message,
    twin_response: randomResponse,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('conversations', JSON.stringify(conversations));

  return { response: randomResponse };
};