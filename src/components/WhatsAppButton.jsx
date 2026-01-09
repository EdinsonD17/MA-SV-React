import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
            style={{ backgroundColor: '#25D366' }}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} fill="white" />
        </a>
    );
};

export default WhatsAppButton;
