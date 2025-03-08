// import { AnimatePresence, motion } from 'framer-motion';
// import {
//   CheckCircle,
//   ChevronDown,
//   Globe,
//   Leaf,
//   LogIn,
//   Shield,
//   Star,
//   UserPlus
// } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const heroImages = [
//   {
//     src: 'https://orapiasia.com/wp-content/uploads/sustainable-cleaning-products.jpg',
//     title: 'Sustainable Cleanliness',
//     subtitle: 'Transforming Communities, One Clean Step at a Time',
//     impact: '1M+ Sq. Km Cleaned',
//     icon: <Leaf className="text-green-500" />
//   },
//   {
//     src: 'https://communityempowermentfund.org/wp-content/uploads/2019/05/Screen-Shot-2019-05-21-at-1.31.23-PM-1.jpg',
//     title: 'Community Empowerment',
//     subtitle: 'Uniting People for a Cleaner, Healthier Future',
//     impact: '500K+ Volunteers',
//     icon: <Globe className="text-blue-500" />
//   },
//   {
//     src: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/shutterstock_767486674%20%281%29.jpg?itok=WTWlg6Oa',
//     title: 'Innovative Solutions',
//     subtitle: 'Cutting-Edge Technology for Environmental Preservation',
//     impact: '200+ Smart Initiatives',
//     icon: <Shield className="text-purple-500" />
//   }
// ];

// const FeatureCard = ({ icon, title, description }) => (
//   <motion.div
//     whileHover={{ scale: 1.05, rotate: 1 }}
//     className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-blue-100 space-y-4 transform transition-all"
//   >
//     <div className="flex items-center space-x-4">
//       {icon}
//       <h3 className="text-xl font-bold text-gray-800">{title}</h3>
//     </div>
//     <p className="text-gray-600">{description}</p>
//   </motion.div>
// );

// const ModernLandingPage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       clearInterval(intervalId);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
//       {/* Navbar */}
//       <motion.nav 
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <Star className="text-green-600" size={32} />
//             <h1 className="text-3xl font-bold text-green-800 tracking-wider">
//               VISHUDDH AI
//             </h1>
//           </div>
//           <div className="flex items-center space-x-8">
//             {['Schemes', 'Awards', 'Gallery', 'SAP2024', 'Progress'].map((item) => (
//               <a 
//                 key={item} 
//                 href={`#${item.toLowerCase()}`} 
//                 className="text-gray-700 hover:text-green-600 font-medium transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//             <div className="flex space-x-4">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => navigate('/login')}
//                 className="bg-green-800 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-400"
//               >
//                 <LogIn size={18} />
//                 <span>Login</span>
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => navigate('/signup')}
//                 className="bg-green-800 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-400"
//               >
//                 <UserPlus size={18} />
//                 <span>Sign Up</span>
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.nav>


//       {/* Hero Section */}
//       <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <AnimatePresence mode="wait">
//             <motion.div 
//               key={currentSlide}
//               initial={{ opacity: 0, scale: 1.1 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.1 }}
//               transition={{ 
//                 duration: .6,
//                 ease: 'easeInOut'
//               }}
//               className="absolute inset-0"
//             >
//               <div className="absolute inset-0 bg-black/40" />
//               <img 
//                 src={heroImages[currentSlide].src} 
//                 alt="Background" 
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             <h2 className="text-7xl font-extrabold mb-6 drop-shadow-xl">
//               A Clean Nation is a Healthy Nation
//             </h2>
//             <p className="text-2xl mb-10 max-w-3xl mx-auto opacity-90 drop-shadow-md">
//               Empowering communities through innovative cleanliness solutions and sustainable practices
//             </p>

//             <div className="flex justify-center space-x-6">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-white text-green-800 px-8 py-4 rounded-full 
//                   flex items-center space-x-3 font-semibold shadow-xl 
//                   hover:bg-blue-50 transition-all"
//               >
//                 <UserPlus size={24} />
//                 <span>Join the Movement</span>
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="border-2 border-white text-white px-8 py-4 
//                   rounded-full flex items-center space-x-3 font-semibold 
//                   hover:bg-white/20 transition-all"
//               >
//                 <CheckCircle size={24} />
//                 <span>Our Impact</span>
//               </motion.button>
//             </div>

//             {/* Slide Indicator & Dynamic Info */}
//             <div className="mt-16 flex justify-center items-center space-x-6">
//               {heroImages.map((_, index) => (
//                 <motion.div
//                   key={index}
//                   animate={{
//                     width: index === currentSlide ? '2rem' : '0.5rem',
//                     backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)'
//                   }}
//                   className="h-2 rounded-full cursor-pointer"
//                   onClick={() => setCurrentSlide(index)}
//                 />
//               ))}
//             </div>

