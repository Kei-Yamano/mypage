"use client";

import { useState, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            {/* Enhanced Logo Design */}
            <div className="relative">
              {/* Main logo container */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>

                {/* Character */}
                <span className="text-white font-bold text-lg relative z-10 drop-shadow-sm">
                  夏
                </span>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-300 rounded-full opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-60"></div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-bounce opacity-80"></div>
            </div>

            {/* Logo text with enhanced styling */}
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Natscape
              </span>
              <span className="text-xs text-slate-300 -mt-1 tracking-wider">
                CREATIVE STUDIO
              </span>
            </div>
          </div>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavigationMenu />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-slate-800 border-t border-slate-600 z-50 md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <MobileNavLink
                href="/pages/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </MobileNavLink>
              <MobileNavLink
                href="/pages/product"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </MobileNavLink>
              <MobileNavLink
                href="/pages/article"
                onClick={() => setIsMenuOpen(false)}
              >
                Article
              </MobileNavLink>
              <MobileNavLink
                href="/pages/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </MobileNavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavigationMenu() {
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: "/pages/about", label: "About" },
    { href: "/pages/product", label: "Product" },
    { href: "/pages/article", label: "Article" },
    { href: "/pages/contact", label: "Contact" },
  ];

  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const nav = navRef.current;
    if (nav && target) {
      const navRect = nav.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      setUnderlineStyle({
        left: targetRect.left - navRect.left,
        width: targetRect.width,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={navRef}
      className="relative flex items-center gap-8"
      onMouseLeave={handleMouseLeave}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative group py-2"
          onMouseEnter={handleMouseEnter}
        >
          <span className="text-sm font-medium text-slate-200 transition-colors duration-300 group-hover:text-white relative z-10">
            {item.label}
          </span>
        </Link>
      ))}

      {/* Dynamic underline that follows cursor */}
      <div
        className="absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 transition-all duration-300 ease-out rounded-full"
        style={{
          left: `${underlineStyle.left}px`,
          width: `${underlineStyle.width}px`,
          opacity: underlineStyle.opacity,
          transform: "translateY(2px)",
        }}
      />

      {/* Glowing effect */}
      <div
        className="absolute bottom-0 h-1 bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-blue-500/50 transition-all duration-300 ease-out rounded-full blur-sm"
        style={{
          left: `${underlineStyle.left}px`,
          width: `${underlineStyle.width}px`,
          opacity: underlineStyle.opacity * 0.7,
          transform: "translateY(2px)",
        }}
      />
    </div>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block text-sm font-medium text-slate-200 hover:text-white transition-colors duration-300 py-2 hover:translate-x-2 transform"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
