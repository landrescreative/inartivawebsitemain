import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // Configuración del transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com", // Cambia si usas otro proveedor (Zoho, Outlook, etc.)
      port: 465, // O usa 587 si no estás usando SSL
      secure: true, // Usa SSL
      auth: {
        user: process.env.EMAIL_USER, // Tu correo
        pass: process.env.EMAIL_PASS, // Contraseña o App Password
      },
    });

    // Configuración del correo
    const mailOptions = {
      from: process.env.EMAIL_USER, // Usa el correo autenticado
      to: "contacto@inartiva.com", // Destinatario
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Mensaje de ${name} (${email}):\n\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mensaje:</strong></p>
               <p>${message}</p>`,
    };

    // Envía el correo
    const info = await transporter.sendMail(mailOptions);

    console.log("Correo enviado:", info.messageId);

    return NextResponse.json(
      { success: true, message: "Correo enviado con éxito." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo." },
      { status: 500 }
    );
  }
}
