"use client"
import React from 'react'
import Image from 'next/image';
import doctorfondo from '/public/doctorfondo.png'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "../components/utils/motionTransitions"
const Doctor = () => {
  return (
    <main className="about-section bg-cover bg-center min-h-screen relative">
      <div className="-z-10">
          <Image
            className="mx-auto"
            src={doctorfondo}
            alt="Fondo de la sección doctor"
            layout="fill" // Ocupa todo el contenedor
            objectFit="cover" // Asegura que la imagen se adapte
            quality={100} // Opcional: Ajusta la calidad
    />
    </div>

      <div className="absolute inset-0 flex items-center justify-center ">
        <h1 className= "text-amber-400 p-5 text-center font-medium text-6xl mb-80"
            style={{ fontFamily: "Averia Sans Libre" }}>
            ... algo de Doctor
        </h1>          
    </div>

    <div className="absolute inset-0 flex items-center justify-center mb-20 " 
            style={{ top: "40%" }}  >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='p-6 rounded-xl max-w-2xl w-full cursor-pointer'>
            
          <Link href="/doctor/sancho-doctor">  
            <p className="gap-6 text-amber-400 cursor-pointer hover text-xl sm:text-2xl md:text-4xl font-medium px-4 sm:px-10 text-center"
               style={{ fontFamily: "Averia Sans Libre" }}>
              Sancho divulga saberes con la erudición que le da su doctorado en ciencias y 
              su experiencia generando conocimientos en las áreas que se ha desempeñado como 
              académico universitario, incluyendo proyectos de literatura, psicología y 
              estudios de patrimonio cultural.
            </p>
            </Link> 
            
        </motion.div> 
      </div> 
    
       
  


    </main>
  )
}

export default Doctor;