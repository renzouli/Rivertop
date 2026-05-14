import React from 'react';
import { Droplets, Wind, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import aboutImg from "@/img/about.png";

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            Nuestra Esencia Textil
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Nacidos en Gamarra, Diseñados para Proteger
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* History & Identity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Narrative */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-sm font-semibold border border-slate-700">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>Inspiración y Trayectoria</span>
            </div>
            
            <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              La Historia de <span className="text-cyan-400">Rivertop</span>
            </h4>
            
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              Con raíces profundas en el corazón comercial de <strong className="text-white">Gamarra</strong>, Rivertop nació de la necesidad de ofrecer a los confeccionistas peruanos telas de tecnología avanzada y rendimiento superior. Al igual que los grandes referentes del sector, nos enfocamos en proveer insumos que marcan la diferencia en el acabado final de cada prenda.
            </p>

            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              Nos especializamos exclusivamente en la comercialización de <strong className="text-white">telas antifluido e impermeables</strong> de alta durabilidad. Nuestro compromiso es garantizar metrajes exactos, colores de alta solidez y entregas puntuales para potenciar la producción de uniformes médicos, ropa deportiva y casacas institucionales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/80">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Metraje Exacto</h5>
                  <p className="text-xs text-slate-400 mt-1">Garantía total en la medida de cada rollo y corte.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/80">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Stock Permanente</h5>
                  <p className="text-xs text-slate-400 mt-1">Variedad de colores y disponibilidad inmediata.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <img
                src={aboutImg}
                alt="Rollos de tela de alta calidad en Rivertop Gamarra"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-6 rounded-xl border border-slate-700">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider block mb-1">Tecnología de Vanguardia</span>
                <h5 className="text-lg font-bold text-white mb-2">¿Qué es una tela Antifluido?</h5>
                <p className="text-xs text-slate-300">
                  Es un textil tratado con resinas y químicos repelentes que crean una barrera protectora invisible, evitando que los fluidos corporales o líquidos externos penetren en la fibra.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Benefits of our Fabrics Grid */}
        <div className="mt-16 pt-16 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-white">¿Por qué elegir las telas de Rivertop?</h4>
            <p className="text-sm text-slate-400 mt-2">Nuestras telas están sometidas a rigurosas pruebas de laboratorio para asegurar el máximo rendimiento en confección.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-800/40 border border-slate-700/80 p-8 rounded-2xl hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Droplets className="w-6 h-6" />
              </div>
              <h5 className="text-xl font-bold text-white mb-3">Repelencia Certificada</h5>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nuestras telas antifluido bloquean el paso de salpicaduras de agua, sangre o químicos ligeros, brindando seguridad total al usuario sin sacrificar suavidad.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/80 p-8 rounded-2xl hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Wind className="w-6 h-6" />
              </div>
              <h5 className="text-xl font-bold text-white mb-3">Transpirabilidad Confortable</h5>
              <p className="text-slate-300 text-sm leading-relaxed">
                A diferencia de los plásticos comunes, el tejido inteligente permite la libre circulación del vapor corporal, manteniendo la frescura en jornadas de trabajo largas.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/80 p-8 rounded-2xl hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h5 className="text-xl font-bold text-white mb-3">Solidez ante el Lavado</h5>
              <p className="text-slate-300 text-sm leading-relaxed">
                Los colores se mantienen vivos y la textura intacta incluso después de decenas de ciclos de lavado industrial, asegurando una inversión duradera.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
