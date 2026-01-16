import React, { useState, useEffect } from 'react';
import { Menu, X, Target, Eye, Award, Users, TrendingUp, Zap, Heart, Shield, Code2, Rocket, CheckCircle, ArrowRight, Star, Briefcase, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const values = [
    { icon: <Zap className="w-12 h-12" />, title: "Innovation First", desc: "We push boundaries and embrace cutting-edge technologies to deliver solutions that stand out in the market." },
    { icon: <Heart className="w-12 h-12" />, title: "Client Success", desc: "Your success is our mission. We build lasting partnerships by delivering exceptional results every time." },
    { icon: <Shield className="w-12 h-12" />, title: "Quality Assurance", desc: "Every line of code is crafted with precision. We maintain the highest standards in everything we deliver." },
    { icon: <Users className="w-12 h-12" />, title: "Team Collaboration", desc: "Great solutions come from great teams. We foster creativity, respect, and open communication." },
  ];

  const team = [
    { name: "Rajesh Kumar", role: "CEO & Founder", expertise: "15+ years in Software", image: "RK" },
    { name: "Priya Sharma", role: "CTO", expertise: "Full Stack Expert", image: "PS" },
    { name: "Amit Patel", role: "Lead Designer", expertise: "UI/UX Specialist", image: "AP" },
    { name: "Sneha Reddy", role: "Project Manager", expertise: "Agile Expert", image: "SR" },
    { name: "Vikram Singh", role: "Senior Developer", expertise: "React & Node.js", image: "VS" },
    { name: "Anjali Gupta", role: "QA Lead", expertise: "Testing Specialist", image: "AG" },
  ];

  const milestones = [
    { year: "2015", title: "Company Founded", desc: "Started with a vision to transform digital landscape" },
    { year: "2017", title: "50+ Projects", desc: "Crossed major milestone in client satisfaction" },
    { year: "2020", title: "100+ Team Members", desc: "Expanded our talented workforce significantly" },
    { year: "2023", title: "500+ Projects", desc: "Became industry leaders in software solutions" },
  ];

  const achievements = [
    { icon: <Award className="w-10 h-10" />, title: "Best Software Company 2024", org: "Tech Excellence Awards" },
    { icon: <Star className="w-10 h-10" />, title: "Top 10 IT Companies", org: "Industry Rankings 2024" },
    { icon: <TrendingUp className="w-10 h-10" />, title: "Fastest Growing Startup", org: "Business Today 2023" },
    { icon: <Globe className="w-10 h-10" />, title: "Global Recognition", org: "International Tech Summit" },
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
              ABOUT WEBZON
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Building Digital
              <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                Excellence Together
                
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
              We're not just developers. We're digital architects, innovation partners, and your success story creators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group relative bg-gradient-to-br from-orange-500 to-orange-600 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-black text-white mb-6">Our Mission</h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  To empower businesses worldwide with innovative software solutions that drive growth, enhance efficiency, and create lasting digital impact. We're committed to turning complex challenges into simple, elegant solutions.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/10 rounded-full -ml-20 -mb-20"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-orange-500/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Eye className="w-10 h-10 text-orange-500" />
                </div>
                <h2 className="text-4xl font-black text-white mb-6">Our Vision</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To be the most trusted and innovative software development partner globally, recognized for excellence, creativity, and the transformative impact we create for every client we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-bold text-sm mb-6">
              OUR CORE VALUES
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              What Drives <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Us Forward</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values aren't just words on a wall. They're the foundation of everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 rounded-3xl shadow-xl transform transition-all duration-500 border-2 ${
                  activeValue === index ? 'border-orange-500 scale-105 shadow-2xl' : 'border-gray-100 hover:border-orange-200'
                }`}
                onMouseEnter={() => setActiveValue(index)}
              >
                <div className={`w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-xl transition-transform duration-300 ${
                  activeValue === index ? 'scale-110 rotate-6' : ''
                }`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


       {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something amazing together. Join hands with Webzon today!
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-12 py-5 rounded-full font-black text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-3">
            <span>Start Your Project</span>
            <ArrowRight className="w-6 h-6" />
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

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;