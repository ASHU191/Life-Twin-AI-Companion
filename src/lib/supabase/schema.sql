-- Digital Twins table
CREATE TABLE IF NOT EXISTS digital_twins (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_name TEXT NOT NULL,
    personality_description TEXT,
    interests TEXT,
    goals TEXT,
    communication_style TEXT,
    background TEXT,
    personality_prompt TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Conversations table
CREATE TABLE IF NOT EXISTS conversations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    twin_id UUID REFERENCES digital_twins(id),
    user_message TEXT NOT NULL,
    twin_response TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for better performance
CREATE INDEX IF NOT EXISTS idx_conversations_created_at ON conversations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_digital_twins_created_at ON digital_twins(created_at DESC);