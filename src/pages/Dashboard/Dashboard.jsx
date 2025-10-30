import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import logoUser from "../../assets/logo/users.jpg";
import image from "../../assets/image/project.jpg";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Plus,
  ChevronDown,
  ChevronUp,
  LogOut,
  User,
} from "lucide-react";
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ToggleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const ToggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="flex h-screen bg-white-500">
      {/* sidebar  */}
      <div className="fixed inset-y-0 left-0 z-50 w-[300px] bg-[#092F73] shadow-lg transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0">
        <div className="">
          <div className="w-full h-full flex justify-center mt-[21px]">
            <img className="w-[30%] h-[30%]" src={logo} alt="" />
          </div>
          <h1 className="text-xl font-bold text-white text-center">
            ETEC CENTER
          </h1>
          <p className="text-white text-center text-[14px]">
            Build Your IT Skill
          </p>
        </div>
        {/* Menu select  */}
        <div className="mt-10 text-white flex justify-center">
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
        {/* dropdonw */}
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
              <ChevronDown className="w-7 h-7 text-white" />
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
                <button
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
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* logo users */}
        <div className="w-full  mt-12 rounded-full">
          <div className="w-full h-full flex justify-center">
            <User className="w-24  h-24 bg-white rounded-full p-3" />
            {/* <img className="rounded-full w-[150px] h-[150px]" src={logoUser} alt=""/> */}
          </div>
          <h1 className="text-center text-white font-bold text-lg mt-6">
            Account-ID : 102
          </h1>
        </div>

        {/* logout */}
        <div className="px-4 mt-64">
          <button className="flex items-center text-lg font-bold absolute bottom-6 
          justify-center gap-2 w-[90%] bg-[#DD2B3D] hover:bg-[#e13647] text-white py-1 rounded-md transition">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
      {/* main content */}
      <div className="bg-white w-full h-screen">
        {/* text content */}
        <h1 className="text-4xl text-[#0A2F70] font-bold px-3 my-4">About System</h1>
        <div className="flex justify-center">
        <hr color="" className="w-[98%]" />
        </div>
        {/* card profile 1 */}
        <div className="w-full h-[90%]">
          {/* Card project manager */}
          <div className="w-full h-1/2  flex justify-center ">
            <div className="w-[15%] h-[90%] bg-[#0A2F70] text-white rounded-lg mt-4 overflow-hidden">
              <h3 className="text-center my-3 text-[16px] font-semibold">
                NAT Sokphari
              </h3>
              <div className="w-full h-[1px] bg-amber-50"></div>
              <div className="flex justify-center">
                <img className="w-[220px] h-[170px] px-0 object-contain py-3 rounded-lg" src={image} alt="" />
              </div>
              <div className="w-full h-[1px] bg-amber-50"></div>
              <h3 className="text-center text-[16px] mt-2 font-bold">
                [ Project-Manager ]
              </h3>
              <h3 className="text-center text-[16px] px-2 ">General-Manager At ETEC</h3>
            </div>
          </div>

          {/* Card Member */}
          <div className="w-full h-1/2 flex justify-center gap-6">
           <div className="w-[15%] h-[90%] bg-[#0A2F70] text-white rounded-lg mt-6 overflow-hidden">
              <h3 className="text-center my-3 text-[16px] font-semibold">
                NAT Sokphari
              </h3>
              <div className="w-full h-[1px] bg-amber-50"></div>
              <div className="flex justify-center">
                <img className="w-[220px] h-[170px] px-0 object-contain py-3 rounded-lg" src={image} alt="" />
              </div>
              <div className="w-full h-[1px] bg-amber-50"></div>
              <h3 className="text-center text-[16px] mt-2 font-bold">
                [ Project-Manager ]
              </h3>
              <h3 className="text-center text-[16px] px-2 ">General-Manager At ETEC</h3>
            </div>
            <div className="w-[15%] h-[90%] bg-[#0A2F70] text-white rounded-lg mt-6 overflow-hidden">
              <h3 className="text-center my-3 text-[16px] font-semibold">
                NAT Sokphari
              </h3>
              <div className="w-full h-[1px] bg-amber-50"></div>
              <div className="flex justify-center">
                <img className="w-[220px] h-[170px] px-0 object-contain py-3 rounded-lg" src={image} alt="" />
              </div>
              <div className="w-full h-[1px] bg-amber-50"></div>
              <h3 className="text-center text-[16px] mt-2 font-bold">
                [ Project-Manager ]
              </h3>
              <h3 className="text-center text-[16px] px-2 ">General-Manager At ETEC</h3>
            </div>
            <div className="w-[15%] h-[90%] bg-[#0A2F70] text-white rounded-lg mt-6 overflow-hidden">
              <h3 className="text-center my-3 text-[16px] font-semibold">
                NAT Sokphari
              </h3>
              <div className="w-full h-[1px] bg-amber-50"></div>
              <div className="flex justify-center">
                <img className="w-[220px] h-[170px] px-0 object-contain py-3 rounded-lg" src={image} alt="" />
              </div>
              <div className="w-full h-[1px] bg-amber-50"></div>
              <h3 className="text-center text-[16px] mt-2 font-bold">
                [ Project-Manager ]
              </h3>
              <h3 className="text-center text-[16px] px-2 ">General-Manager At ETEC</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
