import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const location = useLocation();
    const isStudio = location.pathname === '/studio';

    /* Mudança: Atualização da cor de fundo e logo */
    const bgClass = isStudio ? 'bg-black border-t border-gray-800' : 'bg-[#2D1B4E]';
    const textClass = 'text-white';
    const mutedClass = isStudio ? 'text-gray-500' : 'text-purple-200';

    return (
        <footer className={`${bgClass} ${textClass} py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4 w-1/4">
                            <img src="/assets/images/logo.png" alt="Kaptur" className="w-12 h-12" />
                        </div>
                        <p className={`max-w-sm ${mutedClass}`}>
                            Impulsionando negócios através de soluções digitais completas e inovação tecnológica.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-lg mb-4">Produtos</h3>
                        <ul className={`space-y-2 ${mutedClass}`}>
                            <li><Link to="/" className="hover:text-white transition">Kaptur</Link></li>
                            <li><Link to="/studio" className="hover:text-white transition">Kaptur Studio</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Legal</h3>
                        <ul className={`space-y-2 ${mutedClass}`}>
                            <li><Link to="/privacy" className="hover:text-white transition">Privacidade</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition">Termos de Uso</Link></li>
                            <li><Link to="/support" className="hover:text-white transition">Suporte</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`mt-12 pt-8 border-t ${isStudio ? 'border-gray-800' : 'border-purple-800'} text-center ${mutedClass} text-sm`}>
                    <p>&copy; {new Date().getFullYear()} Kaptur. Todos os direitos reservados.</p>
                    <p>Feito por <a style={{ textDecoration: "underline" }} href="https://kineticsolutions.com.br" target="_blank">KSI - Kinetic Solutions</a></p>
                </div>
            </div>
        </footer>
    );
};