//             {/* Dynamic Slide Info */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="mt-8 flex justify-center items-center space-x-6 text-white"
//               >
//                 <div className="flex items-center space-x-3">
//                   {heroImages[currentSlide].icon}
//                   <div>
//                     <h3 className="text-2xl font-bold">
//                       {heroImages[currentSlide].title}
//                     </h3>
//                     <p className="text-sm opacity-80">
//                       {heroImages[currentSlide].subtitle}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="h-8 w-px bg-white/30" />
//                 <div>
//                   <p className="text-2xl font-bold">
//                     {heroImages[currentSlide].impact}
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>
//         </div>

//         {/* Scroll Down Indicator */}
//         <motion.div
//           animate={{ 
//             y: [0, 10, 0],
//             opacity: [1, 0.5, 1]
//           }}
//           transition={{ 
//             duration: 2, 
//             repeat: Infinity 
//           }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
//         >
//           <ChevronDown size={36} />
//         </motion.div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-white py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Our Innovative Approach
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Leveraging cutting-edge technology and community engagement to create lasting environmental change
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <FeatureCard 
//               icon={<Leaf size={36} className="text-green-500" />}
//               title="Sustainable Solutions"
//               description="Implementing eco-friendly technologies and practices that reduce environmental impact."
//             />
//             <FeatureCard 
//               icon={<Globe size={36} className="text-blue-500" />}
//               title="Community Empowerment"
//               description="Engaging local communities through education, training, and collaborative initiatives."
//             />
//             <FeatureCard 
//               icon={<Shield size={36} className="text-purple-500" />}
//               title="Smart Monitoring"
//               description="Utilizing AI and IoT technologies to track and improve cleanliness in real-time."
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModernLandingPage;

import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle,
  ChevronDown,
  Globe,
  Leaf,
  LogIn,
  Shield,
  Star,
  UserPlus,
  Award,
  BarChart2,
  Zap,
  Monitor,
  Layers,
  Map,
  ChevronRight,
  Activity
} from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../images/Screenshot 2025-03-08 151342.png';
import img2 from '../images/Screenshot 2025-03-08 151416.png';
import img3 from '../images/Screenshot 2025-03-08 151443.png';

const heroImages = [
  {
    src: 'https://orapiasia.com/wp-content/uploads/sustainable-cleaning-products.jpg',
    title: 'Sustainable Cleanliness',
    subtitle: 'Transforming Communities, One Clean Step at a Time',
    impact: '1M+ Sq. Km Cleaned',
    icon: <Leaf className="text-green-500" />
  },
  {
    src: 'https://communityempowermentfund.org/wp-content/uploads/2019/05/Screen-Shot-2019-05-21-at-1.31.23-PM-1.jpg',
    title: 'Community Empowerment',
    subtitle: 'Uniting People for a Cleaner, Healthier Future',
    impact: '500K+ Volunteers',
    icon: <Globe className="text-blue-500" />
  },
  {
    src: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/shutterstock_767486674%20%281%29.jpg?itok=WTWlg6Oa',
    title: 'Innovative Solutions',
    subtitle: 'Cutting-Edge Technology for Environmental Preservation',
    impact: '200+ Smart Initiatives',
    icon: <Shield className="text-purple-500" />
  }
];

