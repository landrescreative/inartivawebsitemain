import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import sgClient from "@sendgrid/client";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Correo inválido" }, { status: 400 });
    }

    // Agregar el contacto en SendGrid
    const data = {
      contacts: [{ email: email }],
    };

    const [response] = await sgClient.request({
      method: "PUT",
      url: "/v3/marketing/contacts",
      body: data,
    });

    if (response.statusCode !== 202) {
      return NextResponse.json(
        { error: "Error al registrar el contacto" },
        { status: 500 }
      );
    }

    // Enviar correo de confirmación
    const message = {
      to: email,
      from: process.env.SENDGRID_FROM,
      subject: "Confirmación de suscripción",
      text: "Gracias por suscribirte a nuestro newsletter.",
      html: "<strong>Gracias por suscribirte a nuestro newsletter.</strong>",
    };

    await sgMail.send(message);

    return NextResponse.json(
      { success: true, message: "Contacto registrado y correo enviado" },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Error al procesar la solicitud:",
      error.response?.body || error
    );
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
