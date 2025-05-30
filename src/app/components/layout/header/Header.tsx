"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-semibold">Logo</span>
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
          <NavLink href="/pages/about">About</NavLink>
          <NavLink href="/pages/product">Product</NavLink>
          <NavLink href="/pages/article">Article</NavLink>
          <NavLink href="/pages/contact">Contact</NavLink>
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

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="relative group">
      <span className="text-sm font-medium text-slate-200 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
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
      className="block text-sm font-medium text-slate-200 hover:text-white transition-colors duration-300 py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