const FeatureCard = ({ icon, title, description, benefits, stats }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -10 }}
    className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-xl border border-blue-100 
               flex flex-col h-full transition-all"
  >
    <div className="flex items-center space-x-4 mb-6">
      <div className="p-3 rounded-full bg-blue-50">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    
    {benefits && (
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2">Key Benefits:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
    
    {stats && (
      <div className="pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm font-medium">
          <div className="text-center">
            <div className="text-blue-600 text-xl font-bold">{stats[0].value}</div>
            <div className="text-gray-500">{stats[0].label}</div>
          </div>
          <div className="text-center">
            <div className="text-blue-600 text-xl font-bold">{stats[1].value}</div>
            <div className="text-gray-500">{stats[1].label}</div>
          </div>
        </div>
      </div>
    )}
  </motion.div>
);

// Dashboard Card Component
const DashboardCard = ({ title, icon, color, features, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className={`bg-white rounded-xl overflow-hidden shadow-xl border border-${color}-100 flex flex-col h-full`}
  >
    <div className={`bg-${color}-600 text-white p-6 flex items-center justify-between`}>
      <div className="flex items-center space-x-3">
        <div className={`p-3 rounded-full bg-white/20`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <Activity size={24} />
    </div>
    
    <div className="p-6 flex-grow">
      <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-md">
        <img 
          src={image} 
          alt={`${title} Dashboard`} 
          className="w-full h-40 object-cover object-top"
        />
      </div>
      
      <div className="space-y-3">
        <h4 className="font-medium text-gray-700 mb-2">Key Features:</h4>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className={`text-${color}-500 mr-2 mt-1 flex-shrink-0`} size={16} />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ModernLandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dashboardScrollProgress, setDashboardScrollProgress] = useState(0);
  const featuresRef = useRef(null);
  const heroRef = useRef(null);
  const dashboardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Calculate hero scroll progress
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Calculate scroll progress (0 to 1) based on how far down the hero section we've scrolled
        // Start transition after scrolling 30% of the hero section
        const progress = Math.min(Math.max((scrollPosition - (heroHeight * 0.3)) / (heroHeight * 0.4), 0), 1);
        setScrollProgress(progress);
        
        // Update active section based on scroll progress
        if (progress > 0.5) {
          setActiveSection('features');
        } else {
          setActiveSection('hero');
        }
      }
      
      // Calculate dashboard section scroll progress
      if (dashboardRef.current) {
        const dashboardRect = dashboardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start showing dashboard section when it's 30% into the viewport
        const dashProgress = Math.min(Math.max(1 - (dashboardRect.top - windowHeight * 0.3) / (windowHeight * 0.5), 0), 1);
        setDashboardScrollProgress(dashProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Star className={isScrolled ? "text-blue-600" : "text-white"} size={32} />
            <h1 className={`text-3xl font-bold tracking-wider ${
              isScrolled ? "text-blue-800" : "text-white"
            }`}>
              VISHUDDH AI
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            {['Schemes', 'Awards', 'Gallery', 'SAP2024', 'Progress'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                }`}
              >
                {item}
              </a>
            ))}
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate('/login')}
                className="bg-green-300 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-400"
              >
                <LogIn size={18} />
                <span>Login</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate('/signup')}
                className="bg-green-300 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-400"
              >
                <UserPlus size={18} />
                <span>Sign Up</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden`}
        style={{
          opacity: 1 - scrollProgress,
          transform: `translateY(${scrollProgress * 20}vh)`
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ 
                duration: .6,
                ease: 'easeInOut'
              }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/40" />
              <img 
                src={heroImages[currentSlide].src} 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-7xl font-extrabold mb-6 drop-shadow-xl">
              A Clean Nation is a Healthy Nation
            </h2>
            <p className="text-2xl mb-10 max-w-3xl mx-auto opacity-90 drop-shadow-md">
              Empowering communities through innovative cleanliness solutions and sustainable practices
            </p>

            <div className="flex justify-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-blue-800 px-8 py-4 rounded-full 
                  flex items-center space-x-3 font-semibold shadow-xl 
                  hover:bg-blue-50 transition-all"
              >
                <UserPlus size={24} />
                <span>Join the Movement</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-2 border-white text-white px-8 py-4 
                  rounded-full flex items-center space-x-3 font-semibold 
                  hover:bg-white/20 transition-all"
              >
                <CheckCircle size={24} />
                <span>Our Impact</span>
              </motion.button>
            </div>

            {/* Slide Indicator & Dynamic Info */}
            <div className="mt-16 flex justify-center items-center space-x-6">
              {heroImages.map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    width: index === currentSlide ? '2rem' : '0.5rem',
                    backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)'
                  }}
                  className="h-2 rounded-full cursor-pointer"
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            {/* Dynamic Slide Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-8 flex justify-center items-center space-x-6 text-white"
              >
                <div className="flex items-center space-x-3">
                  {heroImages[currentSlide].icon}
                  <div>
                    <h3 className="text-2xl font-bold">
                      {heroImages[currentSlide].title}
                    </h3>
                    <p className="text-sm opacity-80">
                      {heroImages[currentSlide].subtitle}
                    </p>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/30" />
                <div>
                  <p className="text-2xl font-bold">
                    {heroImages[currentSlide].impact}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#features"
          animate={{ 
            y: [0, 10, 0],
            opacity: [1, 0.5, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity 
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            featuresRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown size={36} />
        </motion.a>
      </div>

      {/* Features Section */}
      <div 
        id="features"
        ref={featuresRef}
        className={`py-24`}
        style={{
          opacity: scrollProgress,
          transform: `translateY(${(1 - scrollProgress) * 20}vh)`
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: scrollProgress, y: scrollProgress > 0 ? 0 : 30 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-gray-800 mb-4"
            >
              Our Innovative Approach
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: scrollProgress, y: scrollProgress > 0 ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Leveraging cutting-edge technology and community engagement to create lasting
              environmental change
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: scrollProgress, y: scrollProgress > 0.2 ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureCard 
                icon={<Leaf size={36} className="text-green-500" />}
                title="Sustainable Solutions"
                description="Implementing eco-friendly technologies and practices that reduce environmental impact while promoting economic growth and resource efficiency."
                benefits={[
                  "Reduced carbon footprint by 30%",
                  "Elimination of harmful chemicals",
                  "Biodegradable cleaning agents"
                ]}
                stats={[
                  { value: "85%", label: "Eco-friendly" },
                  { value: "40+", label: "Technologies" }
                ]}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: scrollProgress, y: scrollProgress > 0.3 ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureCard 
                icon={<Globe size={36} className="text-blue-500" />}
                title="Community Empowerment"
                description="Engaging local communities through education, training, and collaborative initiatives that promote ownership and sustainable cleanliness practices."
                benefits={[
                  "Localized training programs",
                  "Community leadership development",
                  "Inclusive participation models"
                ]}
                stats={[
                  { value: "200+", label: "Communities" },
                  { value: "50K+", label: "Participants" }
                ]}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: scrollProgress, y: scrollProgress > 0.4 ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FeatureCard 
                icon={<Shield size={36} className="text-purple-500" />}
                title="Smart Monitoring"
                description="Utilizing AI and IoT technologies to track and improve cleanliness in real-time, enabling data-driven decision making and targeted interventions."
                benefits={[
                  "24/7 automated monitoring",
                  "Predictive maintenance alerts",
                  "Resource optimization algorithms"
                ]}
                stats={[
                  { value: "98%", label: "Accuracy" },
                  { value: "1000+", label: "Sensors" }
                ]}
              />
            </motion.div>
          </div>
          
          {/* Additional Feature Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: scrollProgress, y: scrollProgress > 0.5 ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-blue-600 rounded-xl p-6 text-white flex items-center"
            >
              <div className="mr-4 bg-white/20 p-3 rounded-full">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Award-Winning</h3>
                <p className="opacity-80">Recognized globally for innovation</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: scrollProgress, y: scrollProgress > 0.6 ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-green-600 rounded-xl p-6 text-white flex items-center"
            >
              <div className="mr-4 bg-white/20 p-3 rounded-full">
                <BarChart2 size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Data-Driven</h3>
                <p className="opacity-80">Advanced analytics for continuous improvement</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: scrollProgress, y: scrollProgress > 0.7 ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-purple-600 rounded-xl p-6 text-white flex items-center"
            >
              <div className="mr-4 bg-white/20 p-3 rounded-full">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Rapid Deployment</h3>
                <p className="opacity-80">Swift implementation in any environment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Command and Control Dashboard Section */}
      <div 
        id="dashboards" 
        ref={dashboardRef}
        className="py-24 bg-gradient-to-br from-gray-50 to-gray-100"
        style={{
          opacity: dashboardScrollProgress,
          transform: `translateY(${(1 - dashboardScrollProgress) * 10}vh)`
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-5xl font-bold text-gray-800 mb-4">Command and Control</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multi-level monitoring and management systems that enable oversight from national to local levels
              </p>
            </motion.div>
          </div>
          
          {/* Hierarchy Visualization */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg w-64 text-center">
                  <Layers size={32} className="mx-auto mb-2" />
                  <h3 className="text-xl font-bold">National Administration</h3>
                </div>
              </div>
              
              <div className="h-16 w-1 bg-blue-400 mx-auto"></div>
              
              <div className="flex justify-center items-center mb-4">
                <div className="bg-green-600 text-white p-4 rounded-xl shadow-lg w-64 text-center">
                  <Globe size={32} className="mx-auto mb-2" />
                  <h3 className="text-xl font-bold">State Oversight</h3>
                </div>
              </div>
              
              <div className="h-16 w-1 bg-green-400 mx-auto"></div>
              
              <div className="flex justify-center items-center">
                <div className="bg-purple-600 text-white p-4 rounded-xl shadow-lg w-64 text-center">
                  <Map size={32} className="mx-auto mb-2" />
                  <h3 className="text-xl font-bold">District Management</h3>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Dashboard Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <DashboardCard 
              title="Admin Dashboard"
              icon={<Monitor size={28} />}
              color="blue"
              image={img1}
              delay={0.3}
              features={[
                "Nationwide performance metrics",
                "Resource allocation optimization",
                "State-level comparison",
                "Policy implementation tracking"
              ]}
            />
            
            <DashboardCard 
              title="State Dashboard"
              icon={<Globe size={28} />}
              color="green"
              image={img2}
              delay={0.4}
              features={[
                "District-level performance metrics",
                "Resource management system",
                "Local project implementation status",
                "Community engagement tracking"
              ]}
            />
            
            <DashboardCard 
              title="District Dashboard"
              icon={<Map size={28} />}
              color="purple"
              image={img3}
              delay={0.5}
              features={[
                "Real-time cleanliness metrics",
                "Field worker assignment system",
                "Community feedback integration",
                "Issue tracking and resolution"
              ]}
            />
          </div>
          
          {/* Dashboard Access Button */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full 
                        flex items-center space-x-3 font-semibold text-xl shadow-xl 
                        hover:shadow-2xl transition-all"
            >
              <Monitor size={24} />
              <span>Access Dashboard</span>
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernLandingPage;