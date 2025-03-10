import axios from 'axios';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import "chart.js/auto";
import { AlertTriangle, Camera, Clock, MapPin, Moon, Sun, X } from 'lucide-react';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DistrictDashboard() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // Mock data
  const cleanlinessPercentage = 72;
  const alertPercentage = 45;
  const cameras = [
    { id: 1, name: 'Camera 1' },
    { id: 2, name: 'Camera 2' },
    { id: 3, name: 'Camera 3' },
    { id: 4, name: 'Camera 4' },
    { id: 5, name: 'Camera 5' },
    { id: 6, name: 'Camera 6' },
  ];

  const emergencyAlerts = [
    {
      id: 1,
      imageUrl: 'https://media.gettyimages.com/id/1473816323/photo/full-bins-because-of-waste-collection-strike.jpg?s=612x612&w=gi&k=20&c=-Cc4CwOugVx5ZXY9-KCu1Orf7J3ZzwtAIsH--42DgE0=',
      cleanliness: 50,
      location: 'Area 1',
      timestamp: '10 minutes ago'
    },
    {
      id: 2,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1681488503746-0e2cfffb5b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D',
      cleanliness: 30,
      location: 'Area 2',
      timestamp: '25 minutes ago'
    },
    {
      id: 3,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661964003668-f499e888f1b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cleanliness: 40,
      location: 'Area 3',
      timestamp: '45 minutes ago'
    },
  ];

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Cleanliness',
        data: [90, 85, 80, 75, 70, 65, 60],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Alerts',
        data: [10, 15, 20, 25, 30, 35, 40],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? '#fff' : '#1F2937',
          font: {
            size: 12,
            family: 'Inter, system-ui, sans-serif',
          }
        },
      },
      tooltip: {
        backgroundColor: darkMode ? '#374151' : '#ffffff',
        titleColor: darkMode ? '#ffffff' : '#1F2937',
        bodyColor: darkMode ? '#E5E7EB' : '#4B5563',
        borderColor: darkMode ? '#4B5563' : '#E5E7EB',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
        displayColors: true,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: darkMode ? '#E5E7EB' : '#4B5563',
          font: {
            size: 11,
            family: 'Inter, system-ui, sans-serif',
          }
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: darkMode ? '#E5E7EB' : '#4B5563',
          font: {
            size: 11,
            family: 'Inter, system-ui, sans-serif',
          }
        },
      },
    },
    elements: {
      point: {
        radius: 3,
        hoverRadius: 5,
      },
      line: {
        borderWidth: 2,
      }
    },
    maintainAspectRatio: false,
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    place: '',
    id: '',
    recipientEmail: '',
    body: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/email/send', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Server Response:', response.data);
      
      // Show success toast instead of alert
      showToast('Email sent successfully', 'success');
      setShowForm(false);
      // Reset form data
      setFormData({
        place: '',
        id: '',
        recipientEmail: '',
        body: '',
      });
    } catch (error) {
      console.error('AXIOS ERROR:', {
        error: error,
        response: error.response,
        request: error.request,
        config: error.config
      });
      
      const errorMsg = error.response 
        ? error.response.data.message || 'Unknown error' 
        : error.message;
      
      showToast(`Failed to send email: ${errorMsg}`, 'error');
    }
  };

  // Toast notification system
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  
  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header with improved styling */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
              District Dashboard
            </h1>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-emerald-900 text-emerald-100' : 'bg-emerald-100 text-emerald-800'}`}>
              Live
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'
              } shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'focus:ring-gray-700' : 'focus:ring-gray-200'}`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Main Grid with improved spacing and transitions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Card */}
          <div className={`lg:col-span-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6 transition-colors duration-300`}>
            <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              District Metrics
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="col-span-1 lg:col-span-1">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-28">
                    <CircularProgressbar
                      value={cleanlinessPercentage}
                      text={`${cleanlinessPercentage}%`}
                      styles={buildStyles({
                        textSize: '1.25rem',
                        textColor: darkMode ? '#A7F3D0' : '#166534',
                        pathColor: '#10B981',
                        trailColor: darkMode ? '#374151' : '#D1FAE5',
                        strokeLinecap: 'round',
                      })}
                    />
                    <p className={`text-center mt-3 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Cleanliness
                    </p>
                  </div>
                  <div className="w-28">
                    <CircularProgressbar
                      value={alertPercentage}
                      text={`${alertPercentage}%`}
                      styles={buildStyles({
                        textSize: '1.25rem',
                        textColor: darkMode ? '#FCA5A5' : '#991B1B',
                        pathColor: '#EF4444',
                        trailColor: darkMode ? '#374151' : '#FEE2E2',
                        strokeLinecap: 'round',
                      })}
                    />
                    <p className={`text-center mt-3 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Alerts
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-3 h-64">
                <Line data={data} options={options} height={240} />
              </div>
            </div>
          </div>

          {/* Camera Controls with improved styling */}
          <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6 transition-colors duration-300`}>
            <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Camera Controls
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {cameras.map((camera) => (
                <button
                  key={camera.id}
                  onClick={() => navigate(`/camera/${camera.id}`)}
                  className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                >
                  <Camera size={16} />
                  <span className="font-medium">{camera.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Alerts with improved card design */}
        <div className="mt-8">
          <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
            <AlertTriangle size={18} className="text-amber-500" />
            Emergency Alerts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`rounded-xl shadow-lg overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } transition-colors duration-300 transform hover:translate-y-[-4px] hover:shadow-xl`}
              >
                <div className="relative">
                  <img
                    src={alert.imageUrl}
                    alt={`Alert at ${alert.location}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-3 right-3 ${
                    alert.cleanliness < 40 ? 'bg-red-500' : 
                    alert.cleanliness < 60 ? 'bg-amber-500' : 'bg-emerald-500'
                  } text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1`}>
                    <span>{alert.cleanliness}%</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {alert.location}
                      </h3>
                      <div className="flex items-center mt-1 space-x-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin size={14} className="mr-1" />
                          <span>Zone {alert.id}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={14} className="mr-1" />
                          <span>{alert.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                    <button 
                      onClick={() => {
                        setFormData({
                          ...formData,
                          place: alert.location,
                          id: `ALERT-${alert.id}`
                        });
                        setShowForm(true);
                      }}
                      className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Report Issue
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal with better focus management and accessibility */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
          <div 
            className={`bg-white text-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md p-6 transition-transform duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            style={{ transform: 'translateY(0)' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Report Issue</h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="place" className="block text-sm font-medium mb-1">Location</label>
                <input
                  id="place"
                  type="text"
                  placeholder="Place Name"
                  value={formData.place}
                  onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="id" className="block text-sm font-medium mb-1">ID</label>
                <input
                  id="id"
                  type="text"
                  placeholder="Place ID"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Recipient Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Recipient Email"
                  value={formData.recipientEmail}
                  onChange={(e) => setFormData({ ...formData, recipientEmail: e.target.value })}
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="Describe the issue..."
                  value={formData.body}
                  onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                  required
                  rows={4}
                  className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Report
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border border-gray-300 dark:border-gray-600 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <div className={`py-3 px-4 rounded-lg shadow-lg ${
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white max-w-xs flex items-center`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default DistrictDashboard;