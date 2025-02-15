import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-64`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64 p-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleSidebar}
          className="md:hidden mb-4 px-4 py-2 bg-gray-800 text-white rounded"
        >
          {sidebarOpen ? "Xir Menu" : "Fur Menu"}
        </button>
        <h1 className="text-3xl font-bold mb-4">Library Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;