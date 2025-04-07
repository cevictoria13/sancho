import nodemailer from "nodemailer";

//  handler para método POST
export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Todos los campos son obligatorios." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
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

        return new Response(JSON.stringify({ success: "Correo enviado correctamente." }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error al enviar el correo:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
} catch (error) {
    console.error("❌ Error inesperado:", error);
    return new Response(JSON.stringify({ error: "Error en el servidor." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
    });
}
}


/*import nodemailer from "nodemailer";
//import SMTPTransport from "nodemailer/lib/smtp-transport";
export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Todos los campos son obligatorios." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const transporter = nodemailer.createTransport({
            host: "mail.sanchorecabarren.cl",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            debug: true, // Activa el modo de depuración
            logger: true, // Registra los eventos en la consola
        });

        // Verificar conexión con el servidor SMTP de manera asincrónica
        try {
            await transporter.verify();
            console.log("✅ El servidor SMTP está listo para enviar correos.");
        } catch (error) {
            console.error("❌ Error en SMTP:", error);
            return new Response(JSON.stringify({ error: "Error en la conexión SMTP." }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        const mailOptions = {
            from: `Formulario de Contacto <${process.env.EMAIL_USER}>`, // Usa el mismo email configurado en SMTP,
            replyTo: email,
            to: "escritor@sanchorecabarren.cl",
            subject: "Nuevo mensaje desde el formulario de contacto",
            text: `De: ${name} (${email})\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: "Correo enviado correctamente." }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error al enviar el correo:", error);
        return new Response(JSON.stringify({ error: "Error al enviar el correo." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}*/
