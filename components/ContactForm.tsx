"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setSubmitted(true);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 mx-auto border p-5 rounded-lg"
        >
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border rounded"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={loading}
              className="md:w-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-lg cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Thank You!</h2>
          <p className="text-gray-300">
            Your message has been sent successfully. I’ll get back to you soon.
          </p>
        </div>
      )}
    </div>
  );
}
