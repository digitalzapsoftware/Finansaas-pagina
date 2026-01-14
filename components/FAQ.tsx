
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "O código fonte é realmente meu?",
      answer: "Sim! Ao adquirir, você recebe o repositório completo do sistema para baixar, modificar e instalar onde quiser. A licença é vitalícia e 100% sua."
    },
    {
      question: "Posso instalar em quantos domínios quiser?",
      answer: "Exatamente. Diferente de outras soluções, não limitamos sua instalação. Você pode usar o FinanSaaS em quantos projetos e domínios desejar."
    },
    {
      question: "Quais tecnologias são utilizadas?",
      answer: "O FinanSaaS é desenvolvido em PHP moderno, JavaScript e utiliza banco de dados MySQL, garantindo performance e facilidade de manutenção na maioria das hospedagens."
    },
    {
      question: "O treinamento está incluso?",
      answer: "Sim! Incluímos um treinamento completo em vídeo que ensina desde a instalação básica até as configurações mais avançadas de gateway e webhooks."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Oferecemos suporte individualizado via WhatsApp para garantir que você consiga configurar e rodar sua plataforma sem dores de cabeça."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#020617] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o FinanSaaS para tomar sua decisão com segurança.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="divide-y divide-slate-800">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="py-6"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-emerald-400' : 'text-slate-200 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-emerald-400' : 'text-slate-500'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pt-4 text-slate-400 leading-relaxed text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
