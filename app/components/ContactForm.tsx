"use client";
import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<"idle" | "sending" | "sent" | "error" | "rate">("idle");
  const [errMsg, setErrMsg]   = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setStatus("sending");

    try {
      const res  = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      const data = await res.json() as { success: boolean; message: string };

      if (res.status === 429) {
        setStatus("rate");
        setErrMsg(data.message);
      } else if (!data.success) {
        setStatus("error");
        setErrMsg(data.message);
      } else {
        setStatus("sent");
        setEmail("");
        setMessage("");
      }
    } catch {
      setStatus("error");
      setErrMsg("Something went wrong. Try emailing directly.");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-start py-10 border-t border-[#111]">

      {/* LEFT */}
      <div>
        <h2 className="font-display text-[2rem] italic text-#f5f5f5 leading-tight mb-5">
          Get in Touch
        </h2>
        <p className="text-[0.82rem] text-[#444] leading-relaxed mb-1">
          If you have any inquiries, feel free to reach out. You can also contact me directly at
        </p>
        <a href="mailto:hq@luckyworks.in"
          className="text-[0.82rem] text-[#666] hover:text-white transition-colors">
          jhalucky61@gmail.com
        </a>
      </div>

      {/* RIGHT — FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl
            font-mono text-[0.78rem] text-[#888] placeholder-[#252525] tracking-wide
            px-4 py-3 outline-none focus:border-[#2e2e2e] focus:text-[#ccc]
            transition-all duration-200
            [html.light_&]:bg-white [html.light_&]:border-[#e0e0e0]
            [html.light_&]:text-[#555] [html.light_&]:placeholder-[#ccc]"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
          rows={5}
          className="w-full bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl
            font-mono text-[0.78rem] text-[#888] placeholder-[#252525] tracking-wide
            px-4 py-3 outline-none focus:border-[#2e2e2e] focus:text-[#ccc]
            transition-all duration-200 resize-none
            [html.light_&]:bg-white [html.light_&]:border-[#e0e0e0]
            [html.light_&]:text-[#555] [html.light_&]:placeholder-[#ccc]"
        />

        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="w-full py-3 rounded-xl font-mono text-[0.72rem] tracking-widest uppercase
            transition-all duration-200
            bg-gradient-to-b from-[#e8e8e8] to-[#c8c8c8] text-[#0a0a0a]
            hover:from-white hover:to-[#d8d8d8]
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..."
            : status === "sent"  ? "Sent ✓"
            : "Submit"}
        </button>

        {(status === "error" || status === "rate") && (
          <p className="font-mono text-[0.62rem] tracking-wide text-center
            text-red-800 [html.light_&]:text-red-500">
            {errMsg}
          </p>
        )}

      </form>
    </div>
  );
}