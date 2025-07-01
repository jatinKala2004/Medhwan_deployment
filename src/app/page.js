'use client'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { FaDownload, FaArrowRight, FaBrain, FaVideo, FaFilePdf, FaQuestionCircle, FaChartLine, FaUsers, FaCrown, FaInfinity, FaRegGem, FaTrophy, FaChartBar, FaBookOpen, FaStar, FaClipboardList, FaRobot, FaUnlockAlt, FaSyncAlt, FaCalendarCheck, FaMagic, FaRupeeSign, FaRegEye, FaLightbulb, FaRegLightbulb } from 'react-icons/fa'
import { HiOutlineCheck, HiOutlineX } from 'react-icons/hi'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import TestimonialCarouselArrows from '@/components/TestimonialCarouselArrows'
import StarRating from '@/components/StarRating'

// Floating SVGs for background
const FloatingSVGs = () => (
  <>
    <svg className="absolute top-10 left-10 animate-float-slow opacity-20" width="60" height="60"><circle cx="30" cy="30" r="30" fill="#60a5fa" /></svg>
    <svg className="absolute bottom-16 right-24 animate-float-slower opacity-20" width="40" height="40"><rect width="40" height="40" rx="12" fill="#f472b6" /></svg>
    <svg className="absolute top-1/2 left-1/3 animate-float-slowest opacity-10" width="80" height="80"><polygon points="40,0 80,80 0,80" fill="#facc15" /></svg>
  </>
)

// Mascot Emoji
const Mascot = () => (
  <div className="flex justify-center mb-2 relative z-10">
    <span className="text-5xl animate-wave">🤖</span>
  </div>
)

// Wavy SVG Divider
const WavyDivider = () => (
  <svg viewBox="0 0 1440 80" className="w-full h-12 mb-[-1px]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#E3F2FD" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
  </svg>
)

