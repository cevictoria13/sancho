"use client";

import React from "react";
import { 
  Card, 
  CardHeader,
  CardBody,  
   
} from "@heroui/react";

const SanchoDoctor = () => {
  const works = [
    {
      title: 'Canto VI: Los peligros geológicos',
      type: "Extracto del poema 'Aproximación poética a una montaña andina'",
      publisher:"Publicado por Revista Geohuellas, Nº 4, p. 30, 2021.",
      link: "https://sociedadgeologica.cl/wp-content/uploads/2023/05/Geohuellas4.pdf",
    },
    {
      title: "Aproximación poética a una montaña andina",
      type: "Libro de poema de divulgación en ocho cantos, con fotografías.",
      publisher: "Publicado por Editorial Usach, 2022.",
      link:"/libros", 
    },
    {
      title: "Todavía de a pie (por Chile, sus Andes)",
      type: "Libro de crónicas, con lenguaje poético, que aprovechan de divulgar conocimientos.",
      publisher: "Publicado por Mago Editores, 2024.",
      link:"/libros", 
    },
    {
      title: 'Traducción y notas de "Historia de una montaña" de Élisée Reclus',
      type: "Libro de divulgación, muy poético y de amplios conocimientos, publicado en 1880.",
      publisher:"Publicado por Nadar Ediciones, 2024.",
      link: "/libros",
    },
  ];

  return (
    <main className="min-h-screen p-6 pt-20 pb-16 flex  flex-col gap-6 bg-zinc-800">
      {/* Contenedor principal */}
      
      <div className="relative text-center p-6 rounded-xl ">     
            <h1 className= "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium items-center text-center text-amber-200 -mt-4 pt-6"
                style={{ fontFamily: "Averia Sans Libre" }} >Algo de Doctor</h1>
       
          <p className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-amber-200 mb-10"
            style={{ fontFamily: "Averia Sans Libre" }}  >
            Aunque su grado académico es doctor en ciencias con mención en 
            geología, que es una ciencia natural, sus estudios se salen de 
            la disciplina. Está convencido de que la especialización de los 
            diversos conocimientos ha generado vacíos entre las distintas 
            disciplinas que lloran ser llenados, y Sancho está dispuesto a 
            cubrir espacios entre ciencias naturales y literatura, al menos.
          </p>
          {/*<blockquote className=" mt-8 mb-10 text-3xl italic text-amber-200"
                      style={{ fontFamily: "Averia Sans Libre" }} >
            La base para poder surgir como personas íntegras es la reflexión, hacerse preguntas y cuestionar la "verdad" que se manosea, para aspirar al conocimiento y con ello tener la libertad de decidir qué creer.
          </blockquote>*/}
             
      </div><br/>
      <div>
        <h1 className= "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium items-center text-center text-amber-200 -mt-4 pt-5"
            style={{ fontFamily: "Averia Sans Libre" }} >Títulos Relacionados</h1>
      </div> <br/>
      {/* Listado de obras */}
    <div className="grid grid-cols-1 mb-16  sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work, index) => (
        <Card key={index} className=" bg-amber-200" >
        
            <CardHeader className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-800 "
                      style={{ fontFamily: "Averia Sans Libre" }} >
                <div> {work.title}
                  <p className="text-base sm:text-lg md:text-xl text-amber-800 font-semibold">{work.type}</p>
                </div>
            </CardHeader>   
            
           <CardBody className="text-base sm:text-lg md:text-xl font-bold text-amber-800" 
                               style={{ fontFamily: "Averia Sans Libre" }}> 
            <p className="font-normal text-xs sm:text-sm md:text-base ">{work.publisher}</p>  
           
            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-amber-800 text-center text-sm sm:text-base md:text-lg"
              >
                <br/>ver
              </a>
          
            )}            
            </CardBody>
        
           
       
        </Card>
      ))}
    </div>
    </main>
  );
};

export default SanchoDoctor;

