//for future use, not applied to website!

'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Hiring() {
  const [showModal, setShowModal] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [flashMessage, setFlashMessage] = useState({ show: false, type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowLoader(true)
    
    // Simulate form submission
    setTimeout(() => {
      setShowLoader(false)
      setShowModal(false)
      setFlashMessage({
        show: true,
        type: 'success',
        message: 'Application submitted successfully!'
      })
      
      setTimeout(() => {
        setFlashMessage({ show: false, type: '', message: '' })
      }, 3000)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-[#EAEFEF]">
      <Navbar />
      
      {flashMessage.show && (
        <div className={`fixed top-20 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg text-white font-medium z-50 shadow-lg animate-fade-in ${
          flashMessage.type === 'success' ? 'bg-[#B8CFCE] text-[#333446]' : 'bg-[#7F8CAA]'
        }`}>
          {flashMessage.message}
        </div>
      )}

      <div className="max-w-4xl mx-auto my-16 p-8 card animate-fade-in">
        <h2 className="section-title text-center mb-6">We're Hiring!</h2>
        <div className="space-y-6">
          <div className="text-center">
            <p className="section-subtitle mb-2">Role</p>
            <p className="text-2xl font-semibold text-[#333446]">Flutter Developer</p>
          </div>

          <div className="text-center">
            <p className="section-subtitle mb-4">Requirements</p>
            <ul className="space-y-3">
              {[
                'Minimum 1 year of experience or 3 full-stack unique projects in Flutter',
                'Proficient in Flutter and Dart for Android app development',
                'Strong understanding of Riverpod state management',
                'Fair knowledge of Node.js and MongoDB for backend integration',
                'Experience working with Figma for UI/UX design',
                'Familiar with Git for version control',
                'Capability to make small modifications in Flutter during runtime',
                'Ability to translate verbal requirements into a functional app'
              ].map((req, index) => (
                <li key={index} className="text-[#333446] hover:text-[#7F8CAA] transition-colors duration-300">
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="p-4 rounded-lg bg-[#B8CFCE]/10">
              <p className="section-subtitle mb-2">Timing</p>
              <p className="text-lg text-[#333446]">3 to 4 Hours a Day</p>
            </div>
            <div className="p-4 rounded-lg bg-[#B8CFCE]/10">
              <p className="section-subtitle mb-2">Location</p>
              <p className="text-lg text-[#333446]">Remote</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button 
              onClick={() => setShowModal(true)}
              className="btn-primary text-lg px-8 py-3"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#333446]/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h5 className="text-2xl font-bold text-[#333446]">Apply Now</h5>
              <button 
                onClick={() => setShowModal(false)}
                className="text-[#7F8CAA] hover:text-[#333446] transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-[#333446] font-medium">Full Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-[#333446] font-medium">Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block mb-2 text-[#333446] font-medium">Contact Number</label>
                <input 
                  type="tel" 
                  id="contact"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="resume" className="block mb-2 text-[#333446] font-medium">Resume Link*</label>
                <input 
                  type="url" 
                  id="resume" 
                  required
                  placeholder="https://your-resume-link.com"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="linkedin" className="block mb-2 text-[#333446] font-medium">LinkedIn Profile Link</label>
                <input 
                  type="url" 
                  id="linkedin"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="input-field"
                />
              </div>
              <button 
                type="submit"
                className="btn-primary w-full py-3 mt-6"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Loader Overlay */}
      {showLoader && (
        <div className="fixed inset-0 bg-[#333446]/70 backdrop-blur-sm flex flex-col items-center justify-center z-50 text-white animate-fade-in">
          <div className="w-16 h-16 border-4 border-[#B8CFCE] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-xl font-medium">Submitting your application...</p>
        </div>
      )}

      <Footer />
    </main>
  )
} 