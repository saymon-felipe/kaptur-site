import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans pt-20">
            {/* Header Section */}
            <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-20">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100 opacity-50 blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-[#2D1B4E] uppercase bg-blue-100 rounded-full">
                            Documentação Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D1B4E] leading-tight mb-6">
                            Termos de <span className="text-teal-500">Uso.</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Última atualização: {new Date().toLocaleDateString('pt-BR')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-blue prose-lg max-w-none text-gray-600 space-y-10">
                        
                        {/* Beta Warning Box */}
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-r-xl shadow-sm">
                            <h3 className="text-[#2D1B4E] font-bold text-xl mb-3 flex items-center gap-2">
                                <i className="fa-solid fa-flask-vial text-amber-600"></i> Aviso de Fase Beta
                            </h3>
                            <p className="leading-relaxed">
                                O <strong>Kaptur</strong> e o <strong>Kaptur Studio</strong> operam atualmente em versão Beta. 
                                Como engenheiros, trabalhamos para mitigar falhas, mas bugs e interrupções podem ocorrer. 
                                Patches de correção serão lançados periodicamente conforme a evolução do produto.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#2D1B4E]">1. Licença e Gratuidade</h2>
                            <p>
                                Atualmente, o uso da extensão e do studio é oferecido de forma <strong>totalmente gratuita</strong>. 
                                Reservamo-nos o direito de, no futuro, introduzir modelos de precificação para o software completo ou 
                                funcionalidades específicas sob o modelo de assinatura ou pagamento único.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#2D1B4E]">2. Kaptur Studio</h2>
                            <p>
                                O Kaptur Studio é uma plataforma de edição local. O usuário é o único responsável pelo 
                                conteúdo processado. Recomendamos salvar gravações importantes durante o período Beta.
                            </p>
                        </div>

                        <div className="space-y-4 border-t pt-10">
                            <p className="text-sm">
                                Tem dúvidas sobre nossos termos? <Link to="/support" className="text-teal-600 font-bold hover:underline">Entre em contato com a engenharia.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;