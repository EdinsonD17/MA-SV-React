import React, { useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-900">
            <div className="container">
                <div className="text-center mb-16 pt-10">
                    <span className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-2 block animate-fade-in">¿Qué hacemos?</span>
                    <h1 className="text-4xl md:text-5xl text-white font-oswald uppercase mb-6 animate-fade-in-up">Nuestros Servicios</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto animate-fade-in-up delay-100">
                        Ofrecemos un servicio integral para todo tipo de vehículos. Nuestro taller cuenta con equipamiento adecuado para realizar mantenimientos y reparaciones de alta calidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <ServiceCard {...service} />
                        </div>
                    ))}

                    {/* Add more detailed service cards if needed, or repeat logic for demo */}
                </div>
            </div>
        </div>
    );
};

export default Services;
