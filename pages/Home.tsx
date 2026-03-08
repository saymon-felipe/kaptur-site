import React, { useState } from 'react';
import { ChangelogItem, Feature } from '../types';
import { Link } from 'react-router-dom';

const features: Feature[] = [
    {
        title: "Gravação Flexível",
        description: "Escolha entre Tela Inteira, Janela de Aplicativo ou Apenas uma Aba do navegador. Controle total.",
        icon: "fa-desktop"
    },
    {
        title: "Webcam & Audio",
        description: "Grave sua webcam (picture-in-picture) e microfone simultaneamente para tutoriais perfeitos.",
        icon: "fa-video"
    },
    {
        title: "Edição Rápida",
        description: "Corte trechos indesejados, visualize o preview instantaneamente sem renderização demorada.",
        icon: "fa-scissors"
    },
    {
        title: "Integração Cloud",
        description: "Envie diretamente para o Google Drive ou baixe localmente com apenas um clique.",
        icon: "fa-cloud-arrow-up"
    }
];

const changelogData: ChangelogItem[] = [
    {
        version: "v3.1.0",
        date: "25/12/2025",
        type: "major",
        changes: ["Reestruturação completa + Kaptur Studio", "Reestruturação do código, repaginação visual, melhoria de fluxo e lançamento do Studio."]
    },
    {
        version: "v3.0.5",
        date: "10/04/2025",
        type: "patch",
        changes: ["Correções de UX e transcode", "Correções e melhorias na interface, correção de bugs e fluxo."]
    },
    {
        version: "v3.0.3",
        date: "26/03/2025",
        type: "major",
        changes: ["Atualização da versão base", "Diversas correções, melhorias e atualizações."]
    },
    {
        version: "v1.0.0",
        date: "19/03/2025",
        type: "major",
        changes: ["Lançamento do Kaptur", "Gravação de tela e webcam, edição simples e upload para Google Drive."]
    }
];

const latestVersion = changelogData[0].version.replace("v", "");

