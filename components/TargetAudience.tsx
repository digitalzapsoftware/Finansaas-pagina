
import React from 'react';

const targets = [
  { name: 'Empreendedores', desc: 'Lance seu MVP em tempo recorde e foque no marketing.', icon: '🚀' },
  { name: 'Agências', desc: 'Ofereça valor agregado para seus clientes de consultoria.', icon: '🏢' },
  { name: 'Contadores', desc: 'Modernize sua entrega com um sistema financeiro premium.', icon: '📑' },
  { name: 'Desenvolvedores', desc: 'Economize centenas de horas de desenvolvimento base.', icon: '🧑‍💻' },
  { name: 'Produtores Digitais', desc: 'Crie uma nova fonte de receita recorrente para sua audiência.', icon: '💻' },
  { name: 'Investidores', desc: 'Uma base sólida para criar um ecossistema de SaaS.', icon: '💎' },
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Para Quem é o FinanSaaS?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ideal para quem quer empreender no mundo do software sem precisar começar do absoluto zero.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((t, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all border border-transparent hover:border-gray-100">
              <div className="text-3xl">{t.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{t.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
