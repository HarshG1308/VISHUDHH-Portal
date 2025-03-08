import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import StateDashboard from "./StateDashboard";
import DistrictDashboard from "./DistrictDashboard";
import { ChevronDown, ChevronUp, Plus, Trash2, LogOut, Camera, MapPin, FileBarChart, Home } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [states, setStates] = useState([
    { name: "Maharashtra", districts: [{ name: "Mumbai", cameraIP: "192.168.1.1" }] },
    { name: "Bihar", districts: [{ name: "Patna", cameraIP: "192.168.1.2" }] },
  ]);
  const [expandedState, setExpandedState] = useState(null);
  const [newDistrictName, setNewDistrictName] = useState("");
  const [newCameraIP, setNewCameraIP] = useState("");
  const [newStateName, setNewStateName] = useState("");
  const [newStateDistrictCount, setNewStateDistrictCount] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  const toggleExpandedState = (stateIndex) => {
    setExpandedState(expandedState === stateIndex ? null : stateIndex);
  };

  const [expandedCard, setExpandedCard] = useState(null);
  const toggleExpandedCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const handleAddDistrict = (stateIndex) => {
    if (newDistrictName && newCameraIP) {
      const updatedStates = [...states];
      updatedStates[stateIndex].districts.push({
        name: newDistrictName,
        cameraIP: newCameraIP,
      });
      setStates(updatedStates);
      setNewDistrictName("");
      setNewCameraIP("");
    }
  };

  const handleDeleteDistrict = (stateIndex, districtIndex) => {
    const updatedStates = [...states];
    updatedStates[stateIndex].districts.splice(districtIndex, 1);
    setStates(updatedStates);
  };

  const handleAddState = () => {
    if (newStateName && newStateDistrictCount) {
      const districtCount = parseInt(newStateDistrictCount, 10);
      const newState = { name: newStateName, districts: [] };
      for (let i = 0; i < districtCount; i++) {
        newState.districts.push({ name: `District ${i + 1}`, cameraIP: "" });
      }
      setStates([...states, newState]);
      setNewStateName("");
      setNewStateDistrictCount("");
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("userRole");
    navigate("/signup");
  };

  const statsData = [
    { title: "Total Reports Submitted", value: "1,200", icon: <FileBarChart className="w-12 h-12 text-emerald-500" />, trend: "+12%" },
    { title: "Post Offices Monitored", value: "850", icon: <Home className="w-12 h-12 text-emerald-500" />, trend: "+5%" },
    { title: "Best Performing State", value: "Maharashtra", icon: <MapPin className="w-12 h-12 text-emerald-500" />, trend: "98% compliance" },
    { title: "Worst Performing State", value: "Bihar", icon: <Camera className="w-12 h-12 text-emerald-500" />, trend: "72% compliance" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-emerald-600 to-teal-700 text-white shadow-xl transition-all duration-300">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Post Office Monitor</h1>
          <div className="space-y-2">
            <Link
              to="/"
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                activeTab === "dashboard" ? "bg-white text-emerald-600 shadow-md" : "hover:bg-emerald-500"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/state-dashboard"
              onClick={() => setActiveTab("state")}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                activeTab === "state" ? "bg-white text-emerald-600 shadow-md" : "hover:bg-emerald-500"
              }`}
            >
              <MapPin className="w-5 h-5" />
              <span>State Dashboard</span>
            </Link>
            <Link
              to="/district-dashboard"
              onClick={() => setActiveTab("district")}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                activeTab === "district" ? "bg-white text-emerald-600 shadow-md" : "hover:bg-emerald-500"
              }`}
            >
              <Camera className="w-5 h-5" />
              <span>District Dashboard</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 p-3 rounded-lg text-white font-medium transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* content added */}

      {/* Main Content */}
      <div className="ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-white shadow-md p-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full">
              Welcome, Admin
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          <Routes>
            {/* Admin Dashboard Content */}
            <Route
              path="/"
              element={
                <>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {statsData.map((stat, index) => (
                      <div
                        key={index}
                        className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                          expandedCard === index ? "ring-2 ring-emerald-500" : ""
                        }`}
                        onMouseEnter={() => toggleExpandedCard(index)}
                        onMouseLeave={() => toggleExpandedCard(null)}
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-gray-500 font-medium mb-1">{stat.title}</p>
                              <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                              <p className="text-emerald-500 text-sm font-medium mt-2">{stat.trend}</p>
                            </div>
                            <div className="bg-emerald-50 p-3 rounded-lg">
                              {stat.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* States Management Section */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="border-b border-gray-100">
                      <div className="flex justify-between items-center p-6">
                        <h2 className="text-xl font-bold text-gray-800">
                          Manage States and Districts
                        </h2>
                      </div>
                    </div>
                    
                    {/* Add New State Section */}
                    <div className="p-6 border-b border-gray-100 bg-gray-50">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Add New State</h3>
                      <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                        <input
                          type="text"
                          value={newStateName}
                          onChange={(e) => setNewStateName(e.target.value)}
                          placeholder="Enter state name"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        />
                        <input
                          type="number"
                          value={newStateDistrictCount}
                          onChange={(e) => setNewStateDistrictCount(e.target.value)}
                          placeholder="Number of districts"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        />
                        <button
                          onClick={handleAddState}
                          className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add State</span>
                        </button>
                      </div>
                    </div>

                    {/* States List */}
                    <div className="p-6">
                      <div className="space-y-4">
                        {states.map((state, stateIndex) => (
                          <div key={stateIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                            <div
                              className="flex justify-between items-center bg-gray-50 p-4 cursor-pointer hover:bg-emerald-50 transition-all"
                              onClick={() => toggleExpandedState(stateIndex)}
                            >
                              <div className="flex items-center">
                                <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                                <span className="text-lg font-medium text-gray-800">
                                  {state.name}
                                </span>
                                <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                  {state.districts.length} Districts
                                </span>
                              </div>
                              <button className="text-gray-500 hover:text-emerald-600 transition-all">
                                {expandedState === stateIndex ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                              </button>
                            </div>

                            {/* Expandable District List */}
                            {expandedState === stateIndex && (
                              <div className="border-t border-gray-200 p-4">
                                <div className="space-y-3 mb-4">
                                  {state.districts.map((district, districtIndex) => (
                                    <div
                                      key={districtIndex}
                                      className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-100 hover:border-emerald-200 transition-all"
                                    >
                                      <div className="flex items-center">
                                        <Camera className="w-4 h-4 text-emerald-500 mr-3" />
                                        <div>
                                          <p className="font-medium text-gray-800">{district.name}</p>
                                          <p className="text-sm text-gray-500">IP: {district.cameraIP}</p>
                                        </div>
                                      </div>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleDeleteDistrict(stateIndex, districtIndex);
                                        }}
                                        className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-all"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Add New District */}
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="text-sm font-medium text-gray-700 mb-3">Add New District to {state.name}</h4>
                                  <div className="flex flex-wrap md:flex-nowrap gap-3">
                                    <input
                                      type="text"
                                      value={newDistrictName}
                                      onChange={(e) => setNewDistrictName(e.target.value)}
                                      placeholder="District name"
                                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                    />
                                    <input
                                      type="text"
                                      value={newCameraIP}
                                      onChange={(e) => setNewCameraIP(e.target.value)}
                                      placeholder="Camera IP"
                                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                    />
                                    <button
                                      onClick={() => handleAddDistrict(stateIndex)}
                                      className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap"
                                    >
                                      <Plus className="w-4 h-4" />
                                      <span>Add</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              }
            />

            {/* State Dashboard */}
            <Route path="/state-dashboard" element={<StateDashboard />} />

            {/* District Dashboard */}
            <Route path="/district-dashboard" element={<DistrictDashboard />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white p-6 border-t border-gray-200 text-center text-gray-600">
          <p>© 2025 Post Office Monitoring System | Admin Dashboard</p>
        </footer>
      </div>
    </div>
  );
};

export default AdminDashboard;