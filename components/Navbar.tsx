import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const location = useLocation();
    const isStudio = location.pathname === '/studio';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const bgClass = isStudio ? 'bg-[#1e1e1e]/90 backdrop-blur-md border-b border-gray-800' : 'bg-white/90 backdrop-blur-md shadow-sm';
    /* Mudança: Atualização da cor de texto e fundo para a nova paleta */
    const textClass = isStudio ? 'text-gray-100' : 'text-[#2D1B4E]'; 
    const hoverClass = isStudio ? 'hover:text-purple-400' : 'hover:text-teal-500';
    const buttonClass = isStudio 
        ? 'bg-purple-600 hover:bg-purple-700 text-white' 
        : 'bg-[#2D1B4E] hover:bg-[#1D1036] text-white';

    return (
        <nav className={`fixed w-full z-50 transition-colors duration-300 ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/assets/images/logo.png" alt="Kaptur" className="relative w-10 h-10 flex items-center justify-center" />
                        <div className="flex flex-col">
                            <span className={`font-bold text-xl leading-none tracking-tight ${textClass}`}>
                                Kaptur
                            </span>
                            <span className={`text-xs font-semibold tracking-wide uppercase ${isStudio ? 'text-purple-400' : 'text-teal-500'}`}>
                                {isStudio ? 'Studio' : 'Gravador'}
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? (isStudio ? 'text-white' : 'text-teal-600') : (isStudio ? 'text-gray-400' : 'text-gray-500')} ${hoverClass}`}>
                            Gravador
                        </Link>
                        <Link to="/studio" className={`font-medium transition-colors ${location.pathname === '/studio' ? 'text-purple-400' : (isStudio ? 'text-gray-400' : 'text-gray-500')} ${hoverClass}`}>
                            Studio
                        </Link>
                        
                        <Link to="/download">
                            <button className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 ${buttonClass}`}>
                                <span>Instalar Kaptur</span>
                                <i className="fa-solid fa-download"></i>
                            </button>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${textClass} focus:outline-none`}>
                            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className={`md:hidden absolute w-full ${isStudio ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg border-b border-gray-200`}>
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100/10">
                            Gravador
                        </Link>
                        <Link to="/studio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100/10 text-purple-500">
                            Studio
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};