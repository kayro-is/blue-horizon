"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const sendEmail = (data) => {
    emailjs.send(
      "service_xxxxxx", // Remplace par ton ID EmailJS
      "template_xxxxxx", // Remplace par ton template ID
      data,
      "user_xxxxxx" // Remplace par ton user ID
    ).then(
      () => {
        alert("Message envoyé avec succès !");
        reset();
      },
      (error) => {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    );
  };

  return (
    <section id='contact' className="relative w-full py-32 bg-gradient-to-b from-teal-700 to-blue-900 text-white overflow-hidden">
         <div className="absolute inset-0 overflow-hidden opacity-50">
        <svg className="absolute bottom-0 left-0 w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillOpacity="0.2" d="M0,224L60,208C120,192,240,160,360,181.3C480,203,600,277,720,293.3C840,309,960,267,1080,240C1200,213,1320,203,1380,197.3L1440,192V320H0Z" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-10 tracking-wide  animate-text-glow drop-shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📩 Contact & Engagement 🌊
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 font-light tracking-wide leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Engagez-vous pour la protection des océans ou contactez-nous pour plus d’informations !
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulaire de Contact */}
          <motion.form 
            onSubmit={handleSubmit(sendEmail)} 
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-green-300 mb-6">📬 Contactez-nous</h3>
            <input {...register("name", { required: true })} 
            type="text" placeholder="Votre Nom" className="w-full px-4 py-3 mb-4 rounded-md bg-white/20 text-white placeholder-gray-300 border border-transparent focus:border-green-300" />
            {errors.name && <p className="text-red-400">Ce champ est requis.</p>}

            <input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} 
            type="email" placeholder="Votre Email" className="w-full px-4 py-3 mb-4 rounded-md bg-white/20 text-white placeholder-gray-300 border border-transparent focus:border-green-300" />
            {errors.email && <p className="text-red-400">Veuillez entrer un email valide.</p>}

            <textarea {...register("message", { required: true })} 
            placeholder="Votre Message" className="w-full px-4 py-3 mb-4 rounded-md bg-white/20 text-white placeholder-gray-300 border border-transparent focus:border-green-300 h-32"></textarea>
            {errors.message && <p className="text-red-400">Ce champ est requis.</p>}

            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md text-lg font-semibold transition-all">Envoyer</button>
          </motion.form>

          {/* Formulaire d’Engagement Écologique */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-blue-300 mb-6">🌍 Engagez-vous</h3>
            <p className="text-gray-300 mb-4">Sélectionnez vos actions pour protéger les océans :</p>
            <div className="flex flex-col gap-3 text-left">
              <label className="flex items-center gap-3"><input type="checkbox" className="w-5 h-5 text-green-500" /> Réduire mon utilisation de plastique</label>
              <label className="flex items-center gap-3"><input type="checkbox" className="w-5 h-5 text-green-500" /> Nettoyer une plage locale</label>
              <label className="flex items-center gap-3"><input type="checkbox" className="w-5 h-5 text-green-500" /> Utiliser des produits écologiques</label>
              <label className="flex items-center gap-3"><input type="checkbox" className="w-5 h-5 text-green-500" /> Sensibiliser mon entourage</label>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md text-lg font-semibold transition-all mt-6">Valider mon engagement</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
