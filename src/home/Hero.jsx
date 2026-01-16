import React from 'react';
import { ShieldCheck, Wrench, CalendarCheck, MessageCircle } from 'lucide-react';

import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden isolate">
            {/* Background Image */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${heroBg})` }}
            ></div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent"></div>

            <div className="container py-20 relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-amber-500/50 bg-amber-500/10 text-amber-500 text-sm font-bold tracking-wider mb-6 animate-fade-in-up">
                        <ShieldCheck size={16} /> SU TALLER DE CONFIANZA
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-oswald font-bold uppercase leading-tight mb-6">
                        Mantenimiento y <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Reparación Automotriz</span>
                    </h1>

                    <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                        Especialistas en mecánica, electricidad y electrónica. Diagnósticos precisos y atención honesta para garantizar el mejor rendimiento de su vehículo.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a href="https://wa.me/51930705419?text=Hola,%20quisiera%20cotizar%20una%20reparaci%C3%B3n" target="_blank" className="btn btn-primary text-base px-8 py-4">
                            <MessageCircle size={20} /> Cotizar Reparación
                        </a>
                        <a href="#services" className="btn btn-outline text-base px-8 py-4">
                            Ver Servicios
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                        <div className="flex items-center gap-3 text-slate-400">
                            <Wrench className="text-amber-500" />
                            <span>Diagnóstico Preciso</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400">
                            <CalendarCheck className="text-amber-500" />
                            <span>Atención Rápida</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
