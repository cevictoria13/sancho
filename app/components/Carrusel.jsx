"use client"
import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import {Popover, PopoverContent, Button} from "@heroui/react";


const PrevArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-600 text-white p-2 rounded-full hover:bg-gray-600"
      style={{ left: "10px" }} // Ajustar la posición
    >
      <ChevronLeft size={24} color="white"  />
    </button>
  );
  
  // Componente para la flecha derecha
  const NextArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-600 text-white p-2 rounded-full hover:bg-gray-600"
      style={{ right: "10px" }} // Ajustar la posición
    >
      <ChevronRight size={24} color="white" />
    </button>
  );

  

 function SimpleSlider() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // Estado para manejar el popover

  // Abre el popover automáticamente al cargar la página
  useEffect(() => {
    setIsPopoverOpen(true);
  }, []); // El [] asegura que solo se ejecute una vez cuando el componente se monta

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,  // Asignar flecha izquierda
      nextArrow: <NextArrow />, 
    };


    return (
      <div className=" mt-20 w-full max-w-full ">   
      <Popover className="  fixed inset-10 top-8  justify-center items-center transform -translate-x-1/2 z-50">
      

      {isPopoverOpen && (
      <PopoverContent className="w-[300px] h-auto py-4 bg-teal-600 rounded-lg">
        <div className="flex flex-col items-center">
        <img
        src="/reclus.png"
        alt="Popover Image"
        className=" max-h-[90vh] sm:max-h-[70vh] md:max-h-[60vh] lg:max-h-[50vh] object-cover rounded-lg py-1 " //max-h-[300px] regula el ancho del afiche
        onError={() => console.error("No se pudo cargar la imagen")}
      />
          <div className="text-xl font-bold mt-4">¡¡PRÓXIMAMENTE!!</div>
          <div className="text-tiny"></div>
          <button
                className="mt-4 px-6 py-1 bg-teal-300 text-teal-800 font-bold rounded-lg"
                onClick={() => setIsPopoverOpen(false)} // Cerrar el popover
              >Cerrar</button>
        </div>
      </PopoverContent>
      )}
    </Popover>


    
      <Slider {...settings}>
        <div className="w-full flex justify-center items-center" >
        <img 
        src= "/slider-banner-historia.png" 
        alt="Image 1" 
        className="w-full h-full max-h-[600px] object-contain"/>
        </div>
        <div className="w-full flex justify-center items-center">
        <img 
        src="/slider-banner-todavia.png" 
        alt="Image 2" 
        className="w-full h-full max-h-[600px]  object-contain" />
        </div>        
      </Slider>
     </div> 
    );
  }

  export default SimpleSlider;
