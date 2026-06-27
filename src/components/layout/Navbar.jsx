
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Bot, Download } from "lucide-react";

const navLinks = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
];

export default function Navbar({ onOpenChat }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}

        <h1 className="text-3xl font-black tracking-tight">

          Vibhoo

          <span className="text-blue-500">.</span>

        </h1>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-blue-400"
              className="cursor-pointer capitalize text-slate-300 transition hover:text-blue-400"
            >
              {item}
            </Link>
          ))}

        </nav>

        {/* Right Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2 hover:border-blue-500 transition">

            <Download size={18} />

            Resume

          </button>

          <button
  onClick={onOpenChat}
  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 transition hover:scale-105"
>
  <Bot size={18} />
  AI Assistant
</button>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950">

          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 capitalize border-b border-slate-800"
            >
              {item}
            </Link>
          ))}

        </div>
      )}
    </header>
  );
}