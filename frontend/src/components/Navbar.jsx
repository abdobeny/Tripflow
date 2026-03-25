import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 moroccan-gradient rounded-lg flex items-center justify-center text-white">
            <i className="fa-solid fa-plane-departure"></i>
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-slate-900">
            Trip<span className="text-blue-600">Flow</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 font-semibold text-slate-600">
          <a href="#explore" className="hover:text-blue-600 transition">Explore</a>
          <a href="#packages" className="hover:text-blue-600 transition">Packages</a>
          <a href="#booking" className="hover:text-blue-600 transition">My Bookings</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-slate-900 font-bold">Login</button>
          <button className="btn-gold text-white px-6 py-2 rounded-full font-bold shadow-lg">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
