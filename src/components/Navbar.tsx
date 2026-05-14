import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Productos', href: '#productos' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-slate-900/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                RIVER<span className="text-cyan-400">TOP</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium -mt-1">
                Textiles Gamarra
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-cyan-400 font-medium text-sm transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+51930670363"
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-slate-800/80 rounded-lg border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>(+51) 930670363</span>
            </a>
            <a
              href="https://wa.me/51930670363?text=Hola%20Rivertop,%20deseo%20cotizar%20telas%20antifluido%20e%20impermeables."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-lg shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-300 hover:text-white p-2"
              aria-label="Menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800 transition-all">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="https://wa.me/51930670363?text=Hola%20Rivertop,%20deseo%20cotizar%20telas%20antifluido."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escríbenos por WhatsApp</span>
              </a>
              <a
                href="tel:+51930670363"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-slate-300 bg-slate-800 rounded-lg border border-slate-700"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Llamar a Tienda Gamarra</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
