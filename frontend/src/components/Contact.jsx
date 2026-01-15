import React, { useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";

export default function Contact({ data }) {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [leftRef, leftVisible] = useScrollAnimation(0.2);
  const [rightRef, rightVisible] = useScrollAnimation(0.2);

  const [formData, setFormData] = useState({
    from_name: "",      // ✅ Changed from 'name'
    from_email: "",     // ✅ Changed from 'email'
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env. REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log("✅ Email sent successfully:", result.text);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("❌ Email send failed:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");

      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-6 sm:px-12 bg-dark-bg relative overflow-hidden"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-light-200 to-white bg-clip-text text-transparent">
              Get In
            </span>{" "}
            <span className="bg-gradient-to-r from-light-300 via-light-100 to-light-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-light-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div
            ref={leftRef}
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 ${
              leftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's talk about everything! 
              </h3>
              <p className="text-light-400 mb-8">
                Don't like forms? Send me an email directly. 👋
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href={`mailto:${
                  data?.profile?.email || "wahajasif488@gmail.com"
                }`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-light-400">Email</p>
                  <p className="text-white font-semibold group-hover:text-light-200 transition-colors">
                    {data?.profile?.email || "wahajasif488@gmail. com"}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dark-600 to-dark-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-light-400">Phone</p>
                  <p className="text-white font-semibold">
                    {data?. profile?.phone || "+92-313-7263488"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dark-700 to-dark-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-light-400">Location</p>
                  <p className="text-white font-semibold">
                    {data?.profile?.location || "Lahore, Pakistan"}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-sm text-light-400 mb-4">Connect with me</p>
              <div className="flex items-center gap-4">
                <a
                  href={
                    data?.profile?.github || "https://github.com/coderwahaj"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-dark-800 to-dark-700 hover:from-dark-700 hover:to-dark-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={
                    data?.profile?.linkedin ||
                    "https://linkedin.com/in/muhammad-wahaj-asif-7a9118254"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-dark-700 to-dark-600 hover:from-dark-600 hover:to-dark-500 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            ref={rightRef}
            className={`lg:col-span-3 transition-all duration-1000 ${
              rightVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gradient-to-br from-dark-700/50 to-dark-600/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-dark-500/50 shadow-2xl"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-light-400 focus:border-white focus: outline-none transition-colors duration-300"
                    placeholder="Steve Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-light-400 focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="steve@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-light-400 focus:border-white focus: outline-none transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-light-400 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-500/20 border-2 border-green-500 text-green-400 px-4 py-3 rounded-xl">
                  ✅ Thank you! Your message has been sent successfully. 
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/20 border-2 border-red-500 text-red-400 px-4 py-3 rounded-xl">
                  ❌ Oops!  Something went wrong. Please try again or email me
                  directly. 
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-light-200 text-dark-800 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark-800 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}