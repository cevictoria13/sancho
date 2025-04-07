"use client"

import React from 'react'
import Image from 'next/image';
import locofondo from '/public/locofondo.png'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "../components/utils/motionTransitions"

const Loco = () => {
  return (
    <div className="about-section bg-cover bg-center min-h-screen relative "> 
    
    {/* Fondo de imagen */}  
      <div className="-z-10 ">  
        <Image
            className="mx-auto "
            src={locofondo}
            alt="Fondo de la sección loco"
            layout="fill" // Ocupa todo el contenedor. layout="fill"
            objectFit="cover"  // Asegura que la imagen se adapte
            quality={100} // Opcional: Ajusta la calidad
            
        />
        </div>
        
 {/*  contenedor Título  */}
      <div className="absolute inset-0 flex items-center justify-start pl-5">
        <h1  className="text-orange-600 p-5  font-medium text-6xl mb-80 "
             style={{ fontFamily: "Averia Sans Libre" }} >
            ... y algo de Loco
        </h1>          
      </div>

   {/* contenedor Texto descriptivo */}    
      <div className="absolute justify-start  mb-20 pl-2" 
            style={{ top: "45%" }}  >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='bg-orange-200 bg-opacity-60  p-6 rounded-xl max-w-2xl w-full cursor-pointer'
          >
      
          <Link href="/loco/sancho-loco">
            <p className= " cursor-pointer hover text-orange-600 text-xl sm:text-2xl md:text-4xl font-medium px-4 sm:px-10"
            style={{ fontFamily: "Averia Sans Libre" }}> 
              Sancho es aficionado lector del género fantástico, particularmente
               de ciencia ficción, lo que lo ha llevado a hacer sus aportes 
               al género con textos algo alucinados. Espera poder seguir 
               produciendo esa locura para no volverse loco.
               </p> 
               </Link> 
          
            </motion.div> 
           
      </div>
   

    
    </div>
   
  )
}

export default Loco;

/* Botón + 
<div className="absolute inset-0 flex items-end justify-start ">
<Link href="/loco/sancho-loco">
  <span className='text-rose-600 font-bold ml-20 mb-5 '  
      target="_blank"
      rel="noopener noreferrer"  
      style={{ fontSize: '90px', cursor: 'pointer' }}>+</span>
</Link>         
</div>*/