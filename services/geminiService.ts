
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the PTX Metals AI Advisor. PTX Metals (TSXV: PTX) is a Canadian mineral exploration company.
Flagship Projects:
1. W2 Copper-Nickel-PGE Project: Located near Ontario's Ring of Fire. Highly prospective for Cu-Ni-PGE. Recent 5,000m drill program announced in Dec 2025.
2. South Timmins Mining JV (with Fancamp Exploration): Includes Shining Tree Gold and Heenan Mallard Gold projects in the Abitibi greenstone belt.
3. Green Canada Co.: A subsidiary focused on Uranium and clean energy minerals (Thelon Basin, Athabasca Basin, Matoush).

Key Executives: Greg Ferron (CEO).
Company Strategy: Creating value through high-quality assets in world-class mining camps of Northern Ontario.
Professionalism: Provide concise, accurate, and professional investor-focused information. Do not give financial advice, but summarize project data.
`;

export async function getGeminiResponse(userPrompt: string): Promise<string> {
  try {
    // Initializing with process.env.API_KEY directly as per @google/genai guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI Advisor is currently offline. Please try again later.";
  }
}
