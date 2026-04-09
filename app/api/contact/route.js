import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * API Route for handling contact form submissions.
 * Path: /api/contact
 */
export async function POST(req) {
  try {
    // Parse the JSON body from the request
    const body = await req.json();
    const { fullName, email, phone, message } = body;

    // 1. Basic Validation: Check if all fields are present
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // 2. Configure Nodemailer Transporter (SMTP Settings)
    // These values should be set in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // Use SSL/TLS (usually true for port 465)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Format the Email Content (HTML)
    const mailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`, // Sender address (must be authorized by SMTP)
      to: process.env.RECEIVER_EMAIL, // Receiver address
      replyTo: email, // User's email for direct replies
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0070f3; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">New Inquiry</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0070f3; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            <p>This email was sent from the NextGenInvest contact form.</p>
          </footer>
        </div>
      `,
    };

    // 4. Send the Email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Email API Error:", error);
    
    // Return failure response with error message
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
