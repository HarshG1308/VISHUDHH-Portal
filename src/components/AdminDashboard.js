import React ,{ useState} from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import StateDashboard from "./StateDashboard";
import DistrictDashboard from "./DistrictDashboard";

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

  const toggleExpandedState = (stateIndex) => {
    setExpandedState(expandedState === stateIndex ? null : stateIndex);
  };

  const [expandedCard, setExpandedCard] = useState(null);
  const toggleExpandedCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const icons = [
    "📊", // Total Reports Submitted
    "🏤", // Total Post Offices Monitored
    "🏆", // Best Performing State
    "⚠️" // Worst Performing State
  ];


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
      // Add default districts based on the entered count
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



  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg sticky top-0 z-50 flex justify-between items-center h-20 px-6">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <div className="flex space-x-4">
          <Link
            to="/state-dashboard"
            className="bg-green-700 hover:bg-green-800 px-6 py-2 text-white font-semibold rounded"
          >
            State Dashboard
          </Link>
          <Link
            to="/district-dashboard"
            className="bg-green-700 hover:bg-green-800 px-6 py-2 text-white font-semibold rounded"
          >
            District Dashboard
          </Link>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-6 py-2 text-white font-semibold rounded">
            Logout
          </button>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Admin Dashboard Content */}
        <Route
          path="/"
          element={
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Total Reports Submitted", "Total Post Offices Monitored", "Best Performing State", "Worst Performing State"].map((title, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-2xl ${expandedCard === index ? "shadow-lg scale-105" : "shadow-green-200"}`}
                onMouseEnter={() => toggleExpandedCard(index)}
                onMouseLeave={() => toggleExpandedCard(null)}
              >
                <div className="text-6xl mb-4">{icons[index]}</div>
                <h2 className="text-gray-600 text-lg font-semibold">{title}</h2>
                <p className="text-3xl font-bold text-gray-800">{index === 0 ? "1200" : index === 1 ? "850" : index === 2 ? "Maharashtra" : "Bihar"}</p>
              </div>
            ))}
          </div>
          }
        />

        {/* State Dashboard */}
        <Route path="/state-dashboard" element={<StateDashboard />} />

        {/* District Dashboard */}
        <Route path="/district-dashboard" element={<DistrictDashboard />} />
      </Routes>

      <div className="p-6">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-emerald-700 mb-4">
          Manage States and Districts
        </h2>
        
        {/* Add New State Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Add New State</h3>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={newStateName}
              onChange={(e) => setNewStateName(e.target.value)}
              placeholder="Enter state name"
              className="flex-1 px-4 py-2 border rounded"
            />
            <input
              type="number"
              value={newStateDistrictCount}
              onChange={(e) => setNewStateDistrictCount(e.target.value)}
              placeholder="Enter number of districts"
              className="flex-1 px-4 py-2 border rounded"
            />
            <button
              onClick={handleAddState}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add State
            </button>
          </div>
        </div>

        {/* State and District Management */}
        {states.map((state, stateIndex) => (
          <div key={stateIndex} className="mb-4">
            <div
              className="flex justify-between items-center bg-emerald-50 p-4 rounded shadow cursor-pointer"
              onClick={() => toggleExpandedState(stateIndex)}
            >
              <span className="text-lg font-medium text-gray-800">
                {state.name} - {state.districts.length} Districts
              </span>
              <button
                className={`text-sm px-2 py-1 rounded ${
                  expandedState === stateIndex
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {expandedState === stateIndex ? "Collapse" : "Expand"}
              </button>
            </div>

            {/* Expandable District List */}
            {expandedState === stateIndex && (
              <div className="bg-emerald-50 p-4 mt-2 rounded shadow">
                {state.districts.map((district, districtIndex) => (
                  <div
                    key={districtIndex}
                    className="flex justify-between items-center bg-white p-3 rounded shadow mb-2"
                  >
                    <span className="text-gray-700">
                      {district.name} - Camera IP: {district.cameraIP}
                    </span>
                    <button
                      onClick={() => handleDeleteDistrict(stateIndex, districtIndex)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {/* Add New District */}
                <div className="flex items-center space-x-4 mt-4">
                  <input
                    type="text"
                    value={newDistrictName}
                    onChange={(e) => setNewDistrictName(e.target.value)}
                    placeholder="Enter district name"
                    className="flex-1 px-4 py-2 border rounded"
                  />
                  <input
                    type="text"
                    value={newCameraIP}
                    onChange={(e) => setNewCameraIP(e.target.value)}
                    placeholder="Enter camera IP"
                    className="flex-1 px-4 py-2 border rounded"
                  />
                  <button
                    onClick={() => handleAddDistrict(stateIndex)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded"
                  >
                    Add District
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
 





    </div>
  );
};

export default AdminDashboard;
