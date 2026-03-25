import React from 'react';

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">
            Secure Your Next <br />
            <span className="text-blue-400">Memory with Ease</span>
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mr-4 shrink-0">
                <i className="fa-solid fa-check"></i>
              </div>
              <div>
                <h5 className="text-lg font-bold">Instant Validation</h5>
                <p className="text-slate-400 text-sm">Real-time processing with Laravel-powered logic.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mr-4 shrink-0">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div>
                <h5 className="text-lg font-bold">Secure Transactions</h5>
                <p className="text-slate-400 text-sm">Encrypted data handled via Laravel Sanctum.</p>
              </div>
            </div>
          </div>
        </div>

        {/* THE RESERVATION BOX */}
        <div className="flex-1 w-full">
          <div className="glass p-8 rounded-3xl text-slate-900 border-none shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Booking Details</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase text-slate-400 mb-1">Full Name</label>
                  <input 
                    id="fullName"
                    type="text" 
                    defaultValue="Abdelilah Benyousse" 
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" 
                  />
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-xs font-bold uppercase text-slate-400 mb-1">Guests</label>
                  <input 
                    id="guestCount"
                    type="number" 
                    defaultValue="2" 
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="specialRequest" className="block text-xs font-bold uppercase text-slate-400 mb-1">Special Request</label>
                <textarea 
                  id="specialRequest"
                  placeholder="Dietary needs, riad preferences..." 
                  className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none h-24"
                ></textarea>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl flex justify-between items-center mb-6">
                <span className="font-bold">Total Estimated:</span>
                <span className="text-2xl font-extrabold text-blue-600">$900.00</span>
              </div>
              <button 
                type="submit"
                className="w-full btn-gold text-white py-4 rounded-xl font-extrabold text-lg"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-600/10 blur-3xl rounded-full translate-y-1/2"></div>
    </section>
  );
};

export default Booking;
