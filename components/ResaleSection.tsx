
import React from 'react';

const ResaleSection: React.FC = () => {
  return (
    <section id="revenda" className="py-24 bg-emerald-950 text-white overflow-hidden relative scroll-mt-24">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/50 skew-x-[-15deg] translate-x-1/2 -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-emerald-800 text-emerald-100 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Oportunidade de Negócio
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Direito de Uso + <br />
              <span className="text-emerald-400">Direito de Revenda</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-emerald-800 rounded-xl flex items-center justify-center text-2xl">✅</div>
                <p className="text-emerald-100 text-lg"><span className="font-bold text-white">White-Label Total:</span> Troque nome, logo e cores. Remova qualquer referência ao criador original.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-emerald-800 rounded-xl flex items-center justify-center text-2xl">✅</div>
                <p className="text-emerald-100 text-lg"><span className="font-bold text-white">Revenda como seu:</span> Crie planos mensais, anuais ou vitalícios e fique com 100% do lucro.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-emerald-800 rounded-xl flex items-center justify-center text-2xl">✅</div>
                <p className="text-emerald-100 text-lg"><span className="font-bold text-white">Sem Royalties:</span> Pague uma vez, venda infinitas vezes sem taxas extras ou mensalidades.</p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
              <p className="text-2xl font-bold mb-2">Ideal para Agências e Infoprodutores</p>
              <p className="text-emerald-200">Crie um produto high ticket de revenda rápida ou gere renda passiva com mensalidades.</p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-emerald-500 rounded-full blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
              <div className="bg-white text-gray-900 p-8 rounded-[40px] shadow-2xl shadow-black/50 border border-gray-100 max-w-sm transform rotate-2">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl">S</div>
                  <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">SEU PRODUTO</div>
                </div>
                <h4 className="text-2xl font-black mb-1">Seu Nome SaaS</h4>
                <p className="text-gray-500 text-sm mb-6">Gestão Financeira Premium</p>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                </div>
                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-lg text-emerald-600">Oferta Especial</span>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Adquirir</button>
                </div>
              </div>
              {/* Badge indicating ownership */}
              <div className="absolute -bottom-6 -right-6 p-4 bg-yellow-400 text-emerald-950 rounded-2xl shadow-xl font-bold flex items-center gap-2 transform -rotate-3">
                🏷️ 100% White-Label
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResaleSection;
