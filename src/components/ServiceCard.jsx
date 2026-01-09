import React from 'react';

const ServiceCard = ({ title, description, icon: Icon }) => {
    return (
        <div className="bg-slate-800 p-8 rounded-lg border border-white/5 hover:-translate-y-2 hover:shadow-lg hover:border-orange-500/30 transition-all duration-300 relative group overflow-hidden"
            style={{ backgroundColor: 'var(--secondary-dark)' }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="mb-6 text-amber-500">
                <Icon size={48} strokeWidth={1.5} />
            </div>

            <h3 className="text-xl mb-3 text-white font-bold font-oswald uppercase">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default ServiceCard;
