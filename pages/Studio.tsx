import React from 'react';
import { Feature } from '../types';

const studioFeatures: Feature[] = [
    {
        title: "Timeline Multi-track",
        description: "Edição não-linear completa. Camadas ilimitadas de vídeo, áudio e imagens.",
        icon: "fa-layer-group"
    },
    {
        title: "Legendas Automáticas",
        description: "Transcreva áudio automaticamente e gere legendas sincronizadas com um clique.",
        icon: "fa-closed-captioning"
    },
    {
        title: "Render Frame-by-Frame",
        description: "Controle total da qualidade de exportação, bitrate e dimensões (Social/Web).",
        icon: "fa-film"
    }
];

const Studio: React.FC = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-gray-200 pt-20 font-sans selection:bg-purple-500 selection:text-white">
            
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[100px]"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="mx-auto max-w-6xl text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        O Poder de um Editor <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">Profissional</span>, direto no seu Browser.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        O Kaptur Studio não é apenas um cortador de vídeos. É uma ferramenta de engenharia de média completa que processa tudo localmente, garantindo sua privacidade e velocidade.
                    </p>

                    <div className="mt-16 relative max-w-5xl mx-auto group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        
                        <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/10">
                            <div className="bg-white/5 border-b border-white/5 px-4 py-2 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest ml-4">
                                    Kaptur Studio Preview — Editing Mode
                                </div>
                            </div>

                            <video 
                                className="w-full h-auto aspect-video object-cover"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                controls
                            >
                                {/* Mudança: Arquivo renomeado para demonstracao-kaptur-studio.webm */}
                                <source src="/assets/videos/demonstracao-kaptur-studio.webm" type="video/webm" />
                                O seu navegador não suporta a tag de vídeo.
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {studioFeatures.map((feature, idx) => (
                            <div key={idx} className="p-6 bg-[#151515] border border-gray-800 rounded-xl hover:border-purple-500/50 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-teal-600 flex items-center justify-center mb-4 text-white shadow-lg">
                                    <i className={`fa-solid ${feature.icon} text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-gray-900">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Integração Nativa</h2>
                            <p className="text-gray-400 mb-8">
                                O Kaptur Studio lê diretamente os arquivos do gravador. 
                                Terminou de gravar? Clique em "Kaptur Studio" e seu projeto já nasce configurado.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <i className="fa-solid fa-check text-green-500"></i>
                                    Sem upload ou download de arquivos brutos*
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <i className="fa-solid fa-check text-green-500"></i>
                                    Formatos otimizados para Web
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <i className="fa-solid fa-check text-green-500"></i>
                                    Exportação direta para Google Drive ou Download.
                                </li>
                                <li><small>* Apenas para gravações realizadas préviamente. A importação de novos assets (videos, imagens, etc.) ainda dependem de processamento.</small></li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-1 gap-4">
                            <div className="bg-[#1a1a1a] p-6 rounded-2xl flex flex-col items-center justify-center aspect-square border border-gray-800">
                                <i className="fa-brands fa-google-drive text-5xl text-gray-500 mb-4"></i>
                                <span className="text-gray-400 font-bold">Google Drive</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Studio;