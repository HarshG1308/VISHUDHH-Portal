import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Moon, Sun, Camera } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale, 
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function StateDashboard() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // Mock data
  const cleanlinessPercentage = 72;
  const alertPercentage = 45;

  const districts = [
    { id: 1, name: 'North District', cleanliness: 82 },
    { id: 2, name: 'South District', cleanliness: 68 },
    { id: 3, name: 'East District', cleanliness: 77 },
    { id: 4, name: 'West District', cleanliness: 71 },
    { id: 5, name: 'Central District', cleanliness: 79 },
    { id: 6, name: 'Urban District', cleanliness: 65 },
  ];

  const emergencyAlerts = [
    {
      id: 1,
      imageUrl: 'https://media.gettyimages.com/id/1473816323/photo/full-bins-because-of-waste-collection-strike.jpg?s=612x612&w=gi&k=20&c=-Cc4CwOugVx5ZXY9-KCu1Orf7J3ZzwtAIsH--42DgE0=',
      cleanliness: 50,
      location: 'North District',
      timestamp: '10 minutes ago'
    },
    {
      id: 2,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1681488503746-0e2cfffb5b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D',
      cleanliness: 30,
      location: 'South District',
      timestamp: '25 minutes ago'
    },
    {
      id: 3,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661964003668-f499e888f1b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cleanliness: 40,
      location: 'East District',
      timestamp: '45 minutes ago'
    },
  ];

  const monthlyData = {
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
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: darkMode ? '#fff' : '#1F2937',
        },
      },
      x: {
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: darkMode ? '#fff' : '#1F2937',
        },
      },
    },
  };

  const handleDistrictClick = (districtId) => {
    navigate(`/district-dashboard`);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            State Dashboard
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-600'
            } hover:bg-opacity-80`}
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Card */}
          <div className={`lg:col-span-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="col-span-2">
                <div className="flex items-center space-x-4">
                  <div className="w-24">
                    <CircularProgressbar
                      value={cleanlinessPercentage}
                      text={`${cleanlinessPercentage}%`}
                      styles={buildStyles({
                        textColor: darkMode ? '#A7F3D0' : '#166534',
                        pathColor: '#10B981',
                        trailColor: darkMode ? '#374151' : '#D1FAE5',
                      })}
                    />
                    <p className={`text-center mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Cleanliness
                    </p>
                  </div>
                  <div className="w-24">
                    <CircularProgressbar
                      value={alertPercentage}
                      text={`${alertPercentage}%`}
                      styles={buildStyles({
                        textColor: darkMode ? '#FCA5A5' : '#991B1B',
                        pathColor: '#EF4444',
                        trailColor: darkMode ? '#374151' : '#FEE2E2',
                      })}
                    />
                    <p className={`text-center mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Alerts
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <Line data={monthlyData} options={options} height={120} />
              </div>
            </div>
          </div>

          {/* Camera Controls */}
          <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6`}>
            <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              District Controls
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {districts.map((district) => (
                <button
                  key={district.id}
                  onClick={() => handleDistrictClick(district.id)}
                  className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 transition-opacity shadow-md"
                >
                  <Camera size={16} />
                  <span>{district.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Alerts */}
        <div className="mt-6">
          <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Emergency Alerts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`rounded-xl shadow-lg overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <img
                  src={alert.imageUrl}
                  alt={`Alert at ${alert.location}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {alert.location}
                      </h3>
                      <p className="text-sm text-gray-500">{alert.timestamp}</p>
                    </div>
                    <div className="w-16">
                      <CircularProgressbar
                        value={alert.cleanliness}
                        text={`${alert.cleanliness}%`}
                        styles={buildStyles({
                          textColor: darkMode ? '#A7F3D0' : '#166534',
                          pathColor: alert.cleanliness < 50 ? '#EF4444' : '#10B981',
                          trailColor: darkMode ? '#374151' : '#E5E7EB',
                        })}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => handleDistrictClick(alert.id)}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateDashboard;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Line } from 'react-chartjs-2';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Moon, Sun, Camera, ArrowUpRight, Bell, Map, TrendingUp, AlertTriangle } from 'lucide-react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function StateDashboard() {
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(false);
//   const [selectedTab, setSelectedTab] = useState('overview');

//   // Mock data - preserved from original
//   const cleanlinessPercentage = 72;
//   const alertPercentage = 45;

//   const districts = [
//     { id: 1, name: 'North District', cleanliness: 82, alerts: 8 },
//     { id: 2, name: 'South District', cleanliness: 68, alerts: 14 },
//     { id: 3, name: 'East District', cleanliness: 77, alerts: 5 },
//     { id: 4, name: 'West District', cleanliness: 71, alerts: 10 },
//     { id: 5, name: 'Central District', cleanliness: 79, alerts: 6 },
//     { id: 6, name: 'Urban District', cleanliness: 65, alerts: 18 },
//   ];

//   const emergencyAlerts = [
//     {
//       id: 1,
//       imageUrl: '/api/placeholder/400/320',
//       cleanliness: 50,
//       location: 'North District',
//       timestamp: '10 minutes ago',
//       severity: 'High'
//     },
//     {
//       id: 2,
//       imageUrl: '/api/placeholder/400/320',
//       cleanliness: 30,
//       location: 'South District',
//       timestamp: '25 minutes ago',
//       severity: 'Critical'
//     },
//     {
//       id: 3,
//       imageUrl: '/api/placeholder/400/320',
//       cleanliness: 40,
//       location: 'East District',
//       timestamp: '45 minutes ago',
//       severity: 'Medium'
//     },
//   ];

//   const monthlyData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: 'Cleanliness',
//         data: [90, 85, 80, 75, 70, 65, 60],
//         borderColor: '#10B981',
//         backgroundColor: 'rgba(16, 185, 129, 0.2)',
//         tension: 0.4,
//       },
//       {
//         label: 'Alerts',
//         data: [10, 15, 20, 25, 30, 35, 40],
//         borderColor: '#EF4444',
//         backgroundColor: 'rgba(239, 68, 68, 0.2)',
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           color: darkMode ? '#fff' : '#1F2937',
//         },
//       },
//     },
//     scales: {
//       y: {
//         grid: {
//           color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
//         },
//         ticks: {
//           color: darkMode ? '#fff' : '#1F2937',
//         },
//       },
//       x: {
//         grid: {
//           color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
//         },
//         ticks: {
//           color: darkMode ? '#fff' : '#1F2937',
//         },
//       },
//     },
//   };

//   const handleDistrictClick = (districtId) => {
//     navigate(`/district-dashboard`);
//   };

//   // Get status color for cleanliness scores
//   const getStatusColor = (value) => {
//     if (value >= 80) return 'text-green-500';
//     if (value >= 60) return 'text-yellow-500';
//     return 'text-red-500';
//   };

//   // Get alert severity color
//   const getSeverityColor = (severity) => {
//     switch (severity) {
//       case 'Critical': return 'bg-red-600';
//       case 'High': return 'bg-orange-500';
//       case 'Medium': return 'bg-yellow-500';
//       default: return 'bg-blue-500';
//     }
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header with Navigation */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//           <div>
//             <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//               State Dashboard
//             </h1>
//             <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//               Monitoring system-wide cleanliness metrics
//             </p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow flex items-center`}>
//               <span className={`mr-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Last updated: 2 minutes ago</span>
//               <TrendingUp size={16} className="text-green-500" />
//             </div>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`p-2 rounded-lg transition-colors ${
//                 darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-600'
//               } hover:bg-opacity-80 shadow`}
//             >
//               {darkMode ? <Moon size={20} /> : <Sun size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Tab Navigation */}
//         <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
//           <ul className="flex flex-wrap -mb-px">
//             {['overview', 'districts', 'alerts'].map((tab) => (
//               <li className="mr-2" key={tab}>
//                 <button
//                   onClick={() => setSelectedTab(tab)}
//                   className={`inline-flex items-center px-4 py-2 rounded-t-lg ${
//                     selectedTab === tab 
//                       ? `border-b-2 border-blue-600 ${darkMode ? 'text-blue-500' : 'text-blue-600'}`
//                       : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'}`
//                   }`}
//                 >
//                   {tab === 'overview' && <Map size={16} className="mr-2" />}
//                   {tab === 'districts' && <Camera size={16} className="mr-2" />}
//                   {tab === 'alerts' && <Bell size={16} className="mr-2" />}
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Stats Overview Section */}
//         {selectedTab === 'overview' && (
//           <>
//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
//               {/* Overall Cleanliness */}
//               <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6 flex flex-col items-center justify-center`}>
//                 <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Overall Cleanliness</h3>
//                 <div className="w-32">
//                   <CircularProgressbar
//                     value={cleanlinessPercentage}
//                     text={`${cleanlinessPercentage}%`}
//                     styles={buildStyles({
//                       textColor: darkMode ? '#A7F3D0' : '#166534',
//                       pathColor: '#10B981',
//                       trailColor: darkMode ? '#374151' : '#D1FAE5',
//                     })}
//                   />
//                 </div>
//                 <div className={`mt-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                   <span className={cleanlinessPercentage > 70 ? 'text-green-500' : 'text-yellow-500'}>
//                     {cleanlinessPercentage > 70 ? 'Good' : 'Needs Attention'}
//                   </span>
//                 </div>
//               </div>

