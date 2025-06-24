'use client'
import { motion } from 'framer-motion'
import { FaBrain, FaVideo, FaFilePdf, FaQuestionCircle, FaChartLine, FaUsers } from 'react-icons/fa'

const services = [
  {
    icon: <FaBrain className="w-12 h-12" />,
    title: "AI-Powered Learning",
    description: "Experience personalized learning with our advanced AI technology that adapts to your learning style and pace."
  },
  {
    icon: <FaVideo className="w-12 h-12" />,
    title: "Video Solutions",
    description: "Access comprehensive video explanations for complex topics, making learning more engaging and effective."
  },
  {
    icon: <FaFilePdf className="w-12 h-12" />,
    title: "Study Materials",
    description: "Download high-quality study materials and resources to enhance your learning experience."
  },
  {
    icon: <FaQuestionCircle className="w-12 h-12" />,
    title: "Smart Quizzes",
    description: "Test your knowledge with intelligent quizzes that focus on important concepts and learning objectives."
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: "Progress Tracking",
    description: "Monitor your learning progress with detailed analytics and performance insights."
  },
  {
    icon: <FaUsers className="w-12 h-12" />,
    title: "Community Learning",
    description: "Connect with other learners, share knowledge, and learn together in a supportive environment."
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
            Our Services
          </h2>
          <p className="text-accent text-lg max-w-2xl mx-auto">
            Experience a revolutionary approach to learning with our comprehensive features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="feature-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-accent/50 transition-all duration-300 h-full">
                <div className="text-accent text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-light mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-accent leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 