import nodemailer from "nodemailer";
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
}
