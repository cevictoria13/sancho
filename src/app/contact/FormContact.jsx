'use client';
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@heroui/react";

const FormContact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar el envío
  const [errorMessage, setErrorMessage] = useState(""); // Estado para los mensajes de error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    setIsSubmitting(true); // Desactivar el botón de envío

    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          message: formData.mensaje,
        }),
      });
     
      const text = await response.text();
      
      let data;
      console.log("💬 Texto recibido del servidor:", text); // 👈 pon esto justo antes del try
      try {
        data = JSON.parse(text);
      } catch (err) {
        
        console.error("Respuesta inesperada:", text);
        throw new Error("No se pudo procesar la respuesta del servidor.");
      }

      if (!response.ok) {
        throw new Error(data?.error || "Error desconocido en el servidor.");
      }

      alert("Correo enviado correctamente");
      setFormData({ nombre: "", email: "", mensaje: "" }); // Limpiar formulario
      setErrorMessage(""); // Limpiar mensaje de error
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message); // Mostrar mensaje de error
    } finally {
      setIsSubmitting(false); // Habilitar el botón de envío
    }
  };

  return (
    <div className="bg-zinc-800 rounded-2xl text-zinc-200 w-full sm:w-3/4 xl:w-3/4">
      <form
        className="flex flex-col justify-center items-center rounded-xl gap-5 py-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-base break-words text-center justify-center py-6 text-zinc-200">
          Si quieres consultar sobre algo en particular, envíame un mensaje.
        </h1>
        
        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div> // Mostrar mensaje de error
        )}

        <Input
          type="text"
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-1/2 xl:w-1/3"
          variant="bordered"
          required
        />

        <Input
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-1/2 xl:w-1/3"
          variant="bordered"
          required
        />

        <Textarea
          isRequired
          disableAnimation
          placeholder="Mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-1/2 xl:w-1/3"
          variant="bordered"
          minRows={5}
        />

        <Button
          className="text-zinc-300 mt-5 py-6 px-8 text-base"
          color="primary"
          variant="bordered"
          type="submit"
          disabled={isSubmitting} // Desactivar el botón durante el envío
        >
          {isSubmitting ? "Enviando..." : "Enviar"} 
        </Button>
      </form>
    </div>
  );
};

export default FormContact;
