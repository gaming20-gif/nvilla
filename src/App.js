import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MapPin, Phone, Mail, Star, Calendar, Users, Waves, Palmtree, Coffee, Wifi, Car, UtensilsCrossed } from 'lucide-react';

export default function LuxuryResort() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rooms = [
    { name: 'Ocean Suite', price: 450, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop', guests: 2 },
    { name: 'Royal Villa', price: 850, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop', guests: 4 },
    { name: 'Beachfront Bungalow', price: 650, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop', guests: 3 }
  ];

  const amenities = [
    { icon: Waves, text: 'Private Beach' },
    { icon: UtensilsCrossed, text: 'Fine Dining' },
    { icon: Wifi, text: 'Free WiFi' },
    { icon: Car, text: 'Valet Parking' },
    { icon: Coffee, text: 'Spa & Wellness' },
    { icon: Palmtree, text: 'Infinity Pool' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
            AZURE PARADISE
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Rooms', 'Amenities', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-all duration-300 hover:scale-110 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-amber-400">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-xl animate-slideDown">
            {['Home', 'Rooms', 'Amenities', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-6 py-4 hover:bg-amber-400/20 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 text-center px-6 animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent animate-slideUp">
            Escape to Paradise
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-slideUp animation-delay-200">
            Where luxury meets tranquility
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 animate-slideUp animation-delay-400">
            <span className="relative z-10 flex items-center">
              Book Your Stay <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-amber-400" size={32} />
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Luxurious Accommodations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 hover:scale-105 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setActiveRoom(idx)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{room.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center text-gray-400">
                      <Users size={18} className="mr-2" /> {room.guests} Guests
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-amber-400">${room.price}</span>
                    <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            World-Class Amenities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30"
                >
                  <div className="p-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-amber-400 transition-colors">{amenity.text}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Experience the Beauty
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop'
            ].map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-square hover:scale-95 transition-all duration-500 cursor-pointer">
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">Ready to experience paradise? Contact us today!</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 transition-all duration-300">
              <MapPin className="mx-auto mb-4 text-amber-400" size={32} />
              <p className="text-gray-300">123 Paradise Beach, Maldives</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 transition-all duration-300">
              <Phone className="mx-auto mb-4 text-amber-400" size={32} />
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 transition-all duration-300">
              <Mail className="mx-auto mb-4 text-amber-400" size={32} />
              <p className="text-gray-300">info@azureparadise.com</p>
            </div>
          </div>
          <button className="px-12 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300">
            Reserve Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 text-center text-gray-400">
        <p>&copy; 2025 Azure Paradise Resort. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}