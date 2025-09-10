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
import { useRouter } from 'next/navigation'

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
  const router = useRouter();
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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // You can add API call logic here if needed
    router.push('/message-sent');
  };

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
            {/*} <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our flagship AI-powered learning app designed to convert student's dream results into their actual results
            </p>*/}
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
                  title: "Your Career Catalyst",
                  description: "Prajwal is Medhwan’s flagship learning app designed to convert your dream results into reality."
              },
              {
                number: '02',
                  title: "Your Learning Partner",
                  description: "Prajwal enhances your preparation by offering mind maps, self-assessment quizzes, IMP questions, revision notes and much more to achieve academic success."
              },
              {
                number: '03',
                  title: "Comprehensive Coverage",
                  description: "Prajwal is currently designed for Class 10 English-medium students of the GSEB board, but it's equally useful for learners following the NCERT curriculum."
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smile n Learn</h3>
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
          className="text-3xl md:text-4xl font-semibold mb-10 text-center text-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          Why Choose Prajwal ?
        </motion.h3>
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-6 sm:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { transition: { staggerChildren: 0.22 } } }}
        >
          {[
            {
              icon: <FaTrophy />, title: "Ace Boards With Prajwal",
              text: "Practice a wide range of topic-wise questions to master each chapter. Strengthen your objective section with 250+ chapter-wise objective questions.",
              bg: cardBgColors[0]
            },
            {
              icon: <FaRobot />, title: "Feel The Real Exam",
              text: "Experience quizzes that feel like JEE and NEET exams. Track, improve, and conquer with detailed quiz insights.",
              bg: cardBgColors[1]
            },
            {
              icon: <FaBookOpen />, title: "Score High Without Stress",
              text: "Master every chapter with topic-wise to-the-point revision notes & learning videos. Make last-minute revision simple with chapter-wise mind maps.",
              bg: cardBgColors[2]
            },
            {
              icon: <FaStar />, title: "Your Result Matters",
              text: "Prajwal's content is reviewed by Dhaval Gajera, who has consistently delivered top results for over 10 years. In March 2025, 9 students scored a perfect 100 in Science, and 5 did the same in Maths (Basic & Standard).",
              bg: cardBgColors[3]
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
                text: 'Unlock every chapter, every subject until your board exams.'
              },
              {
                icon: <FaMagic className="text-4xl mb-4" style={{ color: '#1faaff', textShadow: '0 0 12px #1faaff88, 0 0 24px #1faaff44' }} />, 
                text: 'Get full access to premium features like Mind Maps, Revision Notes, Focused Questions, and more.'
              },
              {
                icon: <FaSyncAlt className="text-4xl mb-4" style={{ color: '#1faaff', textShadow: '0 0 12px #1faaff88, 0 0 24px #1faaff44' }} />, 
                text: 'Get access to all future subjects and updates at no extra cost.'
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
            className="w-full grid [grid-template-columns:1.2fr_0.9fr_0.9fr] sm:[grid-template-columns:1.25fr_0.9fr_0.9fr] gap-0 bg-[#232425] rounded-2xl shadow-2xl font-normal" style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            {/* Feature column */}
            <motion.div
              className="flex flex-col gap-4 py-5 pl-3 pr-2 max-[430px]:gap-3 max-[430px]:py-4 max-[430px]:pl-2 max-[430px]:pr-2 sm:gap-8 sm:pl-6 sm:pr-4 md:pl-10 items-start shadow-none transition-all duration-300 hover:bg-[#181A1B] min-w-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="min-h-12 flex items-center justify-center w-full font-normal text-lg max-[430px]:text-base md:text-2xl text-white" style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}>Feature</div>
              <div className="flex items-center gap-2 max-[430px]:gap-1.5 text-base max-[430px]:text-sm sm:text-lg md:text-xl text-white font-semibold break-words">
                <span className="inline-flex items-center justify-center w-7 h-7 max-[430px]:w-6 max-[430px]:h-6 rounded bg-[#181818] text-xl max-[430px]:text-lg text-[#1faaff]" style={{ textShadow: '0 0 8px #1faaff88, 0 0 16px #1faaff44' }}><FaBookOpen /></span>
                Access to all chapters
              </div>
              <div className="flex items-center gap-2 max-[430px]:gap-1.5 text-base max-[430px]:text-sm sm:text-lg md:text-xl text-white font-semibold break-words">
                <span className="inline-flex items-center justify-center w-7 h-7 max-[430px]:w-6 max-[430px]:h-6 rounded bg-[#181818] text-xl max-[430px]:text-lg text-[#1faaff]" style={{ textShadow: '0 0 8px #1faaff88, 0 0 16px #1faaff44' }}><FaSyncAlt /></span>
                Future Updates
              </div>
              <div className="flex items-center gap-2 max-[430px]:gap-1.5 text-base max-[430px]:text-sm sm:text-lg md:text-xl text-white font-semibold break-words">
                <span className="inline-flex items-center justify-center w-7 h-7 max-[430px]:w-6 max-[430px]:h-6 rounded bg-[#181818] text-xl max-[430px]:text-lg text-[#1faaff]" style={{ textShadow: '0 0 8px #1faaff88, 0 0 16px #1faaff44' }}><FaMagic /></span>
                Access to all features
              </div>
              <div className="flex items-center gap-2 max-[430px]:gap-1.5 text-base max-[430px]:text-sm sm:text-lg md:text-xl text-white font-semibold break-words">
                <span className="inline-flex items-center justify-center w-7 h-7 max-[430px]:w-6 max-[430px]:h-6 rounded bg-[#181818] text-xl max-[430px]:text-lg text-[#1faaff]" style={{ textShadow: '0 0 8px #1faaff88, 0 0 16px #1faaff44' }}><FaRupeeSign /></span>
                Price
              </div>
            </motion.div>
            {/* Free Plan column */}
            <motion.div
              className="flex flex-col gap-5 items-center py-6 px-2 max-[430px]:gap-4 sm:gap-8 sm:px-4 bg-[#232425] shadow-none transition-all duration-300 hover:bg-[#181A1B] min-w-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="min-h-12 flex items-center justify-center w-full font-normal text-lg max-[430px]:text-base md:text-2xl text-white" style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}>Free Plan</div>
              <HiOutlineX className="text-3xl" style={{ color: '#ff4444', textShadow: '0 0 8px #ff444466, 0 0 16px #ff444433' }} />
              <HiOutlineX className="text-3xl" style={{ color: '#ff4444', textShadow: '0 0 8px #ff444466, 0 0 16px #ff444433' }} />
              <HiOutlineX className="text-3xl" style={{ color: '#ff4444', textShadow: '0 0 8px #ff444466, 0 0 16px #ff444433' }} />
              <span className="text-white font-bold text-base max-[430px]:text-sm">Free</span>
            </motion.div>
            {/* Elite Plan column */}
            <motion.div
              className="flex flex-col gap-5 items-center py-6 px-2 max-[430px]:gap-4 sm:gap-8 sm:px-4 bg-[#232425] shadow-none transition-all duration-300 hover:bg-[#181A1B] rounded-r-2xl min-w-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="min-h-12 flex items-center justify-center w-full font-normal text-lg max-[430px]:text-base md:text-2xl" style={{ fontFamily: 'Inter, Segoe UI, sans-serif', color: '#1faaff', textShadow: '0 0 8px #1faaff66, 0 0 16px #1faaff33' }}>Elite Plan</div>
              <HiOutlineCheck className="text-3xl" style={{ color: '#22c55e', textShadow: '0 0 8px #22c55e66, 0 0 16px #22c55e33' }} />
              <HiOutlineCheck className="text-3xl" style={{ color: '#22c55e', textShadow: '0 0 8px #22c55e66, 0 0 16px #22c55e33' }} />
              <HiOutlineCheck className="text-3xl" style={{ color: '#22c55e', textShadow: '0 0 8px #22c55e66, 0 0 16px #22c55e33' }} />
              <span className="text-[#FFD700] font-bold text-base max-[430px]:text-sm" style={{ textShadow: '0 0 8px #FFD70066, 0 0 16px #FFD70033' }}>Rs. 699/- Only</span>
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
            autoPlay={true}
            autoPlaySpeed={5000}
            className="pb-8"
            customButtonGroup={<TestimonialCarouselArrows />}
            renderButtonGroupOutside={true}
            >
              {[
                { name: 'Pooja Dalwani ', gender: 'girl', rating: 5, text: 'The app is genuine and I was able to score 90+  because of this app only 👍' },
                { name: 'Yash Hirpara', gender: 'boy', rating: 5, text: 'This app helped me a lot in my board preparation, I scored more than expected because of this app. 😊' },
                { name: 'Kartik Yewalekar', gender: 'boy', rating: 5, text: ' My most of preparation was done by this only' },
                { name: 'Shubhan shivdasan', gender: 'boy', rating: 5, text: 'It was the best thing i got for the last day revision' },
                { name: 'Bhayaya Rogheliya ', gender: 'boy', rating: 5, text: 'The app is best for Last minute revision also and for and I solved almost every PYQ and score 100 marks in Maths and science 👍👍💯' },
                { name: 'Jay Jilka', gender: 'boy', rating: 5, text: 'App is very useful, almost everything in board was from this app. I would recommend for other students also. 👍' },
                { name: 'Hitarth Marthak', gender: 'boy', rating: 5, text: 'App is very smooth and clear, no extra unnecessary material. It is very useful for scoring good in boards.' },
                { name: 'Ankola Dhruv', gender: 'boy', rating: 5, text: 'Good app I like it, practice sheet was amazing' }
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
            {/* FAQ Dropdown Implementation */}
            {(() => {
              // FAQ data structure
              const faqData = [
                {
                  category: 'General',
                  items: [
                    {
                      q: 'What is Prajwal? Who is it for?',
                      a: `Prajwal is a learning app designed to convert students' dream result into their actual result. Backed with AI, Prajwal offers mind maps, self-assessment quizzes, practice questions, revision notes and much more to achieve academic success.`
                    },
                    {
                      q: 'Who is Prajwal designed for?',
                      a: `Prajwal is currently designed for Class 10 English-medium students of the GSEB board, but it's equally useful for learners following the NCERT curriculum.`
                    }
                  ]
                },
                {
                  category: 'Elite Plan',
                  items: [
                    {
                      q: 'What is Elite plan? What is included in it?',
                      a: `Elite is a premium plan that gives complete access to all chapters, future updates, all features and much more.`
                    },
                    {
                      q: 'Is Elite a one-time or monthly plan?',
                      a: `Elite is a one-time plan valid until your 2026 board exams.`
                    }
                  ]
                },
                {
                  category: 'Free Trial',
                  items: [
                    {
                      q: 'How does the 5-day trial work?',
                      a: `Your free trial begins automatically after registration. Once it ends, you can continue using Prajwal with limited access.`
                    },
                    {
                      q: 'Do I need to enter my card details to start the free trial?',
                      a: `No, you don't need to add any debit or credit card information.`
                    }
                  ]
                },
                {
                  category: 'Subjects / Boards',
                  items: [
                    {
                      q: 'Is Prajwal designed for all boards?',
                      a: `Prajwal is currently designed for GSEB board (English medium), but it's equally suitable for boards following the NCERT curriculum.`
                    },
                    {
                      q: 'Does Prajwal include all subjects?',
                      a: `Currently, Prajwal covers all core subjects: Physics, Chemistry, Biology, Basic Maths, and Standard Maths. More subjects will be added in future updates.`
                    }
                  ]
                },
                {
                  category: 'Technical',
                  items: [
                    {
                      q: 'Can I use it offline?',
                      a: `No, you just need a regular internet connection. Prajwal works smoothly with minimal data usage.`
                    },
                    {
                      q: 'Is it available on iOS?',
                      a: `No, currently it is available for android only, in future it will be available for iOS also.`
                    }
                  ]
                },
                {
                  category: 'Payments',
                  items: [
                    {
                      q: 'Are payments refundable?',
                      a: `All payments are non refundable as per our policy.`
                    },
                    {
                      q: 'How do I apply discount?',
                      a: `Special discount coupon codes are regularly updated inside the app. Open the app to find the best available deals!`
                    }
                  ]
                },
                {
                  category: 'Account',
                  items: [
                    {
                      q: 'Can I use my account on more than one device at the same time?',
                      a: `No, you can use your account on only one device at a time. To switch devices, please log out from the current device first.`
                    },
                    {
                      q: 'Can I change the email id linked to my plan ?',
                      a: `Currently, it's not possible to change the email address linked to your account, but this feature is expected to be available in future updates.`
                    }
                  ]
                }
              ];
              // State for open question (category index and question index)
              const [open, setOpen] = useState({ cat: null, q: null });
              const handleToggle = (catIdx, qIdx) => {
                setOpen(open.cat === catIdx && open.q === qIdx ? { cat: null, q: null } : { cat: catIdx, q: qIdx });
              };
              return faqData.map((cat, catIdx) => (
                <div key={cat.category}>
                  <h3 className="text-3xl font-semibold mb-4 text-primary">{cat.category}</h3>
                  <div className="space-y-2">
                    {cat.items.map((item, qIdx) => (
                      <div key={item.q}>
                        <button
                          className="w-full text-left font-bold text-lg md:text-xl flex justify-between items-center py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors focus:outline-none"
                          onClick={() => handleToggle(catIdx, qIdx)}
                          aria-expanded={open.cat === catIdx && open.q === qIdx}
                        >
                          <span>{item.q}</span>
                          <span className={`ml-2 transition-transform duration-200 ${open.cat === catIdx && open.q === qIdx ? 'rotate-180' : ''}`}>
                            {/* Modern arrow-down SVG icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline align-middle">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg px-4 ${open.cat === catIdx && open.q === qIdx ? 'max-h-40 py-3 mt-1 mb-2' : 'max-h-0 py-0'}`}
                          style={{}}
                        >
                          <p className="text-gray-600 text-base md:text-lg">{item.a}</p>
                </div>
                </div>
                    ))}
              </div>
            </div>
              ));
            })()}
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <FaUsers className="text-xl sm:text-2xl md:text-3xl text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl">Who We Are</h3>
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <FaRegEye className="text-xl sm:text-2xl md:text-3xl text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl">Our Vision</h3>
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                      <FaLightbulb className="text-xl sm:text-2xl md:text-3xl text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl">Why Choose Medhwan?</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🚀</span>
                      <span className="text-lg text-gray-700">Cutting-edge educational technology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaRegLightbulb className="text-xl text-yellow-500" />
                      <span className="text-lg text-gray-700 ml-2.5 lg:ml-1.5">Innovative & Easy Learning Solutions</span>
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
              if (res.ok) {
                router.push('/message-sent');
              } else {
                alert('Error sending message. Please try again.');
              }
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  name="name" 
                  placeholder="Your Name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white" 
                />
                <input
                  name="email" 
                  type="email"
                  placeholder="Your Email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white" 
                />
              </div>
                <textarea
                name="message" 
                placeholder="Your Message" 
                  required
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white mb-6 resize-none" 
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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