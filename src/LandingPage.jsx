import React from "react";
import { FaReact, FaRocket, FaLaptopCode } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center text-white px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold drop-shadow-lg flex items-center justify-center gap-3">
          <FaReact className="text-cyan-400 animate-spin-slow" /> My Landing Page
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Dibuat dengan <span className="font-semibold">React + Tailwind CSS</span>
        </p>
      </header>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        <div className="p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition">
          <FaRocket className="text-4xl mb-4 text-yellow-300" />
          <h2 className="text-2xl font-bold">Cepat</h2>
          <p className="mt-2 text-sm opacity-80">React & Vite bikin development super cepat 🚀</p>
        </div>
        <div className="p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition">
          <FaLaptopCode className="text-4xl mb-4 text-green-300" />
          <h2 className="text-2xl font-bold">Modern</h2>
          <p className="mt-2 text-sm opacity-80">Tailwind CSS kasih styling yang fleksibel & elegan 🎨</p>
        </div>
        <div className="p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition">
          <FaReact className="text-4xl mb-4 text-cyan-400" />
          <h2 className="text-2xl font-bold">Reusable</h2>
          <p className="mt-2 text-sm opacity-80">Komponen React bisa dipakai berulang 🔄</p>
        </div>
      </div>

      {/* Call To Action */}
      <div className="mt-12">
        <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition">
          Mulai Sekarang
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
