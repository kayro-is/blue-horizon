"use client";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";


const About = () => {
    return (
        <section id="about" className="relative w-full py-32 bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-600 text-white overflow-hidden">
        {/* Arrière-plan animé avec des particules lumineuses */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-blue-900 opacity-60"></div>
          <div className="absolute w-full h-full bg-noise opacity-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Titre avec effet néon et animation d'apparition */}
          <motion.h2
            className="text-3xl md:text-7xl font-extrabold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 animate-text-glow"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            À Propos des Océans
          </motion.h2>
  
          {/* Description immersive */}
          <motion.p
            className="text-lg md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Les océans sont le cœur vivant de notre planète, régulant le climat et abritant une biodiversité inestimable. Ils absorbent 25% du CO2 mondial et couvrent plus de 70% de la Terre.
          </motion.p>
  
          {/* Chiffres clés animés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[ 
              { title: "Surface Couvert", value: "71%", desc: "de la Terre est recouverte d'océans" },
              { title: "CO2 Absorbé", value: "25%", desc: "des émissions mondiales de CO2 sont absorbées par les océans" },
              { title: "Espèces Marines", value: "+230K", desc: "espèces recensées, mais il en reste encore beaucoup à découvrir" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <SparklesIcon className="h-10 w-10 text-teal-300 mx-auto mb-4 animate-pulse" />
                <h3 className="text-4xl font-extrabold text-teal-300 drop-shadow-lg">{stat.value}</h3>
                <p className="text-xl font-semibold mt-2 text-gray-100">{stat.title}</p>
                <p className="text-gray-300 mt-1">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default About;