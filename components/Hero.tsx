
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200", 
      title: "Agente Financeiro IA",
      desc: "Insights de elite e análise estratégica de negócios em tempo real.",
      label: "INTELIGÊNCIA ARTIFICIAL"
    },
    {
      url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200", 
      title: "Automações & N8N",
      desc: "Gerencie seus fluxos de trabalho e integrações de IA com workflows n8n.",
      label: "AUTOMAÇÃO N8N"
    },
    {
      url: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1200", 
      title: "Conexão WhatsApp",
      desc: "Transforme conversas em dados financeiros automáticos via API Oficial.",
      label: "WHATSAPP BOT"
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", 
      title: "Livro Caixa Completo",
      desc: "Gestão completa de fluxo e auditoria com visão clara de todas as transações.",
      label: "ADMINISTRAÇÃO"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", 
      title: "Dashboard de Métricas",
      desc: "Acompanhe MRR, Churn e faturamento real em um painel profissional.",
      label: "INDICADORES"
    },
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200", 
      title: "White Label Total",
      desc: "Troque logos, cores e domínios. Um SaaS 100% seu para vender com sua marca.",
      label: "PERSONALIZAÇÃO"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
          FinanSaaS Pro: A Plataforma Financeira Definitiva
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto tracking-tight">
          Tenha seu Próprio SaaS <br />
          <span className="text-emerald-600">Com Tecnologia de Elite.</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          O <strong>FinanSaaS Pro</strong> é completo: White-label, Agente de IA, 
          automações n8n e Bot de WhatsApp. Pronto para você usar ou revender.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#pricing" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-emerald-200 transition-all transform hover:-translate-y-1">
            Garantir Acesso Vitalício
          </a>
          <a href="#features" className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
            Ver Funcionalidades
          </a>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          {/* Slider Container */}
          <div className="relative z-10 rounded-[32px] border border-gray-200 bg-white shadow-[0_32px_64px_rgba(0,0,0,0.08)] overflow-hidden p-3 transition-all duration-700">
            <div className="relative h-[300px] md:h-[580px] overflow-hidden rounded-[24px] bg-gray-950">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                  }`}
                >
                  <img 
                    src={slide.url} 
                    alt={slide.title} 
                    className="w-full h-full object-cover opacity-60"
                  />
                  
                  {/* Overlay Informativo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-left">
                    <div className="inline-block px-3 py-1 bg-emerald-500 text-emerald-950 text-[10px] font-black rounded-full mb-4 w-fit tracking-widest uppercase shadow-lg shadow-emerald-500/20">
                      {slide.label}
                    </div>
                    <h3 className="text-white text-3xl md:text-5xl font-black mb-3 leading-tight">{slide.title}</h3>
                    <p className="text-gray-300 text-sm md:text-xl max-w-2xl leading-relaxed">{slide.desc}</p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-emerald-500/80 backdrop-blur-md p-4 rounded-2xl text-white transition-all z-20 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                aria-label="Anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-emerald-500/80 backdrop-blur-md p-4 rounded-2xl text-white transition-all z-20 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                aria-label="Próximo"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

            {/* Pagination Progress Bars */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentSlide ? 'w-10 bg-emerald-500' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Decorative Badges */}
          <div className="absolute -top-6 -right-6 hidden lg:block p-5 bg-white rounded-3xl shadow-2xl border border-gray-100 z-30 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 font-bold text-xl shadow-inner">
                ✓
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-black tracking-widest uppercase">STATUS DO SISTEMA</p>
                <p className="text-base font-black text-gray-900 leading-none mt-1">100% Comercial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