export default function Home() {
  const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Pastel backgrounds for cards
  const cardBgColors = [
    'bg-[#E3F2FD]', // Light Blue
    'bg-[#FFF3E0]', // Light Orange
    'bg-[#E8F5E9]', // Light Green
    'bg-[#F3E5F5]', // Light Purple
    'bg-[#FFFDE7]', // Light Yellow
    'bg-[#FCE4EC]'  // Light Pink
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* About Prajwal Section - Suntory Inspired Design */}
      <section id="about-prajwal" className="w-full py-20 px-0">
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/Prajwal_svg.svg"
                alt="Prajwal App Logo"
                className="w-32 h-32 object-contain"
              />
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900">
              About Prajwal
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our flagship AI-powered learning app designed to convert student's dream results into their actual results
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Feature Points */}
          <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            {[
              {
                number: '01',
                  title: "AI-Powered Learning",
                  description: "Backed with advanced AI, Prajwal offers mind maps, self-assessment quizzes, practice questions, and revision notes to achieve academic success."
              },
              {
                number: '02',
                  title: "Comprehensive Coverage",
                  description: "Designed for Class 10 English-medium students of the GSEB board, but equally useful for learners following the NCERT curriculum."
              },
              {
                number: '03',
                  title: "Results-Driven Approach",
                  description: "Every feature is designed to convert students' dream results into their actual results through personalized learning paths."
              }
              ].map((item, index) => (
              <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Large faded number */}
                  <span className="absolute left-0 top-0 text-7xl font-extrabold text-gray-300 opacity-70 select-none" style={{lineHeight: 1}}>
                    {item.number}
                  </span>
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

            {/* Right: Visual Element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Learning</h3>
                  <p className="text-gray-600">AI-powered education for the modern student</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Subheading and Cards - PART 2 */}
      <section className="w-full pt-6 pb-16 px-0">
        <motion.h3
          className="text-2xl md:text-3xl font-semibold mb-10 text-center text-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          Prajwal's Key Features
        </motion.h3>
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { transition: { staggerChildren: 0.22 } } }}
        >
          {[
            {
              icon: <FaTrophy />, title: "Score High Without Stress",
              text: "Prajwal helps you prepare smartly with focused content, questions, and quick revisions - so you can score high without the pressure.",
              bg: cardBgColors[0]
            },
            {
              icon: <FaChartBar />, title: "Focus on Weak Topics",
              text: "Everyone has weak areas. With Prajwal, you can review focused notes, learning videos and practice every important question from that topic.",
              bg: cardBgColors[1]
            },
            {
              icon: <FaBookOpen />, title: "Quality Content",
              text: "Prajwal's content is reviewed by Dhaval Gajera, who has consistently delivered top results for over 10 years. In March 2025, 9 students scored a perfect 100 in Science, and 5 did the same in Maths (Basic & Standard).",
              bg: cardBgColors[2]
            },
            {
              icon: <FaStar />, title: "Excellent Result Not Information",
              text: "Prajwal isn't just about giving information — it's about delivering excellent results. Our content is designed to help you score high, not just learn more.",
              bg: cardBgColors[3]
            },
            {
              icon: <FaClipboardList />, title: "Master 30% Objectives",
              text: "Prajwal provides 300+ objective questions for every chapter, helping you master the section that carries 30% weightage in your board exams.",
              bg: cardBgColors[4]
            },
            {
              icon: <FaRobot />, title: "AI Quizzes",
              text: "Experience quizzes that feel like national-level exams such as JEE and NEET - powered by AI for smarter preparation.",
              bg: cardBgColors[5]
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9 } } }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(96,165,250,0.18), 0 1.5px 8px 0 rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-3xl border border-transparent p-6 shadow-md transition-all flex flex-col gap-3 ${feature.bg} relative overflow-hidden`}
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.span
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  className="text-3xl text-primary flex-shrink-0"
                >
                  {feature.icon}
                </motion.span>
                <span className="relative group">
                  <h3 className="text-lg md:text-xl font-bold m-0 inline-block group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                    <span className="block h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 rounded-full mt-1"></span>
                  </h3>
                </span>
              </div>
              <p className="text-base md:text-lg text-gray-700">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/*Get Elite section, highlights, and plan comparison - Electric Blue Premium BG*/}
      <section
        id='get-elite'
        className="w-full py-16 bg-[#181A1B] relative overflow-hidden mt-16"
      >
        {/* Removed blue sparkle/gradient overlay for a uniform black background */}
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Heading */}
          <motion.h2
            className="text-5xl font-semibold text-white text-center mb-4 tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            Unlock Limitless Learning with <span style={{ color: '#1faaff', textShadow: '0 0 8px #1faaff66, 0 0 16px #1faaff33', fontWeight: 500 }}>Elite</span>
          </motion.h2>
          {/* Description */}
          <motion.p
            className="text-xl text-[#b3b3b3] text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            Unlock the ultimate learning experience with exclusive features and premium content designed for your success.
          </motion.p>
          {/* Feature Cards */}
          <motion.div
            className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={{ visible: { transition: { staggerChildren: 0.7 } }, hidden: {} }}
          >
            {[
              {
                icon: <FaBookOpen className="text-4xl mb-4" style={{ color: '#1faaff', textShadow: '0 0 12px #1faaff88, 0 0 24px #1faaff44' }} />, 
                text: 'With Elite plan, unlock every chapter, every subject until your board exams.'
              },
              {
                icon: <FaMagic className="text-4xl mb-4" style={{ color: '#1faaff', textShadow: '0 0 12px #1faaff88, 0 0 24px #1faaff44' }} />, 
                text: 'Get full access to premium features like Mind Maps, Revision Notes, Focused Questions, and more.'
              },
              {
                icon: <FaSyncAlt className="text-4xl mb-4" style={{ color: '#1faaff', textShadow: '0 0 12px #1faaff88, 0 0 24px #1faaff44' }} />, 
                text: 'Elite also includes all future subjects and updates at no extra cost.'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex-1 bg-[#232425] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-blue-400/40"
                style={{ minWidth: 0 }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                {feature.icon}
                <span className="text-white text-lg md:text-xl font-medium" style={{ textShadow: '0 1px 8px #00e0ff33' }}>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
          {/* Table Heading */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4 text-center text-white" style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            Plan Comparison
          </motion.h2>
          <motion.p className="text-2xl text-[#b3b3b3] text-center mb-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            Free vs Elite
          </motion.p>
          {/* Table Columns */}
          <motion.div
            className="w-full grid grid-cols-3 gap-0 bg-[#232425] rounded-2xl shadow-2xl font-normal" style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            {/* Feature column */}
            <motion.div
              className="flex flex-col gap-8 py-6 pl-10 items-start shadow-none transition-all duration-300 hover:bg-[#181A1B]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="h-12 flex items-center justify-center w-full font-normal text-xl md:text-2xl text-white" style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}>Feature</div>
              <div className="flex items-center gap-3 text-lg md:text-xl text-white font-semibold">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#181818] text-xl text-[#1faaff]" style={{ textShadow: '0 0 8px #1faaff88, 0 0 16px #1faaff44' }}><FaBookOpen /></span>
                Access to all chapters
              </div>
              <div className="flex items-center gap-3 text-lg md:text-xl text-white font-semibold">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#181818] text-xl text-[#1faaff]" style={{ textShadow: '0 0 8px #1faaff88, 0 0 16px #1faaff44' }}><FaSyncAlt /></span>
                Future Updates
              </div>
              <div className="flex items-center gap-3 text-lg md:text-xl text-white font-semibold">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#181818] text-xl text-[#1faaff]" style={{ textShadow: '0 0 8px #1faaff88, 0 0 16px #1faaff44' }}><FaMagic /></span>
                Access to all features
              </div>
              <div className="flex items-center gap-3 text-lg md:text-xl text-white font-semibold">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#181818] text-xl text-[#1faaff]" style={{ textShadow: '0 0 8px #1faaff88, 0 0 16px #1faaff44' }}><FaRupeeSign /></span>
                Price
              </div>
            </motion.div>
            {/* Free Plan column */}
            <motion.div
              className="flex flex-col gap-8 items-center py-6 bg-[#232425] shadow-none transition-all duration-300 hover:bg-[#181A1B]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="h-12 flex items-center justify-center w-full font-normal text-xl md:text-2xl text-white" style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}>Free Plan</div>
              <HiOutlineX className="text-3xl" style={{ color: '#ff4444', textShadow: '0 0 8px #ff444466, 0 0 16px #ff444433' }} />
              <HiOutlineX className="text-3xl" style={{ color: '#ff4444', textShadow: '0 0 8px #ff444466, 0 0 16px #ff444433' }} />
              <HiOutlineX className="text-3xl" style={{ color: '#ff4444', textShadow: '0 0 8px #ff444466, 0 0 16px #ff444433' }} />
              <span className="text-white font-bold text-lg">Free</span>
            </motion.div>
            {/* Elite Plan column */}
            <motion.div
              className="flex flex-col gap-8 items-center py-6 bg-[#232425] shadow-none transition-all duration-300 hover:bg-[#181A1B] rounded-r-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="h-12 flex items-center justify-center w-full font-normal text-xl md:text-2xl" style={{ fontFamily: 'Inter, Segoe UI, sans-serif', color: '#1faaff', textShadow: '0 0 8px #1faaff66, 0 0 16px #1faaff33' }}>Elite Plan</div>
              <HiOutlineCheck className="text-3xl" style={{ color: '#22c55e', textShadow: '0 0 8px #22c55e66, 0 0 16px #22c55e33' }} />
              <HiOutlineCheck className="text-3xl" style={{ color: '#22c55e', textShadow: '0 0 8px #22c55e66, 0 0 16px #22c55e33' }} />
              <HiOutlineCheck className="text-3xl" style={{ color: '#22c55e', textShadow: '0 0 8px #22c55e66, 0 0 16px #22c55e33' }} />
              <span className="text-[#FFD700] font-bold text-lg" style={{ textShadow: '0 0 8px #FFD70066, 0 0 16px #FFD70033' }}>Rs. 999/- Only</span>
            </motion.div>
          </motion.div>
          {/* Still Unsure About Upgrading Section */}
          <motion.div
            className="max-w-3xl mt-16 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#232323] text-2xl text-[#00bfff] shadow-[0_0_8px_#00e0ff]">
                  <FaQuestionCircle />
                </span>
                <h3 className="text-2xl md:text-3xl font-normal text-white">Still unsure about upgrading to Elite?</h3>
              </div>
              <p className="text-lg md:text-xl text-[#b3b3b3] mt-2">
                Try it free for 5 days and experience the full power of Prajwal. Check out exclusive discount offers inside the app. Download Prajwal today and achieve your dream result.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20 bg-[#F3F4F6]"
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
                      <p className="text-gray-500 text-base md:text-lg leading-relaxed italic flex-grow">"{student.text}"</p>
                    </div>
                  </div>
            ))}
          </Carousel>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        id="faqs"
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={FADE_IN_VARIANTS}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">FAQs</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto space-y-12">
            {/* General */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">General</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg md:text-xl">What is Prajwal? Who is it for?</p>
                  <p className="text-gray-600 text-base md:text-lg">Prajwal is a learning app designed to convert students' dream result into their actual result. Backed with AI, Prajwal offers mind maps, self-assessment quizzes, practice questions, revision notes and much more to achieve academic success.</p>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl">Who is Prajwal designed for?</p>
                  <p className="text-gray-600 text-base md:text-lg">Prajwal is currently designed for Class 10 English-medium students of the GSEB board, but it's equally useful for learners following the NCERT curriculum.</p>
                </div>
              </div>
            </div>
            {/* Elite Plan */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">Elite Plan</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg md:text-xl">What is Elite plan? What is included in it?</p>
                  <p className="text-gray-600 text-base md:text-lg">Elite is a premium plan that gives complete access to all chapters, future updates, all features and much more.</p>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl">Is Elite a one-time or monthly plan?</p>
                  <p className="text-gray-600 text-base md:text-lg">Elite is a one-time plan valid until your 2026 board exams.</p>
                </div>
              </div>
            </div>
            {/* Free Trial */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">Free Trial</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg md:text-xl">How does the 5-day trial work?</p>
                  <p className="text-gray-600 text-base md:text-lg">Your free trial begins automatically after registration. Once it ends, you can continue using Prajwal with limited access.</p>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl">Do I need to enter my card details to start the free trial?</p>
                  <p className="text-gray-600 text-base md:text-lg">No, you don't need to add any debit or credit card information.</p>
                </div>
              </div>
            </div>
            {/* Subjects / Boards */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">Subjects / Boards</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg md:text-xl">Is Prajwal designed for all boards?</p>
                  <p className="text-gray-600 text-base md:text-lg">Prajwal is currently designed for GSEB board (English medium), but it's equally suitable for boards following the NCERT curriculum.</p>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl">Does Prajwal include all subjects?</p>
                  <p className="text-gray-600 text-base md:text-lg">Currently, Prajwal covers all core subjects: Physics, Chemistry, Biology, Basic Maths, and Standard Maths. More subjects will be added in future updates.</p>
                </div>
              </div>
            </div>
            {/* Technical */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">Technical</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg md:text-xl">Can I use it offline?</p>
                  <p className="text-gray-600 text-base md:text-lg">No, you just need a regular internet connection. Prajwal works smoothly with minimal data usage.</p>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl">Is it available on iOS?</p>
                  <p className="text-gray-600 text-base md:text-lg">No, currently it is available for android only, in future it will be available for iOS also.</p>
                </div>
              </div>
            </div>
            {/* Payments */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">Payments</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg md:text-xl">Are payments refundable?</p>
                  <p className="text-gray-600 text-base md:text-lg">All payments are non refundable as per our policy.</p>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl">How do I apply discount?</p>
                  <p className="text-gray-600 text-base md:text-lg">Special discount coupon codes are regularly updated inside the app. Open the app to find the best available deals!</p>
                </div>
              </div>
            </div>
            {/* Account */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">Account</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg md:text-xl">Can I use my account on more than one device at the same time?</p>
                  <p className="text-gray-600 text-base md:text-lg">No, you can use your account on only one device at a time. To switch devices, please log out from the current device first.</p>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl">Can I change the phone number linked to my plan?</p>
                  <p className="text-gray-600 text-base md:text-lg">Yes, you can update the phone number. Your Elite plan will be transferred to the new number.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Us Section - Suntory Inspired Design */}
      <motion.section 
        id="about-us" 
        className="py-20 bg-[#F3F4F6] text-text-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900">
              About Us
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming education through innovative technology and AI-powered learning solutions
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Who We Are Section */}
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <FaUsers className="text-2xl text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
                </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  Medhwan Edutech is dedicated to transforming education through technology. Our mission is to empower learners with innovative and easy learning solutions that make studying more effective, engaging, and accessible. With our expertise in software and digital solutions, we aim to bridge the gap between students and quality education.
                </p>
              </div>
              </motion.div>
              
              <motion.div
                className="order-1 lg:order-2 text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-extrabold text-gray-700 mb-4">01</div>
                    <h4 className="text-xl font-semibold text-gray-700">Innovation in Education</h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Our Vision Section */}
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-12 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-extrabold text-gray-700 mb-4">02</div>
                    <h4 className="text-xl font-semibold text-gray-700">Future of Learning</h4>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <FaRegEye className="text-2xl text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a future where every student has access to high-quality learning tools, regardless of location or background. Through continuous innovation, we strive to simplify and enhance the learning experience, making education more interactive and results-driven.
                </p>
              </div>
              </motion.div>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                      <FaLightbulb className="text-2xl text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Why Choose Medhwan?</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🚀</span>
                      <span className="text-lg text-gray-700">Cutting-edge educational technology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaRegLightbulb className="text-xl text-yellow-500" />
                      <span className="text-lg text-gray-700">Innovative & Easy Learning Solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📚</span>
                      <span className="text-lg text-gray-700">AI-powered learning tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🎯</span>
                      <span className="text-lg text-gray-700">Focused on student success</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌍</span>
                      <span className="text-lg text-gray-700">Accessible anytime, anywhere</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="order-1 lg:order-2 text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-12 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-extrabold text-gray-700 mb-4">03</div>
                    <h4 className="text-xl font-semibold text-gray-700">Excellence in Education</h4>
                  </div>
              </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section 
        id="contact-us" 
        className="py-20 bg-white text-text-light"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Contact Us
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">
              Get in touch with us for any questions or support
            </p>
          </motion.div>
          <motion.div 
            className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-gray-200"
            variants={FADE_IN_VARIANTS}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-800">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-800">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
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