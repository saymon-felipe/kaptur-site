import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Studio from './pages/Studio';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import Download from './pages/Download'; // <-- IMPORTAÇÃO AQUI
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTopWrapper />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
            <Route path="/download" element={<Download />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;