//               {/* Alert Level */}
//               <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6 flex flex-col items-center justify-center`}>
//                 <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Alert Level</h3>
//                 <div className="w-32">
//                   <CircularProgressbar
//                     value={alertPercentage}
//                     text={`${alertPercentage}%`}
//                     styles={buildStyles({
//                       textColor: darkMode ? '#FCA5A5' : '#991B1B',
//                       pathColor: '#EF4444',
//                       trailColor: darkMode ? '#374151' : '#FEE2E2',
//                     })}
//                   />
//                 </div>
//                 <div className={`mt-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                   <span className={alertPercentage < 30 ? 'text-green-500' : alertPercentage < 60 ? 'text-yellow-500' : 'text-red-500'}>
//                     {alertPercentage < 30 ? 'Low' : alertPercentage < 60 ? 'Moderate' : 'High'}
//                   </span>
//                 </div>
//               </div>

//               {/* District Health Summary */}
//               <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6 lg:col-span-2`}>
//                 <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>District Health Summary</h3>
//                 <Line data={monthlyData} options={options} height={150} />
//               </div>
//             </div>

//             {/* Top District Performance */}
//             <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6 mb-6`}>
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>District Performance</h3>
//                 <button className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} flex items-center`}>
//                   View All <ArrowUpRight size={14} className="ml-1" />
//                 </button>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                   <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
//                     <tr>
//                       <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>District</th>
//                       <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Cleanliness</th>
//                       <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Alerts</th>
//                       <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Status</th>
//                       <th scope="col" className={`px-6 py-3 text-right text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`${darkMode ? 'bg-gray-800' : 'bg-white'} divide-y divide-gray-200 dark:divide-gray-700`}>
//                     {districts.map((district) => (
//                       <tr key={district.id} className={`hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                         <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{district.name}</td>
//                         <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                           <div className="flex items-center">
//                             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2 max-w-[100px]">
//                               <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${district.cleanliness}%` }}></div>
//                             </div>
//                             <span>{district.cleanliness}%</span>
//                           </div>
//                         </td>
//                         <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                           <span className={`px-2 py-1 rounded-full text-xs ${district.alerts > 10 ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
//                             {district.alerts}
//                           </span>
//                         </td>
//                         <td className={`px-6 py-4 whitespace-nowrap text-sm ${getStatusColor(district.cleanliness)}`}>
//                           {district.cleanliness >= 80 ? 'Excellent' : district.cleanliness >= 70 ? 'Good' : district.cleanliness >= 60 ? 'Fair' : 'Poor'}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
//                           <button 
//                             onClick={() => handleDistrictClick(district.id)}
//                             className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
//                           >
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </>
//         )}

