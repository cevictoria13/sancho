"use client";

import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
/*import FormContact from "../contact/FormContact";*/
/*import { Button } from "@heroui/react";
import { Textarea } from "@heroui/react"
import {Input} from "@heroui/input"*/




const Footer = () => {
    return (
      <footer className="bg-zinc-800 text-zinc-200 py-8">
      <div className="container mx-auto text-center px-4">

{/* 🔹 Redes Sociales */}
    <div className="flex justify-center space-x-10 mt-0 mb-4">
          <a href="https://www.facebook.com/SanchoRecabarren/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-8 h-8 hover:text-blue-500 transition-colors" />
          </a>
       
          <a href="mailto:escritor@sanchorecabarren.cl">
            <FaEnvelope className="w-8 h-8 hover:text-pink-500 transition-colors" />
          </a>
        </div>
       </div>     


 {/* Alternativa: agregar Formulario de Contacto en esta parte */}
     



 {/* 🔹 Derechos de Autor */}
     
          <p className="text-zinc-400 text-sm text-center justify-center mt-10 items-center">
            &copy; {new Date().getFullYear()} sanchorecabarren.cl - Todos los derechos reservados.
          </p>
          {/*<p className="text-zinc-400 text-xs mt-2 text-center justify-center items-center">Desarrollado por Sancho</p>  */}     
          
        

      </footer>
    );
  };
  
  export default Footer;

  
         {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
          </a>*/}