import { Menu, X } from 'lucide-react';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import TeamPage from './TeamPage';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-white font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity"
            >
              Logo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:opacity-80 transition-opacity"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-white bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="text-emerald-600 bg-white hover:bg-gray-100 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/login" 
                className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium text-center"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="text-emerald-600 bg-white hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-center"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
      <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 sm:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Welcome to Our VISHUDHH Portal
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Experience the next generation of digital solutions with our innovative platform.
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  to="/signup" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
                >
                  Get Started
                </Link>
                <Link 
                  to="/login" 
                  className="bg-white text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg border border-gray-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default MainPage;