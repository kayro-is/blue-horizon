"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const threats = [
    {id:1, title: "Pollution Plastique", desc: "Chaque année, 8 millions de tonnes de plastique finissent dans l'océan.", img:"/pollution.webp"},
    {id:2, title: "Marées Noires", desc: "Les fuites de pétrole détruisent les écosystèmes marins.", img:"/marre-noir.webp"},
    {id:3, title: "Réchauffement Climatique", desc: "L’élévation des températures met en danger les récifs coralliens.", img:"/climat.webp"},
    {id:4, title: "Espèces Menacées", desc: "Des milliers d’espèces sont en voie d’extinction à cause des activités humaines.", img:"/especes.webp"}
];

const Help = () => {
  return (
    <section id='help' className="relative w-full py-32 bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-600 text-white overflow-hidden">
   
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-blue-900 opacity-60"></div>
            <div className="absolute w-full h-full bg-noise opacity-10 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden opacity-50">
        <svg className="absolute top-2/3 left-0 w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillOpacity="0.2" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,202.7C672,235,768,245,864,208C960,171,1056,85,1152,69.3C1248,53,1344,107,1392,133.3L1440,160V320H0Z" />
        </svg>
      </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-6xl font-extrabold mb-10 tracking-wide animate-text-glow drop-shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🌊 Les Menaces sur les Océans 🌊
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 font-light tracking-wide leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Nos océans sont en danger. Découvrez les menaces qui pèsent sur eux et l'impact des activités humaines sur la vie marine.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {threats.map((threat, index) => (
            <motion.div
              key={threat.id} 
              className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 hover:scale-110 transition-transform duration-500 hover:bg-opacity-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-full h-[350px] flex justify-center items-center overflow-hidden rounded-lg">
                <Image
                  src={threat.img}
                  alt={threat.title}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover transform hover:scale-110 transition-all duration-700 rounded-xl shadow-xl"
                />
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-red-400 drop-shadow-lg flex items-center gap-2 mt-4">
                <ExclamationCircleIcon className="h-8 w-8 text-red-500 animate-bounce"/>
                {threat.title}
              </h3>
              <p className="text-gray-300 mt-2 font-light">{threat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-extrabold text-yellow-400 mb-6 drop-shadow-2xl">🌟 Espèces en Danger 🌟</h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-10"
          >
            {["/tortue.webp", "/requin.webp", "/corail.webp", "/dauphin.webp"].map((img, idx) => (
              <SwiperSlide key={idx}>
                <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-white/10 rounded-xl shadow-2xl hover:bg-opacity-20 transition-all duration-500">
                  <Image 
                    src={img} 
                    alt="Espèce en danger" 
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Help;
