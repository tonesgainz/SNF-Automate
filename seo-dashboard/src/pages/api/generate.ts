import type { NextApiRequest, NextApiResponse } from 'next';
import { generateContent } from '@/lib/openai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { topic, contentType, keywords } = req.body;

    // Basic validation
    if (!topic || !contentType || !keywords) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Generate content
    const content = await generateContent(topic, contentType, keywords);

    // Return result
    res.status(200).json({ content });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Error generating content' });
  }
}