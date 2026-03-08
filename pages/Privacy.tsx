import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans pt-20">
            {/* Header Section */}
            <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-20">
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-[#2D1B4E] uppercase bg-teal-100 rounded-full text-teal-700">
                            Segurança de Dados
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D1B4E] leading-tight mb-6">
                            Política de <span className="text-teal-500">Privacidade.</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Sua privacidade é processada localmente por padrão.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid grid-cols-1 gap-12 text-gray-600">
                        
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#2D1B4E] flex items-center gap-3">
                                <i className="fa-solid fa-shield-halved text-teal-500"></i> 
                                Processamento Local
                            </h2>
                            <p className="text-lg">
                                O Kaptur prioriza a segurança. Todas as gravações de tela e áudio são processadas 
                                diretamente no seu navegador. Nenhum vídeo é transmitido para nossos servidores, apenas oferecemos a opção de enviar para o Google Drive da conta de sua preferência.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <h3 className="font-bold text-[#2D1B4E] mb-3 uppercase tracking-wider text-xs">Permissões Técnicas</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-check text-teal-500 mt-1"></i>
                                        <span><strong>Capture API:</strong> Captura de tela e abas.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-check text-teal-500 mt-1"></i>
                                        <span><strong>Microfone:</strong> Captura de áudio para narração.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-check text-teal-500 mt-1"></i>
                                        <span><strong>Storage:</strong> Cache de edição do Studio.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <h3 className="font-bold text-[#2D1B4E] mb-3 uppercase tracking-wider text-xs">Telemetria Beta</h3>
                                <p className="text-sm leading-relaxed">
                                    Durante a fase Beta, poderemos coletar logs de erro anônimos para que nossa equipe de engenharia 
                                    possa criar patches de correção e melhorias de performance. Não coletamos dados pessoais identificáveis.
                                </p>
                            </div>
                        </div>

                        <div className="pt-10 border-t">
                            <h2 className="text-xl font-bold text-[#2D1B4E] mb-4 text-center">Nosso Compromisso</h2>
                            <p className="text-center italic">
                                "Simplificando a comunicação visual com transparência e segurança."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;