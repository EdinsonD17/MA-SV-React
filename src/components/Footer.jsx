import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-16 pb-8 border-t border-white/5" style={{ backgroundColor: '#020617' }}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-oswald text-white mb-2">MA&SV <span className="text-amber-500">AUTOMOTRIZ</span></h2>
                        <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto md:mx-0">
                            Su taller de confianza en Cajamarca. Especialistas en mecánica, electricidad y electrónica automotriz.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all text-slate-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all text-slate-300">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-oswald text-white mb-6 uppercase tracking-wider">Enlaces Rápidos</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li><Link to="/" className="hover:text-amber-500 transition-colors">Inicio</Link></li>
                            <li><Link to="/servicios" className="hover:text-amber-500 transition-colors">Servicios</Link></li>
                            <li><Link to="/contacto" className="hover:text-amber-500 transition-colors">Contacto</Link></li>
                            <li><a href="https://wa.me/51999999999" target="_blank" className="hover:text-amber-500 transition-colors">Agendar Cita</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-oswald text-white mb-6 uppercase tracking-wider">Contacto</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start gap-3 justify-center md:justify-start">
                                <MapPin size={20} className="text-amber-500 shrink-0 mt-1" />
                                <span>Av. Hoyos Rubio 1603<br />Cajamarca, Perú</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone size={20} className="text-amber-500 shrink-0" />
                                <span>+51 999 999 999</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Clock size={20} className="text-amber-500 shrink-0" />
                                <span>Lun - Sab: 8:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} MA&SV Automotriz S.R.L. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
