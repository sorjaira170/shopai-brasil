'use client';

import { useState } from 'react';
import products from '../data/products.json';
import { ShoppingBag, Search, Sparkles } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header / Banner */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 shadow-lg text-center">
        <h1 className="text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2">
          ShopAI Brasil <Sparkles className="w-8 h-8 text-yellow-300" />
        </h1>
        <p className="mt-2 text-blue-100 text-lg">A sua loja inteligente de ofertas em Destaque</p>
        
        {/* Buscador */}
        <div className="max-w-md mx-auto mt-6 relative">
          <input
            type="text"
            placeholder="Buscar produtos ou categorias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-10 pr-4 rounded-full border-none text-slate-900 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
        </div>
      </header>

      {/* Catálogo de Produtos */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b pb-2">Produtos em Destaque</h2>
        
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Nenhum produto encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-gray-800 text-base mt-2 line-clamp-2">{product.title}</h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">{product.description}</p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t flex items-center justify-between">
                    <span className="text-xl font-black text-emerald-600">
                      R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg flex items-center gap-1 text-xs font-semibold transition-colors">
                      <ShoppingBag className="w-4 h-4" /> Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
       
        
               
                
            
        
