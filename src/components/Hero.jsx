"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
      >
        <source src="https://videos.pexels.com/video-files/5362421/5362421-uhd_2560_1440_25fps.mp4" type="video/mp4" />

      </video>

      {/* Overlay subtil pour améliorer la lisibilité */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 mix-blend-overlay"></div>

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Protégeons les océans, 
          <span className="block text-blue-400">préservons notre avenir.</span>
        </h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href="#actions"
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
          >
            Découvrir les actions
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
