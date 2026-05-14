import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data';
import { Ruler, ShieldCheck, Waves, Wind, Layers, MessageCircle, ExternalLink, Check } from 'lucide-react';
import { Calculator } from './Calculator';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeColor, setActiveColor] = useState<{ [key: string]: string }>({
    "nova-antifluido": PRODUCTS[0].colors[0].name,
    "taslan-corrugado": PRODUCTS[1].colors[0].name,
    "bomber": PRODUCTS[2].colors[0].name,
    "taslan-con-forro": PRODUCTS[3].colors[0].name,
  });

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'nova-antifluido':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'taslan-corrugado':
        return <Waves className="w-5 h-5 text-amber-400" />;
      case 'bomber':
        return <Wind className="w-5 h-5 text-cyan-400" />;
      case 'taslan-con-forro':
        return <Layers className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const getBadgeText = (id: string) => {
    switch (id) {
      case 'nova-antifluido':
        return 'Especial Salud / Médico';
      case 'taslan-corrugado':
        return 'Especial Playa / Verano';
      case 'bomber':
        return 'Especial Outdoor / Lluvia';
      case 'taslan-con-forro':
        return 'Especial Promociones Escolares';
      default:
        return 'Calidad Premium';
    }
  };

  return (
    <section id="productos" className="py-24 bg-slate-950 text-slate-100 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            Catálogo Exclusivo
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Nuestros Productos Estrella
          </h3>
          <p className="text-slate-300 mt-4 text-base md:text-lg">
            Desarrollados con los más altos estándares para garantizar durabilidad, acabado impecable y protección total en cada confección.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Product Top: Images & Badges */}
              <div className="relative">
                <div className="grid grid-cols-2 h-64 overflow-hidden">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={`Textura de tela ${product.name}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-slate-950/20" />
                    <span className="absolute bottom-2 left-2 text-[11px] font-bold bg-slate-900/80 px-2.5 py-1 rounded-md text-slate-200 border border-slate-700">
                      Muestra Textil
                    </span>
                  </div>
                  <div className="relative group overflow-hidden">
                    <img 
                      src={product.applicationImage} 
                      alt={`Aplicación de tela ${product.name}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-slate-950/20" />
                    <span className="absolute bottom-2 right-2 text-[11px] font-bold bg-slate-900/80 px-2.5 py-1 rounded-md text-slate-200 border border-slate-700">
                      Uso en Confección
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-slate-900/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/80 flex items-center gap-2 shadow-lg">
                  {getProductIcon(product.id)}
                  <span className="text-xs font-bold tracking-wide text-white">
                    {getBadgeText(product.id)}
                  </span>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-6 md:p-8 flex-grow space-y-6">
                
                <div>
                  <h4 className="text-2xl md:text-3xl font-extrabold text-white">
                    {product.name}
                  </h4>
                  <p className="text-sm font-medium text-cyan-400 mt-1">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Main Use Highlight */}
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60">
                  <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider mb-1">
                    Uso Principal Recomendado:
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {product.mainUse}
                  </span>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800 text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">Gramaje</span>
                    <span className="text-xs font-bold text-white">{product.weight}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">Ancho</span>
                    <span className="text-xs font-bold text-white">{product.width}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">Composición</span>
                    <span className="text-xs font-bold text-white truncate px-1 block">{product.composition}</span>
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <span className="text-xs font-semibold text-slate-300 block mb-3 uppercase tracking-wider">
                    Atributos Destacados:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Color Selector Simulator */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Colores de Stock:
                    </span>
                    <span className="text-xs font-bold text-cyan-400">
                      {activeColor[product.id] || product.colors[0].name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => {
                      const isActive = activeColor[product.id] === c.name;
                      return (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => setActiveColor({ ...activeColor, [product.id]: c.name })}
                          className={`w-7 h-7 rounded-full transition-transform border-2 ${
                            isActive ? 'scale-125 border-cyan-400 shadow-md shadow-cyan-400/20' : 'border-slate-700 hover:scale-110'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                          aria-label={`Seleccionar color ${c.name}`}
                        />
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Product Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Ficha Técnica Completa</span>
                </button>

                <a
                  href={`https://wa.me/51930670363?text=Hola%20Rivertop,%20deseo%20cotizar%20la%20tela%20${encodeURIComponent(product.name)}.%20Por%20favor%20bríndeme%20precio%20por%20rollo%20y%20muestrario.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar Rollo</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Calculator Section */}
        <Calculator />

      </div>

      {/* Modal Ficha Técnica */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProduct(null)}
              type="button"
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 rounded-full p-2"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              {getProductIcon(selectedProduct.id)}
              <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {selectedProduct.description}
            </p>

            <div className="space-y-6">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Especificaciones Técnicas</h4>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-200">
                  <div><strong className="text-slate-400">Gramaje:</strong> {selectedProduct.weight}</div>
                  <div><strong className="text-slate-400">Ancho Útil:</strong> {selectedProduct.width}</div>
                  <div className="col-span-2"><strong className="text-slate-400">Composición:</strong> {selectedProduct.composition}</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Aplicación Ideal</h4>
                <p className="text-xs text-slate-300 bg-slate-800/40 p-3 rounded-lg border border-slate-700/50">
                  {selectedProduct.mainUse}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Ventajas Diferenciales</h4>
                <ul className="space-y-1 text-xs text-slate-200">
                  {selectedProduct.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Ruler className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex gap-4">
                <a
                  href={`https://wa.me/51930670363?text=Hola%20Rivertop,%20deseo%20comprar%20rollos%20de%20la%20tela%20${encodeURIComponent(selectedProduct.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white font-bold rounded-xl text-center text-xs shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir Muestrario y Cotización</span>
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  type="button"
                  className="py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs"
                >
                  Cerrar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
