'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const CelticCross = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 32"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10.5" y="2" width="3" height="28" />
    <rect x="4" y="10.5" width="16" height="3" />
    <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#3D0F18] shadow-md sticky top-0 z-50 border-b border-[#5A1A25]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <CelticCross className="h-9 w-9 text-[#C9A84C] flex-shrink-0" />
            <div className="flex flex-col">
              <div className="hidden lg:block">
                <span className="text-lg font-heading font-semibold text-[#FAF7F2] leading-tight tracking-wide">
                  Primeira Igreja Batista Reformada
                </span>
                <br />
                <span className="text-sm font-heading text-[#C9A84C] leading-tight tracking-widest uppercase">
                  de Uberlândia
                </span>
              </div>
              <div className="hidden md:block lg:hidden">
                <span className="text-base font-heading font-semibold text-[#FAF7F2] tracking-wide">
                  Igreja Batista Reformada
                </span>
              </div>
              <div className="block md:hidden">
                <span className="text-base font-heading font-semibold text-[#FAF7F2] leading-tight">
                  Igreja Batista Reformada
                </span>
                <br />
                <span className="text-xs font-heading text-[#C9A84C] tracking-widest uppercase">
                  de Uberlândia
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#E8DDD0] hover:text-[#C9A84C] px-2 py-2 text-sm font-heading tracking-widest uppercase transition-colors duration-200"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-[#E8DDD0] hover:text-[#C9A84C] px-2 py-2 text-sm font-heading tracking-widest uppercase transition-colors duration-200"
            >
              Quem Somos
            </Link>
            <Link
              href="/confissao"
              className="text-[#E8DDD0] hover:text-[#C9A84C] px-2 py-2 text-sm font-heading tracking-widest uppercase transition-colors duration-200"
            >
              Confissão de Fé
            </Link>
            <Link
              href="/contato"
              className="text-[#E8DDD0] hover:text-[#C9A84C] px-2 py-2 text-sm font-heading tracking-widest uppercase transition-colors duration-200"
            >
              Contato
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#E8DDD0] hover:text-[#C9A84C] focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 border-t border-[#5A1A25]">
              <Link
                href="/"
                className="text-[#E8DDD0] hover:text-[#C9A84C] block px-3 py-3 font-heading tracking-widest uppercase text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className="text-[#E8DDD0] hover:text-[#C9A84C] block px-3 py-3 font-heading tracking-widest uppercase text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="/confissao"
                className="text-[#E8DDD0] hover:text-[#C9A84C] block px-3 py-3 font-heading tracking-widest uppercase text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Confissão de Fé
              </Link>
              <Link
                href="/contato"
                className="text-[#E8DDD0] hover:text-[#C9A84C] block px-3 py-3 font-heading tracking-widest uppercase text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
