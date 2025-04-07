'use client'
import React from 'react'
import Image from 'next/image';
import poetafondo from '/public/poetafondo.png'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "../components/utils/motionTransitions"


const Poeta = () => {
  return (
    <div className="about-section bg-cover bg-center min-h-screen relative">
      <div className="-z-10"> 
        <Image
            className="mx-auto"
            src={poetafondo}
            alt="Fondo de la sección poeta"
            layout="fill" // Ocupa todo el contenedor
            objectFit="cover" // Asegura que la imagen se adapte
            quality={100} // Opcional: Ajusta la calidad
        />
      </div>
       
      <div className="absolute inset-0 flex items-center justify-end gap-6 pr-5">
          <h1 className=" text-sky-900 text-end text-6xl font-medium  mb-72 "
              style={{ fontFamily: "Averia Sans Libre" }}>
               ... algo de Poeta
          </h1>
          
      </div>
     
      <div className="absolute inset-0 flex items-center justify-end mb-20 pr-5" 
              style={{ top: "40%" }}  >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='bg-sky-300 bg-opacity-60 p-6 rounded-xl max-w-2xl w-full cursor-pointer'>

           
                    {/*la última clase + el justify de arriba es para el ancho del fondo de la caja de texto*/}     
                <Link href="/poeta/sancho-poeta">
                    <p className= "cursor-pointer hover text-sky-900 text-xl sm:text-2xl md:text-4xl font-medium px-4 sm:px-10 text-center"
                 style={{ fontFamily: "Averia Sans Libre" }}>
                La poesía como arte de libertad en uso del lenguaje; Sancho la cultiva como tal 
                o como base de sus textos, porque la cruza a veces con erudición, 
                otras con narrativa. Busca que siempre la lectura de sus textos tengan 
                un poco de este arte.
              </p>
              </Link>
            
          </motion.div>
      </div>
    </div>
    
  )
}

export default Poeta;

/*style={{ fontFamily: "Lucida Sans" }}*/
/* <div className="absolute inset-0 flex justify-end items-end pb-15 pr-28">
        <Link href="/poeta/sancho-poeta">
          <span className='text-rose-600 font-bold' 
            target="_blank"
            rel="noopener noreferrer"
                style={{ fontSize: '90px', cursor: 'pointer' }}>+</span>
        </Link>         
      </div>*/