
import React from 'react';

const features = [
  {
    title: "Agente de IA Integrado",
    desc: "O sistema já vem com IA treinada para análise financeira e tomada de decisão.",
    icon: "🤖"
  },
  {
    title: "Dashboard Moderno",
    desc: "Visualização profissional de MRR, Churn e Burn Rate em tempo real.",
    icon: "📊"
  },
  {
    title: "White-Label Total",
    desc: "Troque logos, cores e nomes em segundos. Venda como seu produto.",
    icon: "🏷️"
  },
  {
    title: "Integração com n8n",
    desc: "Automações inteligentes prontas para escalar seu negócio sem esforço.",
    icon: "🔄"
  },
  {
    title: "Multi-Usuário",
    desc: "Estrutura pronta para times, clientes finais e níveis de permissão.",
    icon: "🔐"
  },
  {
    title: "Código-Fonte Completo",
    desc: "Receba 100% do código para editar e criar novos módulos como quiser.",
    icon: "🧑‍💻"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Arquitetura Pensada para Escalar</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Muito mais que um sistema, uma base tecnológica sólida para você construir seu império digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
