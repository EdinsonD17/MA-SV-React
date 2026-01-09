import React from 'react';
import { ShieldCheck, History, Laptop } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: ShieldCheck,
            title: "Honestidad Garantizada",
            description: "Sin cobros ocultos ni reparaciones innecesarias. Le explicamos cada detalle del diagnóstico."
        },
        {
            icon: History,
            title: "Experiencia Comprobada",
            description: "Atendiendo Cajamarca desde 2019 con un equipo técnico en constante capacitación."
        },
        {
            icon: Laptop,
            title: "Tecnología Moderna",
            description: "Utilizamos escáneres y equipos de diagnóstico de última generación para precisión total."
        }
    ];

    return (
        <section className="py-20 bg-slate-800/50" style={{ backgroundColor: '#162033' }}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-2 block">Nuestros Valores</span>
                        <h2 className="text-3xl md:text-4xl font-oswald text-white mb-6 uppercase">¿Por qué elegir <br /><span className="text-amber-500">MA&SV Automotriz?</span></h2>
                        <div className="w-20 h-1 bg-amber-500 rounded-full mb-8"></div>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Nos diferenciamos por nuestra transparencia, compromiso y la calidad técnica de nuestro equipo. En MA&SV, entendemos que su vehículo es una inversión importante.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-500">
                                        <feature.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1 font-oswald">{feature.title}</h4>
                                        <p className="text-slate-400 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                        {/* Using hero-bg as a placeholder, purely decorative */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('/src/assets/hero-bg.png')` }}
                        ></div>
                        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 text-center max-w-xs">
                                <p className="text-4xl font-bold text-white mb-2">RUC</p>
                                <p className="text-2xl text-amber-500 font-mono mb-4">20609499363</p>
                                <p className="text-slate-300 text-sm">Empresa 100% formal, segura y confiable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
