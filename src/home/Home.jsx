import React, { useEffect } from 'react';
import Hero from './Hero';
import HomeServices from './HomeServices';
import WhyChooseUs from './WhyChooseUs';
import { MessageCircle } from 'lucide-react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <HomeServices />
            <WhyChooseUs />

            {/* Final CTA Section */}
            <section className="py-20 relative overflow-hidden bg-slate-900 border-t border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-oswald text-white mb-6 uppercase">¿Su auto necesita atención?</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        No espere a que un ruido extraño se convierta en una reparación costosa. Agende su diagnóstico hoy mismo.
                    </p>
                    <a href="https://wa.me/51999999999" target="_blank" className="btn btn-primary text-lg px-10 py-4 shadow-xl hover:shadow-amber-500/20">
                        <MessageCircle size={24} /> Contactar Ahora
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Home;
