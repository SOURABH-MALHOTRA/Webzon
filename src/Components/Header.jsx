import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import webzon from "../assets/webzon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Ab sirf Image hai jo poori height cover karegi */}
          <Link to="/" className="flex items-center h-full py-2 group">
            <img
              src={webzon}
              alt="Webzon Logo"
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 rounded-full transition-all font-semibold text-l"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className={`hidden md:flex items-center gap-2 px-7 py-3 rounded-full font-bold transform transition-all duration-500 shadow-lg ${
              scrolled
                ? "bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white shadow-green-500/30 scale-105"
                : "bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-blue-500/20"
            } hover:scale-110 active:scale-95`}
          >
            <Rocket
              className={`w-4 h-4 ${
                scrolled ? "animate-bounce" : "animate-pulse"
              }`}
            />
            <span>Get Started</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-2xl absolute w-full left-0 top-20">
          <div className="px-4 py-6 flex flex-col space-y-3">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-xl transition-all font-semibold text-base block"
                >
                  {item}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold shadow-lg transition-all duration-500 transform ${
                  scrolled
                    ? "bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white shadow-green-500/30"
                    : "bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-blue-500/20"
                } active:scale-95`}
              >
                <Rocket
                  className={`w-5 h-5 ${
                    scrolled ? "animate-bounce" : "animate-pulse"
                  }`}
                />
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
