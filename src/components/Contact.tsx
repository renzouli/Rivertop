import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS, REVIEWS } from '../data';

export const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    interest: 'nova-antifluido'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contactos" className="py-24 bg-slate-900 text-slate-100 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            Atención Inmediata
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contáctanos en Gamarra
          </h3>
          <p className="text-slate-300 mt-4 text-base md:text-lg">
            Estamos listos para atender tu pedido, desde un corte para muestrario hasta despachos por mayor a nivel nacional.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          
          {/* Info cards */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Tienda Principal Gamarra</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Jr. Antonio Bazo 1573, Galería Don Ricardo, Semi-sotano, Tienda 008, La Victoria, Lima - Perú.
                </p>
                <span className="text-xs font-semibold text-cyan-400 block mt-2">Referencia: Calle San Cristobal </span>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Central Telefónica</h4>
                <p className="text-slate-300 text-sm">
                  Ventas: (+51) 930-670363<br />
                  WhatsApp Celular: +51 930 670 363
                </p>
                <a
                  href="https://wa.me/51930670363?text=Hola%20Rivertop,%20deseo%20cotizar%20telas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 mt-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chatear ahora en WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Horario de Atención</h4>
                <p className="text-slate-300 text-sm">
                  Lunes a Sábado: 9:00 AM – 7:30 PM<br />
                  Domingos: Sin Atencion
                </p>
                <span className="text-xs font-semibold text-slate-400 block mt-2">Envíos a provincia todos los días habiles </span>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Correo Electrónico</h4>
                <p className="text-slate-300 text-sm">
                  ventas@rivertoptextil.com.pe<br />
                  cotizaciones@rivertop.com
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-slate-800/60 border border-slate-700 rounded-2xl p-8 shadow-2xl relative">
            <h4 className="text-2xl font-bold text-white mb-2">Solicita una Cotización Personalizada</h4>
            <p className="text-sm text-slate-300 mb-6">Completa tus datos y un asesor especializado de Rivertop te enviará los precios mayoristas y muestrario digital en menos de 15 minutos.</p>

            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-xl text-center space-y-2 my-12 animate-fade-in">
                <h5 className="text-xl font-bold">¡Mensaje enviado con éxito!</h5>
                <p className="text-sm">Hemos recibido tu solicitud. Uno de nuestros ejecutivos de cuenta en Gamarra se comunicará contigo de inmediato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Nombre o Razón Social</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ej. Confecciones Textil S.A.C."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Teléfono / WhatsApp</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Ej. 999 888 777"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Correo Electrónico</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="correo@empresa.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Tela de Mayor Interés</label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="nova-antifluido">Nova Antifluido (Uniformes Médicos)</option>
                      <option value="taslan-corrugado">Taslan Corrugado (Shorts Playeros)</option>
                      <option value="bomber">Tela Bomber (Casacas e Impermeables)</option>
                      <option value="taslan-con-forro">Taslan con Forro (Casacas Colegio)</option>
                      <option value="otro">Otras telas / Catálogo General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Mensaje / Detalle del pedido</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Indícanos cuántos metros o rollos requieres, o si necesitas envío a provincia..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Solicitud a Tienda Gamarra</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Reviews */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h4 className="text-2xl font-bold text-white">Confeccionistas Felices en todo el Perú</h4>
            <p className="text-xs text-slate-400 mt-1">Nuestra reputación se construye con cada metro despachado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic mb-4">
                    "{rev.text}"
                  </p>
                </div>
                <div className="border-t border-slate-700/60 pt-3">
                  <h5 className="font-bold text-white text-sm">{rev.name}</h5>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-0.5">
                    <span>{rev.company}</span>
                    <span className="text-cyan-400 font-semibold">{rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto border-t border-slate-800 pt-16">
          <div className="text-center mb-10">
            <h4 className="text-3xl font-bold text-white">Preguntas Frecuentes</h4>
            <p className="text-slate-400 text-sm mt-2">Todo lo que necesitas saber antes de realizar tu compra de telas.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-slate-800/60 border border-slate-700 rounded-xl overflow-hidden transition-colors duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-300 border-t border-slate-700/40 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-800 pt-12 pb-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-white tracking-tight">
              RIVER<span className="text-cyan-400">TOP</span>
            </span>
            <span className="text-xs text-slate-500 border-l border-slate-700 pl-2">
              Inspirados en Gamarra
            </span>
          </div>

          <p className="text-xs text-slate-400 text-center md:text-right">
            © {new Date().getFullYear()} Rivertop Textil S.A.C. Todos los derechos reservados.<br />
            Distribución mayorista y minorista de telas tecnológicas.
          </p>

        </div>
      </footer>

    </section>
  );
};
