import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import { Calculator as CalcIcon, MessageCircle } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);
  const [garmentCount, setGarmentCount] = useState<number>(30);

  const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  const totalMeters = (garmentCount * selectedProduct.metersPerGarment).toFixed(1);

  const whatsappMessage = `Hola Rivertop, utilicé la calculadora web y deseo cotizar ${totalMeters} metros de tela ${selectedProduct.name} para confeccionar ${garmentCount} prendas.`;

  return (
    <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl mt-12 mb-20">
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white">
          <CalcIcon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Calculadora de Metraje Estimado</h4>
          <p className="text-xs text-slate-300">Planifica tu producción y cotiza el rollo o corte que necesitas al instante.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label htmlFor="product-select" className="block text-sm font-semibold text-slate-200 mb-2">
              1. Selecciona el Tipo de Tela
            </label>
            <select
              id="product-select"
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-medium focus:outline-none focus:border-cyan-500 transition-colors"
            >
              {PRODUCTS.map(product => (
                <option key={product.id} value={product.id}>
                  {product.name} ({product.mainUse.split(',')[0]})
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="garment-count" className="text-sm font-semibold text-slate-200">
                2. Cantidad de Prendas a Confeccionar
              </label>
              <span className="text-sm font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                {garmentCount} prendas
              </span>
            </div>
            <input
              id="garment-count"
              type="range"
              min={10}
              max={500}
              step={10}
              value={garmentCount}
              onChange={(e) => setGarmentCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>10 prendas</span>
              <span>250 prendas</span>
              <span>500 prendas</span>
            </div>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700">
            <span className="text-xs text-slate-400 block mb-1">Rendimiento promedio de la tela elegida:</span>
            <span className="text-sm font-bold text-white block">
              ~{selectedProduct.metersPerGarment} metros por prenda (ancho {selectedProduct.width})
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-xl border border-cyan-500/30 text-center flex flex-col justify-center items-center shadow-lg">
          
          <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-2">
            Metraje Total Recomendado
          </span>
          
          <div className="text-5xl md:text-6xl font-black text-white my-2 flex items-baseline justify-center gap-1">
            {totalMeters}
            <span className="text-2xl font-bold text-slate-400">metros</span>
          </div>

          <p className="text-xs text-slate-400 max-w-xs mt-2 mb-6">
            *Cálculo referencial considerando mermas habituales de corte en confección.
          </p>

          <a
            href={`https://wa.me/51930670363?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl shadow-md transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Cotizar este Metraje</span>
          </a>

        </div>

      </div>

    </div>
  );
};
