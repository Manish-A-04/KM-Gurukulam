'use client';
import AdmissionForm from '@/components/ui/admissionsform'
import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Heart, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Star, 
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Palette,
  Music,
  Gamepad2
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma (4 years)",
      content: "KM Gurukulam has been amazing for our daughter. The teachers are so caring and the environment is perfect for learning and growth.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Parent of Alex (3 years)",
      content: "The curriculum is well-structured and my son loves going to school every day. The facilities are top-notch and very safe.",
      rating: 5
    },
    {
      name: "Amanda Rodriguez",
      role: "Parent of Sofia (5 years)",
      content: "Outstanding pre-school! My daughter has developed so much confidence and social skills. Highly recommend KM Gurukulam.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Parent of Noah (4 years)",
      content: "The teachers genuinely care about each child's individual development. Great communication with parents too.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Parent of Maya (3 years)",
      content: "Clean, safe environment with engaging activities. My daughter has learned so much and made wonderful friends.",
      rating: 5
    }
  ];

  const programs = [
    {
      title: "Little Explorers",
      age: "2-3 years",
      description: "Nurturing environment for our youngest learners with focus on sensory development and basic social skills.",
      features: ["Sensory Play", "Music & Movement", "Basic Motor Skills", "Social Interaction"],
      color: "bg-gradient-to-br from-pink-400 to-pink-600"
    },
    {
      title: "Creative Minds",
      age: "3-4 years",
      description: "Encouraging creativity and imagination through art, music, and storytelling activities.",
      features: ["Art & Craft", "Story Time", "Music Classes", "Dramatic Play"],
      color: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      title: "Future Leaders",
      age: "4-5 years",
      description: "Preparing children for kindergarten with structured learning and leadership activities.",
      features: ["Pre-Math Skills", "Reading Readiness", "Science Exploration", "Leadership Skills"],
      color: "bg-gradient-to-br from-blue-400 to-blue-600"
    }
  ];

  const faculty = [
    {
      name: "Ms. Priya Sharma",
      role: "Principal & Lead Educator",
      experience: "15+ years",
      qualifications: "M.Ed in Early Childhood Education",
      specialties: ["Curriculum Development", "Child Psychology", "Parent Communication"]
    },
    {
      name: "Ms. Anjali Patel",
      role: "Senior Teacher",
      experience: "10+ years",
      qualifications: "B.Ed in Elementary Education",
      specialties: ["Creative Arts", "Music & Movement", "Sensory Learning"]
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Activity Coordinator",
      experience: "8+ years",
      qualifications: "Diploma in Physical Education",
      specialties: ["Sports & Games", "Outdoor Activities", "Motor Skills Development"]
    },
    {
      name: "Ms. Meera Reddy",
      role: "Special Needs Coordinator",
      experience: "12+ years",
      qualifications: "M.A in Special Education",
      specialties: ["Inclusive Education", "Individual Support", "Therapy Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 relative overflow-hidden">
      {/* Global Background Animation - Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating triangles */}
        <div 
          className="absolute w-0 h-0 opacity-10"
          style={{
            left: '10%',
            top: '20%',
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderBottom: '25px solid #fb923c',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${scrollY * 0.1}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-0 h-0 opacity-10"
          style={{
            right: '15%',
            top: '30%',
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderBottom: '20px solid #3b82f6',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px) rotate(${scrollY * -0.08}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Floating squares */}
        <div 
          className="absolute w-6 h-6 bg-pink-300 opacity-10 rotate-45"
          style={{
            left: '70%',
            bottom: '40%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px) rotate(${45 + scrollY * 0.05}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-8 h-8 bg-green-300 opacity-10 rotate-12"
          style={{
            left: '20%',
            bottom: '60%',
            transform: `translate(${mousePosition.x * 0.018}px, ${mousePosition.y * 0.018}px) rotate(${12 + scrollY * -0.03}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">KM Gurukulam</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Programs', 'Faculty', 'Admissions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Programs', 'Faculty', 'Admissions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* Hero section geometric shapes */}
          <div 
            className="absolute w-0 h-0 opacity-15"
            style={{
              left: '5%',
              top: '10%',
              borderLeft: '20px solid transparent',
              borderRight: '20px solid transparent',
              borderBottom: '35px solid #fb7185',
              transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) rotate(${scrollY * 0.1}deg)`,
              transition: 'transform 0.5s ease-out'
            }}
          />
          <div 
            className="absolute w-10 h-10 bg-gradient-to-br from-blue-300 to-purple-300 opacity-15 rotate-45"
            style={{
              right: '10%',
              top: '20%',
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.02}px) rotate(${45 + scrollY * -0.08}deg)`,
              transition: 'transform 0.5s ease-out'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Where Little{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                  Dreams
                </span>{' '}
                Grow Big
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Welcome to KM Gurukulam, where every child's journey begins with love, learning, and laughter. 
                We provide a nurturing environment that fosters creativity, curiosity, and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('admissions')}
                  className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 text-center">
                    <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">200+</h3>
                    <p className="text-gray-600">Happy Children</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center">
                    <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">15+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center">
                    <GraduationCap className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">12+</h3>
                    <p className="text-gray-600">Expert Teachers</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center">
                    <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">5</h3>
                    <p className="text-gray-600">Star Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* About section shapes */}
          <div 
            className="absolute w-0 h-0 opacity-12"
            style={{
              left: '8%',
              top: '15%',
              borderLeft: '18px solid transparent',
              borderRight: '18px solid transparent',
              borderBottom: '30px solid #06b6d4',
              transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px) rotate(${scrollY * 0.05}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
          <div 
            className="absolute w-8 h-8 bg-gradient-to-br from-green-300 to-emerald-300 opacity-12 rotate-12"
            style={{
              right: '12%',
              bottom: '20%',
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.02}px) rotate(${12 + scrollY * -0.03}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About KM Gurukulam</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 15 years, we've been dedicated to providing exceptional early childhood education 
              that nurtures young minds and helps children develop the skills they need for lifelong success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Nurturing Environment</h3>
                    <p className="text-gray-600">We create a safe, loving space where children feel secure to explore, learn, and grow.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Holistic Development</h3>
                    <p className="text-gray-600">Our curriculum focuses on cognitive, emotional, social, and physical development.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Individual Attention</h3>
                    <p className="text-gray-600">Small class sizes ensure every child receives personalized care and attention.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-200 to-pink-200 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    To inspire a love of learning in every child by providing a nurturing, stimulating environment 
                    that encourages exploration, creativity, and growth.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Palette className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm text-gray-600">Creative Arts</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm text-gray-600">Music & Movement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* Programs section shapes */}
          <div 
            className="absolute w-0 h-0 opacity-12"
            style={{
              left: '15%',
              top: '10%',
              borderLeft: '16px solid transparent',
              borderRight: '16px solid transparent',
              borderBottom: '28px solid #a855f7',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${scrollY * 0.08}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
          <div 
            className="absolute w-7 h-7 bg-gradient-to-br from-blue-300 to-indigo-300 opacity-12 rotate-45"
            style={{
              right: '10%',
              bottom: '15%',
              transform: `translate(${mousePosition.x * -0.025}px, ${mousePosition.y * 0.025}px) rotate(${45 + scrollY * -0.06}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate programs designed to meet the unique developmental needs of each child.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${program.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-white/90 text-lg">{program.age}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 bg-white relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* Faculty section shapes */}
          <div 
            className="absolute w-6 h-6 bg-gradient-to-br from-orange-300 to-red-300 opacity-12 rotate-12"
            style={{
              left: '12%',
              top: '20%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${12 + scrollY * 0.04}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
          <div 
            className="absolute w-0 h-0 opacity-12"
            style={{
              right: '15%',
              bottom: '25%',
              borderLeft: '14px solid transparent',
              borderRight: '14px solid transparent',
              borderBottom: '24px solid #10b981',
              transform: `translate(${mousePosition.x * -0.018}px, ${mousePosition.y * 0.018}px) rotate(${scrollY * -0.05}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Faculty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced and passionate educators are dedicated to nurturing every child's potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((teacher, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{teacher.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{teacher.role}</p>
                <p className="text-gray-600 text-sm mb-2">{teacher.experience}</p>
                <p className="text-gray-600 text-sm mb-4">{teacher.qualifications}</p>
                <div className="space-y-1">
                  {teacher.specialties.map((specialty, specialtyIndex) => (
                    <span key={specialtyIndex} className="inline-block bg-white text-gray-700 px-2 py-1 rounded-full text-xs mr-1 mb-1">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*/ Admission Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
    {/* LEFT SIDE: Important Information */}
    <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Important Information</h3>
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Clock className="w-6 h-6 text-green-500 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-800">School Hours</p>
            <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 3:00 PM</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-green-500 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-800">Age Groups</p>
            <p className="text-gray-600 text-sm">2-5 years (Toddlers to Pre-K)</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Award className="w-6 h-6 text-green-500 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-800">Class Size</p>
            <p className="text-gray-600 text-sm">Maximum 12 children per class</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-4">
          <p className="text-gray-700 text-sm mb-2">
            <strong>Required Documents:</strong>
          </p>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Birth Certificate</li>
            <li>• Immunization Records</li>
            <li>• Medical History Form</li>
            <li>• Emergency Contact Information</li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* RIGHT SIDE: Admission Form */}
    <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Admission Form</h3>
      <AdmissionForm />
    </div>
  </div>
</div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* Testimonials section shapes */}
          <div 
            className="absolute w-0 h-0 opacity-12"
            style={{
              left: '10%',
              top: '15%',
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderBottom: '26px solid #ec4899',
              transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px) rotate(${scrollY * 0.07}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
          <div 
            className="absolute w-7 h-7 bg-gradient-to-br from-purple-300 to-violet-300 opacity-12 rotate-12"
            style={{
              right: '8%',
              bottom: '20%',
              transform: `translate(${mousePosition.x * -0.018}px, ${mousePosition.y * 0.018}px) rotate(${12 + scrollY * -0.05}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Parents Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our wonderful parents about their experience with KM Gurukulam.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* Contact section shapes */}
          <div 
            className="absolute w-0 h-0 opacity-12"
            style={{
              left: '12%',
              top: '18%',
              borderLeft: '19px solid transparent',
              borderRight: '19px solid transparent',
              borderBottom: '32px solid #8b5cf6',
              transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px) rotate(${scrollY * 0.08}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
          <div 
            className="absolute w-9 h-9 bg-gradient-to-br from-pink-300 to-fuchsia-300 opacity-12 rotate-45"
            style={{
              right: '10%',
              bottom: '22%',
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.02}px) rotate(${45 + scrollY * -0.06}deg)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to give your child the best start? Contact us today to schedule a visit or learn more about our programs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 77083 54400</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">kmgurukulam@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">No. 11/1 Ganapathy Colony, Gopalapuram, Chennai</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d660.6179872959796!2d80.25718654576718!3d13.045901504012328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526639b68e001f%3A0xdaf1bc1db90c2383!2s1%2F1%2C%20Gopalapuram%201st%20St%2C%20Pudupet%2C%20Gopalapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600086!5e0!3m2!1sen!2sin!4v1751697380526!5m2!1sen!2sin"  // Replace with your actual map URL
                width="100%"
                height="100%"
                className="w-full h-[450px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* Footer section shapes */}
          <div 
            className="absolute w-5 h-5 bg-white opacity-8 rotate-45"
            style={{
              left: '8%',
              top: '20%',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotate(${45 + scrollY * 0.02}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className="absolute w-0 h-0 opacity-8"
            style={{
              right: '12%',
              bottom: '25%',
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '14px solid white',
              transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.008}px) rotate(${scrollY * -0.03}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">KM Gurukulam</span>
              </div>
              <p className="text-gray-300 mb-4">
                Nurturing young minds and building bright futures. Where every child's journey begins with love, learning, and laughter.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 cursor-pointer">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Programs', 'Faculty', 'Admissions'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>NO. 11/1/1, Ganapathy Colony</p>
                <p>1st Street, Gopalapuram</p>
                <p>Chennai</p>
                <p>+91 77083 54400</p>
                <p>kmgurukulam@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KM Gurukulam. All rights reserved. Made with ❤️ for little learners.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}