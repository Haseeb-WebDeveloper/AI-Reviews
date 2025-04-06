import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, business, website, message } = data;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "web.dev.haseeb@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
      `,
    });

    // Send thank you email to client
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>We've received your request and will get back to you shortly.</p>
        <p>Here's what we received:</p>
        <ul>
          <li>Business Name: ${business}</li>
          <li>Phone: ${phone}</li>
          ${website ? `<li>Website: ${website}</li>` : ''}
          ${message ? `<li>Message: ${message}</li>` : ''}
        </ul>
        <p>Best regards,<br>Rate Our Job Team</p>
      `,
    });

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
} 