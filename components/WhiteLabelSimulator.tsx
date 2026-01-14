
import React, { useState } from 'react';

const WhiteLabelSimulator: React.FC = () => {
  const [brandName, setBrandName] = useState('Minha Marca');
  const [primaryColor, setPrimaryColor] = useState('#10b981'); // Emerald 500

  const colors = [
    { name: 'Esmeralda', hex: '#10b981' },
    { name: 'Oceano', hex: '#0ea5e9' },
    { name: 'Índigo', hex: '#6366f1' },
    { name: 'Vinho', hex: '#e11d48' },
    { name: 'Âmbar', hex: '#f59e0b' },
    { name: 'Roxo', hex: '#8b5cf6' },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Esquerdo: Controles */}
          <div className="lg:w-5/12">
            <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Simulador White-Label
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Sua Identidade, <br />
              <span style={{ color: primaryColor }} className="transition-colors duration-500">Nosso Motor.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Troque o nome, as cores e a logomarca em segundos. O sistema é 100% editável para que seus clientes nunca saibam que você não o desenvolveu do zero.
            </p>

            <div className="space-y-6 bg-white p-8 rounded-[32px] border border-slate-200 shadow-xl shadow-slate-200/50">
              <div>
                <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Nome da Sua Marca</label>
                <input 
                  type="text" 
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 outline-none transition-all"
                  style={{ borderColor: `${primaryColor}40`, ringColor: primaryColor }}
                  maxLength={20}
                />
              </div>

              <div>
                <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Cor Principal do Sistema</label>
                <div className="flex flex-wrap gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => setPrimaryColor(c.hex)}
                      className={`w-10 h-10 rounded-full border-4 transition-all transform hover:scale-110 ${primaryColor === c.hex ? 'border-white ring-2 ring-slate-300' : 'border-transparent'}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Preview Realtime */}
          <div className="lg:w-7/12 w-full relative">
            <div className="relative z-10 bg-[#0F172A] rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-800 overflow-hidden flex h-[450px] transition-all duration-500">
              
              {/* Mini Sidebar */}
              <div className="w-48 bg-slate-900/50 border-r border-slate-800 p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-10 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500" style={{ backgroundColor: primaryColor }}>
                    <span className="text-white font-black text-xs">{brandName.charAt(0).toUpperCase()}</span>
                  </div>
                  <span className="text-white font-bold text-sm truncate">{brandName}</span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full rounded-full transition-colors duration-500" style={{ backgroundColor: `${primaryColor}40` }}></div>
                  <div className="h-2 w-3/4 bg-slate-800 rounded-full"></div>
                  <div className="h-2 w-5/6 bg-slate-800 rounded-full"></div>
                </div>
              </div>

              {/* Mini Dashboard Content */}
              <div className="flex-grow p-8 bg-slate-950">
                <div className="flex justify-between items-center mb-8">
                  <div className="h-4 w-32 bg-slate-800 rounded-full"></div>
                  <div className="w-10 h-10 rounded-full bg-slate-800"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                    <div className="h-2 w-12 bg-slate-700 rounded-full mb-3"></div>
                    <div className="h-5 w-20 rounded-full transition-colors duration-500" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}></div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                    <div className="h-2 w-12 bg-slate-700 rounded-full mb-3"></div>
                    <div className="h-5 w-20 bg-slate-800 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl h-32 relative overflow-hidden">
                   {/* Mini Graph simulation */}
                   <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 transition-colors duration-500" style={{ backgroundColor: primaryColor }}></div>
                   <div className="relative z-10 flex flex-col gap-2">
                      <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                      <div className="h-6 w-32 rounded-full transition-colors duration-500" style={{ backgroundColor: primaryColor }}></div>
                   </div>
                </div>
              </div>
            </div>

            {/* Float Decorators */}
            <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 z-20 transform rotate-3 animate-bounce">
              <span className="text-sm font-black text-slate-900">100% Editável ✨</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 z-20 transform -rotate-3 transition-colors duration-500" style={{ borderColor: primaryColor }}>
               <span className="text-xs font-bold">Domínio: app.{brandName.toLowerCase().replace(/\s/g, '')}.com</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhiteLabelSimulator;
