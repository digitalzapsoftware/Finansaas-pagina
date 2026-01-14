
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-200">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            FINAN<span className="text-emerald-600">SAAS</span> <span className="text-gray-400 font-medium">PRO</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-emerald-600 transition-colors">Funcionalidades</a>
          <a href="#ai-agent" className="hover:text-emerald-600 transition-colors">Agente IA</a>
          <a href="#revenda" className="hover:text-emerald-600 transition-colors">Revenda</a>
          <a href="#pricing" className="hover:text-emerald-600 transition-colors">Preços</a>
        </div>

        <div className="md:hidden">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
