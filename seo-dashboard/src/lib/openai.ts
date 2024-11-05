import { OpenAI } from 'openai';
import { config } from './config';

// Create OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateContent(topic: string, type: string, keywords: string[]) {
  try {
    const response = await openai.chat.completions.create({
      model: config.openai.model,
      messages: [
        {
          role: "system",
          content: "You are a professional content writer and SEO expert."
        },
        {
          role: "user",
          content: `
            Create ${type} content about: ${topic}
            Keywords to include: ${keywords.join(', ')}
            Include:
            - SEO optimized title
            - Meta description
            - Main content with proper HTML tags
            - Suggested image descriptions
          `
        }
      ]
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}