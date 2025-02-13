"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / scrollHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      const offset = 90; // Ajuste selon la hauteur de la navbar
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsOpen(false); // Ferme le menu mobile après le clic
    }
  };

  const links = [
    { name: "Accueil", path: "#home" },
    { name: "À Propos", path: "#about" },
    { name: "Les Menaces", path: "#help" },
    { name: "Solutions", path: "#solutions" },
    { name: "Galerie", path: "#gallery" },
    { name: "Actions", path: "#quiz" },
    { name: "Contact", path: "#contact" }

    
  ];

  return (
    <>
      {/* Barre de progression au scroll */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.2 }}
      />

      <nav
        className={`fixed top-0 left-0 w-full px-6 py-4 z-50 backdrop-blur-lg transition-all duration-500 shadow-xl rounded-b-2xl ${
          scrolling ? "bg-transparent /90 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo animé */}
          <button onClick={() => scrollToSection("#home")} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-32"
            >
              <Image 
                src="/logo.png" 
                alt="Logo OceanProtect" 
                width={128} 
                height={40} 
                priority 
              />
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, index) => (
              <button key={index} onClick={() => scrollToSection(link.path)} className="relative text-white hover:text-blue-500 cursor-pointer transition font-semibold group">
                <span className="relative z-10">{link.name}</span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg bg-gray-200 hover:bg-gray-300 shadow-md"
          >
            {isOpen ? (
              <X size={28} className="text-gray-700" />
            ) : (
              <Menu size={28} className="text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: -90 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 h-screen bg-gradient-to-b from-blue-500 to-cyan-500 flex flex-col items-center justify-center space-y-6 text-2xl font-medium shadow-lg backdrop-blur-xl"
            >
              {links.map((link, index) => (
                <button key={index} onClick={() => scrollToSection(link.path)} className="text-white hover:text-gray-200 transition text-lg">
                  {link.name}
                </button>
              ))}
              {/* Bouton de fermeture */}
              <motion.button
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              >
                <X size={28} className="text-gray-700" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
