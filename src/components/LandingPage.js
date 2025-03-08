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
  Activity,
  Award,
  BarChart2,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Globe,
  Layers,
  Leaf,
  LogIn,
  Map,
  Monitor,
  Shield,
  Star,
  UserPlus,
  Zap
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import admin from '../images/admin.jpg';
import district from '../images/district.jpg';
import state from '../images/state.jpg';
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
                  {[
            { name: 'Schemes', link: 'https://swachhbharatmission.ddws.gov.in/#:~:text=Swachh%20Bharat%20Mission:%20Driving%20India\'s,aligning%20with%20SDG%20Target%206.2.' },
            { name: 'Awards', link: '#awards' },
            { name: 'Gallery', link: 'https://www.indiatoday.in/swachh-bharat-abhiyan/photos' },
            { name: 'SAP2024', link: 'https://swachhataactionplan.gov.in/swachta/' },
            { name: 'TeamIF', link: '/team' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.link} 
              target={item.link.startsWith('http') ? '_blank' : '_self'} 
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
              }`}
            >
              {item.name}
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
              image={admin}
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
              image={state}
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
              image={district}
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


      {/* Impact Together Section */}
<div id="impact-together" className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Let's Create an Impact Together</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join thousands of citizens committed to transforming India into a cleaner, greener nation through collective action
        </p>
      </motion.div>
    </div>
    
    {/* Pledge Card */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-16 border border-green-100"
    >
      <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
        <h3 className="text-3xl font-bold text-center">The Clean India Pledge</h3>
      </div>
      
      <div className="p-8">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="italic text-center font-medium">
            "I pledge to actively contribute to making India clean and green. I will:
          </p>
          
          <ul className="space-y-4 mt-6">
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Keep my surroundings clean and encourage others to do the same</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Reduce, reuse, and recycle waste to minimize environmental impact</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Participate in community cleanliness drives and awareness campaigns</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Support sustainable practices and eco-friendly technologies</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Spread awareness about the importance of cleanliness and environmental protection</span>
            </li>
          </ul>
          
          <p className="italic text-center font-medium mt-6">
            Together, we will build a cleaner, healthier, and more sustainable India for generations to come."
          </p>
        </div>
        
        {/* Pledge Counter */}
        <div className="mt-8 flex justify-center">
          <div className="bg-blue-50 px-8 py-4 rounded-lg text-center">
            <p className="text-gray-600 mb-2">Citizens who have taken the pledge</p>
            <div className="text-5xl font-bold text-blue-700">247,852</div>
          </div>
        </div>
      </div>
    </motion.div>
    
    {/* Action Tiles */}
    <div className="grid md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="h-48 bg-green-600 flex items-center justify-center">
          <UserPlus size={64} className="text-white" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Take the Pledge</h3>
          <p className="text-gray-600 mb-6">Join thousands of citizens committed to creating a cleaner India. Your pledge makes a difference.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
          >
            <UserPlus size={18} />
            <span>Sign the Pledge</span>
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="h-48 bg-blue-600 flex items-center justify-center">
          <Map size={64} className="text-white" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Find Local Events</h3>
          <p className="text-gray-600 mb-6">Discover cleanliness drives and environmental initiatives happening in your community. Support local initiatives and make a difference.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
          >
            <Map size={18} />
            <span>View Events Map</span>
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="h-48 bg-purple-600 flex items-center justify-center">
          <Monitor size={64} className="text-white" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Track Your Impact</h3>
          <p className="text-gray-600 mb-6">Monitor your contribution to the Clean India mission and see the collective difference we're making.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
          >
            <Activity size={18} />
            <span>View Impact Dashboard</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
    
    {/* Success Stories Carousel */}
    <div className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real impact from communities across India
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="p-4 bg-white rounded-xl shadow-lg"
      >
        {/* Here you would implement a carousel component with success stories */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-green-600 text-white p-3 rounded-full">
              <Award size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-800">Featured Success: Pune River Restoration</h4>
          </div>
          <p className="text-gray-700 mb-4">
            Over 5,000 volunteers came together to transform the polluted Mula-Mutha river in Pune. Through a combination
            of community action and AI-powered waste tracking, they removed 200 tons of waste and implemented sustainable
            monitoring systems that have maintained water quality for over a year.
          </p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">June 2024 - Ongoing</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-green-600 font-medium flex items-center space-x-2"
            >
              <span>Read full story</span>
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</div>

{/* Footer Section */}
<footer className="bg-gradient-to-r from-green-900 to-blue-900 text-white pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      {/* Column 1: About & Mission */}
      <div>
        <div className="mb-6 flex items-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6.75L9 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12L12 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 7.5L15 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.8 20.25H16.2C17.8802 20.25 18.7202 20.25 19.362 19.891C19.9265 19.5798 20.3798 19.1265 20.691 18.562C21.05 17.9202 21.05 17.0802 21.05 15.4V8.6C21.05 6.91984 21.05 6.07976 20.691 5.43803C20.3798 4.87354 19.9265 4.42019 19.362 4.10896C18.7202 3.75 17.8802 3.75 16.2 3.75H7.8C6.11984 3.75 5.27976 3.75 4.63803 4.10896C4.07354 4.42019 3.62019 4.87354 3.30896 5.43803C2.95 6.07976 2.95 6.91984 2.95 8.6V15.4C2.95 17.0802 2.95 17.9202 3.30896 18.562C3.62019 19.1265 4.07354 19.5798 4.63803 19.891C5.27976 20.25 6.11984 20.25 7.8 20.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <h2 className="text-xl font-bold ml-3">Vishuddh AI Portal</h2>
        </div>
        <p className="text-gray-300 mb-6">
          Working together to create a cleaner, healthier, and more sustainable future for India through collective action and innovative solutions.
        </p>
        <div>
          <a 
            href="/about-us" 
            className="text-green-300 hover:text-white transition-colors duration-300 inline-flex items-center group"
          >
            Learn more about our mission
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h3 className="text-lg font-bold mb-6 border-b border-green-700 pb-2">Quick Links</h3>
        <ul className="space-y-3">
          {[
            { title: "Home", href: "/" },
            { title: "About Us", href: "/about" },
            { title: "Impact Stories", href: "/impact" },
            { title: "Events Calendar", href: "/events" },
            { title: "Resources", href: "/resources" },
            { title: "Government Programs", href: "/government-programs" },
            { title: "FAQ", href: "/faq" },
            { title: "Contact Us", href: "/contact" }
          ].map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 text-green-400"
                >
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Team & Support */}
      <div>
        <h3 className="text-lg font-bold mb-6 border-b border-green-700 pb-2">Team & Support</h3>
        <ul className="space-y-3">
          {[
            { title: "Our Team", href: "/team" },
            { title: "Executive Committee", href: "/committee" },
            { title: "Advisory Board", href: "/advisors" },
            { title: "Volunteer Opportunities", href: "/volunteer" },
            { title: "Partner With Us", href: "/partnerships" },
            { title: "Support Center", href: "/support" },
            { title: "Report Issues", href: "/report" }
          ].map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 text-green-400"
                >
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4: Contact & Newsletter */}
      <div>
        <h3 className="text-lg font-bold mb-6 border-b border-green-700 pb-2">Stay Connected</h3>
        <div className="mb-6">
          <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates, events, and success stories</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 w-full"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white rounded-r-lg px-4 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <p className="text-gray-300 mb-3">Contact Us:</p>
          <address className="not-italic text-gray-300 mb-4">
            <div className="flex items-start mb-2">
              <svg className="mr-2 mt-1 text-green-400 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C16 18 20 14.4183 20 9.75C20 5.33172 16.4183 2 12 2C7.58172 2 4 5.33172 4 9.75C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                Vishuddh AI Portal HQ<br />
                123 Green Avenue, New Delhi<br />
                India - 110001
              </div>
            </div>
            <div className="flex items-center mb-2">
              <svg className="mr-2 text-green-400 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 2V5M7 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 9H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:contact@cleanindia.org" className="hover:text-white transition-colors duration-300">
                contact@vishuddhai.org
              </a>
            </div>
            <div className="flex items-center">
              <svg className="mr-2 text-green-400 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.19371 20.573 3.07822 20.4184C2.9413 20.2372 2.88591 20.0251 2.77513 19.6009L2.08053 17.5567C1.89573 16.9967 1.80334 16.7167 1.95795 16.4185C2.0858 16.1703 2.30802 15.9893 2.56988 15.9108C2.87334 15.8194 3.23599 15.9168 3.96129 16.1117L6.45733 16.9421C7.16041 17.1288 7.51195 17.2222 7.83826 17.1344C8.12154 17.0576 8.37519 16.9058 8.56988 16.6968C8.7951 16.4562 8.91014 16.1153 9.14021 15.4335L9.36438 14.7652C9.6074 14.0303 9.72892 13.6629 9.6046 13.3224C9.6046 13.3224 9.6046 13.3224 9.6046 13.3224C9.51921 13.0723 9.33129 12.8692 9.09586 12.7669C8.76594 12.6276 8.32756 12.7033 7.45081 12.8547C5.24993 13.2401 3.14587 11.931 2.35154 9.66025C1.65479 7.63137 2.33553 5.34867 4.05463 4.05463C5.34867 2.33553 7.63137 1.65479 9.66025 2.35154C11.931 3.14587 13.2401 5.24993 12.8547 7.45081C12.7033 8.32756 12.6276 8.76594 12.7669 9.09586C12.8692 9.33129 13.0723 9.51921 13.3224 9.6046C13.3224 9.6046 13.3224 9.6046 13.3224 9.6046C13.6629 9.72892 14.0303 9.6074 14.7652 9.36438L15.4335 9.14021C16.1153 8.91014 16.4562 8.7951 16.6968 8.56988C16.9058 8.37519 17.0576 8.12154 17.1344 7.83826C17.2222 7.51195 17.1288 7.16041 16.9421 6.45733L16.1117 3.96129C15.9168 3.23599 15.8194 2.87334 15.9108 2.56988C15.9893 2.30802 16.1703 2.0858 16.4185 1.95795C16.7167 1.80334 16.9967 1.89573 17.5567 2.08053L19.6009 2.77513C20.0251 2.88591 20.2372 2.9413 20.4184 3.07822C20.573 3.19371 20.7019 3.33701 20.7963 3.50103C20.9103 3.69906 20.9262 3.91662 20.9581 4.35172C20.9859 4.73086 21 5.11378 21 5.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:+911234567890" className="hover:text-white transition-colors duration-300">
                +91 123 456 7890
              </a>
            </div>
          </address>
        </div>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="border-t border-green-800 pt-8 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a 
              href="https://facebook.com/cleanindia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              aria-label="Visit our Facebook page"
            >
              <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            
            {/* Twitter */}
            <a 
              href="https://twitter.com/cleanindia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center"
              aria-label="Follow us on Twitter"
            >
              <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/cleanindia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-3 rounded-full hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
              aria-label="Follow us on Instagram"
            >
              <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            
            {/* YouTube */}
            <a 
              href="https://youtube.com/cleanindia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
              aria-label="Subscribe to our YouTube channel"
            >
              <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/company/cleanindia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              aria-label="Connect with us on LinkedIn"
            >
              <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mb-6 md:mb-0 text-center md:text-right">
          <Star className="text-white" size={32} />
          <h1 className={`text-3xl font-bold tracking-wider text-white"}`}>
              VISHUDDH AI
            </h1>
          <div className="text-sm text-gray-400 mt-2">
            Government of India Endorsed Initiative
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Copyright and Legal */}
    <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="text-sm text-gray-400 mb-4 md:mb-0">
        © 2025 Vishuddh AI. All rights reserved.
      </div>
      <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
        <a href="/privacy-policy" className="hover:text-white transition-colors duration-300 mb-2 md:mb-0">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:text-white transition-colors duration-300 mb-2 md:mb-0">
          Terms of Service
        </a>
        <a href="/accessibility" className="hover:text-white transition-colors duration-300 mb-2 md:mb-0">
          Accessibility
        </a>
        <a href="/sitemap" className="hover:text-white transition-colors duration-300 mb-2 md:mb-0">
          Sitemap
        </a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};



export default ModernLandingPage;