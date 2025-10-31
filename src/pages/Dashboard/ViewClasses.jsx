import React from "react";
import { Link } from "react-router-dom"; // make sure you have react-router-dom installed
import {
  LayoutDashboard,
  Plus,
  Home,
  BookOpen,
  LogOut,
  User,
  MoreVertical,
  Airplay ,
  UsersRound ,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logo.png";
import logoUser from "../../assets/logo/users.jpg";
import image from "../../assets/image/project.jpg";
const Viewclasses = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ToggleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const ToggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [activeTab, setActiveTab] = useState("Home");
  const [formData, setFormData] = useState({
    className: "",
    teacherName: "",
    startDate: "",
    description: "",
  });
  const ToggleMenu = () => setMenuOpen(!menuOpen);
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
          <Link
            to={"/"}
            onClick={() => setActiveTab("Home")}
            className={`flex relative  items-center gap-3 hover:text-[#c5ccd2] w-[85%] px-4 py-2 rounded-md transition-all
                            ${
                              activeTab === "Home"
                                ? "bg-[#214381]  text-white"
                                : "hover:bg-[#214381] bg-[#214381] text-white"
                            } `}
          >
            <div className="gap-x-8 flex justify-center ">
              <Home className="w-7 h-8 ms-4" />
              <span className="text-xl  font-medium">Home</span>
            </div>
          </Link>
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
            <img
              className="rounded-full w-[94px] h-[94px]"
              src={logoUser}
              alt=""
            />
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
      <div className="h-full w-[83.5%]">
        <div className=" w-full h-[20%] flex  justify-center items-center">
          <div className="w-[97%] h-[90%] flex ps-15 items-center gap-25 mt-4 bg-[#E6EAF1] rounded-2xl">
            <div className="w-[28%] border border-dashed h-[75%] gap-5 px-10 flex items-center bg-[#D0D7E4] ">
                <div className="w-[65px] h-[65px] flex justify-center items-center rounded-[50%] bg-white">
                    <Airplay className="w-10 h-10" />
                </div>
                <div className="w-[50%] h-[100%] pt-5 ">
                    <h1 className="font-normal text-xl">All Classes</h1>
                    <span className="text-xl font-medium">1</span>
                </div>
            </div>
            <div className="w-[28%] border border-dashed h-[75%] gap-5 px-10 flex items-center bg-[#D0D7E4] ">
                <div className="w-[65px] h-[65px] flex justify-center items-center rounded-[50%] bg-white">
                    <UsersRound className="w-10 h-10" />
                </div>
                <div className="w-[50%] h-[100%] pt-5 ">
                    <h1 className="font-normal text-xl">All Students</h1>
                    <span className="text-xl font-medium">15</span>
                </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl my-5 px-3 font-semibold text-[#0A2F70]">
          In Progressing
        </h1>
        <div className="border-2 border-dashed border-[#214381] flex-col left-4 justify-center h-[510px] bg-[#E6EAF1] p-6 w-[400px] relative">
          <div className="w-[350px] h-[410px] bg-amber-200 overflow-hidden rounded-xl">
                <h3 className="text-3xl w-full px-2 font-bold text-[#0A2F70] bg-[#F2F2F2] py-2">
                PHP/Laravel
                </h3>
                <ul className="text-[#0A2F70] text-2xl space-y-0">
                <li className="py-3 px-2 bg-[#FFFFFF]">
                    <span className="font-normal">Class-ID:</span> 628
                </li>
                <li className="bg-[#F2F2F2] py-3 px-2">
                    <span className="font-normal">Chapter:</span> 1
                </li>
                <li className="py-3 px-2 bg-[#FFFFFF]">
                    <span className="font-normal">Students:</span> 15
                </li>
                <li className="bg-[#F2F2F2] pt-2 h-[80px] px-2">
                    <span className="font-normal">Time:</span> 18:00–19:15 (Mon–Thur)
                </li>
                <li className="py-3 px-2 bg-[#FFFFFF]">
                    <span className="font-normal">Located:</span> ETEC 2 (E105)
                </li>
                <li className="bg-[#F2F2F2] py-3 px-2"> 
                    <span className="font-normal">Status:</span> Physical (Normal)
                </li>
                </ul>
          </div>
                <div className="mt-3 flex justify-between items-center relative">
                <button className="bg-[#0A2F70] hover:bg-[#214381] text-white px-24 py-2 rounded-md">
                    View Students
                </button>
                <button
                    onClick={ToggleMenu}
                    className="bg-[#0A2F70] text-white px-3 py-2 rounded-md relative"
                >
                    <MoreVertical className="w-6 h-6" />
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
