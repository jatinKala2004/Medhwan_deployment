'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
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
  'Powered by AI, it offers mind maps, self-assessment quizzes, and practice questions.',
  'Revision notes and much more to boost your performance.',
]

const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
}

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
}

const bulletPointVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.2, // Start after heading/image, then stagger
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.3, // Delay to start after all bullet points
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen hero-animated-bg"
      style={{ paddingTop: '110px', paddingLeft: '64px', paddingRight: '64px' }}
      initial="hidden"
      animate="visible"
    >
        <div className="flex flex-row items-start w-full gap-12">
        {/* Left Column */}
        <div className="flex-1" style={{ margin: 0, padding: 0, minWidth: 0 }}>
          <motion.h1
            variants={headingVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12 mt-8"
            style={{ color: '#1B2A41' }}
          >
              PRAJWAL is live now
          </motion.h1>

          <ul
            className="text-xl md:text-2xl lg:text-3xl leading-tight text-left mb-0 w-full pl-0 mt-6 space-y-5"
            style={{ color: '#3A4D63' }}
          >
            {bulletData.map((text, i) => (
                    <motion.li
                key={i}
                custom={i}
                variants={bulletPointVariants}
                className="flex items-start gap-4"
                    >
                <span
                  className={`mt-2 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center`}
                  style={{ backgroundColor: 'rgba(0, 209, 178, 0.1)' }}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: '#00D1B2' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                        </svg>
                      </span>
                <span>{text}</span>
                    </motion.li>
              ))}
            </ul>

          <motion.div className="mt-16" variants={buttonVariants}>
            <a
                    href="#"
              className="inline-flex items-center justify-center gap-4 rounded-full bg-primary px-10 py-5 text-xl font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl active:scale-95"
                  >
              Download Now
              <FaArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Right Column */}
          <motion.div
            className="relative flex justify-end self-start"
          variants={imageVariants}
            style={{
              margin: 0,
              padding: 0,
            marginLeft: '0',
            marginTop: '-1rem',
              zIndex: 10,
            }}
          >
          <div
            style={{ width: '300px', height: '600px', margin: 0, padding: 0 }}
            className="overflow-hidden rounded-[2.5rem]"
          >
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                showDots={false}
                arrows={false}
                className="h-full"
                draggable={true}
                swipeable={true}
              >
                {carouselItems.map((item, index) => (
                <div key={index} className="relative h-[600px]">
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
          </motion.div>
        </div>
    </motion.section>
  )
}

export default Hero 