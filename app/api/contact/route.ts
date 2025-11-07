import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jhalucky61@gmail.com", // ✅ your receiving email
      subject: `📩 New Contact: ${body.subject}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
