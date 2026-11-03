"use client";

import { useState, useEffect } from "react";
import { content } from "@/content/content";

export default function Header({ onOpenQuote }: { onOpenQuote?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Official Header Logo (6.png) */}
          <a href="/" className="flex items-center gap-2 group">
            <picture>
              <source srcSet="/logo-dinamica.webp" type="image/webp" />
              <img
                src="/logo-dinamica.png"
                alt="DINAMICA SERVICIO DE LIMPIEZA SAC"
                width={215}
                height={46}
                className="h-9 w-auto sm:h-10 lg:h-12 transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </picture>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navegación principal"
          >
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-brand-gray transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}

            {onOpenQuote ? (
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Cotizar Ahora
              </button>
            ) : (
              <a
                href="/contacto/"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
              >
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Cotizar Ahora
              </a>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-gray transition-colors hover:bg-gray-100 lg:hidden"
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMobileOpen
            ? "max-h-96 border-t border-gray-100 bg-white shadow-lg"
            : "max-h-0"
        }`}
      >
        <nav className="space-y-1 px-4 py-4" aria-label="Menú móvil">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-brand-gray transition-colors hover:bg-light-bg hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          {onOpenQuote ? (
            <button
              onClick={() => {
                handleNavClick();
                onOpenQuote();
              }}
              className="mt-2 block w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
            >
              Cotizar Ahora con IA
            </button>
          ) : (
            <a
              href="/contacto/"
              onClick={handleNavClick}
              className="mt-2 block w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
            >
              Cotizar Ahora
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
