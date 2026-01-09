import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo-new.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm py-2' : 'bg-slate-900/90 py-4'}`}
            style={{ backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.95)' }}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img src={logo} alt="MA&SV Logo" className="h-12 w-auto" />
                    <div className="flex flex-col">
                        <span className="text-amber-500 font-bold text-xl leading-none font-oswald tracking-wide">MA&SV</span>
                        <span className="text-slate-200 text-xs font-semibold tracking-[0.2em]">AUTOMOTRIZ</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium uppercase tracking-wider relative py-1 hover:text-amber-500 transition-colors ${location.pathname === link.path ? 'text-amber-500 after:w-full' : 'text-slate-300 after:w-0'}`}
                            style={{ position: 'relative' }}
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 w-0 hover:w-full"></span>
                        </Link>
                    ))}
                    <a href="https://wa.me/51999999999" target="_blank" className="btn btn-primary text-sm px-5 py-2">
                        <Phone size={16} /> Agendar Cita
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '80px', height: 'calc(100vh - 80px)' }}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="text-2xl font-oswald font-bold text-white hover:text-amber-500"
                    >
                        {link.name}
                    </Link>
                ))}
                <a href="https://wa.me/51999999999" target="_blank" className="btn btn-primary mt-4">
                    <Phone size={20} /> Agendar Cita
                </a>
            </div>
        </header>
    );
};

export default Navbar;
