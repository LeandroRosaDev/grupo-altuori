'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-transparent absolute w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between pt-12 px-6">
        <img
          src="/assets/logotipo.png"
          alt="Imagem do logotipo"
          className="h-20 md:h-32"
        />
        <nav>
          <ul
            className={`hidden md:flex space-x-4 md:space-x-8 text-white text-sm md:text-lg font-semibold ${
              menuOpen ? 'hidden' : 'flex'
            }`}
          >
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="hover:text-gray-300 transition">
                SOBRE
              </Link>
            </li>
            <li>
              <Link href="#servicos" className="hover:text-gray-300 transition">
                SERVIÇOS
              </Link>
            </li>
            <li>
              <Link href="#contato" className="hover:text-gray-300 transition">
                CONTATO
              </Link>
            </li>
          </ul>
          {menuOpen ? (
            ''
          ) : (
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              <div className="relative w-8 h-8 flex flex-col justify-between items-center">
                <span className="block w-full h-1 bg-orange-600 rounded-md"></span>
                <span className="block w-full h-1 bg-orange-600 rounded-md"></span>
                <span className="block w-full h-1 bg-orange-600 rounded-md"></span>
              </div>
            </button>
          )}
        </nav>

        {menuOpen && (
          <div className="fixed inset-0 bg-zinc-800 flex flex-col items-center text-white">
            <button
              onClick={toggleMenu}
              className="absolute top-10 right-10 focus:outline-none"
            >
              <div className="relative w-8 h-8 flex flex-col justify-between items-center mt-6">
                <span className="absolute block w-full h-1  bg-orange-600 -rotate-45" />
                <span className="absolute block w-full h-1  bg-orange-600 transform rotate-45" />
              </div>
            </button>
            <ul className="space-y-12 sm:space-y-14 text-xl text-center mt-[20%]">
              <li className="hover:text-blue-400">
                <Link href="#home" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="#sobre" onClick={closeMenu}>
                  Sobre
                </Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="#servicos" onClick={closeMenu}>
                  Servicos
                </Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="#contato" onClick={closeMenu}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Menu;
