import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="bg-[#F0F2BD] text-[#4B352A]">
      <Navbar />
      
      <div className="bg-[#4B352A] text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Medhwan Edutech</h1>
        <p className="text-xl">Innovating Education for a Smarter Tomorrow</p>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
        <p className="text-lg text-justify">
          Medhwan Edutech is dedicated to transforming education through technology. Our mission is to empower students with innovative learning solutions that make studying more effective, engaging, and accessible. With our expertise in software and digital solutions, we aim to bridge the gap between students and quality education.
        </p>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Vision</h2>
        <p className="text-lg text-justify">
          We envision a future where every student has access to high-quality learning tools, regardless of location or background. Through continuous innovation, we strive to simplify and enhance the learning experience, making education more interactive and results-driven.
        </p>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Product: Prajwal</h2>
        <p className="text-lg text-justify">
          <strong>Prajwal - Your Career Catalyst</strong> is our flagship product designed to help students prepare for exams efficiently. With AI-powered quizzes, important board questions, and video solutions, Prajwal provides a comprehensive study experience for students.
        </p>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Medhwan Edutech?</h2>
        <ul className="list-none text-center space-y-3">
          <li className="text-xl font-medium">🚀 Cutting-edge educational technology</li>
          <li className="text-xl font-medium">📚 AI-powered learning tools</li>
          <li className="text-xl font-medium">🎯 Focused on student success</li>
          <li className="text-xl font-medium">🌍 Accessible anytime, anywhere</li>
        </ul>
      </div>

      <Footer />
    </main>
  )
} 