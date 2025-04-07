"use client"
import CardLibros from "./CardLibros";
import React from "react";
import asimetricos from "/public/asimetricos.jpg"
import aproximacion from "/public/aproximacion.png"
import todavia from "/public/todavia.png"
import reclus from "/public/reclus.png"


const libros = () => {

        
        
    return (
      <div  className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen py-20 items-center px-5 sm:px-20 xl:px-40'>
       
        <CardLibros
        title="TexTos (a)SimétricoS" 
        edit="(Mago Editores, 2021)"       
        subtitle="Poemas diversos, contingentes y un cuento fantástico"
        description="La simetría corresponde a la coincidencia de un objeto consigo mismo tras aplicar alguna operación, como rotación, inversión o reflexión. Dividido en dos partes, el poemario TexTos (a)SimétricoS explora distintas posibilidades de escribir con simetrías: aparentes textos reflejos, u otros rotados, que parecen circulares. Sin embargo, el devenir de la historia rompe la simetría del mismo modo que en una rutina que se repite diariamente, ningún día es exactamente igual a otro. Luego, los textos al no coincidir 100% consigo mismo, son asimétricos, pero con esbozos de una simetría. Esa imposición en la forma, permitió que los poemas, aunque diversos en temas, tengan un eje común que subterráneamente recorre las páginas de este libro.
El poemario es interrumpido por un cuento de fantasía, escrito también con (a)simetría."
        bgCardImage={asimetricos}
        urlDespliegue="https://www.magoeditores.cl/producto/textos-a-simetricos/"
        
        />

        <CardLibros 
        title="Aproximación poética a una montaña andina"
        edit="(Editorial Usach, 2022)"
        subtitle="Diversidad geológica en San José de Maipo, Chile, escrita en verso"
        description="Un poema de divulgación escrito en ocho cantos, acompañado de fotografías y una suerte de glosario. El texto ha sido inspirado por la obra de Elisée Reclus 'Historia de una montaña' (también traducido como 'La Montaña'; 1880), donde el autor ensaya describiendo la diversidad de elementos que encuentra en la montaña con una alta sensibilidad tanto hacia la Naturaleza, como a la posición del Hombre ―léase humanidad― en ella."
        bgCardImage={aproximacion}
        urlDespliegue="https://editorialusach.cl/producto/aproximacion-poetica-a-una-montana-andina-un-texto-reclusiano/"
        
        />

        <CardLibros 
        title="Todavía de a pie (por Chile, sus Andes)"
        edit="(Mago Editores, 2024)"
        subtitle="Obra que mezcla crónicas con divulgación de la cordillera"
        description="Libro que mezcla la narrativa de crónicas con divulgación. Es el segundo texto de Sancho inspirado en 'Historia de una montaña' (también traducido como 'La Montaña'; 1880) de Élisée Reclus, pero esta vez también se inspira en 'A pie por Chile' de Manuel Rojas. Todavía de a pie (por Chile, sus Andes) mezcla el espíritu de divulgación de una gran variedad de agentes que conforman la cordillera ―tomados de Reclus y del conocimiento actual de la geología andina―, con la narración de historias personales contadas de diversas maneras, como cuentos, donde la divulgación queda inmersa, diluida en la historias. 
Entre las crónicas se incluye un cuento de ficción ad-hoc al libro."
        bgCardImage={todavia}
        urlDespliegue="https://www.magoeditores.cl/producto/todavia-a-pie-por-chile-sus-andes/"
        showEditorialButton={false} // Nuevo prop
        />

       <CardLibros 
        title="Historia de una montaña. (Traducción. E. Reclus) "
        edit="(Nadar Ediciones, 2024)"
        subtitle="Obra icónica de Élisée Reclus, de divulgación con lenguaje poético"
        description="Obra de divulgación publicada como libro en 1880. Reclus mediante una narrativa de ensayos, muy poéticos, explica una gran variedad de agentes que actúan en la 'montaña', centrado en los Alpes y los Pirineos y con el conocimiento de las ciencias de fines del siglo XIX. Pero dentro de los agentes, está la humanidad, con su historia, personajes, políticas, y misticismo y religiosidad; en todos ellos la 'montaña' juega un rol.
La nueva traducción busca ser fiel al texto original, por lo que incluye notas que hacen un seguimiento al conocimiento presentado por Reclus, y que traen su 'montaña' a los Andes."
        bgCardImage={reclus}
        urlDespliegue="https://nadarediciones.cl"
        
        />
        
      </div>
    )
  }
  
  export default libros