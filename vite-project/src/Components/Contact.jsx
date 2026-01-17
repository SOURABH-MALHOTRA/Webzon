import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Rocket,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ygsqvo8",
        "template_i4cqadi",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "60KvIV-QRcA3parXR"
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Message send nahi hua");
      });
  };

  // Gradients updated to Blue-Green palette
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: ["+91 9034145122"],
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: ["sourabhmalhotra137@gmail.com"],
      gradient: "from-blue-700 to-green-600",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      details: ["Ambala Cantt, Haryana", "India - 133001"],
      gradient: "from-green-500 to-emerald-700",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-7 h-7 text-blue-700" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/webzon-software/?viewAsMember=true",
      color: "hover:bg-blue-100",
    },
    {
      icon: <Instagram className="w-7 h-7 text-pink-600" />,
      name: "Instagram",
      href: "https://www.instagram.com/your-instagram-id",
      color: "hover:bg-pink-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Blue/Green Background */}
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
              GET IN TOUCH
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Let's Start Your
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-500 bg-clip-text text-transparent">
                Success Story
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
              Have a project in mind? We'd love to hear from you. Let's discuss
              how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-3 md:gap-8 min-w-[600px] md:min-w-full">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 text-center"
              >
                <div
                  className={`w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br ${info.gradient} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all`}
                >
                  {React.cloneElement(info.icon, {
                    className: "w-6 h-6 md:w-8 md:h-8",
                  })}
                </div>
                <h3 className="text-sm md:text-xl font-black text-gray-900 mb-2 md:mb-4">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-[10px] md:text-base text-gray-600 font-medium break-all"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-blue-50">
              <div className="mb-8">
                <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold text-sm mb-4">
                  SEND MESSAGE
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Tell Us About Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    Project
                  </span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-2xl text-center animate-fadeInUp">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-black mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-lg">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all font-medium"
                        placeholder="+91 123 456 7890"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all font-medium"
                      >
                        <option value="">Select Service</option>
                        <option value="android">Android Development</option>
                        <option value="ios">iOS Development</option>
                        <option value="custom">Custom Software</option>
                        <option value="website">Website Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="saas">SaaS Development</option>
                        <option value="design">Web Design</option>
                        <option value="seo">Search Engine Optimization</option>
                        <option value="logo">Logo Design</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all font-medium resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-5 rounded-full font-black text-lg hover:shadow-[0_20px_40px_rgba(0,82,204,0.3)] transform hover:scale-105 transition-all flex items-center justify-center gap-3"
                  >
                    <Send className="w-6 h-6" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-100 group hover:border-blue-400 transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.624102746608!2d76.8425678!3d30.333208199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb77efd0d66f5%3A0x7b77c65f9005ef01!2sMalhotra%20Architects!5e0!3m2!1sen!2sin!4v1768633883634!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Why Contact Us - Blue Theme */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-10 rounded-3xl shadow-2xl text-white">
                <h3 className="text-3xl font-black mb-6">Why Contact Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Free consultation & project estimation",
                    "24/7 customer support availability",
                    "Quick response within 24 hours",
                    "Transparent pricing & timeline",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0 text-green-400" />
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media - Blue theme labels */}
      {/* Social Media Section - Balanced Medium Version */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Box Size Updated: p-10 to p-16 */}
          <div className="bg-[#0a192f] rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl border border-white/5 text-center">
            {/* Background Decorative Glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[90px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-[90px] pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Label */}
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-blue-400 px-6 py-2 rounded-full font-bold text-xs md:text-sm mb-6 uppercase tracking-wider">
                Stay Connected
              </div>

              {/* Heading Size Updated: md:text-4xl to 5xl */}
              <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
                Connect With Us On <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-green-400 bg-clip-text text-transparent">
                  Social Media
                </span>
              </h2>

              {/* Social Icons Grid - Balanced Size */}
              <div className="flex justify-center gap-5 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:bg-gradient-to-br ${social.color} hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]`}
                    aria-label={social.name}
                  >
                    <div className="group-hover:animate-bounce-slow">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>

              <p className="mt-10 text-blue-100/40 font-medium text-sm md:text-base">
                Follow us for the latest tech updates and project reveals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-slow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Contact;
