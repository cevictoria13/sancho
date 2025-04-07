import nodemailer from "nodemailer";

//  handler para método POST
export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return Response.json(
                { error: "Todos los campos son obligatorios." }, 
                { status: 400 }
                
            );
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: parseInt(process.env.SMTP_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // Usa variables de entorno
                pass: process.env.EMAIL_PASS, // Usa variables de entorno
            },
            debug: true, // Activa el modo de depuración
            logger: true, // Registra los eventos en la consola
        });
    
        transporter.verify((error, success) => {
            if (error) {
              console.log("Error de conexión SMTP:", error);
            } else {
              console.log("¡Conexión SMTP correcta!");
              console.log("Resultado de success:", success);
            }
          });
      

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`, // Usa el email configurado en SMTP           
            to: process.env.EMAIL_USER,
            subject: "Nuevo mensaje desde el formulario de contacto",
            text: `
Nombre: ${name}
Email: ${email}
Mensaje: ${message}
            `,
            replyTo: email,
        };
    
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("📨 Correo enviado:", info.messageId);

            return Response.json(
                { success: "Correo enviado correctamente." },
                { status: 200 }
              );

    } catch (error) {
        console.error("Error al enviar el correo:", error);
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
          );
    }
} catch (error) {
    console.error("❌ Error inesperado:", error);
    return Response.json(
        { error: "Error en el servidor." },
        { status: 500 }
      );
    }
}

