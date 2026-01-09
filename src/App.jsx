import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './home/Home';
import Services from './page/Services';
import Contact from './page/Contact';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-slate-950 font-sans text-slate-50 antialiased selection:bg-amber-500 selection:text-white">
                <Navbar />

                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/servicios" element={<Services />} />
                        <Route path="/contacto" element={<Contact />} />
                    </Routes>
                </div>

                <Footer />
                <WhatsAppButton />
            </div>
        </Router>
    );
}

export default App;
