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
  } from "@nextui-org/react";
 

const CardBooks = ({ title, subtitle, description, bgCardImage, buttons }) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="flex flex-wrap sm:grid-cols-3 md:grid-cols-4 gap-6 p-5  ">
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex flex-col justify-center items-center  relative group cursor-pointer'>

{/* Contenedor de la imagen */}
        <div className="relative w-full max-w-[200px] aspect-[2/3] overflow-hidden  rounded group-hover:shadow-lg">
            <div className='absolute inset-0  z-10'>
                <Image
                    width={200} // Ajusta el ancho según el diseño deseado
                    height={300} // Ajusta la altura según el diseño deseado
                    className='rounded object-cover'
                    alt={title}
                    src={bgCardImage}
                 />
            </div>
        </div>

{/* Contenedor de texto */} 
            <div className='text-center  rounded mt-4 shadow-md top-0 z-20 p-5'>
                <h1 className='font-bold text-lg text-slate-300'>{title}</h1>
                <p  className="text-sm mt-2 text-slate-300">{subtitle}</p>
            </div>
          {/*opcional color contenedor texto> bg-gray-500/70*/}

{/* Botón de acción */}
        <div className='group-hover:flex  gap-5 mt-5  group-hover:z-20 inset-0 items-end transition-all'>
            {buttons?.map((button, index) => (
                button.type === "modal" ? (
                    <Button key={index} color='primary' onPress={onOpen}>
                        {button.label}
                    </Button>
                ) : (
                    button.url.startsWith("http") ? (
                        <a 
                            key={index} 
                            href={button.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Button color='primary'>{button.label}</Button>
                        </a>
                    ) : (
                        <Link key={index} href={button.url}>
                            <Button color='primary'>{button.label}</Button>
                        </Link>
                    )
                )
            ))}                
        </div>


    {/* Modal */}
                <Modal 
                    backdrop="opaque"
                    classNames={{
                        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                    }}
                    isOpen={isOpen} 
                    onOpenChange={onOpenChange}
                >
                    <ModalContent className='bg-blue-200 p-7'>
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
                                        <Button color="primary" variant="flat" onPress={onClose}>
                                            Quiero 1 libro
                                        </Button>
                                    </Link>
                                    <Link href="/editorial">
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

export default CardBooks;
    