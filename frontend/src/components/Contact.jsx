// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Linkedin, Github, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
// import { useToast } from '../hooks/use-toast';

// const ContactInfo = ({ icon: Icon, title, value, href }) => (
//   <div className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover: border-emerald-500/30 transition-all duration-300">
//     <div className="p-2 bg-emerald-500/10 rounded-lg">
//       <Icon className="text-emerald-400" size={20} />
//     </div>
//     <div>
//       <h4 className="text-white font-medium">{title}</h4>
//       {href ?  (
//         <a
//           href={href}
//           className="text-gray-400 hover:text-emerald-400 transition-colors"
//           target={href.startsWith('http') ? '_blank' : '_self'}
//           rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
//         >
//           {value}
//         </a>
//       ) : (
//         <p className="text-gray-400">{value}</p>
//       )}
//     </div>
//   </div>
// );

// const Contact = ({ data }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: "Message Sent! ",
//         description: "Thank you for reaching out. I'll get back to you soon.",
//       });
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     }, 2000);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   if (! data?. profile) return null;

//   // Extract LinkedIn username from URL
//   const linkedinUsername = data.profile.linkedin ?
//     data.profile.linkedin. split('/').filter(Boolean).pop() :
//     'linkedin-profile';

//   return (
//     <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-white mb-4">
//             Get In
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 ml-4">
//               Touch
//             </span>
//           </h2>
//           <p className="text-gray-400 text-xl max-w-2xl mx-auto">
//             Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Information */}
//           <div>
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
//               <div className="space-y-4">
//                 <ContactInfo
//                   icon={Mail}
//                   title="Email"
//                   value={data.profile.email}
//                   href={`mailto:${data.profile.email}`}
//                 />
//                 <ContactInfo
//                   icon={Phone}
//                   title="Phone"
//                   value={data. profile.phone}
//                   href={`tel:${data.profile.phone}`}
//                 />
//                 <ContactInfo
//                   icon={MapPin}
//                   title="Location"
//                   value={data.profile.location}
//                 />
//                 <ContactInfo
//                   icon={Linkedin}
//                   title="LinkedIn"
//                   value={linkedinUsername}
//                   href={data.profile.linkedin}
//                 />
//               </div>
//             </div>

//             {/* Quick Contact Buttons */}
//             <div className="space-y-4">
//               <h4 className="text-xl font-semibold text-white mb-4">Quick Connect</h4>
//               <div className="grid grid-cols-2 gap-4">
//                 <a
//                   href={`mailto:${data.profile.email}? subject=Project Inquiry`}
//                   className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
//                 >
//                   <Mail size={18} />
//                   Email Me
//                 </a>
//                 <a
//                   href={data.profile.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 border border-gray-600 hover: border-emerald-400 text-gray-300 hover:text-emerald-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover: scale-105"
//                 >
//                   <Linkedin size={18} />
//                   LinkedIn
//                 </a>
//               </div>
//             </div>

//             {/* Availability Status */}
//             <div className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
//               <div className="flex items-center gap-3 mb-2">
//                 <CheckCircle className="text-emerald-400" size={20} />
//                 <span className="text-emerald-400 font-semibold">Available for Work</span>
//               </div>
//               <p className="text-gray-300 text-sm">
//                 I'm currently available for freelance projects and full-time opportunities.
//                 Let's discuss your requirements!
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
//               <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
//                       Full Name
//                     </label>
//                     <div className="relative">
//                       <User className="absolute left-3 top-3 text-gray-400" size={20} />
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus: border-emerald-500 focus: ring-1 focus:ring-emerald-500 transition-all duration-300"
//                         placeholder="Your full name"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus: border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300"
//                         placeholder="your@email.com"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300"
//                     placeholder="Project inquiry, collaboration, etc."
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
//                     Message
//                   </label>
//                   <div className="relative">
//                     <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus: ring-1 focus:ring-emerald-500 transition-all duration-300 resize-none"
//                       placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover: scale-105 flex items-center justify-center gap-2"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send size={18} />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 sm:px-12 bg-light-bg relative"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm: text-6xl font-bold mb-4">
            Get In <span className="text-cyan-accent">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-gray-600 mb-8">
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
                <div className="w-12 h-12 rounded-full bg-cyan-accent/10 flex items-center justify-center group-hover:bg-cyan-accent transition-all duration-300">
                  <Mail
                    className="text-cyan-accent group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800 font-semibold group-hover:text-cyan-accent transition-colors">
                    {data?.profile?.email || "wahajasif488@gmail. com"}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-accent/10 flex items-center justify-center">
                  <Phone className="text-cyan-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-800 font-semibold">
                    {data?.profile?.phone || "+92-313-7263488"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-accent/10 flex items-center justify-center">
                  <MapPin className="text-cyan-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800 font-semibold">
                    {data?.profile?.location || "Lahore, Pakistan"}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex items-center gap-4">
                <a
                  href={
                    data?.profile?.github || "https://github.com/coderwahaj"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-cyan-accent text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
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
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-cyan-accent text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-accent focus: outline-none transition-colors duration-300 bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-accent focus:outline-none transition-colors duration-300 bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-accent focus:outline-none transition-colors duration-300 bg-white"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus: border-cyan-accent focus:outline-none transition-colors duration-300 bg-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl animate-fade-in">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-accent hover:bg-red-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-accent/30 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
