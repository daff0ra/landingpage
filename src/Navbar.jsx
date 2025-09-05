import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ pakai Link
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          Daffa<span className="text-yellow-300">Dev</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition">
              Tentang
            </Link>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-300 transition">
              Keahlian
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-300 transition">
              Proyek
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition">
              Kontak
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-900/95 px-6 py-6 space-y-4 text-white font-medium">
          <Link to="/about" className="block hover:text-yellow-300" onClick={toggleMenu}>
            Tentang
          </Link>
          <a href="#skills" className="block hover:text-yellow-300" onClick={toggleMenu}>
            Keahlian
          </a>
          <a href="#projects" className="block hover:text-yellow-300" onClick={toggleMenu}>
            Proyek
          </a>
          <a href="#contact" className="block hover:text-yellow-300" onClick={toggleMenu}>
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
