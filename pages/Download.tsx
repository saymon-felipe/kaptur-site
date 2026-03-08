import React from 'react';
import { Link } from 'react-router-dom';

const Download: React.FC = () => {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans pt-20 min-h-screen">
            
            {/* Header Section */}
            <section className="relative overflow-hidden pt-16 pb-12 bg-[#2D1B4E]">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                     <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500 opacity-20 blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Instale o <span className="text-[#00C0A3]">Kaptur</span>
                    </h1>
                    <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
                        Nossa extensão está em fase final de aprovação na Chrome Web Store. 
                        Enquanto isso, você pode instalá-la manualmente seguindo os passos abaixo.
                    </p>
                    
                    {/* Botão de Download */}
                    <a 
                        href="/downloads/kaptur-recorder.zip" 
                        download="kaptur-recorder.zip"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#00C0A3] hover:bg-[#00a892] text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        <i className="fa-solid fa-download"></i>
                        Baixar Extensão (.ZIP)
                    </a>
                </div>
            </section>

            {/* Passo a Passo */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center text-[#2D1B4E] mb-12">Como instalar no Google Chrome</h2>

                    <div className="space-y-8">
                        
                        {/* Passo 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-[#00C0A3] font-bold text-xl">1</div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Baixe e extraia o arquivo</h3>
                                <p className="text-gray-600">
                                    Clique no botão acima para baixar o arquivo <strong>kaptur-recorder.zip</strong>. Após o download, extraia (descompacte) a pasta em um local de fácil acesso no seu computador (como a Área de Trabalho).
                                </p>
                            </div>
                        </div>

                        {/* Passo 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-[#00C0A3] font-bold text-xl">2</div>
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Abra a página de Extensões</h3>
                                <p className="text-gray-600 mb-4">
                                    Abra uma nova aba no Google Chrome, digite o endereço abaixo na barra de navegação e aperte Enter:
                                </p>
                                <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center font-mono text-sm text-gray-700">
                                    <span>chrome://extensions/</span>
                                    <button 
                                        onClick={() => navigator.clipboard.writeText('chrome://extensions/')}
                                        className="text-gray-500 hover:text-[#00C0A3] transition-colors"
                                        title="Copiar"
                                    >
                                        <i className="fa-regular fa-copy"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Passo 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-[#00C0A3] font-bold text-xl">3</div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Ative o Modo do Desenvolvedor</h3>
                                <p className="text-gray-600">
                                    No canto superior direito da página de extensões, procure pela chave <strong>Modo do desenvolvedor</strong> e clique para ativá-la.
                                </p>
                            </div>
                        </div>

                        {/* Passo 4 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-[#00C0A3] font-bold text-xl">4</div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Carregue a Extensão</h3>
                                <p className="text-gray-600">
                                    No canto superior esquerdo, clique no botão <strong>Carregar sem compactação</strong> (ou "Load unpacked"). Selecione a pasta que você extraiu no <strong>Passo 1</strong>.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 text-center bg-purple-50 p-6 rounded-xl border border-purple-100">
                        <p className="text-[#2D1B4E] font-medium">
                            <i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
                            Pronto! O Kaptur agora aparecerá na sua barra de ferramentas do Chrome. Recomenda-se clicar no ícone de "quebra-cabeça" do Chrome e fixar o Kaptur para fácil acesso.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Download;