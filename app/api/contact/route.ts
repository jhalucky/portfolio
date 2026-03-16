import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── RATE LIMITER (in-memory, per IP) ──
const rateMap = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 3;        // max 3 messages
const WINDOW = 60_000;  // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW });
    return false;
  }

  if (entry.count >= LIMIT) return true;

  entry.count++;
  return false;
}

// ── HANDLER ──
export async function POST(req: NextRequest) {
  try {
    // Get IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    // Rate limit check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    const { email, message } = await req.json() as { email: string; message: string };

    // Validate
    if (!email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "Email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Sanitize
    const safeEmail   = email.substring(0, 200);
    const safeMessage = message.substring(0, 2000)
      .replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO ?? process.env.EMAIL_USER,
      replyTo: safeEmail,
      subject: `New message from ${safeEmail}`,
      html: `
        <div style="font-family:monospace;max-width:520px;background:#0d0d0d;color:#ccc;padding:32px;border:1px solid #1a1a1a;">
          <p style="color:#555;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:24px;">
            Portfolio — New Message
          </p>
          <p style="font-size:12px;color:#666;margin-bottom:6px;">FROM</p>
          <p style="font-size:14px;margin-bottom:20px;">
            <a href="mailto:${safeEmail}" style="color:#888;">${safeEmail}</a>
          </p>
          <p style="font-size:12px;color:#666;margin-bottom:6px;">MESSAGE</p>
          <p style="font-size:14px;line-height:1.7;background:#111;padding:16px;border-left:2px solid #2a2a2a;white-space:pre-wrap;">${safeMessage}</p>
          <p style="font-size:11px;color:#333;margin-top:24px;">
            ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent!" });

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send. Try emailing directly." },
      { status: 500 }
    );
  }
}