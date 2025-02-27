import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./components/navigation/Navbar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-gray-100">
      <div className="flex flex-col h-screen">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
