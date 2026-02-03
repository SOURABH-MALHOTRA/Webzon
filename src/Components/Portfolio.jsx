import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ExternalLink,
  Rocket,
  CheckCircle,
  Users,
  TrendingUp,
  Send,
} from "lucide-react";
import Travel from "../assets/AITravel.png";
import architect from "../assets/architect.png";
import clothing from "../assets/clothing.png";
import food from "../assets/food.png";
import shoes from "../assets/shoes.png";
import trade from "../assets/trade.png";
import taxi from "../assets/TaxiService.png";
import kerala from "../assets/kerla.png";
import coaching from "../assets/coaching.png";
import digital from "../assets/digital.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Travel & Trip Planning Platform",
      image: Travel,
      link: "https://traveinstein.com/",
    },
      {
      id: 2,
      title: "Footwear D2C E-Commerce Brand",
      image: shoes,
      link: "https://neemans.com/",
    },
     {
      id: 3,
      title: "E-Commerce Clothing Platform",
      image: clothing,
      link: "https://www.beyoung.in/",
    },
    {
      id: 4,
      title: "Food Ordering Website",
      image: food,
      link: "https://biryanibykilo.com/",
    },
   
    {
      id: 5,
      title: "Cab Booking Service",
      image: taxi,
      link: "https://giexpresstaxi.co.uk/",
    },
  
    {
      id: 6,
      title: "Financial Services & Investment Platform",
      image: trade,
      link: "https://unlistedsharewala.com/",
    },
    {
      id: 7,
      title: "Architect Portfolio",
      image: architect,
      link: "https://malhotra-associates.vercel.app/",
    },
    {
      id: 8,
      title: "Travel & Tour Landing Page",
      image: kerala,
      link: "https://cyberroshan.github.io/Kerala-Plan-Tours.github.io/",
    },
    {
      id: 9,
      title: "Digital Agency Website",
      image: digital,
      link: "https://www.multiverbalcreations.com/",
    },
    {
      id: 10,
      title: "Coaching Institute Landing Page",
      image: coaching,
      link: "https://cyberroshan.github.io/lawpreptutorial.github.io/",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Blue/Green Gradient */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg">
              OUR PORTFOLIO
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our Best
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-500 bg-clip-text text-transparent">
                Work Showcase
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
              Explore our portfolio of successful projects delivered to clients
              worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Colors updated to Blue/Green */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-y-10 sm:gap-x-4">
            {[
              {
                num: "50+",
                label: "Projects Completed",
                icon: <CheckCircle className="w-10 h-10" />,
              },
              {
                num: "35+",
                label: "Happy Clients",
                icon: <Users className="w-10 h-10" />,
              },
              {
                num: "98%",
                label: "Success Rate",
                icon: <TrendingUp className="w-10 h-10" />,
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">
                  {stat.num}
                </h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Border & Hover Colors updated */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </a>

                <div className="p-6">
                  <h3 className="text-l font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed clipping and colors */}
      {/* CTA Section - Midnight Tech Theme */}
      {/* Portfolio CTA - Service Page Style Box */}
      {/* Portfolio CTA - Results Focused */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0a192f] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px]"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Love Our Work? <br className="hidden md:block" />
                <span className="text-blue-400">Build Yours Next</span>
              </h2>
              <p className="text-lg text-blue-100/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether it's an app or custom software, we bring passion to
                every project. Let's turn your idea into reality.
              </p>
              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 bg-gradient-to-r from-blue-500 to-green-500 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-lg hover:scale-105"
                >
                  <span>Start My Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-slow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out both; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Portfolio;
