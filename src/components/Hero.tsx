import React from 'react';
import { ArrowDown, MessageCircle, Ruler, Sparkles } from 'lucide-react';
import { COMPANY_STATS } from '../data';
import heroImg from "@/img/1.png";

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      
      {/* Background Image with watermark / measuring fabric overlay effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80 z-10" />
        
        {/* Subtle Watermark Overlay of person measuring fabric */}
        <div className="absolute inset-0 opacity-10 mix-blend-luminosity filter blur-[1px]">
          <img
            src={heroImg}
            alt="Persona metreando tela en almacén"
            className="w-full h-full object-cover object-center scale-105 transform"
          />
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold mb-6 animate-pulse">
          <Sparkles className="w-4 h-4" />
          <span>Inspirados en la excelencia del Emporio de Gamarra</span>
        </div>

        {/* Brand Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-lg">
          RIVER<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TOP</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
          La tienda líder en venta de <span className="font-semibold text-white">telas antifluido e impermeables</span>. Abasteciendo a los confeccionistas más exigentes del Perú con calidad insuperable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#productos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
          >
            <Ruler className="w-5 h-5" />
            <span>Ver Catálogo de Telas</span>
          </a>
          <a
            href="https://wa.me/51930670363?text=Hola%20Rivertop,%20deseo%20solicitar%20el%20catálogo%20y%20muestras%20de%20telas."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold rounded-xl border border-slate-700 backdrop-blur-sm transition-all hover:border-slate-600"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Solicitar Muestras Gratis</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-4">
          {COMPANY_STATS.map((stat, i) => (
            <div 
              key={i} 
              className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-5 rounded-2xl flex flex-col items-center text-center shadow-xl hover:border-cyan-500/30 transition-all group"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-slate-400 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a href="#nosotros" className="mt-12 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce p-2">
          <ArrowDown className="w-6 h-6" />
        </a>

      </div>
    </section>
  );
};
