import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 tracking-wider">
            Let's Build Together
          </h1>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-[700px] mx-auto px-4">
            Reach out to ReignDev for collaboration, support, or inquiries
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* Phone Card */}
          <a
            href="tel:0680540434"
            className="backdrop-blur-xl bg-gradient-to-br from-green-900/20 via-teal-900/20 to-transparent border border-green-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-2 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/10 to-green-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Call Us Directly</h3>
                <p className="text-xl sm:text-2xl font-semibold text-green-400">068 054 0434</p>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:sekgotodit@outlook.com"
            className="backdrop-blur-xl bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-transparent border border-blue-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Email Us</h3>
                <p className="text-base sm:text-lg font-semibold text-blue-400 break-all">sekgotodit@outlook.com</p>
              </div>
            </div>
          </a>
        </div>

        {/* Social Media Section */}
        <div className="mb-12 sm:mb-16">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Stay Connected With Us</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/thabang-sekgotodi"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-xl bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                <p className="text-gray-400 text-sm">Thabang Sekgotodi</p>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/reigndevsa"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-xl bg-gradient-to-br from-pink-600/20 to-transparent border border-pink-400/30 rounded-2xl p-6 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">Instagram</h4>
                <p className="text-gray-400 text-sm">@reigndevsa</p>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/reigndev"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-xl bg-gradient-to-br from-blue-700/20 to-transparent border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Facebook className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">Facebook</h4>
                <p className="text-gray-400 text-sm">ReignDev</p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/27680540434"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-xl bg-gradient-to-br from-green-600/20 to-transparent border border-green-400/30 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                <p className="text-gray-400 text-sm">Chat with us</p>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="backdrop-blur-xl bg-gradient-to-br from-green-900/30 to-transparent border border-green-400/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300 text-sm sm:text-base">Thank you for reaching out! We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                      errors.name ? 'border-red-400' : 'border-white/20'
                    } text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                      errors.email ? 'border-red-400' : 'border-white/20'
                    } text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-white mb-2 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                      errors.subject ? 'border-red-400' : 'border-white/20'
                    } text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors`}
                    placeholder="What is this about?"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                      errors.message ? 'border-red-400' : 'border-white/20'
                    } text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Location & Map */}
          <div className="space-y-6 sm:space-y-8">
            {/* Location Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-transparent border border-purple-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6 text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Location & Availability</h3>
                  <p className="text-gray-300 mb-2 sm:mb-3 text-sm sm:text-base">Based in South Africa</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Available for calls and messages during business hours
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 sm:pt-6">
                <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Business Hours</h4>
                <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <div className="flex justify-between gap-2">
                    <span>Monday - Friday:</span>
                    <span className="text-cyan-400">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Saturday:</span>
                    <span className="text-cyan-400">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Sunday:</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500">
              <div className="aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.048687722955!2d28.0!3d-26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDAyJzAwLjAiUyAyOMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ReignDev Location - South Africa"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] -z-10"></div>
      </div>
    </div>
  );
}
