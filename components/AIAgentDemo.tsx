
import React, { useState } from 'react';
import { getAIInsight } from '../services/geminiService';

const AIAgentDemo: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    const res = await getAIInsight(question);
    setAnswer(res || "Erro ao gerar resposta.");
    setLoading(false);
  };

  const suggestions = [
    "O que é MRR e como o FinanSaaS calcula?",
    "Como reduzir o Churn Rate?",
    "Quais as vantagens do White-Label?",
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Diferencial Premium
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Seu SaaS já nasce com <br />
            <span className="text-emerald-600">Inteligência Artificial.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Esqueça apenas números frios. Com o agente de IA integrado ao FinanSaaS, seus clientes recebem insights automáticos sobre a saúde do negócio. 
            É o diferencial tecnológico que você precisa para cobrar tickets mais altos.
          </p>
          <ul className="space-y-4 mb-10">
            {['Análises financeiras automatizadas', 'Leitura de dados em linguagem natural', 'Apoio estratégico na tomada de decisão'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px]">
            <div className="bg-gray-50 p-4 border-b flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl animate-pulse">
                🤖
              </div>
              <div>
                <p className="font-bold text-gray-800 leading-tight">Agente FinanSaaS</p>
                <p className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Online agora
                </p>
              </div>
            </div>

            <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-gray-50/30">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-200 flex-shrink-0 flex items-center justify-center text-sm">🤖</div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[80%] text-sm text-gray-700">
                  Olá! Sou o assistente de IA do FinanSaaS. Como posso ajudar com sua gestão financeira hoje?
                </div>
              </div>

              {answer && (
                <div className="flex gap-3 flex-row-reverse">
                   <div className="w-8 h-8 rounded-lg bg-emerald-100 flex-shrink-0 flex items-center justify-center text-sm">👤</div>
                   <div className="bg-emerald-600 p-4 rounded-2xl rounded-tr-none text-white shadow-sm max-w-[80%] text-sm">
                     {question}
                   </div>
                </div>
              )}

              {answer && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-200 flex-shrink-0 flex items-center justify-center text-sm">🤖</div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[80%] text-sm text-gray-700 whitespace-pre-wrap">
                    {answer}
                  </div>
                </div>
              )}
              
              {loading && (
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-gray-200 animate-pulse"></div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 text-sm text-gray-400">Digitando...</div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t">
              <div className="flex flex-wrap gap-2 mb-4">
                {suggestions.map((s, i) => (
                  <button 
                    key={i} 
                    onClick={() => setQuestion(s)}
                    className="text-xs bg-gray-100 hover:bg-emerald-50 hover:text-emerald-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form onSubmit={handleAsk} className="flex gap-2">
                <input 
                  type="text" 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Pergunte algo sobre sua gestão..."
                  className="flex-grow px-4 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm"
                />
                <button 
                  disabled={loading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition-all disabled:opacity-50"
                >
                  {loading ? '...' : 'Enviar'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentDemo;
