"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const confirmed = window.confirm("Do you really want to send the message?");
    if (!confirmed) return;

    setLoading(true);

    try {
      // 1. Send to Formspree
      const formspreeRes = await fetch("https://formspree.io/f/mvgqobkn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      // 2. Send to Google Sheets
      await fetch("https://script.google.com/macros/s/AKfycbyY9Sn14A4fyUg0wU2qCB8ES7A3hvcAnTfbGiJLSshhHfdJV6PDeWJar-pGBJfRWD45zw/exec", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      if (formspreeRes.ok) {
        toast.success("Message sent!");
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setSubmitted(true);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl border border-foreground/10 shadow-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                style={{ backgroundColor: 'var(--background)' }}
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                style={{ backgroundColor: 'var(--background)' }}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
              Phone Number <span className="text-foreground/40">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 234 567 8900"
              className="w-full px-4 py-3 rounded-lg border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
              style={{ backgroundColor: 'var(--background)' }}
              value={phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="What's this about?"
              className="w-full px-4 py-3 rounded-lg border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
              style={{ backgroundColor: 'var(--background)' }}
              value={subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Tell me about your project or just say hello!"
              className="w-full px-4 py-3 rounded-lg border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none"
              style={{ backgroundColor: 'var(--background)' }}
              rows={6}
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 tech-glow"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16 px-8 rounded-2xl border border-green-500/20 bg-green-500/5"
        >
          <div className="text-6xl mb-4">✨</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Thank You!
          </h2>
          <p className="text-foreground/70 text-lg">
            Your message has been sent successfully. I'll get back to you soon.
          </p>
        </motion.div>
      )}
    </div>
  );
}
