import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink, Rocket, CheckCircle, Users, TrendingUp } from 'lucide-react';
import Travel from '../assets/AITravel.png';
import architect from '../assets/architect.png';
import clothing from '../assets/clothing.png';
import food from '../assets/food.png';
import shoes from '../assets/shoes.png';
import trade from '../assets/trade.png';
import taxi from '../assets/TaxiService.png';
import kerala from '../assets/kerla.png';
import coaching from '../assets/coaching.png';
import digital from '../assets/digital.png';
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Travel & Trip Planning Platform",
      
      
      image: Travel,
      link: "https://traveinstein.com/"
    },
    {
      id: 2,
      title: "Food Ordering Website",
     
      
      image: food,
      link: "https://biryanibykilo.com/"
    },
    {
      id: 3,
      title: "E-Commerce Clothing Platform",
      

      image: clothing,
      link: "https://foreverbuy.in/"
    },
    {
      id: 4,
      title: "Cab Booking Service",
      
      
      image: taxi,
      link: "https://giexpresstaxi.co.uk/"
    },
    {
      id: 5,
      title: "Footwear D2C E-Commerce Brand",
    
      
      image: shoes,
      link: "https://neemans.com/"
    },
    {
      id: 6,
      title: "Financial Services & Investment Platform",
   

      image: trade,
      link: "https://unlistedsharewala.com/"
    },
    {
      id: 7,
      title: "Architect Portfolio",
     
      
      image: architect,
      link: "https://malhotra-associates.vercel.app/"
    },
    {
      id: 8,
      title: "Travel & Tour Landing Page",
      
      
      image: kerala,
      link: "https://cyberroshan.github.io/Kerala-Plan-Tours.github.io/"
    },
  
  
      {
      id: 9,
      title: "Digital Agency Website",
      
      
      image: digital,
      link: "https://www.multiverbalcreations.com/"
    },
      {
      id: 10,
      title: "Coaching Institute Landing Page",
      
      
      image: coaching,
      link: "https://cyberroshan.github.io/lawpreptutorial.github.io/"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
     

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg">
              OUR PORTFOLIO
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our Best
              <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                Work Showcase
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
              Explore our portfolio of successful projects delivered to clients worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats - Icons add kiye aur tight spacing rakhi */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto"> 
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-x-4">
            {[
              { num: "50+", label: "Projects Completed", icon: <CheckCircle className="w-10 h-10" /> },
              { num: "35+", label: "Happy Clients", icon: <Users className="w-10 h-10" /> },
              { num: "98%", label: "Success Rate", icon: <TrendingUp className="w-10 h-10" /> },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl group-hover:scale-110 transition-transform">
                  {/* Yahan number ki jagah icon set kar diya */}
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">{stat.num}</h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Project Image */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </a>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-l font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>

                  


                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-orange-600"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Rocket className="w-20 h-20 text-orange-500 mx-auto mb-8 animate-bounce-slow" />
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Start
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 font-medium">
            Let's create the next success story together
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-12 py-6 rounded-full font-black text-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-3">
            <span>Start Your Project</span>
            <ExternalLink className="w-6 h-6" />
          </Link>
        </div>
      </section>

     

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;