"use client";

import { useState, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white shadow-lg fixed top-0 z-50 relative overflow-hidden">
      {/* Ocean wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-2">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white/20"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-white/30"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white/40"
          ></path>
        </svg>
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-2 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-4 right-20 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute top-6 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="container flex h-16 items-center justify-between px-4 md:px-6 relative z-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            {/* Enhanced Ocean-themed Logo Design */}
            <div className="relative">
              {/* Main logo container with ocean gradient */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden border-2 border-white/20">
                {/* Animated wave pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent animate-pulse"></div>

                {/* Logo Image */}
                <Image
                  src="/logo.png"
                  alt="Natscape Logo"
                  width={40}
                  height={40}
                  className="rounded-xl object-cover"
                />

                {/* Ocean decorative elements */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-60 animate-bounce"></div>
              </div>

              {/* Floating bubble accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full animate-bounce opacity-80"></div>
            </div>

            {/* Logo text with ocean styling */}
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent drop-shadow-sm">
                Natscape
              </span>
              <span className="text-xs text-cyan-100 -mt-1 tracking-wider drop-shadow-sm">
                OCEAN STUDIO
              </span>
            </div>
          </div>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10 backdrop-blur-sm"
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
          <div className="absolute top-16 left-0 right-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 border-t border-white/20 z-50 md:hidden backdrop-blur-sm">
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
          <span className="text-sm font-medium text-cyan-100 transition-colors duration-300 group-hover:text-white relative z-10 drop-shadow-sm">
            {item.label}
          </span>
        </Link>
      ))}

      {/* Dynamic ocean wave underline */}
      <div
        className="absolute bottom-0 h-0.5 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 transition-all duration-300 ease-out rounded-full"
        style={{
          left: `${underlineStyle.left}px`,
          width: `${underlineStyle.width}px`,
          opacity: underlineStyle.opacity,
          transform: "translateY(2px)",
        }}
      />

      {/* Glowing wave effect */}
      <div
        className="absolute bottom-0 h-1 bg-gradient-to-r from-cyan-300/50 via-white/50 to-cyan-300/50 transition-all duration-300 ease-out rounded-full blur-sm"
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
      className="block text-sm font-medium text-cyan-100 hover:text-white transition-colors duration-300 py-2 hover:translate-x-2 transform drop-shadow-sm"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
