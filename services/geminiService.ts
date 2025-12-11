import { GoogleGenAI } from "@google/genai";
import { FINANCIAL_METRICS, MOCK_INVOICES, MOCK_ASSETS } from "../constants";

export const analyzeFinancialHealth = async (): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });

  const dataContext = {
    metrics: FINANCIAL_METRICS,
    recentInvoices: MOCK_INVOICES.slice(0, 5), // Only take a sample
    keyAssets: MOCK_ASSETS.map(a => ({ name: a.name, value: a.currentBookValue }))
  };

  const prompt = `
    Bertindak sebagai Kepala Keuangan (CFO) Rumah Sakit senior dan Auditor Sistem Informasi Akuntansi.
    
    Analisis data JSON berikut yang merepresentasikan kondisi keuangan rumah sakit saat ini "SIA-SIMRS IntegraCerdas":
    
    ${JSON.stringify(dataContext, null, 2)}
    
    Berikan analisis eksekutif singkat (maksimal 3 paragraf) dalam Bahasa Indonesia yang mencakup:
    1. Kesehatan Likuiditas (Cash Flow vs AR).
    2. Risiko Piutang (Ketergantungan pada BPJS/Asuransi).
    3. Rekomendasi strategis untuk efisiensi aset atau inventaris.
    
    Gunakan gaya bahasa profesional, tegas, dan berorientasi pada solusi bisnis.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Low latency priority
      }
    });
    
    return response.text || "Gagal menghasilkan analisis.";
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "Maaf, layanan analisis cerdas sedang tidak tersedia saat ini. Pastikan API Key valid.";
  }
};
