export const config = {
    // OpenAI settings
    openai: {
      model: 'gpt-4',
      maxWords: 1500,
      temperature: 0.7
    },
  
    // Default SEO settings
    seo: {
      minWords: 500,
      maxWords: 3000,
      seoLevels: ['basic', 'standard', 'advanced'] as const
    },
  
    // Content types
    contentTypes: [
      { label: 'Blog Post', value: 'blog' },
      { label: 'Article', value: 'article' },
      { label: 'Product Description', value: 'product' }
    ]
  };