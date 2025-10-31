import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Home,
  BookOpen,
  LogOut,
  MoreVertical,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logo.png";
import logoUser from "../../assets/logo/users.jpg";

const Viewclasses = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("View Classes");
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const ToggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-[#0A2F70] text-white flex flex-col">
        {/* Logo */}
        <div className="w-full flex h-[20%] px-4 pt-6">
          <img className="w-[33%] h-[57%]" src={logo} alt="Logo" />
          <div>
            <h1 className="font-bold text-xl pt-[10px]">ETEC CENTER</h1>
            <h3 className="text-[14px]">Build Your IT Skill</h3>
          </div>
        </div>

        {/* Home */}
        <div className="text-white mt-[31px] w-full flex justify-center">
          <Link
            to="/"
            onClick={() => setActiveTab("Home")}
            className={`flex items-center gap-3 w-[85%] px-4 py-2 rounded-md transition-all
              ${activeTab === "Home" ? "bg-[#214381]" : "hover:bg-[#214381]"}`}
          >
            <Home className="w-6 h-6 ms-2" />
            <span className="text-lg font-medium">Home</span>
          </Link>
        </div>

        {/* Classes Dropdown */}
        <div className="mt-3 flex flex-col items-center text-white">
          <button
            onClick={ToggleDropdown}
            className="relative flex items-center justify-between rounded-t-md w-[85%] px-4 py-3 bg-[#3f609c]"
          >
            <BookOpen className="w-6 h-6 absolute left-8 text-white" />
            <span className="text-center flex-1 text-xl ms-6 font-semibold">
              Classes
            </span>
            <motion.div
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute right-5 top-3"
            >
              <Plus className="w-6 h-6 text-white" />
            </motion.div>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="w-[85%] bg-[#214381]"
              >
                <Link
                  to="/viewclasses"
                  onClick={() => setActiveTab("View Classes")}
                  className={`flex items-center gap-3 w-full px-10 py-4 text-left transition-all
                    ${
                      activeTab === "View Classes"
                        ? "bg-[#1b3770]"
                        : "hover:bg-[#1b3770]"
                    }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="text-[16px] font-bold">View Classes</span>
                </Link>

                <Link
                  to="/addclasses"
                  onClick={() => setActiveTab("Add Classes")}
                  className={`flex items-center gap-3 w-full px-11 py-4 text-left transition-all
                    ${
                      activeTab === "Add Classes"
                        ? "bg-[#1b3770]"
                        : "hover:bg-[#1b3770]"
                    }`}
                >
                  <Plus className="w-5 h-5" />
                  <span className="text-[16px] font-bold">Add Classes</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Section */}
        <div className="mt-auto mb-24 text-center">
          <img
            className="rounded-full w-[90px] h-[90px] mx-auto mb-2"
            src={logoUser}
            alt="User"
          />
          <h1 className="text-white font-bold text-lg">Account-ID : 74</h1>
        </div>

        {/* Logout Button */}
        <div className="px-4 mb-5">
          <button className="flex items-center justify-center gap-2 w-full bg-[#DD2B3D] hover:bg-[#e13647] text-white py-2 rounded-md transition">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#F8FAFC] p-8 overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#0A2F70]">All Classes</h1>
          <span className="bg-[#0A2F70] text-white px-4 py-2 rounded-md font-semibold">
            Total: 1
          </span>
        </div>

        {/* In Progress Section */}
        <h2 className="text-2xl font-semibold text-[#0A2F70] mb-4">
          In Progressing
        </h2>

        {/* Class Card */}
        <div className="border-2 border-dashed border-[#214381] rounded-xl bg-[#E6EAF1] p-5 w-[400px] relative">
          <h3 className="text-xl font-bold text-[#0A2F70] mb-3">
            PHP / Laravel
          </h3>
          <ul className="text-[#0A2F70] space-y-2">
            <li>
              <strong>Class-ID:</strong> 628
            </li>
            <li>
              <strong>Chapter:</strong> 1
            </li>
            <li>
              <strong>Students:</strong> 15
            </li>
            <li>
              <strong>Time:</strong> 18:00–19:15 (Mon–Thur)
            </li>
            <li>
              <strong>Located:</strong> ETEC 2 (E105)
            </li>
            <li>
              <strong>Status:</strong> Physical (Normal)
            </li>
          </ul>

          <div className="mt-4 flex justify-between items-center relative">
            <button className="bg-[#0A2F70] hover:bg-[#214381] text-white px-4 py-2 rounded-md">
              View Students
            </button>
            <button
              onClick={ToggleMenu}
              className="bg-[#214381] text-white px-3 py-2 rounded-md relative"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 top-12 bg-white border rounded-md shadow-lg w-40 z-50">
                <ul className="flex flex-col text-sm font-medium">
                  <li className="px-4 py-2 hover:bg-[#E6EAF1] text-[#0A2F70] cursor-pointer">
                    Transfer
                  </li>
                  <li className="px-4 py-2 hover:bg-[#E6EAF1] text-[#0A2F70] cursor-pointer">
                    Update
                  </li>
                  <li className="px-4 py-2 hover:bg-[#E6EAF1] text-[#0A2F70] cursor-pointer">
                    Add Students
                  </li>
                  <li className="px-4 py-2 hover:bg-[#E6EAF1] text-[#0A2F70] cursor-pointer">
                    Add Collaps
                  </li>
                  <li className="px-4 py-2 bg-[#EAA70A] hover:bg-[#f2b83c] text-white cursor-pointer">
                    Pre-End
                  </li>
                  <li className="px-4 py-2 bg-[#DD2B3D] hover:bg-[#e44b5b] text-white cursor-pointer">
                    End
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewclasses;