const Home: React.FC = () => {
    const [showChangelog, setShowChangelog] = useState(false);

    return (
        <div className="bg-gray-50 text-gray-800 font-sans pt-20">
            
            <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100 opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        
                        <div className="lg:w-1/2 text-center lg:text-left">
                            {/* Mudança: Cores atualizadas */}
                            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-[#2D1B4E] uppercase bg-purple-100 rounded-full">
                                Extensão para Chrome
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-[#2D1B4E] leading-tight mb-6">
                                Grave, Edite e Compartilhe em <span className="text-teal-500">Segundos.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                                A ferramenta definitiva para comunicação assíncrona. Menos cliques, mais produtividade. Gere vídeos prontos em instantes.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link to="/download">
                                    <button className="px-8 py-4 bg-[#2D1B4E] hover:bg-[#1D1036] text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                                        <i className="fa-solid fa-download text-2xl"></i>
                                        Instalar Extensão
                                    </button>
                                </Link>
                                <button 
                                    onClick={() => setShowChangelog(true)}
                                    className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-lg hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center gap-2"
                                >
                                    <i className="fa-solid fa-clock-rotate-left"></i>
                                    Novidades
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-4">
                                <span className="flex items-center gap-1">
                                    <i className="fa-solid fa-star text-yellow-400"></i>&nbsp;
                                    Versão {latestVersion}
                                </span>
                                <span>•</span>
                                <span>
                                    <i className="fa-solid fa-ban text-red-400"></i>&nbsp;
                                    Sem Anúncios
                                </span>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full relative">
                            {/* O container principal faz a rotação, mas não tem overflow-hidden */}
                            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                
                                {/* Container do navegador (este sim tem overflow-hidden para arredondar a imagem) */}
                                <div className="rounded-xl shadow-2xl bg-white border border-gray-200 p-2 overflow-hidden">
                                    {/* Browser Header Mockup */}
                                    <div className="bg-gray-100 h-8 rounded-t-lg flex items-center px-4 space-x-2 border-b">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        <div className="ml-4 bg-white flex-1 h-5 rounded-md text-xs flex items-center px-2 text-gray-400">kaptur.com.br</div>
                                    </div>
                                    <img 
                                        src="/assets/images/print-kaptur.png" 
                                        alt="Kaptur Interface" 
                                        className="w-full h-auto rounded-b-lg opacity-90"
                                    />
                                </div>
                                
                                {/* Floating Overlay UI Mockup - Extravasando a tela (-right-10) */}
                                <div className="absolute top-8 -right-4 md:-right-10 lg:-right-12 bg-white rounded-lg shadow-2xl w-72 md:w-80 border border-gray-200 animate-fade-in-up flex flex-col font-sans select-none z-20">
                                    
                                    {/* Header */}
                                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                                        <div className="flex items-center gap-2">
                                            {/* Ícone Kaptur Oficial */}
                                            <img src="/assets/images/logo.png" alt="Kaptur Icon" className="w-7 h-7 object-contain" />
                                            <h3 className="font-bold text-gray-700 text-base">Kaptur</h3>
                                        </div>
                                        <i className="fa-solid fa-xmark text-gray-300 hover:text-gray-500 cursor-pointer text-lg"></i>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 space-y-4">
                                        {/* Tabs */}
                                        <div className="flex bg-gray-100 p-1 rounded-lg">
                                            <button className="flex-1 py-2 flex flex-col items-center justify-center gap-1 text-gray-500 hover:bg-white/50 rounded-md transition text-xs">
                                                <i className="fa-solid fa-table-columns text-sm"></i>
                                                Aba
                                            </button>
                                            <button className="flex-1 py-2 flex flex-col items-center justify-center gap-1 bg-white text-[#00C0A3] shadow-sm rounded-md transition text-xs font-bold border border-gray-200">
                                                <i className="fa-solid fa-desktop text-sm"></i>
                                                Tela
                                            </button>
                                            <button className="flex-1 py-2 flex flex-col items-center justify-center gap-1 text-gray-500 hover:bg-white/50 rounded-md transition text-xs">
                                                <i className="fa-solid fa-camera text-sm"></i>
                                                Câmera
                                            </button>
                                        </div>

                                        {/* Inputs / Configs */}
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-gray-600 mb-1 block">Configurações</label>
                                            
                                            <div>
                                                <div className="text-xs text-gray-500 mb-1">Câmera</div>
                                                <div className="border border-gray-300 rounded px-3 py-2 text-xs text-gray-700 flex justify-between items-center bg-white hover:border-teal-400 cursor-pointer transition-colors">
                                                    <span className="truncate">GENERAL WEBCAM (1b3f:2247)</span>
                                                    <i className="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <div className="text-xs text-gray-500 mb-1">Microfone</div>
                                                <div className="border border-gray-300 rounded px-3 py-2 text-xs text-gray-700 flex justify-between items-center bg-white hover:border-teal-400 cursor-pointer transition-colors">
                                                    <span className="truncate pr-2">Padrão - Microfone (Fifine Microphone)</span>
                                                    <i className="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Countdown Row */}
                                        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                                            <div className="w-5 h-5 bg-[#00C0A3] rounded flex items-center justify-center text-white text-xs shadow-sm cursor-pointer hover:bg-[#00a088]">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="border border-gray-300 rounded px-3 py-1.5 text-xs text-gray-700 bg-white flex items-center gap-2 cursor-pointer hover:border-teal-400">
                                                3 segundos <i className="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
                                            </div>
                                            <span className="text-xs text-gray-500">de contagem</span>
                                        </div>

                                        {/* Main Action Button */}
                                        <button className="w-full py-3 bg-[#00C0A3] hover:bg-[#00a892] text-white rounded-md font-bold shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 text-sm group">
                                            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <div className="w-2 h-2 bg-[#00C0A3] rounded-full"></div>
                                            </div>
                                            Iniciar gravação
                                        </button>

                                        {/* Footer Links */}
                                        <div className="flex flex-col items-center gap-4 pt-1">
                                            <div className="text-xs text-gray-400 flex items-center justify-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">
                                                Ver atalhos de teclado <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                            </div>
                                            <Link to="/studio" className="flex items-center justify-center gap-2 font-bold text-gray-800 text-sm cursor-pointer hover:text-[#00C0A3] transition-colors">
                                                 <i className="fa-solid fa-film"></i>
                                                 Abrir Studio
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2D1B4E] mb-4">Poderoso. Simples.</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tudo o que você precisa para criar vídeos rápidos de comunicação, tutoriais ou reportar bugs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-teal-100 hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                                    <i className={`fa-solid ${feature.icon} text-2xl text-teal-600 group-hover:text-white`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#2D1B4E] text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-8">Fluxo de Trabalho Otimizado</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-lg">1</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Clique para Gravar</h4>
                                        <p className="text-purple-100 text-sm">Abra a extensão e selecione o modo. Sem configurações complexas.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-lg">2</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Edite no Navegador</h4>
                                        <p className="text-purple-100 text-sm">Assim que parar, o vídeo abre no editor instantâneo. Corte o início e o fim em segundos se desejar.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-lg">3</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Compartilhe</h4>
                                        <p className="text-purple-100 text-sm">Gere um link do Drive ou baixe em MP4/GIF. Pronto para enviar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <i className="fa-solid fa-download"></i>
                                Formatos de Exportação
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-teal-500 transition cursor-default">
                                    <span className="block font-bold text-2xl mb-1">MP4</span>
                                    <span className="text-xs opacity-75">Universal</span>
                                </div>
                                <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-teal-500 transition cursor-default">
                                    <span className="block font-bold text-2xl mb-1">WEBM</span>
                                    <span className="text-xs opacity-75">Web Native</span>
                                </div>
                                <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-teal-500 transition cursor-default">
                                    <span className="block font-bold text-2xl mb-1">GIF</span>
                                    <span className="text-xs opacity-75">Loop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-100 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-2 block">Precisa de mais poder?</span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Conheça o Kaptur Studio</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Leve suas gravações para o próximo nível com nosso editor profissional. 
                        Legendas automáticas com IA, timeline multi-track e efeitos visuais.
                    </p>
                    
                    <div className="relative inline-block group mb-12">
                         <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <Link to="/studio" className="relative z-10 px-8 py-4 bg-gray-900 text-white rounded-lg font-bold flex items-center gap-3 hover:bg-black transition-colors">
                            <span>Ir para Kaptur Studio</span>
                            <i className="fa-solid fa-wand-magic-sparkles text-teal-400"></i>
                        </Link>
                    </div>

                    <Link to="/studio" className="block relative mt-4 opacity-90 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-gray-900 group cursor-pointer hover:opacity-100 transition-opacity">
                         <img src="/assets/images/print-studio.png" alt="Studio Teaser" className="w-full transform group-hover:scale-105 transition-transform duration-700" />
                         <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                            <span className="text-white font-bold text-lg tracking-widest border border-white px-4 py-2 uppercase bg-black/20 backdrop-blur-sm">Estúdio Profissional</span>
                         </div>
                    </Link>
                </div>
            </section>

            {showChangelog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
                        <div className="bg-[#2D1B4E] p-6 flex justify-between items-center text-white">
                            <h3 className="text-xl font-bold">Changelog</h3>
                            <button onClick={() => setShowChangelog(false)} className="hover:text-red-300">
                                <i className="fa-solid fa-xmark text-xl"></i>
                            </button>
                        </div>
                        <div className="p-6 max-h-[60vh] overflow-y-auto">
                            {changelogData.map((item, i) => (
                                <div key={i} className="mb-6 last:mb-0 border-l-2 border-gray-200 pl-4 relative">
                                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${item.type === 'major' ? 'bg-teal-500' : 'bg-gray-400'}`}></div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <span className="font-bold text-gray-800 text-lg">{item.version}</span>
                                        <span className="text-xs text-gray-500">{item.date}</span>
                                    </div>
                                    <ul className="space-y-1">
                                        {item.changes.map((change, cIdx) => (
                                            <li key={cIdx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full"></span>
                                                {change}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
                            <p className="text-xs text-gray-500">A atualização é automática para todos os usuários.</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Home;