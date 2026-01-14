import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactInfo = ({ icon: Icon, title, value, href }) => (
  <div className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover: border-emerald-500/30 transition-all duration-300">
    <div className="p-2 bg-emerald-500/10 rounded-lg">
      <Icon className="text-emerald-400" size={20} />
    </div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      {href ?  (
        <a 
          href={href} 
          className="text-gray-400 hover:text-emerald-400 transition-colors"
          target={href.startsWith('http') ? '_blank' : '_self'}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-400">{value}</p>
      )}
    </div>
  </div>
);

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent! ",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (! data?. profile) return null;

  // Extract LinkedIn username from URL
  const linkedinUsername = data.profile.linkedin ?  
    data.profile.linkedin. split('/').filter(Boolean).pop() : 
    'linkedin-profile';

  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 ml-4">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  value={data.profile.email}
                  href={`mailto:${data.profile.email}`}
                />
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  value={data. profile.phone}
                  href={`tel:${data.profile.phone}`}
                />
                <ContactInfo
                  icon={MapPin}
                  title="Location"
                  value={data.profile.location}
                />
                <ContactInfo
                  icon={Linkedin}
                  title="LinkedIn"
                  value={linkedinUsername}
                  href={data.profile.linkedin}
                />
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Quick Connect</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`mailto:${data.profile.email}? subject=Project Inquiry`}
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Mail size={18} />
                  Email Me
                </a>
                <a
                  href={data.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-gray-600 hover: border-emerald-400 text-gray-300 hover:text-emerald-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover: scale-105"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="text-emerald-400" size={20} />
                <span className="text-emerald-400 font-semibold">Available for Work</span>
              </div>
              <p className="text-gray-300 text-sm">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss your requirements! 
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus: border-emerald-500 focus: ring-1 focus:ring-emerald-500 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus: border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus: ring-1 focus:ring-emerald-500 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover: scale-105 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;