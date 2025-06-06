import React, { useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-gray-900 text-white py-6 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-12 h-12 text-blue-400" />
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Loja Virtual
            </h1>
          </div>
          <p className="text-gray-300 text-lg">Seus Produtos Favoritos</p>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full py-3 px-4 pl-12 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;