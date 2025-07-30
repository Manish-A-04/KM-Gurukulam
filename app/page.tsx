'use client';
import React from 'react';
import { GallerySection } from '@/components/ui/gallery-section'; //gallary
import { type GalleryImage } from '@/components/ui/auto-scroll-carousel'; //gallary
import AdmissionForm from '@/components/ui/admissionsform';
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
      duration: 600, // default animation duration
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

  const programs = [
    {
      title: 'Playgroup Program',
      age: 'For Ages: 2 – 3 years',
      description: 'Fun learning through play, stories, and social interaction.',
      features: ['Working Days: Monday – Friday',
'Timing: 9:30 AM – 12:00 PM'],
      color: 'bg-gradient-to-br from-orange-400 to-pink-500',
      image: "../images/programs/20250605-IMG_3899.jpg"
    },
    {
      title: 'Daycare Services',
      age: 'Full-Day Care',
      description: 'Full‑day care with meals, naps & fun learning.',
      features: ['Working Days: Monday – Saturday',
'Timing: 8:30 AM – 7:00 PM'],
      color: 'bg-gradient-to-br from-blue-400 to-purple-500',
      image: "../images/programs/20250605-IMG_4010.jpg"
    },
    {
      title: 'PRE-KG',
      age: '3 - 4 years',
      description: 'Early literacy & numeracy preperation through play.',
      features: ['Working Days: Monday – Friday',
'Timing: 9:30 AM – 12:30 PM'],
      color: 'bg-gradient-to-br from-green-400 to-teal-500',
      image: "../images/programs/class.jpeg"
    },
     {
      title: 'Barathanatyam',
      age: 'Individual Focus',
      description: 'Classical dance for grace, rhythm & confidence.',
      features: ['Days: Mon, Wed, Fri',
'Timing: 5:30 PM – 6:30 PM',
'Weekend: Sat 6:00 PM – 7:00 PM, Sun 9:30 AM – 10:30 AM'],
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      image: "../images/programs/download (1).jpeg"
    },

    {
      title: 'Abacus Class',
      age: 'Individual Focus',
      description: 'Hands‑on abacus training to boost mental math.',
      features: ['Days: Saturday, Sunday',
'Timing: Sat 7:00 PM – 8:00 PM, Sun 8:00 AM – 9:00 AM'],
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      image: "../images/programs/abacus.jpeg"
    },
    {
      title: 'Carnatic Music',
      age: 'Individual Focus',
      description: 'Vocal & instrumental foundation (schedule TBD).',
      features: ['Schedule: To be decided – please enquire'],
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      image: "../images/programs/carnatic.jpeg"
    },
    {
      title: 'Yoga',
      age: 'Individual Focus',
      description: 'YMind‑body wellness for focus & flexibility.',
      features: ['Days: Mon, Wed, Fri',
'Timing: 4:00 PM – 5:00 PM'],
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      image: "../images/programs/Sunset Meditation Bliss.jpeg"
    },
    {
      title: 'Tution Classes',
      age: 'Pre-KG - 12th',
      description: 'Personalized academic support across subjects.',
      features: ['Working Days: Monday – Friday',
'Timing: 5:00 PM – 7:30 PM'],
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      image: "../images/programs/tutuion.jpeg"
    },
  {
      title: 'Karate Classes',
      age: 'Pre-KG - 12th',
      description: 'Self‑defense & discipline through martial arts.',
      features: ['Days: Tue & Thu',
'Timing: 6:15 PM – 7:15 PM'],
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      image: "../images/programs/karate.jpeg"
    },

    {
      title: 'Phonics Classes',
      age: 'Pre-KG - 12th',
      description: 'Foundational reading skills via fun phonics.',
      features: ['Working Days: Monday – Friday',
'Timing: 5:00 PM – 6:00 PM'],
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      image: "../images/programs/CVC Word Wheel.jpeg"
    },

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
    const navLinks = ['Home', 'About', 'Programs', 'Founder',  'Contact'];
    const events = [
      {
        id: 1,
        title: "Successful Inauguration of KM Gurukulam Marks a Promising Beginning",
        organizer: "",
        date: "02 JUL 2025 ",
        isFree: true,
        image: "../images/gallary/img6 (6).png",
      },
      
      
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1); // 1: Info, 2: Form

  

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 relative overflow-hidden">

      {/* Navbar */}
        <nav style={{ fontFamily: "'Nunito', sans-serif" }} className="bg-navColor/10 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md border-b-4 border-navColor/20">
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
      <section
  id="home"
  className="min-h-screen px-4 pt-[15vh] md:pt-[30vh] overflow-x-hidden relative bg-hero-animated bg-size-200 animate-hero-bg-move"
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
                <span className="text-transparent bg-clip-text color-black bg-gradient-animated bg-size-200 animate-bg-move">
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
                learning, and laughter.<span className='block'> We provide a nurturing environment that fosters
                creativity, curiosity, and confidence.</span>
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 items-start justify-start"
  data-aos="zoom-in"
  data-aos-delay="500"


              >
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setStep(1);
                  }}
                  className="text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full font-semibold transition-all duration-10000 hover:scale-105 shadow-md bg-gradient-animated bg-size-200 animate-bg-move"
                >
                  Enroll Now
                </button>
                <button
                  onClick={() => scrollToSection('events')}
                  className="px-8 py-4 rounded-full text-lg font-semibold border-2 transition-all duration-300"
                  style={{
                    borderColor: '#E54B7F',
                    color: '#E54B7F',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E54B7F';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#E54B7F';
                  }}>
                  Our Memories
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
    <section id="events" className="py-16 bg-gradient-to-b from-[#fde7f4] via-[#f4dcfc] via-40% to-[#dfeeff]">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-5xl font-bold  mb-2">
            Events
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore exciting events and joyful activities happening at KM Gurukulam.
          </p>
          <div className="w-24 h-1 mt-4 mx-auto bg-gradient-to-r from-gradColorOne via-gradColorTwo to-gradColorThree rounded-full"></div>

        </div>

        {/* Card Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                {/* Optional: light overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-pink-700 leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">{event.organizer}</p>
                <div className="text-sm text-gray-600 flex justify-between pt-2">
                  <span className="text-gray-700 font-medium">{event.date}</span>
                  <span
                    className={`font-semibold ${
                      event.isFree ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {event.isFree ? " " : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="300">
  <a
    href="#uevents"
    className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#fbd4e8] via-[#ebd9fa] to-[#d7e6ff] text-pink-800 font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-200"
  >
    This Month's Plan
  </a>
</div>
    </section>

      {/* About Section */}
    <section id="about" className="py-20 bg-gradient-to-b from-[#e8e0ff] to-[#dfeeff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        {/* Section Heading */}
        <div className="text-center" data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our philosophy, mission, and commitment to nurturing early childhood development in a joyful and loving space.
          </p>
          <div className="w-24 h-1 mt-4 mx-auto bg-gradient-to-r from-gradColorOne via-gradColorTwo to-gradColorThree rounded-full"></div>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Image */}
          <div className="order-1 md:order-1" data-aos="fade-right" data-aos-duration="1200">
            <img
              src="../images/gallary/img6 (2).png"
              alt="Happy children playing"
              className="w-full rounded-3xl shadow-xl mb-[29px]"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:order-2" data-aos="fade-left" data-aos-duration="1200">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradColorTwo to-gradColorThree">KM Gurukulam</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At KM Gurukulam, we believe that every child’s early steps are the foundation for a lifetime of learning.
              Our school offers a warm, nurturing, and joyful environment where children grow with curiosity, creativity,
              and confidence.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Image */}
          <div className="order-3 md:order-2" data-aos="fade-left" data-aos-duration="1200">
            <img
              src="../images/programs/20250605-IMG_3990.jpg"
              alt="kids having fun"
              className="w-full rounded-3xl shadow-xl mb-[29px]"
            />
          </div>

          {/* Text */}
          <div className="order-4 md:order-1" data-aos="fade-right" data-aos-duration="1200">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradColorThree to-gradColorTwo">Our Mission</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To inspire a lifelong love of learning by creating a safe and stimulating atmosphere where children feel free
              to explore, engage, and express themselves.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-4 h-4 bg-gradColorOne rounded-full mr-3"></div>
                <span className="text-gray-700">Creative Arts</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-gradColorTwo rounded-full mr-3"></div>
                <span className="text-gray-700">Music & Movement</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-gradColorThree rounded-full mr-3"></div>
                <span className="text-gray-700">Emotional & Social Growth</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-[#dfeeff] to-[#FCE4EC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate programs designed to meet the unique developmental needs of each child.
            </p>
            <div className="w-24 h-1 mt-4 mx-auto bg-gradient-to-r from-gradColorOne via-gradColorTwo to-gradColorThree rounded-full"></div>

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
                {/* Image Section with Overlay and Text */}
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start p-6 z-10">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{program.title}</h3>
                    <p className="text-white/90 text-lg drop-shadow-sm">{program.age}</p>
                  </div>
                </div>

                {/* Description Section */}
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
      <section id="founder" className="py-20 bg-gradient-to-b from-[#FCE4EC] to-[#FCF8F4] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-1">Meet Our Founder</h2>

            <p className="pt-[20px] text-xl text-gray-600 max-w-3xl mx-auto">
                Learn about the visionary behind KM Gurukulam — blending years of early education leadership with a deep passion for nurturing young minds.            </p>
            <div className="w-24 h-1 mt-4 mx-auto bg-gradient-to-r from-gradColorOne via-gradColorTwo to-gradColorThree rounded-full"></div>

          </div>

          {/* Founder Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div data-aos="fade-right" data-aos-duration="1200">
              <img
                src="../images/gallary/founder_nima.JPG"
                alt="Founder Image"
                className="w-full rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500 "

              />
            </div>

            {/* Founder Text */}
            <div data-aos="fade-left" data-aos-duration="1200">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Mrs. Nima Radhakrishnan, M.A., MTT, DYT</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With over a decade of experience in early childhood education, our founder has always believed that nurturing a child's curiosity lays the foundation for lifelong learning. Her compassionate leadership, dedication to holistic education, and passion for young learners continue to shape KM Gurukulam into a home of joyful discovery.
              </p>
              <p className="text-md text-gray-600">
                As an educator and mentor, she fosters a loving and structured atmosphere where every child feels seen, heard, and encouraged to shine.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/*/ Admission Section */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto p-6 animate-fadeIn">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl"
            >
              &times;
            </button>

            {/* Step 1: Important Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Important Information</h3>

                <div className="space-y-4">
                  <div className="flex flex-col items-start gap-3">
                      <span> Please review our Program Details to explore individual class timings, curriculum, and available slots.
                    We offer a range of programs including Bharatanatyam, Abacus, Music, Art & Craft, and more.</span>
                    <span>Our Programs : <a href="#programs" onClick={()=> setIsModalOpen(false)}>Click Here</a></span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-formTwo to-formOne rounded-xl p-4">
                  <p className="font-semibold text-sm text-gray-700 mb-2">Required Documents:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Birth Certificate</li>
                    <li>Immunization Records</li>
                    <li>Medical History Form</li>
                    <li>Emergency Contact Information</li>
                  </ul>
                </div>

                <div className="text-right">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Admission Form */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Admission Form</h3>

                <div className="px-1">
                  <AdmissionForm />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-green-600 hover:underline"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Gallery Section (Replaces Testimonials) */}  
       <GallerySection
        title="Our Gallery"
        subtitle="A glimpse into the vibrant and joyful learning environment at KM Gurukulam. See our little learners in action!"
        images={galleryImages}
        showStats={false} // Stats might not be relevant here, so hiding them
        autoScrollInterval={4000}
        className="bg-gradient-to-br from-background to-muted/20 py-20"
      />

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
                    <p className="text-gray-600">kmgurukulam1111@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">No. 11/1/1 Ganapathy Colony, Gopalapuram, Chennai</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Hours</p>
                    <p className="text-gray-600">Monday – Saturday : 8:30 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7568175054553!2d80.25781687466655!3d13.051145287271593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663bda079eff%3A0xfe08fdf11bc4d0bd!2s11%2C%20Ganapathy%20Colony%201st%20St%2C%20Ganapathy%20Colony%2C%20Royapettah%2C%20Chennai%2C%20Tamil%20Nadu%20600014!5e0!3m2!1sen!2sin!4v1753369023728!5m2!1sen!2sin" 
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

      {/* Upcoming Events */}
      <section id="uevents" className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Holidays Table */}
          <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">📅 Holidays</h2>
            <table className="min-w-full table-auto text-left text-sm">
              <thead className="bg-pink-100 text-pink-700">
                <tr>
                  <th className="px-4 py-2">S.No</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Reason</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">15 August 2025</td>
                  <td className="px-4 py-2">Friday</td>
                  <td className="px-4 py-2">Independence Day</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">16 August 2025</td>
                  <td className="px-4 py-2">Saturday</td>
                  <td className="px-4 py-2">Janmashtami</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">27 August 2025</td>
                  <td className="px-4 py-2">Wednesday</td>
                  <td className="px-4 py-2">Ganesh Chaturthi</td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </table>
          </div>

          
          {/* Events Table */}
          <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">🎉 Upcoming Events</h2>
            <table className="min-w-full table-auto text-left text-sm">
              <thead className="bg-pink-100 text-pink-700">
                <tr>
                  <th className="px-4 py-2">S.No</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Event Name</th>
                  <th className="px-4 py-2">Group</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">14 August 2025</td>
                  <td className="px-4 py-2">Thursday</td>
                  <td className="px-4 py-2">Janmashtami  Celebration</td>
                  <td className="px-4 py-2">All Students</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">15 August, 2025</td>
                  <td className="px-4 py-2">Friday</td>
                  <td className="px-4 py-2">Independence Day Celebration</td>
                  <td className="px-4 py-2">All Students</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">22 August, 2025</td>
                  <td className="px-4 py-2">Friday</td>
                  <td className="px-4 py-2">Yellow Day Celebration</td>
                  <td className="px-4 py-2">All Students</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">26 August, 2025</td>
                  <td className="px-4 py-2">Tuesday</td>
                  <td className="px-4 py-2">Ganesh Chaturthi Celebration</td>
                  <td className="px-4 py-2">All Students</td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 relative">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/km gurukulam.png" alt="KM Gurukulam" className = "md:h-[15vh] md:pr-[4vw] h-[10vh]"/>
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
                <p>kmgurukulam1111@gmail.com</p>
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

const galleryImages: GalleryImage[] = [
    {
      src: "../images/gallary/img6 (6).png",
      alt: "photo"
    },
    {
      src: "../images/gallary/img6 (2).png",
      alt: "Art and craft activity"
    },
    {
      src: "../images/gallary/img6 (3).png",
      alt: "Outdoor play area"
    },
    {
      src: "../images/gallary/IMG_4293.JPG",
      alt: "Music and movement session"
    },
    {
      src: "../images/gallary/IMG_4290.JPG",
      alt: "Music and movement session"
    }

  ];