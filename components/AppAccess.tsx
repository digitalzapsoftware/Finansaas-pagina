
import React from 'react';

const AppAccess: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-emerald-950 rounded-[48px] overflow-hidden relative border border-emerald-800 shadow-2xl">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 p-8 md:p-16 lg:p-20">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Interface de Última Geração
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Seu SaaS na Palma <br />
                da <span className="text-emerald-400">Sua Mão.</span>
              </h2>
              <p className="text-emerald-100/70 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                O FinanSaaS foi projetado para oferecer uma experiência impecável em qualquer dispositivo. 
                Seus clientes terão acesso a uma plataforma rápida, intuitiva e totalmente responsiva.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                  <div className="text-2xl mb-3">📱</div>
                  <h4 className="text-white font-bold mb-1">Mobile First</h4>
                  <p className="text-emerald-100/50 text-sm">Gestão completa otimizada para smartphones.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                  <div className="text-2xl mb-3">⚡</div>
                  <h4 className="text-white font-bold mb-1">Alta Performance</h4>
                  <p className="text-emerald-100/50 text-sm">Carregamento instantâneo de dados e gráficos.</p>
                </div>
              </div>

              <a href="#pricing" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-2xl font-black transition-all group shadow-xl shadow-emerald-500/20">
                QUERO ACESSAR AGORA
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </a>
            </div>

            <div className="lg:w-1/2 relative">
              {/* Desktop Mockup Representation */}
              <div className="relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="bg-gray-800 rounded-xl p-1.5 shadow-2xl">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                      alt="Desktop View" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Mockup Representation */}
              <div className="absolute -bottom-10 -right-4 md:-right-10 z-30 w-32 md:w-48 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-900 rounded-[32px] p-2 shadow-2xl border-2 border-white/10">
                  <div className="bg-white rounded-[24px] overflow-hidden aspect-[9/19]">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" 
                      alt="Mobile View" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Speaker and Button detail */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-gray-900 rounded-full"></div>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -top-6 -left-6 z-40 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-xl text-emerald-600">📈</div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Live Stats</p>
                    <p className="text-sm font-black text-gray-900">Sincronizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppAccess;
