"use client"
import React from 'react'
import Image from 'next/image';
import sancho from "/public/sancho.png";
import HoverSancho from "./HoverSancho";


const SanchoAbout = () => {
  return (
   
      <main className="about-section bg-cover bg-center min-h-screen relative text-gray-200">
          <div className="-z-10">   
            <Image
             
            src={sancho}
            alt="Fondo de la sección About"
            fill // Ocupa todo el contenedor
            style={{ objectFit: 'cover' }} // Asegura que la imagen se adapte
            quality={100} // Opcional: Ajusta la calidad
            />
          </div>

              
  

{/* Texto  */}
        <div className="absolute inset-0 flex justify-center text-center pt-40 "
                  >
          <h1  className= "text-zinc-800 text-center font-semibold text-[15vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] break-words"
          style={{ fontFamily: "Averia Sans Libre" }}   >
            SANCHO RECABARREN
          </h1>          
        </div>
        
        <div className=" flex  justify-center text-center">
        <HoverSancho   
          text="un escritor que es ..."  
                    
          info="Sancho Alexei Recabarren V. es el pseudónimo completo del escritor
          nacido en Concepción, pero que vivió unos 9 años Talcahuano, otro tanto 
          Copiapó, y que se radicó en Santiago de Chile para estudiar. Sancho escribe
          literatura como una necesidad, modo de expresión artística con la pluma 
          como cincel para descubrir obras que cruzan géneros: poesía, narrativa de
          ficción o crónicas, divulgación de conocimientos, incluso fotografía.
          Sancho, aterrizado personaje de Cervantes.
          Recabarren, apellido del tipógrafo poseedor del don de la palabra, tanto escrita como oral."
        />

          
        </div>       

      </main>    
      
       
  )
}


export default SanchoAbout

