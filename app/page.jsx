"use client";
import React, { useState } from 'react';
import { Mic, Camera, Search, CheckCircle, Smartphone, Shirt, Home, Sparkles } from 'lucide-react';

export default function ShopAIBrasil() {
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-16">
      {/* Top Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-blue-600 w-6 h-6" />
          <span className="text-xl font-bold text-gray-900">ShopAI <span className="text-blue-600">Brasil</span></span>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4 space-y-6">
        {/* Banner Assistente IA */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="font-semibold text-sm text-gray-900">Pergunte ao seu Assistente de Compras IA!</h2>
              <p className="text-xs text-gray-500">
                Ex: "Procuro fones de ouvido bluetooth com cancelamento de ruído por menos de R$ 150"
              </p>
            </div>
            <button className="bg-cyan-100 p-2.5 rounded-full text-teal-700 hover:bg-cyan-200 transition">
              <Mic className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Botão Buscar por Imagem */}
        <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm font-medium transition shadow-sm">
          <Camera className="w-4 h-4 text-gray-500" />
          <span>Buscar por imagem (Foto/Câmera)</span>
        </button>

        {/* Destaques por Qualidade */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <h3 className="font-bold text-base text-gray-900">Destaques em Qualidade</h3>
              <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500 text-white" />
            </div>
            <span className="text-xs font-semibold text-blue-600">Ver todos</span>
          </div>

          {/* Cards de Produtos */}
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-none">
            {/* Produto 1 */}
            <div className="min-w-[150px] bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="h-28 bg-gray-100 rounded-lg mb-2 flex items-center justify-center text-xs text-gray-400">
                [Foto Fone]
              </div>
              <p className="text-xs font-medium text-gray-700 line-clamp-2">Fone Sem Fio Bluetooth Noise Cancelling</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">R$ 120,00</span>
                <span className="text-[10px] bg-orange-100 text-orange-700 font-bold px-1.5 py-0.5 rounded">AliExpress</span>
              </div>
            </div>

            {/* Produto 2 */}
            <div className="min-w-[150px] bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="h-28 bg-gray-100 rounded-lg mb-2 flex items-center justify-center text-xs text-gray-400">
                [Foto Bolsa]
              </div>
              <p className="text-xs font-medium text-gray-700 line-clamp-2">Bolsa Transversal de Couro Tendência</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">R$ 79,00</span>
                <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded">TEMU</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categorias Principais */}
        <section className="space-y-3">
          <h3 className="font-bold text-base text-gray-900">Categorias em Alta</h3>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-blue-50 p-3 rounded-xl flex items-center space-x-3 cursor-pointer">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-bold text-gray-800">Tecnologia</span>
            </div>
            <div className="bg-purple-50 p-3 rounded-xl flex items-center space-x-3 cursor-pointer">
              <Shirt className="w-5 h-5 text-purple-600" />
              <span className="text-xs font-bold text-gray-800">Moda</span>
            </div>
            <div className="bg-amber-50 p-3 rounded-xl flex items-center space-x-3 cursor-pointer">
              <Home className="w-5 h-5 text-amber-600" />
              <span className="text-xs font-bold text-gray-800">Casa</span>
            </div>
            <div className="bg-pink-50 p-3 rounded-xl flex items-center space-x-3 cursor-pointer">
              <Sparkles className="w-5 h-5 text-pink-600" />
              <span className="text-xs font-bold text-gray-800">Beleza</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
