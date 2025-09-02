import React from "react";
import 
{
  FaCode, FaBrain, FaChartBar,FaUserAlt,FaGithub,FaLinkedin,FaEnvelope,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-32">
        <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-4xl shadow-lg mb-6">
          <FaUserAlt />
        </div>
        <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
          Kenalin, aku <span className="text-yellow-300">Daffa</span>
        </h1>
        <p className="text-lg opacity-90 max-w-2xl">
        “Saya suka belajar hal-hal baru, mencoba ide-ide segar, dan menciptakan sesuatu yang bisa menginspirasi. Buat saya, setiap tantangan adalah kesempatan untuk berkembang.”        </p>
        <div className="flex gap-6 mt-6">
          <a
            href="#"
            className="text-2xl hover:text-yellow-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-yellow-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:email@example.com"
            className="text-2xl hover:text-yellow-300 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="p-10 bg-white/10 rounded-3xl shadow-xl text-center hover:scale-[1.02] transition">
          <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
          <p className="opacity-90 leading-relaxed">
          Mahasiswa program studi Informatika, Universitas Sebelas Maret. Berusia 21 tahun, memiliki kemampuan cepat
dalam belajar dan selalu ingin belajar hal baru. Seorang yang menyukai belajar hal baru, adaptif, mampu bekerja
kelompok, memiliki pengendalian diri, memiliki kemampuan dalam memanajemen waktu, dan memiliki
ketertarikan dalam teknologi dan IT serta menguasai berbagai bahasa pemograman untuk Pengembangan
website, serta pengembangan AI dan analisis data.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Keahlian</h2>
        <div className="grid md:grid-cols-3 gap-8">
        <div className="grid md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition text-center">
              <FaCode className="text-4xl mb-4 text-yellow-300 mx-auto" />
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="mt-2 text-sm opacity-80">
                WEB DEVELOPMENT
              </p>
            </div>

            {/* AI & Machine Learning */}
            <div className="p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition text-center">
              <FaBrain className="text-4xl mb-4 text-green-300 mx-auto" />
              <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
              <p className="mt-2 text-sm opacity-80">
                AI & MACHINE LEARNING ENGINEER
              </p>
            </div>

            {/* Data Science */}
            <div className="p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition text-center">
              <FaChartBar className="text-4xl mb-4 text-cyan-400 mx-auto" />
              <h3 className="text-xl font-semibold">Data Science</h3>
              <p className="mt-2 text-sm opacity-80">
                SAINS DATA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Proyek Saya</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((proj) => (
            <div
              key={proj}
              className="p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project {proj}</h3>
              <p className="text-sm opacity-80">
                
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-xl font-bold hover:bg-yellow-300 transition">
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="text-center pb-20">
        <h2 className="text-3xl font-bold mb-6">Tertarik Bekerja Sama?</h2>
        <button className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition">
          Hubungi Saya
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
