
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Crescimento Médio', value: '45%', icon: '📈', color: 'text-emerald-600' },
    { label: 'Satisfação de Clientes', value: '98%', icon: '⭐️', color: 'text-yellow-500' },
    { label: 'Time-to-Market', value: '24h', icon: '⏱️', color: 'text-blue-600' },
    { label: 'Economia Tech', value: 'R$ 50k', icon: '💰', color: 'text-purple-600' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 border-x border-gray-100 first:border-l-0 last:border-r-0">
              <span className="text-3xl mb-2">{stat.icon}</span>
              <span className={`text-3xl md:text-4xl font-extrabold mb-1 ${stat.color}`}>{stat.value}</span>
              <span className="text-gray-500 font-medium text-sm md:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
