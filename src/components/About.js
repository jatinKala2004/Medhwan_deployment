'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-light mb-4">About Us</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            We are dedicated to transforming education through technology, making learning accessible and engaging for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-text-light mb-4">Our Mission</h3>
              <p className="text-accent">
                To create innovative solutions that empower students and educators alike, making quality education accessible to all.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-text-light mb-4">Our Vision</h3>
              <p className="text-accent">
                To be the leading force in educational technology, creating solutions that make learning more effective and enjoyable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px]"
          >
            <Image
              src="/images/about-image.jpg"
              alt="About Medhwan"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <h3 className="text-xl font-bold text-text-light mb-4">Innovation</h3>
            <p className="text-accent">
              We constantly innovate to bring the best learning solutions to our users.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <h3 className="text-xl font-bold text-text-light mb-4">Quality</h3>
            <p className="text-accent">
              We maintain the highest standards in our educational content and technology.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <h3 className="text-xl font-bold text-text-light mb-4">Accessibility</h3>
            <p className="text-accent">
              We make quality education accessible to everyone, everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 