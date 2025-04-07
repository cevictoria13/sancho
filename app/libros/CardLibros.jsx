"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { fadeIn } from "../components/utils/motionTransitions"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter, 
    useDisclosure    
  } from "@heroui/modal";
 

const CardLibros = (props) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    

  return (
    
    <div id="libros-section" className="flex flex-wrap justify-center bg-zinc-800 rounded-xl  sm:grid-cols-3 md:grid-cols-4 gap-6 p-5  ">
         <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex flex-col justify-center items-center  relative group '
           >

{/* Contenedor de la imagen */}
        <div className="relative w-full max-w-[200px] aspect-[2/3] overflow-hidden  rounded group-hover:shadow-lg">
            <div className='absolute inset-0  z-10'>
                <Image
                    width={200} // Ajusta el ancho según el diseño deseado
                    height={300} // Ajusta la altura según el diseño deseado
                    className='rounded object-cover'
                    alt={props.title}
                    src={props.bgCardImage}
                 />
            </div>
        </div>

{/* Contenedor de texto */} 
            <div className='text-center  rounded mt-4 shadow-md top-0 z-20 p-5'
                 style={{ fontFamily: "Averia Sans Libre" }}>
                <h1 className='font-bold text-lg text-slate-300'>{props.title}</h1>
                <p  className="text-sm mt-2 text-slate-300">{props.subtitle}</p>
            </div>
          {/*opcional color contenedor texto> bg-gray-500/70*/}

{/* Botón de acción 
            <div className='group-hover:flex  gap-5 mt-5  group-hover:z-20 inset-0 items-end transition-all'>
             para hacer click--> style={{ pointerEvents: 'auto' }}   classname="cursor-pointer"
               
            </div>*/}
            </motion.div>

{/* Modal */}
    <Button 
        onPress={onOpen}
         className="mt-4 text-base flex"
        style={{ fontFamily: "Averia Sans Libre" }}>reseña           
    </Button>

        <Modal 
        backdrop="opaque"        
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/30 backdrop-opacity-20",
          
        }}
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        >
            <ModalContent className=' bg-blue-200 p-7 overflow-y-auto max-h-[100vh]'>
                {(onClose) => (
                    <div className="flex flex-col gap-1">
                        <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-center text-blue-900"
                                     style={{ fontFamily: "Averia Sans Libre" }} >{props.title}
                        <p className="text-sm">{props.edit}</p>
                        </ModalHeader>
                        
                        <ModalBody className='text-center max-h-[60vh] font-bold text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl  text-blue-900' 
                                  style={{ fontFamily: "Averia Sans Libre" }} >                        
                          <p>{props.description}</p>
                        </ModalBody>
                        
                        <ModalFooter className='text-center text-blue-900' style={{ fontFamily: "Averia Sans Libre" }} >
                          <Button color="primary"  variant="light" onPress={onClose}>
                            Cerrar
                          </Button>

                          {props.title === "Todavía de a pie (por Chile, sus Andes)" && (
                         
                          <Button as={Link} href="/contact" color="primary" variant="bordered"  onPress={onClose}>
                            Comprar al autor
                          </Button>
                          
                          )}
                          {props.showEditorialButton !== false && (
                       
                              <Button 
                              color='primary' 
                              variant="flat" 
                              style={{ fontFamily: "Averia Sans Libre" }}
                              onPress={() => window.open(props.urlDespliegue, "_blank", "noopener noreferrer")}
                              >Editorial</Button>
                      
                          )}
                        </ModalFooter>
                    </div>
                )}
                
        </ModalContent>
        </Modal>
        
    </div>
    
  );
};

export default CardLibros

/*clases en botón de acción: hidden group-hover:flex

<Modal 
        backdrop="opaque"
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={isOpen} 
        onOpenChange={onOpenChange}>
            <ModalContent className=' bg-blue-200 p-7'>
                {(onClose) => (
                    <div className="flex flex-col gap-1">
                        <ModalHeader className="flex flex-col gap-1 text-center">{title}</ModalHeader>
                        <ModalBody className='text-center'>
                          <p>{description}</p>
                        </ModalBody>
                        
                        <ModalFooter>
                          <Button color="foreground" variant="light" onPress={onClose}>
                            Cerrar
                          </Button>
                          <Link href="/contact">
                          <Button color="primary" variant="flat"  onPress={onClose}>
                            Quiero 1 libro
                          </Button>
                          </Link>

                          <Link href="/editorial"
                          target="_blank"
                          rel="noopener noreferrer" >
                              <Button color='primary'>Editorial</Button>
                          </Link>

                        </ModalFooter>
                    </div>
                )}
                
        </ModalContent>
        </Modal>
        </motion.div>
    </div>
  );
};

export default CardBooks

//clases en botón de acción: hidden group-hover:flex*/