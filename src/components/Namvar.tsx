
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Namvar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d12]/95 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/#home"
          className="flex items-center gap-2 text-2xl font-bold"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-4xl text-lime-400">K</span>
          <span>Kamrul</span>
          <span className="text-lime-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-lime-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

<Link
  href="/resume"
  className="rounded-full border border-lime-400 bg-lime-400/10 px-5 py-2 text-sm font-semibold text-lime-400 transition-all duration-300 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]"
>
  Resume <span className="ml-1">↗</span>
</Link>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/20 px-3 py-2 text-xl md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 transition hover:text-lime-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/resume"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-full border border-lime-400 px-5 py-2 text-lime-400"
            >
              Download Resume ↓
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
