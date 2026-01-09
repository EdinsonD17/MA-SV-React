import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';

const HomeServices = () => {
    return (
        <section id="services" className="py-20 bg-slate-900">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl text-white font-oswald uppercase mb-4">Nuestros Servicios</h2>
                    <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-slate-400">
                        Soluciones integrales para el cuidado de su vehículo con tecnología de punta y personal calificado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.map(service => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
