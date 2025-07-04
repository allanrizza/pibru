'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// Componente Cruz Celta
const CelticCross = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 32"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Haste vertical da cruz (mais longa embaixo) */}
    <rect x="10.5" y="2" width="3" height="28" />

    {/* Haste horizontal da cruz */}
    <rect x="4" y="10.5" width="16" height="3" />

    {/* Círculo central da cruz celta */}
    <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <CelticCross className="h-10 w-10 text-red-600 flex-shrink-0" />
            <div className="flex flex-col">
              {/* Nome completo - visível em telas grandes */}
              <div className="hidden lg:block">
                <span className="text-lg font-serif font-bold text-white leading-tight">
                  Primeira Igreja Batista Reformada
                </span>
                <br />
                <span className="text-sm font-medium text-red-600 leading-tight">
                  de Uberlândia
                </span>
              </div>
              {/* Nome médio - visível em telas médias */}
              <span className="hidden md:block lg:hidden text-base font-serif font-bold text-white">
                PIBR de Uberlândia
              </span>
              {/* Nome abreviado - visível em telas pequenas */}
              <span className="block md:hidden text-base font-serif font-bold text-white">
                PIBR Uberlândia
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sobre
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-red-400 focus:outline-none focus:text-red-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700 border-t border-gray-600">
              <Link
                href="/"
                className="text-gray-300 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className="text-gray-300 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}