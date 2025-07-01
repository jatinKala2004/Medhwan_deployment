'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight, FaRocket } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
}

const carouselItems = [
  { src: '/images/Home.png', alt: 'Prajwal App Screenshot 1' },
  { src: '/images/Home (2).png', alt: 'Prajwal App Screenshot 2' },
  { src: '/images/Home (3).png', alt: 'Prajwal App Screenshot 3' },
]

const bulletData = [
  'Prajwal boosts your exam preparation by presenting your syllabus in the easiest way possible.',
  'Powered by AI, it offers mind maps, quizzes, practice questions, and revision notes to boost your performance.',
]

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen hero-animated-bg overflow-hidden"
      initial="hidden"
      animate="visible"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-4 md:px-8 py-10 sm:py-16">
        <div className="flex flex-col-reverse md:grid md:grid-cols-[auto_1fr] gap-4 md:gap-8 items-center min-h-[60vh] md:min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-8 w-full px-6 pt-16 pb-8 md:px-0 md:pt-0 md:pb-0 md:w-auto lg:-mr-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-base sm:text-lg font-medium"
            >
              <FaRocket className="w-5 h-5" />
              AI-Powered Learning Platform
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight flex flex-wrap items-end gap-2 sm:gap-3"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                <span className="tracking-[.18em] sm:tracking-[.25em]">PRAJWAL</span>
              </span>
              <span className="font-normal text-base sm:text-xl md:text-2xl lg:text-4xl mb-1">is live now</span>
            </motion.h1>

            {/* Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 lg:mr-32"
            >
              {bulletData.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-2 sm:space-y-4"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.medhwan.prajjwal_code"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-black text-white px-4 py-2 sm:px-6 sm:py-4 rounded-xl font-semibold text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src="/images/google-playstore.png"
                  alt="Google Play Store"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
                Download Now
                <FaArrowRight className="w-5 h-5" />
              </a>
              <div className="text-xs sm:text-sm md:text-base text-gray-500">Available only on Play Store</div>
            </motion.div>
          </motion.div>

          {/* Right Column - App Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 relative flex justify-center w-full md:justify-end md:w-auto mt-6 md:mt-0 lg:mt-[60px]"
          >
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-400 rounded-full animate-pulse"></div>
              
              {/* App Screenshot */}
              <div className="relative overflow-visible">
                <div className="w-40 h-[280px] sm:w-56 sm:h-[380px] md:w-64 md:h-[440px] lg:w-72 lg:h-[560px] rounded-2xl overflow-hidden mx-auto">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    showDots={false}
                    arrows={false}
                    draggable={true}
                    swipeable={true}
                  >
                    {carouselItems.map((item, index) => (
                      <div key={index} className="relative h-[280px] sm:h-[380px] md:h-[440px] lg:h-[560px]">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero 