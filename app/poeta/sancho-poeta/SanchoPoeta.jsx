"use client"
import React from "react";
import { 
    Card, 
    CardHeader,
    CardBody,   
} from "@heroui/react";



const Poeta = () => {
  const works = [
    {
      title: "Ojx x o j",
      type: "Poema",
      publisher: "Publicado en Letras de Chile, 2020",
      link: "https://letrasdechile.cl/2020/06/10/ojx-x-o-j/",
    },
    {
      title: "Ayer el Sol",
      type: "Poema",
      publisher: "Publicado en Letras de Chile, 2020",
      link: "https://letrasdechile.cl/2020/10/19/ayer-el-sol/",
    },
    {
      title: "TexTos (a)SimétricoS",
      type: "Libro de poemas diversos y contingentes, más un cuento",
      publisher: "Publicado por Mago Editores, 2021",
      link: "/libros",
    },
    {
      title: "Canto VI Los peligros geológicos",
      type: "Extracto del poema 'Aproximación poética a una montaña andina'",
      publisher: "Publicado en Revista Geohuellas, Nº 4, p. 30",
      link: "https://sociedadgeologica.cl/wp-content/uploads/2023/05/Geohuellas4.pdf",
    },
    {
      title: "Aproximación poética a una montaña andina",
      type: "Libro de poema de divulgación en ocho cantos, con fotografías",
      publisher:"Publicado por Editorial Usach, 2022",
      link: "https://editorialusach.cl/producto/aproximacion-poetica-a-una-montana-andina-un-texto-reclusiano/",
    },
    {
      title: "Rogativa al guardián, su ojo",
      type: "Poema",
      publisher: "Publicado en Revista Entre Paréntesis, revista Nº 103, p.85 (ed. de julio, 2023) ",
      link: "https://entreparentesischile.com/data/files/revistadejulio.pdf",
    },
    {
      title: "Que la primavera...",
      type: "Poema",
      publisher: "Publicado en Revista Entre Paréntesis, revista Nº 107, p.81 (ed. de noviembre, 2023) ",
      link: "https://entreparentesis201.wixsite.com/blog/post/sancho-recabarren",
    },
    {
      title: "La Bomba y la Libertad",
      type: "Crónica poética",
      publisher: "Publicado en Revista Entre Paréntesis, revista Nº 107, p.82 (ed. de noviembre, 2023) ",
      link: "https://entreparentesis201.wixsite.com/blog/post/sancho-recabarren",
    },
    {
      title: "Ciegos; Anuncio de ceguera; Ceguera mental",
      type: "3 poemas de la serie Ceguera",
      publisher: "Publicado en Letras de Chile, 2023",
      link: "https://letrasdechile.cl/2023/10/13/nuevos-poemas-de-sancho-recabarren/",
    },
  ];

  return (
    <main className=" min-h-screen p-6 pt-20 pb-16 flex  flex-col gap-6 bg-sky-800">
      
    {/* Contenedor principal */}  
      <div className="relative text-center p-6 rounded-xl ">

      <h1 className= "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium item-center text-center text-sky-200 -mt-4 pt-5"
          style={{ fontFamily: "Averia Sans Libre" }}>Algo de Poeta</h1><br/>
          
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl item-center text-center text-sky-200 mb-10"
             style={{ fontFamily: "Averia Sans Libre" }}>
            Sancho comenzó publicando poemas contingentes durante el primer año
            de confinamiento. Antes de eso, reescribió en verso "Histoire d'un
            montagne", proyecto que terminó en un poema para un diaporama de
            diversidad geológica de San José de Maipo, presentado durante el
            confinamiento. Así surgieron los textos de sus primeros libros.
          </p>
      </div>
          
      <div>
            <h1 className=" relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium items-center text-center text-sky-200 -mt-4 pt-5"
                style={{ fontFamily: "Averia Sans Libre" }}>Títulos Relacionados</h1>
      </div> <br/>
{/* Listado de obras */}
      <div className="grid grid-cols-1 mb-16  sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
      {works.map((work, index) => (
        <Card key={index} className=" bg-sky-300" >

          <CardHeader className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-sky-900" 
                      style={{ fontFamily: "Averia Sans Libre" }} >
              <div>
                      {work.title}
                <p className="text-base sm:text-lg md:text-xl font-semibold text-sky-900">{work.type}</p>
              </div>
          </CardHeader>

          <CardBody className="text-base sm:text-lg md:text-xl font-bold text-sky-900" 
                    style={{ fontFamily: "Averia Sans Libre" }}>       
            <p className="text-xs sm:text-sm md:text-base">{work.publisher}</p>
            
            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-900 text-center text-sm sm:text-base md:text-lg"
              >
              <br/>  ver 
              </a>
            )}
          </CardBody>
        </Card>
      ))}
    </div>
    </main> 
  );
};

export default Poeta;

