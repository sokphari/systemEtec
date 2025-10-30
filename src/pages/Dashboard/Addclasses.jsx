import React from "react";
import { Link } from "react-router-dom"; // make sure you have react-router-dom installed
import { LayoutDashboard, Plus, Home, BookOpen,LogOut, User, } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logo.png";
import logoUser from "../../assets/logo/users.jpg";
import image from "../../assets/image/project.jpg";
const AddClasses = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ToggleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const ToggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [activeTab, setActiveTab] = useState("Home");
  const [formData, setFormData] = useState({
    className: "",
    teacherName: "",
    startDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Class Added:", formData);
    alert("✅ Class Added Successfully!");
    setFormData({
      className: "",
      teacherName: "",
      startDate: "",
      description: "",
    });
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#0A2F70] text-white flex flex-col">
        {/* Logo */}
        <div className="w-full flex h-[20%] px-4 pt-6">
          <img className="w-[33%] h-[57%]" src={logo} alt="" />
          <div>
            <h1 className="font-bold text-xl pt-[10px]">ETEC CENTER</h1>
            <h3 className="text-[14px]">Build Your IT Skill</h3>
          </div>
        </div>

        <div className="text-white mt-[31px] w-full flex justify-center">
          {/* Home  */}
          <button
            onClick={() => setActiveTab("Home")}
            className={`flex relative  items-center gap-3 hover:text-[#c5ccd2] w-[85%] px-4 py-2 rounded-md transition-all
                            ${
                              activeTab === "Home"
                                ? "bg-[#214381] text-white"
                                : "hover:bg-[#214381] text-white"
                            } `}
          >
            <div className="gap-x-8 flex justify-center ">
              <Home className="w-7 h-8 ms-4" />
              <span className="text-xl  font-medium">Home</span>
            </div>
          </button>
        </div>

        <div className="mt-3 flex flex-col items-center text-white">
          {/* Dropdown button */}
          <button
            onClick={ToggleDropdown}
            className={`relative flex items-center justify-between rounded-t-md w-[85%] px-4 py-3 bg-[#3f609c]  transition-all`}
          >
            {/* Left icon */}
            <BookOpen className="w-7 h-8 absolute left-8 text-white" />

            {/* Center text */}
            <span className="text-center flex-1 text-xl ms-6 font-semibold">
              Classes
            </span>

            {/* Right chevron with animation */}
            <motion.div
              animate={{ rotate: dropdownOpen ? 360 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute right-5 top-3"
            >
              <Plus className="w-7 h-7 text-white" />
            </motion.div>
          </button>

          {/* Dropdown content with animation */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-[85%] bg-[#214381] overflow-hidden"
              >
                {/* View Classes */}
                <button
                  onClick={() => setActiveTab("View Classes")}
                  className={`flex items-center gap-3 w-full px-10 py-4 text-left text-white transition-all 
                  ${
                    activeTab === "View Classes"
                      ? "bg-[#214381]"
                      : "bg-[#214381]"
                  }`}
                >
                  <BookOpen className="w-6 h-6" />
                  <span className="text-[16px] font-bold">View Classes</span>
                </button>

                {/* Add Classes */}
                {/* <button
                  onClick={() => setActiveTab("Add Classes")}
                  className={`flex items-center gap-3 w-full px-11 py-4 text-left text-white transition-all 
                  ${
                    activeTab === "Add Classes"
                      ? "bg-[#214381]"
                      : "hover:bg-[#214381]"
                  }`}
                >
                  <Plus className="w-6 h-6" />
                  <span className="text-[16px] font-bold">Add Classes</span>
                </button> */}
                <Link
                  to="/addclasses"
                  className={`flex items-center gap-3 w-full px-11 py-4 text-left text-white transition-all 
                  ${
                    activeTab === "Add Classes"
                      ? "bg-[#214381]"
                      : "hover:bg-[#214381]"
                  }`}
                >
                  <Plus className="w-6 h-6" />
                  <span className="text-[16px] font-bold">Add Classes</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* logo users */}
        <div className="w-full  mt-12 rounded-full">
          <div className="w-full h-full flex justify-center">
            {/* <User className="w-24  h-24 bg-white rounded-full p-3" /> */}
            <img className="rounded-full w-[94px] h-[94px]" src={logoUser} alt=""/>
          </div>
          <h1 className="text-center text-white font-bold text-lg ">
            Account-ID : 102
          </h1>
        </div>

        {/* logout */}
        <div className="px-4">
          <button
            className="flex items-center text-lg font-bold absolute bottom-6 
          justify-center gap-2 w-[14.5%] bg-[#DD2B3D] hover:bg-[#e13647] text-white py-1 rounded-md transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">
            Class Name
          </label>
          <input
            type="text"
            name="className"
            value={formData.className}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            placeholder="Enter class name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">
            Teacher Name
          </label>
          <input
            type="text"
            name="teacherName"
            value={formData.teacherName}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            placeholder="Enter teacher name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-5">
          <label className="block font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            placeholder="Enter description"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#0A2F70] hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md w-full transition"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClasses;
