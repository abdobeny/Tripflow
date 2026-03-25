import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="bg-slate-50 zellige-pattern min-h-screen font-sans flex flex-col">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future pages will go here (e.g. /packages, /booking) */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
