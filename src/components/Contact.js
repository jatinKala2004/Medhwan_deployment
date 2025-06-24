'use client'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-light mb-4">Contact Us</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            Get in touch with us for any questions or inquiries about our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-light mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-text-light placeholder-accent focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-light mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-text-light placeholder-accent focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-light mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-text-light placeholder-accent focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-text-light py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-text-light mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-accent text-xl" />
                  <span className="text-accent">contact@medhwan.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-accent text-xl" />
                  <span className="text-accent">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-accent text-xl" />
                  <span className="text-accent">123 Education Street, Learning City</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-text-light mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="text-accent">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-accent">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-accent">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 