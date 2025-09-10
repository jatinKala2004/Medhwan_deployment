//not applied, for future use!

'use client'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Contact = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Message sent successfully!');
    router.push('/message-sent');
      } else {
        alert('Error: ' + (data.message || 'Failed to send message.'));
      }
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
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
            <form onSubmit={async (e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
              });
              const data = await res.json();
              alert(JSON.stringify(data));
            }}>
              <input name="name" placeholder="Name" required className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-text-light placeholder-accent focus:border-accent focus:ring-2 focus:ring-accent/20 mb-2" />
              <input name="email" placeholder="Email" required className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-text-light placeholder-accent focus:border-accent focus:ring-2 focus:ring-accent/20 mb-2" />
              <textarea name="message" placeholder="Message" required className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-text-light placeholder-accent focus:border-accent focus:ring-2 focus:ring-accent/20 mb-2" />
              <button type="submit" className="w-full bg-accent text-text-light py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors duration-300">Send</button>
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