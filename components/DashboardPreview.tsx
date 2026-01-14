
import React from 'react';

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Interface de Alta Performance
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Visualize cada detalhe do seu faturamento em um painel projetado para clareza e velocidade.
          </p>
        </div>

        {/* Mockup do Sistema via Imagem */}
        <div className="relative max-w-6xl mx-auto px-2">
          {/* Efeito de brilho atrás da imagem */}
          <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] -z-10 rounded-full scale-90"></div>

          {/* Moldura do Navegador/Sistema */}
          <div className="bg-white rounded-[24px] md:rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-700">
            {/* Barra de título simulada do navegador */}
            <div className="bg-gray-50 border-b border-gray-100 px-4 md:px-6 py-3 md:py-4 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto bg-white border border-gray-200 rounded-lg px-3 md:px-10 py-1 text-[10px] md:text-xs text-gray-400 font-medium">
                app.finansaaspro.com.br
              </div>
            </div>

            {/* Imagem Real do Dashboard */}
            <div className="relative aspect-video bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                alt="Dashboard FinanSaaS Pro Desktop View" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay sutil para dar profundidade */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.02)] pointer-events-none"></div>
            </div>
          </div>

          {/* Selo flutuante de qualidade */}
          <div className="absolute -bottom-6 -right-2 md:right-10 bg-[#0F172A] text-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-800 z-20 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-xl md:text-2xl">
                🚀
              </div>
              <div className="text-left">
                <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Tecnologia</p>
                <p className="text-sm md:text-lg font-black leading-none mt-1">100% Responsivo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
