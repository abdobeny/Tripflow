import React from 'react';

const Hero = () => {
  return (
    <header id="explore" className="relative moroccan-gradient hero-shape pt-32 pb-48 px-6 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <span className="bg-blue-400/20 text-blue-200 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">
          Next-Gen Booking
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Redefining the <br />
          <span className="text-amber-400 italic">Moroccan Odyssey</span>
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
          AI-curated destinations, seamless reservations, and authentic experiences. Welcome to the future of travel.
        </p>
        
        {/* FUTURISTIC SEARCH BAR */}
        <div className="max-w-4xl mx-auto glass p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2">
          <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-200">
            <i className="fa-solid fa-location-dot text-blue-600 mr-3"></i>
            <input type="text" placeholder="Where to?" className="bg-transparent w-full py-4 outline-none font-medium" />
          </div>
          <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-200">
            <i className="fa-solid fa-calendar-days text-blue-600 mr-3"></i>
            <input type="text" placeholder="Departure Date" className="bg-transparent w-full py-4 outline-none font-medium" />
          </div>
          <button className="w-full md:w-auto moroccan-gradient text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition">
            Find Trips
          </button>
        </div>
      </div>
      {/* Decorative Circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply opacity-20 blur-3xl"></div>
    </header>
  );
};

export default Hero;
