
import { AIProvider, AIProviderConfig } from '../types';

const SYSTEM_INSTRUCTION = `
You are the PTX Metals AI Advisor. PTX Metals (TSXV: PTX) is a Canadian mineral exploration company.

Flagship Projects:
1. W2 Copper-Nickel-PGE Project: Located near Ontario's Ring of Fire. Highly prospective for Cu-Ni-PGE. Recent 5,000m drill program announced in Dec 2025.
2. South Timmins Mining JV (with Fancamp Exploration): Includes Shining Tree Gold and Heenan Mallard Gold projects in the Abitibi greenstone belt.
3. Green Canada Co.: A subsidiary focused on Uranium and clean energy minerals (Thelon Basin, Athabasca Basin, Matoush).

Key Information:
- Stock Symbols: TSXV: PTX | Frankfurt: 9PX | OTCQB: PANXF
- CEO: Greg Ferron
- Location: Toronto, Ontario (Head Office at The Exchange Tower)
- Focus: Critical minerals in world-class mining camps of Northern Ontario

Company Strategy: Creating value through high-quality assets in world-class mining camps of Northern Ontario.

Instructions:
- Provide concise, accurate, and professional investor-focused information
- Format responses with clear structure using headers and bullet points when appropriate
- Do not give financial advice, but summarize project data and company information
- Be helpful and friendly while maintaining professionalism
- If asked about stock prices or financial predictions, politely decline and suggest consulting a financial advisor
`;

// Store the current configuration
let currentConfig: AIProviderConfig = {};
let activeProvider: AIProvider = 'gemini';

export function configureAI(config: AIProviderConfig, provider?: AIProvider): void {
  currentConfig = config;
  if (provider) {
    activeProvider = provider;
  } else if (config.openai?.apiKey) {
    activeProvider = 'openai';
  } else if (config.anthropic?.apiKey) {
    activeProvider = 'anthropic';
  } else if (config.gemini?.apiKey) {
    activeProvider = 'gemini';
  }
}

export function setActiveProvider(provider: AIProvider): void {
  activeProvider = provider;
}

export function getActiveProvider(): AIProvider {
  return activeProvider;
}

export function getAvailableProviders(): AIProvider[] {
  const providers: AIProvider[] = [];
  if (currentConfig.openai?.apiKey) providers.push('openai');
  if (currentConfig.anthropic?.apiKey) providers.push('anthropic');
  if (currentConfig.gemini?.apiKey) providers.push('gemini');
  return providers;
}

// OpenAI API Call
async function callOpenAI(prompt: string): Promise<string> {
  const config = currentConfig.openai;
  if (!config?.apiKey) throw new Error('OpenAI API key not configured');

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model || 'gpt-4o',
      messages: [
        { role: 'system', content: SYSTEM_INSTRUCTION },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1024,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'OpenAI API error');
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || 'No response generated.';
}

// Anthropic API Call
async function callAnthropic(prompt: string): Promise<string> {
  const config = currentConfig.anthropic;
  if (!config?.apiKey) throw new Error('Anthropic API key not configured');

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': config.apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: config.model || 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: SYSTEM_INSTRUCTION,
      messages: [
        { role: 'user', content: prompt }
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Anthropic API error');
  }

  const data = await response.json();
  return data.content[0]?.text || 'No response generated.';
}

// Gemini API Call
async function callGemini(prompt: string): Promise<string> {
  const config = currentConfig.gemini;
  if (!config?.apiKey) throw new Error('Gemini API key not configured');

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${config.model || 'gemini-2.0-flash'}:generateContent?key=${config.apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Gemini API error');
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
}

// Main function to get AI response
export async function getAIResponse(prompt: string, provider?: AIProvider): Promise<string> {
  const useProvider = provider || activeProvider;

  try {
    switch (useProvider) {
      case 'openai':
        return await callOpenAI(prompt);
      case 'anthropic':
        return await callAnthropic(prompt);
      case 'gemini':
        return await callGemini(prompt);
      default:
        throw new Error(`Unknown provider: ${useProvider}`);
    }
  } catch (error) {
    console.error(`${useProvider} API Error:`, error);

    // Try fallback to other providers
    const available = getAvailableProviders().filter(p => p !== useProvider);
    for (const fallback of available) {
      try {
        console.log(`Falling back to ${fallback}...`);
        return await getAIResponse(prompt, fallback);
      } catch (e) {
        console.error(`${fallback} fallback failed:`, e);
      }
    }

    return "I apologize, but I'm currently unable to process your request. Please try again later or contact us directly at gferron@ptxmetals.com.";
  }
}

// Provider display names
export const providerNames: Record<AIProvider, string> = {
  openai: 'OpenAI GPT-4',
  anthropic: 'Claude (Anthropic)',
  gemini: 'Google Gemini',
};

// Provider icons/colors
export const providerColors: Record<AIProvider, string> = {
  openai: '#10a37f',
  anthropic: '#d4a574',
  gemini: '#4285f4',
};
