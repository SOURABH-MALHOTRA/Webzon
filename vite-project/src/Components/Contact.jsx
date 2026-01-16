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

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: ["+91 9034145122"],
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: ["sourabhmalhotra137@gmail.com"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      details: ["Ambala Cantt, Haryana", "India - 133001"],
      gradient: "from-purple-500 to-pink-600",
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
      icon: <Instagram className="w-7 h-7 text-orange-600" />,
      name: "Instagram",
      href: "https://www.instagram.com/your-instagram-id",
      color: "hover:bg-orange-100",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg">
              GET IN TOUCH
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Let's Start Your
              <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
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
      {/* Contact Info Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          {/* grid-cols-3 forcing 3 columns even on mobile, added gap-3 for tighter fit on small screens */}
          <div className="grid grid-cols-3 gap-3 md:gap-8 min-w-[600px] md:min-w-full">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 text-center"
              >
                <div
                  className={`w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br ${info.gradient} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all`}
                >
                  {/* Icon size adjusted for mobile inside the 3-column layout */}
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
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-orange-100">
              <div className="mb-8">
                <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-bold text-sm mb-4">
                  SEND MESSAGE
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Tell Us About Your{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
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
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 outline-none transition-all font-medium"
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
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 outline-none transition-all font-medium"
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
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 outline-none transition-all font-medium"
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
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 outline-none transition-all font-medium"
                      >
                        <option value="">Select Service</option>
                        <option value="android">Android Development</option>
                        <option value="ios">iOS Development</option>
                        <option value="custom">Custom Software</option>
                        <option value="website">Website Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="saas">SaaS Development</option>
                        <option value="design">Web Design</option>
                        <option value="database">
                          Search Engine Optimization
                        </option>
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
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 outline-none transition-all font-medium resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-8 py-5 rounded-full font-black text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-3"
                  >
                    <Send className="w-6 h-6" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-100 group hover:border-amber-400 transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.6241059205067!2d76.83769688150433!3d30.33320810975001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb77efd0d66f5%3A0x7b77c65f9005ef01!2sMalhotra%20Architects!5e0!3m2!1sen!2sin!4v1768393588614!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-10 rounded-3xl shadow-2xl text-white">
                <h3 className="text-3xl font-black mb-6">Why Contact Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Free consultation & project estimation",
                    "24/7 customer support availability",
                    "Quick response within 24 hours",
                    "Transparent pricing & timeline",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-bold text-sm mb-6">
            FOLLOW US
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-8">
            Connect With Us On{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Social Media
            </span>
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-16 h-16 bg-white rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 ${social.color} hover:text-white transform hover:scale-110 transition-all border-2 border-gray-100`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
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

export default Contact;
