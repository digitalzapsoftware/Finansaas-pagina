
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900">
                FINAN<span className="text-emerald-600">SAAS</span> <span className="text-gray-400 font-medium text-sm">PRO</span>
              </span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              A base tecnológica completa para o seu próximo grande negócio digital. Gestão financeira inteligente, automatizada e pronta para vender.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} FinanSaaS Pro - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
