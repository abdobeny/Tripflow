import React from 'react';

const Packages = () => {
  return (
    <section id="packages" className="py-24 container mx-auto px-6 -mt-32 relative z-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Curated Packages</h2>
          <p className="text-slate-500">Hand-picked premium experiences across the Kingdom.</p>
        </div>
        <div className="flex space-x-2">
          <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Package Card 1 */}
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="relative h-64">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
              alt="Marrakech" 
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-bold text-blue-600 shadow-sm">
              $450 / Guest
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">
              <i className="fa-solid fa-star mr-1"></i> 4.9 · Cultural
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Marrakech Red Night</h4>
            <p className="text-slate-500 text-sm mb-6">
              Experience the magic of the Medina with premium riad access and private guide.
            </p>
            <div className="flex justify-between items-center border-t pt-6">
              <span className="text-slate-400 font-medium"><i className="fa-regular fa-clock mr-2"></i>3 Days</span>
              <a href="#booking" className="text-blue-600 font-extrabold hover:underline">
                Book Now <i className="fa-solid fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Package Card 2 */}
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="relative h-64">
            <img 
              src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
              alt="Sahara" 
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-bold text-blue-600 shadow-sm">
              $890 / Guest
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">
              <i className="fa-solid fa-star mr-1"></i> 5.0 · Adventure
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Sahara Stargazing</h4>
            <p className="text-slate-500 text-sm mb-6">
              Luxury glamping under the Merzouga dunes with 4x4 desert expeditions.
            </p>
            <div className="flex justify-between items-center border-t pt-6">
              <span className="text-slate-400 font-medium"><i className="fa-regular fa-clock mr-2"></i>5 Days</span>
              <a href="#booking" className="text-blue-600 font-extrabold hover:underline">
                Book Now <i className="fa-solid fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Package Card 3 */}
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="relative h-64">
            <img 
              src="https://images.unsplash.com/photo-1544662227-aa175a9d631e?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
              alt="Chefchaouen" 
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-bold text-blue-600 shadow-sm">
              $320 / Guest
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">
              <i className="fa-solid fa-star mr-1"></i> 4.8 · Relax
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Blue City Escape</h4>
            <p className="text-slate-500 text-sm mb-6">
              A serene retreat in the heart of Chefchaouen's blue-washed streets.
            </p>
            <div className="flex justify-between items-center border-t pt-6">
              <span className="text-slate-400 font-medium"><i className="fa-regular fa-clock mr-2"></i>2 Days</span>
              <a href="#booking" className="text-blue-600 font-extrabold hover:underline">
                Book Now <i className="fa-solid fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
