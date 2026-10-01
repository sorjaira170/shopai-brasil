'use client';

import { useState } from 'react';
import products from '../data/products.json';
import { ShoppingBag, Search, Sparkles, ShoppingCart, X, Plus, Minus, Trash2, CreditCard } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filtrar productos
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Agregar al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Actualizar cantidad
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + amount;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Eliminar producto
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Redirección a Mercado Pago
  const handleCheckout = () => {
    if (cart.length === 0) return;
    const linkMercadoPago = `https://link.mercadopago.com.br`;
    alert(`Pedido pronto! Total: R$ ${totalAmount.toFixed(2)}\n\nVocê será redirecionado para pagar via Pix ou Cartão no Mercado Pago.`);
    window.location.href = linkMercadoPago;
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 relative overflow-x-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 shadow-lg text-center relative">
        <button
          onClick={() => setIsCartOpen(true)}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full flex items-center gap-2 transition-all shadow-md"
        >
          <ShoppingCart className="w-6 h-6 text-yellow-300" />
          {totalItems > 0 && (
            <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </button>

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

      {/* Catálogo */}
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
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg flex items-center gap-1 text-xs font-semibold transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4" /> Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Carrito Lateral */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                  <ShoppingCart className="w-6 h-6 text-indigo-600" /> Meu Carrinho
                </h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-4 overflow-y-auto max-h-[60vh] space-y-4">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-10">O seu carrinho está vazio.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4 border-b pb-3">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{item.title}</h4>
                        <p className="text-xs text-emerald-600 font-bold mt-1">
                          R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="bg-gray-100 hover:bg-gray-200 p-1 rounded text-gray-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="bg-gray-100 hover:bg-gray-200 p-1 rounded text-gray-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-medium">Total:</span>
                  <span className="text-2xl font-black text-emerald-600">
                    R$ {totalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <CreditCard className="w-5 h-5" /> Pagar com Mercado Pago
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
     
       
    
       
                
                      
          

              
                        
                          
                      
               
 

              
                   
        
                 
                      
                          
             
             
       
        
               
                
            
        
