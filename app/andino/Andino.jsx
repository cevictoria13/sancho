"use client"
import React from 'react'
import Image from 'next/image';
import andinofondo from '/public/andinofondo.png'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "../components/utils/motionTransitions"
const Andino = () => {
  return (
    <div className="about-section  bg-cover bg-center min-h-screen relative">
        <div className="-z-10">    
        <Image
            className="mx-auto"
            src={andinofondo}
            alt="Fondo de la sección Andino"
            layout="fill" // Ocupa todo el contenedor
            objectFit="cover" // Asegura que la imagen se adapte
            quality={100} // Opcional: Ajusta la calidad
        />
        </div>

  {/*  contenedor Título  */}
    <div className="absolute inset-0 flex items-center justify-start pl-10"
    >
        <h1 className="text-emerald-800  p-5 font-medium text-6xl mb-72"
            style={{ fontFamily: "Averia Sans Libre" }}>
            ... algo de Andino
        </h1>          
    </div>

     {/* contenedor Texto descriptivo */} 
    <div className="absolute inset-0 flex items-center justify-start mb-20 pl-2" 
            style={{ top: "40%" }}  >
        <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='bg-emerald-400 bg-opacity-80 p-6  rounded-xl max-w-2xl w-full cursor-pointer'>

                
       
                <Link href="/andino/sancho-andino">   
                <p className="cursor-pointer hover text-emerald-800 text-xl sm:text-2xl md:text-4xl font-medium px-4 sm:px-10 text-center"
                    style={{ fontFamily: "Averia Sans Libre" }}>
                    Haber vivido Talcahuano, Copiapó y Santiago, además de las andanzas por territorio nacional,
                    lo han convencido que Chile es un país absolutamente andino, y todos sus habitantes también lo son. Parte de su obra abarca este arraigo cultural a los cerros.
                </p>
            </Link>  
            
        </motion.div> 
    </div>

    

    </div>
  )
}

export default Andino

{/* Botón + */}
/*<div className="absolute inset-0 flex items-end justify-start">
      
      <span className='text-rose-600 font-bold ml-20 mb-5'  
            target="_blank"
            rel="noopener noreferrer" 
            style={{ fontSize: '90px', cursor: 'pointer' }}>+</span>
      </Link>         
    </div>*/