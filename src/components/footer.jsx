"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer 
      className="w-full bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-600 text-white py-16 mt-20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Effets de fond animés */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
      <motion.div 
        className="absolute -top-10 left-1/2 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Section Logo et Description */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h2 className="text-4xl font-extrabold">🌊 OceanProtect</h2>
          <p className="text-gray-300 mt-4 text-lg">Protégeons nos océans pour les générations futures. Engagez-vous avec nous pour un monde plus propre et plus durable.</p>
        </motion.div>

        {/* Liens de Navigation */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-blue-400 transition">Accueil</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">À Propos</a></li>
            <li><a href="#solutions" className="hover:text-blue-400 transition">Solutions</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact & Réseaux sociaux */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-bold mb-4">Nous Contacter</h3>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Mail size={20} />
            <span>contact@oceanprotect.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3 mt-2">
            <Phone size={20} />
            <span>+33 1 23 45 67 89</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3 mt-2">
            <MapPin size={20} />
            <span>Paris, France</span>
          </div>
          <div className="flex space-x-6 mt-6 justify-center md:justify-start">
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Facebook size={28} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Twitter size={28} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Instagram size={28} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={28} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Copyright avec animation */}
      <motion.div 
        className="mt-12 text-center text-gray-400 text-sm border-t border-white/10 pt-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        &copy; {new Date().getFullYear()} OceanProtect. Tous droits réservés.
      </motion.div>
    </motion.footer>
  );
}
