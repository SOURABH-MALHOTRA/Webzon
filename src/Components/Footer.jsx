import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Home,
  Info,
  Briefcase,
  Layers,
  Send,
} from "lucide-react";
import webzon2 from "../assets/webzon2.png";

const Footer = () => {
  const links = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Info className="w-4 h-4" /> },
    {
      name: "Services",
      path: "/services",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { name: "Contact", path: "/contact", icon: <Send className="w-4 h-4" /> },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-auto w-50 transition-transform duration-300 hover:scale-105">
                <img
                  src={webzon2}
                  alt="Webzon Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg max-w-md">
              We craft innovative software solutions that empower businesses to
              achieve digital excellence with cutting-edge technology.
            </p>
          </div>

          {/* Quick Links Section - Blue to Green Gradient */}
          <div>
            <h3 className="font-black text-xl mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                  >
                    <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-green-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section - Icons updated to Blue */}
          <div>
            <h3 className="font-black text-xl mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-5 text-gray-400">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform group-hover:text-green-400" />
                <span className="font-medium hover:text-white transition-colors cursor-pointer break-all">
                  sourabhmalhotra137@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform group-hover:text-green-400" />
                <span className="font-medium hover:text-white transition-colors cursor-pointer">
                  +91 9034145122
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform group-hover:text-green-400" />
                <span className="font-medium">Ambala, Haryana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 font-medium">
            © 2025 Webzon. All rights reserved. Built with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
