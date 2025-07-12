'use client';
import AdmissionForm from '@/components/ui/admissionsform';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

  //For AOS library 
  useEffect(() => {
    AOS.init({
      duration: 800, // default animation duration
      once: true     // animation happens only once per element
    });
  }, []);

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
      title: 'Playgroup Program',
      age: '1.5 - 3.5 years',
      description: 'Gentle introduction to learning through play, music, movement, and storytelling.',
      features: ['Sensory Exploration', 'Social Interaction', 'Creative Arts'],
      color: 'bg-gradient-to-br from-orange-400 to-pink-500',
    },
    {
      title: 'Daycare Services',
      age: 'Full-Day Care',
      description: 'Safe, engaging care for children throughout the day with age-appropriate routines, naps, and fun.',
      features: ['Structured Routine', 'Nutritious Meals', 'Play-based Learning'],
      color: 'bg-gradient-to-br from-blue-400 to-purple-500',
    },
    {
      title: 'Clean & Safe Environment',
      age: 'Our Priority',
      description: 'Child-friendly spaces with caring staff and regular hygiene practices to ensure a healthy setting.',
      features: ['Regular Sanitization', 'Secure Premises', 'Caring Staff'],
      color: 'bg-gradient-to-br from-green-400 to-teal-500',
    },
     {
      title: 'Personal Attention',
      age: 'Individual Focus',
      description: 'Low student-teacher ratio to ensure every child receives individual care and guidance.',
      features: ['Small Group Sizes', 'Personalized Learning', 'Strong Teacher-Child Bonds'],
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    }
  ];

  const faculty = [
    {
      name: "Ms. Nima Radhakrishnan",
      role: "Principal & Founder",
      experience: "15+ years",
      qualifications: "M.Ed in Early Childhood Education",
      specialties: ["Curriculum Development", "Child Psychology", "Parent Communication"]
    },
   
  ];
  {/* This is for Navbar*/}


  // Custom styled hamburger/close icons
    const MenuIcon = () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    );

    const CloseIcon = () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    );
    const navLinks = ['Home', 'About', 'Programs', 'Founder', 'Admissions', 'Contact'];


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 relative overflow-hidden">

      {/* Navbar */}
        <nav style={{ fontFamily: "'Nunito', sans-serif" }} className="bg-navColor/40 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md border-b-4 border-primarypurple/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer">
                        <img src="km gurukulam.png" alt="KM Gurukulam" className = "h-[7vh]"/>
                        {/*<span className="text-2xl font-extrabold text-sky-600 tracking-wider">KM Gurukulam</span>*/}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 hover:text-rose-500 hover:bg-amber-200/50 px-4 py-2 rounded-full text-md font-bold transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-sky-600 hover:text-rose-500 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-300 transition-all duration-300"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-amber-50/90">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-3 rounded-lg text-base font-bold text-gray-700 hover:text-rose-500 hover:bg-amber-200 transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>

      {/* Hero Section */}
{/* Hero Section */}
      <section
        id="home"
        className="w-[100vw] h-[100vh] pt-[25vh] md:pt-[30vh] overflow-hidden relative"
      >
        <img
          src="lotus-butterfly.png"
          alt="Lotus and Butterfly"
          className="absolute right-0 hidden sm:block bottom-0 w-[420px] max-w-[60vw] !opacity-20 pointer-events-none select-none animate-float z-0 blur-[0.5px]"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-8">
              <h1
                className="text-6xl md:text-6xl font-bold text-gray-800 leading-tight"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Little{' '}
                <span className="text-transparent bg-clip-text color-black bg-gradient-to-r from-orange-400 to-pink-500">
                  Ones
                </span>{' '}
                Stepping Stones
              </h1>

              <p
                className="text-xl text-gray-600 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Welcome to KM Gurukulam, where every child's journey begins with love,
                learning, and laughter. We provide a nurturing environment that fosters
                creativity, curiosity, and confidence.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
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
          </div>
        </div>
      </section>

{/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About KM Gurukulam</h2>
            <br />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At KM Gurukulam, we believe that every child’s early steps are the foundation for a lifetime of learning. Designed especially for playgroup toddlers and daycare services, our school provides a warm, nurturing, and joyful environment where little ones grow with confidence and curiosity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Features List */}
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Nurturing Environment</h3>
                    <p className="text-gray-600">We create a safe, loving space where children feel secure to explore, learn, and grow.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Holistic Development</h3>
                    <p className="text-gray-600">Our curriculum focuses on cognitive, emotional, social, and physical development.</p>
                  </div>
                </div>

                {/* Feature 3 */}
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

            {/* Empty Divs - Optional: Can be removed if unused */}
            <div className="h-full w-full"></div>
            <div className="h-full w-full"></div>

            {/* Mission Card */}
            <div className="relative" data-aos="zoom-in" data-aos-delay="200">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate programs designed to meet the unique developmental needs of each child.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
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


      {/* Founder Section */}
      <section id="founder" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I’m the Director and Principal of Little Orchids Preschool, Royapettah, where I’ve had the joy of shaping early learning experiences for many children. With a heart full of purpose and years of experience, I am proud to begin this new journey with KM Gurukulam — a space where care meets early education.
            </p>
          </div>

          {/* Founder Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((teacher, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                data-aos="flip-left"
                data-aos-delay={`${index * 100}`}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{teacher.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{teacher.role}</p>
                <p className="text-gray-600 text-sm mb-2">{teacher.experience}</p>
                <p className="text-gray-600 text-sm mb-4">{teacher.qualifications}</p>
                <div className="space-y-1">
                  {teacher.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="inline-block bg-white text-gray-700 px-2 py-1 rounded-full text-xs mr-1 mb-1"
                      data-aos="zoom-in"
                      data-aos-delay={`${300 + specialtyIndex * 50}`}
                    >
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/km gurukulam.png" alt="KM Gurukulam" className = "h-[15vh] pr-[4vw]"/>
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