import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <div>
          <span className="text-2xl font-extrabold tracking-tighter text-slate-900">
            Trip<span className="text-blue-600">Flow</span>
          </span>
          <p className="text-slate-400 text-sm mt-2">© 2026 Academic Project by Abdelilah Benyousse.</p>
        </div>
        <div className="flex space-x-12">
          <div>
            <h6 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">Tech Stack</h6>
            <ul className="text-slate-500 text-sm space-y-2">
              <li>React & Redux</li>
              <li>Laravel 12</li>
              <li>Filament PHP</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">Supervised By</h6>
            <p className="text-slate-500 text-sm font-bold">Madame HASNA BOUISSKRANE</p>
            <p className="text-slate-400 text-xs mt-1 italic">ISGI MARRAKECH</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
