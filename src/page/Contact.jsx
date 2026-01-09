import React, { useEffect } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-900">
            <div className="container pt-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl text-white font-oswald uppercase mb-6">Contáctanos</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Estamos listos para ayudarle. Visite nuestro taller o envíenos un mensaje.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-slate-800 p-8 rounded-xl border border-white/5 space-y-8 h-fit">
                        <h3 className="text-2xl text-white font-oswald uppercase mb-6 border-b border-white/10 pb-4">Información de Contacto</h3>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 text-amber-500">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase mb-1">Dirección</h4>
                                <p className="text-slate-400">Av. Hoyos Rubio 1603<br />Cajamarca, Perú</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 text-amber-500">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase mb-1">Teléfono / WhatsApp</h4>
                                <p className="text-slate-400">+51 999 999 999</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 text-amber-500">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase mb-1">Horario de Atención</h4>
                                <p className="text-slate-400">Lunes - Sábado: 8:00 AM - 6:00 PM</p>
                                <p className="text-slate-500 text-sm">Domingo: Cerrado</p>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="mt-8 h-64 rounded-lg overflow-hidden border border-white/10 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.558832148286!2d-78.50854442526564!3d-7.15858057088661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25ae158603389%3A0xc3e4e96395b16954!2sAv.%20Hoyos%20Rubio%201603%2C%20Cajamarca%2006002!5e0!3m2!1sen!2spe!4v1704810000000!5m2!1sen!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', opacity: 0.8 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa de Ubicación MA&SV"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-800 p-8 rounded-xl border border-white/5">
                        <h3 className="text-2xl text-white font-oswald uppercase mb-6">Envíenos un mensaje</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300 uppercase">Nombre</label>
                                    <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="Su nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-300 uppercase">Teléfono</label>
                                    <input type="tel" id="phone" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="Su teléfono" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300 uppercase">Email (Opcional)</label>
                                <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="correo@ejemplo.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium text-slate-300 uppercase">Servicio de interés</label>
                                <select id="service" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors">
                                    <option value="">Seleccione una opción...</option>
                                    <option value="mantenimiento">Mantenimiento Preventivo</option>
                                    <option value="diagnostico">Diagnóstico Electrónico</option>
                                    <option value="mecanica">Reparación Mecánica</option>
                                    <option value="electricidad">Electricidad</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300 uppercase">Mensaje</label>
                                <textarea id="message" rows="4" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="¿En qué podemos ayudarle?"></textarea>
                            </div>

                            <button type="button" className="w-full btn btn-primary justify-center py-4">
                                <Send size={20} /> Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
