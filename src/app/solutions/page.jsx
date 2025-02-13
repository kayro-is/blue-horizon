"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CheckCircleIcon, ClipboardListIcon, MapIcon } from 'lucide-react';

const actions = [
    { id: 1, title: "Réduire le plastique", desc: "Adoptez des alternatives durables et réduisez votre utilisation de plastique au quotidien.", icon: () => <CheckCircleIcon className="h-12 w-12 text-green-300 mx-auto mb-4" /> },
    { id: 2, title: "Consommer du poisson durablement", desc: "Suivez nos guides interactifs pour choisir du poisson issu de la pêche durable.", icon: () => <ClipboardListIcon className="h-12 w-12 text-green-300 mx-auto mb-4" /> },
    { id: 3, title: "Participer à des nettoyages de plage", desc: "Rejoignez les initiatives locales pour nettoyer nos côtes et océans.", icon: () => <MapIcon className="h-12 w-12 text-green-300 mx-auto mb-4" /> }
];

const Solutions = () => {
  const [showCommitment, setShowCommitment] = useState(false);

  return (
    <section id='solutions' className="relative w-full py-32 bg-gradient-to-br from-green-900 via-teal-800 to-blue-600 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full opacity-20">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" fillOpacity="0.2" d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,165.3C672,139,768,85,864,69.3C960,53,1056,75,1152,106.7C1248,139,1344,181,1392,202.7L1440,224V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-6xl font-extrabold mb-10 tracking-wide  animate-text-glow drop-shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ✅ Les Solutions & Actions ✅
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 font-light tracking-wide leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Découvrez comment agir pour protéger nos océans et participer à des initiatives écologiques.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {actions.map((action, index) => (
            <motion.div
              key={action.id} 
              className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 hover:scale-110 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {action.icon()}
              <h3 className="text-3xl font-extrabold text-green-400 drop-shadow-lg">{action.title}</h3>
              <p className="text-gray-300 mt-2 font-light">{action.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <button
            onClick={() => setShowCommitment(true)}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Je m’engage 🌍
          </button>
        </div>

        {showCommitment && (
          <motion.div 
            className="mt-10 bg-white/10 p-6 rounded-2xl shadow-2xl border border-white/20 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">Prenez un engagement 💚</h3>
            <ul className="text-lg text-gray-300 space-y-3">
              <li>✔️ Signer une pétition</li>
              <li>✔️ Recevoir un guide écoresponsable</li>
              <li>✔️ S’inscrire à une action locale</li>
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Solutions;