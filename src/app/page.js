'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { FaDownload, FaArrowRight, FaBrain, FaVideo, FaFilePdf, FaQuestionCircle, FaChartLine, FaUsers, FaCheck, FaCrown, FaInfinity, FaRegGem } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import TestimonialCarouselArrows from '@/components/TestimonialCarouselArrows'
import StarRating from '@/components/StarRating'

export default function Home() {
  const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Why Prajwal Section */}
      <motion.section 
        id="why-prajwal" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={FADE_IN_VARIANTS}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Why Choose Prajwal?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience a revolutionary approach to learning with our comprehensive features
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { icon: FaBrain, title: "AI-Powered Learning", text: "Personalized learning experience powered by advanced AI technology" },
              { icon: FaVideo, title: "Video Solutions", text: "Comprehensive video explanations for better understanding" },
              { icon: FaFilePdf, title: "Study Materials", text: "Access to high-quality study materials and resources" }
            ].map((feature, index) => (
              <motion.div key={index} variants={FADE_IN_VARIANTS} className="rounded-2xl border bg-card p-6 text-card-foreground shadow-md transition-all hover:-translate-y-2 hover:shadow-xl">
                <feature.icon className="text-4xl text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Go Elite Section */}
      <motion.section 
        id="go-elite" 
        className="pt-[100px] pb-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 lg:px-[150px]">
          <motion.div 
            className="metallic-card text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
              
              {/* Crown Icon - First Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut",
                  delay: 0.3
                }}
                viewport={{ once: true }}
              >
                <FaCrown className="text-7xl md:text-8xl mb-4 text-amber-400" />
              </motion.div>

              {/* Main Heading - Second Animation */}
              <motion.h2 
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.4, 
                  ease: "easeOut",
                  delay: 0.8
                }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight shimmer-text"
              >
                GET ELITE
              </motion.h2>

              {/* Subtitle - Third Animation */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut",
                  delay: 1.4
                }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-semibold mt-4 mb-10 text-gray-300"
              >
                Level up with premium access 🚀
              </motion.p>

              {/* Features Container */}
              <motion.div 
                className="flex flex-col gap-7 mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.6,
                      delayChildren: 2.0
                    }
                  }
                }}
              >
                {[
                  { icon: FaInfinity, title: "Infinite Learning", text: "Unlock every chapter across all subjects" },
                  { icon: FaRegGem, title: "Future Access", text: "Access to all future subjects and features" },
                  { icon: FaCrown, title: "Premium Features", text: "Get access to all premium features like Mind Maps, AI Quiz, Objective Questions, & Much More...." }
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-5 max-w-lg"
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        x: -50,
                        scale: 0.95
                      },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        scale: 1,
                        transition: {
                          duration: 1.2,
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "backOut",
                        delay: 0.2
                      }}
                      viewport={{ once: true }}
                    >
                      <feature.icon className="text-4xl text-amber-400 mt-1 flex-shrink-0" />
                    </motion.div>
                    <div className="text-left">
                      <motion.div 
                        className="font-bold text-2xl text-gray-100"
                        initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          ease: "easeOut",
                          delay: 0.4
                        }}
          viewport={{ once: true }}
        >
                        {feature.title}
                      </motion.div>
                      <motion.div 
                        className="text-lg text-gray-400 mt-1"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          ease: "easeOut",
                          delay: 0.6
                        }}
                        viewport={{ once: true }}
                      >
                        {feature.text}
                      </motion.div>
                </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button - Final Animation */}
              <motion.button 
                className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-lg font-bold text-black shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.0, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 2.5
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ 
                  scale: 0.95,
                  y: 0,
                  transition: { duration: 0.1 }
                }}
              >
                Get Elite
              </motion.button>
            </div>
          </motion.div>
          </div>
      </motion.section>

      {/* About Prajwal Section */}
      <motion.section 
        id="about-prajwal" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={FADE_IN_VARIANTS}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Prajwal
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Your comprehensive learning companion for academic excellence
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div className="space-y-6" variants={FADE_IN_VARIANTS}>
              <p className="text-muted-foreground text-lg">
                Prajwal is an innovative learning platform designed to help students excel in their academic journey. With features like AI-powered quizzes, comprehensive study materials, and personalized learning paths, we make education more accessible and effective.
              </p>
              <p className="text-muted-foreground text-lg">
                Our platform combines cutting-edge technology with proven educational methodologies to create an engaging and efficient learning experience for students of all levels.
              </p>
            </motion.div>
            <motion.div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl" variants={FADE_IN_VARIANTS}>
              <Image
                src="/images/Home.png"
                alt="Prajwal App"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section 
        id="about-us" 
        className="py-20 bg-gradient-to-b from-primary to-secondary text-text-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="section-container">
          <motion.div 
            className="text-center mb-16"
            variants={FADE_IN_VARIANTS}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Us
            </h2>
            <p className="text-accent text-lg max-w-2xl mx-auto">
              Transforming education through innovation and technology
            </p>
          </motion.div>
          <motion.div className="max-w-3xl mx-auto glass p-8 rounded-2xl" variants={FADE_IN_VARIANTS}>
            <p className="text-lg mb-8 text-text-secondary">
              Medhwan Edutech is dedicated to revolutionizing the way students learn and prepare for their exams. Our team of experienced educators and technologists work together to create innovative solutions that make education more accessible and effective.
            </p>
            <p className="text-lg text-text-secondary">
              We believe in the power of technology to transform education and are committed to providing students with the tools they need to succeed in their academic journey.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={FADE_IN_VARIANTS}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">
              What Our Users Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Hear from students who have transformed their learning experience with Prajwal
            </p>
          </motion.div>
          <motion.div variants={FADE_IN_VARIANTS} className="relative px-0 md:px-8">
          <Carousel
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
              tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
              mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
            }}
            infinite={true}
            draggable={true}
            swipeable={true}
            showDots={false}
            arrows={false}
            className="pb-8"
            customButtonGroup={<TestimonialCarouselArrows />}
            renderButtonGroupOutside={true}
            >
              {[
                { name: 'Priya', gender: 'girl', rating: 5, text: 'The personalized quizzes and revision notes are amazing! I feel much more confident in my exams now.' },
                { name: 'Rahul', gender: 'boy', rating: 5, text: 'I love the user-friendly interface and the variety of study materials available. Highly recommended!' },
                { name: 'Sneha', gender: 'girl', rating: 5, text: 'The best learning platform I have used. The AI-powered analytics really help me track my progress.' },
                { name: 'Vikram', gender: 'boy', rating: 5, text: 'Great app for students! The one-on-one mentoring feature is a game changer.' },
                { name: 'Ananya', gender: 'girl', rating: 5, text: 'Prajwal makes studying fun and effective. The exclusive content is very helpful.' }
            ].map((student, index) => (
                  <div key={index} className="px-3 py-2 h-full">
                    <div className="bg-white rounded-xl shadow-md p-10 min-h-[280px] h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src={student.gender === 'girl' ? '/images/girl.png' : '/images/boy.png'}
                          alt={student.gender === 'girl' ? 'Girl' : 'Boy'}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-base text-gray-700">{student.name}</h4>
                          <StarRating rating={student.rating} />
                    </div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed italic flex-grow">"{student.text}"</p>
                    </div>
                  </div>
            ))}
          </Carousel>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section 
        id="contact-us" 
        className="py-20 bg-gradient-to-b from-primary to-secondary text-text-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={FADE_IN_VARIANTS}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-accent text-lg max-w-2xl mx-auto">
              Get in touch with us for any questions or support
            </p>
          </motion.div>
          <motion.div 
            className="max-w-2xl mx-auto glass p-8 rounded-2xl"
            variants={FADE_IN_VARIANTS}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-primary">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-accent/20 text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-primary">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-accent/20 text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-primary">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-accent/20 text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-text-primary py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
} 