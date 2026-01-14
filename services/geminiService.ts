
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIInsight = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Você é o analista financeiro inteligente da plataforma FinanSaaS.
        O FinanSaaS é um sistema financeiro premium pronto para revenda (White-Label).
        Responda às perguntas dos usuários sobre gestão financeira, métricas SaaS (MRR, LTV, CAC, Churn) e sobre a própria plataforma de forma profissional e encorajadora.
        Mantenha as respostas curtas e focadas em como o FinanSaaS ajuda a resolver problemas financeiros.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Erro na IA:", error);
    return "Desculpe, tive um problema ao processar seu insight agora. Tente novamente em instantes!";
  }
};
