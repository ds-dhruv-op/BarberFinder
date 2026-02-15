import React, { useState } from 'react';
import { SHOPS } from './constants';
import { Shop, ViewState } from './types';
import ShopCard from './components/ShopCard';
import ShopDetails from './components/ShopDetails';
import AIAssistant from './components/AIAssistant';
import { Search, MapPin, Scissors } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.LIST);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleShopClick = (shop: Shop) => {
    setSelectedShop(shop);
    setView(ViewState.DETAILS);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setView(ViewState.LIST);
    setSelectedShop(null);
  };

  const filteredShops = SHOPS.filter(shop => 
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    shop.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {view === ViewState.LIST ? (
        <>
          {/* Header / Hero */}
          <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
               <div className="flex items-center gap-2">
                  <div className="bg-indigo-600 p-2 rounded-lg text-white">
                    <Scissors size={24} />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">BarberFinder <span className="text-indigo-600">Pro</span></h1>
                    <p className="text-xs text-gray-500">Odisha's Premium Grooming Network</p>
                  </div>
               </div>

               {/* Search Bar */}
               <div className="relative w-full md:w-96">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search by salon name or area..." 
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-8">
            
            {/* Banner Area */}
            <div className="mb-10 relative rounded-3xl overflow-hidden bg-indigo-900 h-64 flex items-center justify-center text-center px-4">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=2000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Barber Background"
                />
                <div className="relative z-20 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Look Sharp, Feel Sharp.</h2>
                    <p className="text-gray-200 text-lg mb-6">Book appointments at the finest barber shops across Odisha instantly.</p>
                </div>
            </div>

            {/* Filter Chips (Mock) */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {['All Areas', 'Bhubaneswar', 'Cuttack', 'Puri', 'Berhampur'].map((area, idx) => (
                    <button 
                        key={idx}
                        className={`px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium transition-all ${
                            idx === 0 
                            ? 'bg-indigo-600 text-white shadow-md' 
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300'
                        }`}
                    >
                        {area}
                    </button>
                ))}
            </div>

            {/* Shops Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredShops.length > 0 ? (
                filteredShops.map(shop => (
                  <ShopCard key={shop.id} shop={shop} onClick={handleShopClick} />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                    <MapPin size={48} className="mb-4 opacity-20" />
                    <p>No shops found matching "{searchTerm}"</p>
                </div>
              )}
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 mt-20 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} BarberFinder Pro Odisha. All rights reserved.</p>
            </div>
          </footer>
        </>
      ) : (
        selectedShop && <ShopDetails shop={selectedShop} onBack={handleBack} />
      )}

      <AIAssistant />
    </div>
  );
};

export default App;