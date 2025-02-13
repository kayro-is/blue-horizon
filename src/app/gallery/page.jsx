"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { PlayIcon, XIcon } from "@heroicons/react/outline";

const galleryItems = [

  { type: "video", src: "https://videos.pexels.com/video-files/5362421/5362421-uhd_2560_1440_25fps.mp4", alt: "Magnifique vue sous-marine" },
  { type: "video", src: "https://videos.pexels.com/video-files/3765078/3765078-uhd_2560_1440_30fps.mp4", alt: "Vidéo immersive d’un récif corallien" },
  { type: "video", src: "https://videos.pexels.com/video-files/15546561/15546561-uhd_2560_1440_25fps.mp4", alt: "Dauphins nageant librement" },
  { type: "video", src: "https://videos.pexels.com/video-files/20309968/20309968-uhd_2560_1440_30fps.mp4", alt: "Vagues paisibles au coucher du soleil" },
  { type: "video", src: "https://videos.pexels.com/video-files/19120690/19120690-uhd_2560_1440_25fps.mp4", alt: "Plongée dans les profondeurs marines" }

];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSoundOn, setIsSoundOn] = useState(false);

  return (
    <section id='gallery' className="relative w-full py-32 bg-gradient-to-br from-blue-600 via-teal-800 to-green-900 text-white overflow-hidden">
      {/* Arrière-plan SVG dynamique avec effet de vagues */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <svg className="absolute top-2/3 left-0 w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillOpacity="0.2" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,202.7C672,235,768,245,864,208C960,171,1056,85,1152,69.3C1248,53,1344,107,1392,133.3L1440,160V320H0Z" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-6xl font-extrabold mb-10 tracking-wide  animate-text-glow drop-shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🌊 Galerie Immersive & Vidéos 🎥
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 font-light tracking-wide leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Plongez dans un univers marin fascinant à travers des images et vidéos en haute définition.
        </motion.p>

        {/* Swiper Slider avec effets avancés */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="rounded-xl shadow-2xl overflow-hidden relative"
        >
          {galleryItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div 
                className="relative w-full h-[500px] flex justify-center items-center overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted={!isSoundOn}
                    playsInline
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal d'agrandissement */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button className="absolute top-4 right-4 bg-red-500 p-2 rounded-full" onClick={() => setSelectedItem(null)}>
              <XIcon className="h-6 w-6 text-white" />
            </button>
            {selectedItem.type === "image" ? (
              <Image src={selectedItem.src} alt={selectedItem.alt} width={1200} height={800} className="w-full rounded-lg shadow-lg" />
            ) : (
              <video autoPlay controls className="w-full rounded-lg shadow-lg">
                <source src={selectedItem.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;