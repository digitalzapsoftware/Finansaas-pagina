
import React from 'react';

const Pricing: React.FC = () => {
  const handleCheckout = () => {
    // URL base do checkout PerfectPay fornecida pelo usuário
    const checkoutBaseUrl = 'https://checkout.perfectpay.com.br/pay/PPU38COUGTE'; 
    
    // Captura todos os parâmetros atuais da URL (?utm_source=facebook&utm_campaign=...)
    const currentParams = window.location.search;
    
    // Concatena a URL de checkout com os parâmetros de rastreio
    // Se o checkoutBaseUrl já tiver um '?', usamos '&', caso contrário usamos '?'
    const separator = checkoutBaseUrl.includes('?') ? '&' : '?';
    const finalUrl = currentParams 
      ? `${checkoutBaseUrl}${currentParams.replace('?', separator)}` 
      : checkoutBaseUrl;

    window.location.href = finalUrl;
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Oferta Exclusiva de Lançamento</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Acesso vitalício ao código-fonte, licença de revenda ilimitada e toda a inteligência do FinanSaaS por um preço simbólico.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Single Highlighted Plan */}
          <div className="bg-emerald-600 p-10 rounded-[40px] shadow-2xl shadow-emerald-200 border-4 border-emerald-400 flex flex-col relative transform hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-emerald-950 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
              ACESSO TOTAL + REVENDA
            </div>
            
            <div className="text-center mb-8 pt-4">
              <h3 className="text-3xl font-black text-white mb-2">FinanSaaS Premium</h3>
              <p className="text-emerald-100 text-sm">Tudo que você precisa para seu próprio SaaS.</p>
            </div>

            <div className="text-center mb-10">
              <div className="flex justify-center items-start gap-1">
                <span className="text-emerald-200 text-2xl font-bold mt-2">R$</span>
                <span className="text-7xl font-black text-white">19,90</span>
              </div>
              <span className="text-emerald-200 font-medium text-sm">Pagamento Único • Sem Mensalidades</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                'Código-Fonte 100% Editável',
                'Direito de Revenda Ilimitado', 
                'White-Label Total (Troca de Marca)', 
                'Agente de IA Integrado', 
                'Dashboard Financeiro Completo', 
                'Integração n8n Pronta',
                'Atualizações Vitalícias'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                   <div className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                     <span className="text-yellow-400 text-xs">✓</span>
                   </div>
                   {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={handleCheckout}
              className="w-full py-5 bg-white hover:bg-emerald-50 text-emerald-700 font-black text-xl rounded-2xl transition-all shadow-xl uppercase tracking-tight"
            >
              Garantir Meu Acesso Agora
            </button>
            
            <p className="mt-6 text-center text-emerald-100 text-xs">
              🔒 Pagamento seguro via PerfectPay. Entrega imediata no seu e-mail.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <img src="https://logodownload.org/wp-content/uploads/2014/10/visa-logo-1.png" alt="Visa" className="h-4 object-contain" />
           <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" alt="Mastercard" className="h-6 object-contain" />
           <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-2.png" alt="PIX" className="h-5 object-contain" />
        </div>
        
        <p className="mt-8 text-center text-gray-400 text-sm">
          Garantia incondicional de 7 dias. Não gostou? Devolvemos seu dinheiro.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
