import React from "react";

const aboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white flex items-center justify-center px-6">
      <div className="max-w-4xl bg-white/10 rounded-3xl shadow-xl p-10 text-center">
        <h1 className="text-4xl font-extrabold mb-6">Tentang Saya</h1>
        <p className="opacity-90 leading-relaxed text-lg">
          Mahasiswa program studi Informatika, Universitas Sebelas Maret. 
          Berusia 21 tahun, memiliki kemampuan cepat dalam belajar dan 
          selalu ingin belajar hal baru. 
        </p>
        <p className="opacity-90 leading-relaxed text-lg mt-4">
          Seorang yang adaptif, mampu bekerja kelompok, memiliki pengendalian diri, 
          serta keterampilan manajemen waktu yang baik. 
          Saya memiliki ketertarikan dalam teknologi dan IT, 
          menguasai berbagai bahasa pemrograman untuk pengembangan website, 
          serta mendalami AI dan analisis data.
        </p>
      </div>
    </div>
  );
};

export default aboutPage;
