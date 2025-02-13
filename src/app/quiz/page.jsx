"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FinalSection = () => {
  const [impactCount, setImpactCount] = useState(50000);

  useEffect(() => {
    const interval = setInterval(() => {
      setImpactCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='quiz' className="relative w-full py-32 bg-gradient-to-b from-blue-900 to-cyan-700 text-white text-center overflow-hidden">
      {/* Effet d'animation des vagues en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <svg className="absolute bottom-0 left-0 w-full h-auto animate-wave-motion" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillOpacity="0.3" d="M0,160L60,144C120,128,240,96,360,112C480,128,600,192,720,224C840,256,960,224,1080,192C1200,160,1320,128,1380,112L1440,96V320H0Z" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-14 tracking-wide  animate-text-glow drop-shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🌊 Pourquoi Protéger les Océans ? 🌍
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 font-light tracking-wide leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Les océans couvrent plus de 70% de notre planète et produisent plus de la moitié de l’oxygène que nous respirons. Ils sont essentiels à notre survie, mais ils sont en danger. Il est temps d’agir pour préserver ce trésor inestimable.
        </motion.p>

        {/* Compteur d'impact avec animation */}
        <motion.div
          className="text-5xl font-extrabold text-green-400 mb-6 shadow-lg bg-white/10 p-6 rounded-xl inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          {impactCount.toLocaleString()}+ Actions Positives
        </motion.div>
        <p className="text-gray-300 text-lg">Nombre d'actions écologiques entreprises dans notre communauté.</p>

        {/* Bouton CTA ultra-moderne */}
        <motion.a
          href="#engagement"
          className="mt-8 inline-block bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-4 px-8 rounded-full text-lg font-semibold transition-all shadow-md hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Rejoignez le mouvement 🌱
        </motion.a>
      </div>
    </section>
  );
};

export default FinalSection;