//         {/* Districts Controls Section */}
//         {selectedTab === 'districts' && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {districts.map((district) => (
//               <div 
//                 key={district.id}
//                 className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg overflow-hidden`}
//               >
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                         {district.name}
//                       </h3>
//                       <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                         {district.alerts} active alerts
//                       </p>
//                     </div>
//                     <div className="w-16">
//                       <CircularProgressbar
//                         value={district.cleanliness}
//                         text={`${district.cleanliness}%`}
//                         styles={buildStyles({
//                           textColor: darkMode ? '#A7F3D0' : '#166534',
//                           pathColor: district.cleanliness < 60 ? '#EF4444' : district.cleanliness < 75 ? '#F59E0B' : '#10B981',
//                           trailColor: darkMode ? '#374151' : '#E5E7EB',
//                         })}
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//                       <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Cameras</p>
//                       <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>12</p>
//                     </div>
//                     <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//                       <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Staff</p>
//                       <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>8</p>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => handleDistrictClick(district.id)}
//                     className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 transition-opacity shadow-md"
//                   >
//                     <Camera size={16} />
//                     <span>Access Controls</span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Emergency Alerts Section */}
//         {selectedTab === 'alerts' && (
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Emergency Alerts</h3>
//               <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'}`}>
//                 <AlertTriangle size={14} className="mr-1" /> {emergencyAlerts.length} Active Alerts
//               </span>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {emergencyAlerts.map((alert) => (
//                 <div
//                   key={alert.id}
//                   className={`rounded-xl shadow-lg overflow-hidden ${
//                     darkMode ? 'bg-gray-800' : 'bg-white'
//                   }`}
//                 >
//                   <div className="relative">
//                     <img
//                       src={alert.imageUrl}
//                       alt={`Alert at ${alert.location}`}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className={`absolute top-3 right-3 ${getSeverityColor(alert.severity)} text-white text-xs px-2 py-1 rounded-full`}>
//                       {alert.severity}
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <div className="flex justify-between items-start mb-4">
//                       <div>
//                         <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                           {alert.location}
//                         </h3>
//                         <p className="text-sm text-gray-500">{alert.timestamp}</p>
//                       </div>
//                       <div className="w-16">
//                         <CircularProgressbar
//                           value={alert.cleanliness}
//                           text={`${alert.cleanliness}%`}
//                           styles={buildStyles({
//                             textColor: darkMode ? '#A7F3D0' : '#166534',
//                             pathColor: alert.cleanliness < 50 ? '#EF4444' : '#10B981',
//                             trailColor: darkMode ? '#374151' : '#E5E7EB',
//                           })}
//                         />
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => handleDistrictClick(alert.id)}
//                       className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StateDashboard;