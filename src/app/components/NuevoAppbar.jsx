"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
/*import Image from "next/image";*/
import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,  
  Button,
} from "@heroui/react";

export const SanchoLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
    clipRule="evenodd"
    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
    fill="currentColor"
    fillRule="evenodd"
  />
    </svg>
  );
};

const NuevoAppbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
 
  const menuItems = [
    { name: "Sancho es", path: "/" },
    { name: "Poeta", path: "/poeta/sancho-poeta" },
    { name: "Doctor", path: "/doctor/sancho-doctor" },
    { name: "Andino", path: "/andino/sancho-andino" },
    { name: "Loco", path: "/loco/sancho-loco" },
    { name: "Libros", path: "/libros" },
    /*{ name: "Novedades", path: "/novedades" },*/
    /*{ name: "Blog", path: "/blog" },*/
    
  ];

// Bloquear/desbloquear scroll según el estado del menú
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden"; //bloquea el scroll
  } else {
    document.body.style.overflow = "auto"; //desbloquea el scroll
  }
}, [isMenuOpen]);

const handleNavigation = (path) => {
  setIsMenuOpen(false); // Cierra el menú antes de cambiar de página

  setTimeout(() => {
    document.documentElement.style.overflow = "auto"; // Asegura que el scroll se desbloquee
    router.push(path);  // Redirige a la nueva página
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Hace scroll automático al inicio
    }, 300); // Pequeño retraso para asegurar que la navegación ha terminado
  }, 100); // Pequeño retraso para asegurar que el estado se actualice bien
};



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-zinc-800 fixed top-0 left-0 " >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-zinc-200"// Lo oculta en pantallas grandes
       
          />
  {/* Logo en pantallas grandes */}
        <NavbarBrand className="flex sm:flex">
        <Link href="/"> 
        <img src="/logo.png" alt="Logo Sancho" className="h-12 w-auto" />   
        </Link>    
        </NavbarBrand>        
      </NavbarContent>

   {/* Logo visible en móvil 
  <NavbarBrand className="hidden">
    <Link href="/">                     
    <img src="/logo.png" alt="Logo Sancho" className="h-10 w-auto" />     
  </Link>    
</NavbarBrand>  */}

  {/* Menú principal */}
      <NavbarContent className="hidden sm:flex gap-0 text-zinc-200" 
                     justify="center">
      {menuItems.map((item) => (
        <NavbarItem key={item.path}>
        <Button
        variant="light"
        className="text-inherit"
        onPress={() => handleNavigation(item.path)} // Usa router.push en vez de href
        >
          {item.name}
        </Button>        
       </NavbarItem>
      ))}
      </NavbarContent>

          
  {/* Botón Contacto */}  
      <NavbarContent justify="end">       
        <NavbarItem>
          <Button color="primary" 
                  onPress={() => handleNavigation("/contact")} 
                  variant="bordered"
                  className="text-zinc-200" >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>

  {/* Menú Vertical (Móvil) */}
      <NavbarMenu className={`${isMenuOpen ? "block" : "hidden"}`}  >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="py-1 bg-gray-200 text-left"> 
          <Button
          variant="light"
          className="text-left justify-start"
          color={index === 0 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
          onPress={() => handleNavigation(item.path)}
          >
            {item.name}
          </Button>

          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NuevoAppbar;