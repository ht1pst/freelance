import { useState } from "react";
import heroimg from "../src/assets/heroimg.jpg";
import header from "../src/assets/header.svg";
import byskill from "../src/assets/byskill1.png";
import byskill2 from "../src/assets/byskill2.png";
import byskill3 from "../src/assets/byskill3.png";
import byskill4 from "../src/assets/byskill4.png";
import byskill5 from "../src/assets/byskill5.png";
import byskill6 from "../src/assets/byskill6.png";
import location1 from "../src/assets/location-1.jpg";
import location2 from "../src/assets/location-2.jpg";
import location3 from "../src/assets/location-3.jpg";
import location4 from "../src/assets/location-4.jpg";
import byskill21 from "../src/assets/website_1.png";
import byskill22 from "../src/assets/graphic.png";
import byskill23 from "../src/assets/data-entry.png";
import byskill24 from "../src/assets/mobile.png";
import byskill25 from "../src/assets/internet-marketing.png";
import byskill26 from "../src/assets/local.png";

function Hero() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <div
      className="lg:h-screen h-240 w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroimg})`,
      }}
    >
      {/* Header */}
      {/* Header */}
<header className="fixed top-0 left-0 w-full h-20 flex text-white justify-between items-center px-6 md:px-10 lg:px-20 text-lg bg-black/80 backdrop-blur-md border-b border-white/20 z-50">
  {/* Logo */}
  <img src={header} alt="logo" className="w-28 md:w-32 lg:w-40" />

  {/* Desktop Nav (lg only) */}
  <nav className="hidden lg:flex items-center space-x-10">
    <button
      onClick={() => setOpenMenu(openMenu === "hire" ? null : "hire")}
      className="flex items-center hover:text-blue-500 transition"
    >
      Hire freelancers <span className="ml-1">▼</span>
    </button>
    <button
      onClick={() => setOpenMenu(openMenu === "work" ? null : "work")}
      className="flex items-center hover:text-blue-500 transition"
    >
      Find work <span className="ml-1">▼</span>
    </button>
    <button
      onClick={() =>
        setOpenMenu(openMenu === "solutions" ? null : "solutions")
      }
      className="flex items-center hover:text-blue-500 transition"
    >
      Solutions <span className="ml-1">▼</span>
    </button>
  </nav>

  {/* Right Side */}
  <div className="flex items-center space-x-6">
    {/* Log In & Sign Up (show from md and up) */}
    <div className="hidden md:flex items-center space-x-6">
      <a href="#" className="hover:text-blue-500">Log In</a>
      <a href="#" className="hover:text-blue-500">Sign Up</a>
    </div>

    {/* Post Project (only lg and up) */}
    <a
      href="#"
      className="hidden lg:flex bg-pink-600 px-4 py-2 hover:bg-pink-700 font-semibold rounded justify-center"
    >
      Post a Project
    </a>

    {/* Hamburger (for md and below) */}
    <button
      onClick={() => setOpenMenu(openMenu === "mobile" ? null : "mobile")}
      className="lg:hidden text-3xl"
    >
      ☰
    </button>
  </div>

  {/* Mobile Menu (for md and below) */}
  {openMenu === "mobile" && (
    <div className="absolute top-20 left-0 w-full bg-black/95 text-white flex flex-col items-center space-y-6 py-6 lg:hidden">
      <a href="#" className="hover:text-blue-500">Hire Freelancers</a>
      <a href="#" className="hover:text-blue-500">Find Work</a>
      <a href="#" className="hover:text-blue-500">Solutions</a>
      <a href="#" className="hover:text-blue-500">Post a Project</a>
    </div>
  )}
</header>

      {/* Hire Freelancers Menu */}
      {openMenu === "hire" && (
        <div className="absolute top-20 left-10 w-340 bg-gray-900 text-black shadow-lg p-8 h-155 text-white">
          <div className="relative">

            {/* By Skill Submenu */}
            <div
              className="hover:bg-gray-900 h-30 w-130 pl-3 flex items-center"
              onMouseEnter={() => setOpenSubMenu("skill")}
              onMouseLeave={() => setOpenSubMenu("skill")}
            >
              <button className="flex flex-col items-start text-left">
                <h1 className="font-bold text-xl"> By Skill</h1>
                <p className="text-lg w-70">
                  Looking for a freelance with a specific skill? Start here.
                </p>
              </button>

              {openSubMenu === "skill" && (
                <div className="absolute top-0 rounded-xl left-80 justify-center w-250 h-120 bg-gray-900 flex items-center gap-10 text-white shadow-lg">
                  <div className="grid grid-cols-3 gap-5 py-3">
                    <div>
                      <div>
                        <img src={byskill} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Graphic Designers</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill2} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Website developers</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill3} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Mobile app developers</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill4} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">software developers</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill5} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">3D artists</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill6} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Illustration</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col font-semibold space-y-2">
                    <p className="font-semibold text-lg">Other Popular Skills</p>
                    <a href="#" className="font-semibold">Web developers</a>
                    <a href="#">Web developers</a>
                    <a href="#">Writers</a>
                    <a href="#">Marketing specialists</a>
                    <a href="#">SEO specialists</a>
                    <a href="#">Data entry clarks</a>
                    <a href="#">Virtual assistants</a>
                    <a href="#">Translators</a>
                    <a href="#">Financial experts</a>
                    <a href="#">Manufacturers</a>
                    <a href="#">Logistics experts</a>
                    <a href="#">Fashion designers</a>
                    <a href="#" className="text-blue-500">View more</a>
                  </div>
                </div>
              )}
            </div>

            {/* By Location Submenu */}
            <div
              className="hover:bg-gray-900 h-30 w-130 pl-3 flex items-center mt-3"
              onMouseEnter={() => setOpenSubMenu("location")}
              onMouseLeave={() => setOpenSubMenu("location")}
            >
              <button className="flex flex-col items-start text-left">
                <h1 className="font-bold text-xl"> By Location</h1>
                <p className="text-lg w-70">Search for  freelancers based on their location and timezone</p>
              </button>

              {openSubMenu === "location" && (
                <div className="absolute top-0 left-80 rounded-xl w-230 h-140 bg-gray-800 flex items-center justify-center  gap-10 text-white shadow-lg">
                  <div className="flex flex-col font-semibold space-y-2">
                    <h1 className="font-semibold text-lg w-50">Choose from millions of freelancers worldwide.</h1>
                    <a href="#">United States</a>
                    <a href="#">United Kingdom</a>
                    <a href="#">Canada</a>
                    <a href="#">India</a>
                    <a href="#">Australia</a>
                    <a href="#">Pakistan</a>
                    <a href="#">Bangladesh</a>
                    <a href="#">Indonesia</a>
                    <a href="#">Brazil</a>
                    <a href="#">China</a>
                    <a href="#">Turkey</a>
                    <a href="#">Philippines</a>
                    <a href="#" className="text-blue-500">View more</a>
                  </div>
                  <div className="grid grid-cols-2 gap-10 py-3 ">
                    <div>
                      <div>
                        <img src={location1} alt="" className=" w-60 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-60 h-22 px-3 mx-auto flex flex-col pt-3 bg-gray-900  rounded-b-lg">
                        <p className="text-white font-semibold">Working with International freelancers</p>
                        <a href="#" className="font-semibold text-blue-500">Find Out More</a>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={location2} alt="" className=" w-60 mx-auto rounded-t-lg"/>
                      </div>
                      <div  className="bg-gray-800 w-60 h-22 px-3 mx-auto flex flex-col pt-3 bg-gray-900  rounded-b-lg">
                        <p className="text-white font-semibold">Where to find the best developers</p>
                        <a href="#" className="font-semibold text-blue-500">Find Out More</a>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={location3} alt="" className="w-60 mx-auto rounded-t-lg"/>
                      </div>
                      <div  className="bg-gray-800 w-60 h-22 px-3 mx-auto flex flex-col pt-3 bg-gray-900  rounded-b-lg">
                        <p className="text-white font-semibold">Do you need a local freelancer?</p>
                        <a href="#" className="font-semibold text-blue-500">Find Out More</a>
                      </div>
                    </div>


                    <div>
                      <div>
                        <img src={location4} alt="" className="w-60 mx-auto rounded-t-lg"/>
                      </div>
                      <div  className="bg-gray-800 w-60 h-22 px-3 mx-auto flex flex-col pt-3 bg-gray-900  rounded-b-lg">
                        <p className="text-white font-semibold">Building an international team</p>
                        <a href="#" className="font-semibold text-blue-500">Find Out More</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* By Category Submenu */}
            <div
              className="hover:bg-gray-900 h-30 w-130 pl-3 flex items-center mt-3"
            >
              <button className="flex flex-col items-start text-left">
                <h1 className="font-bold text-xl"> By Category</h1>
                <p className="text-lg w-70">
                  Browse freelancers grouped by work categories.
                </p>
              </button>

             
            </div>

          </div>
        </div>
      )}


      
{/* Find Work Menu */}
{openMenu === "work" && (
  <div className="absolute top-20 left-60 w-340 bg-gray-900 text-black shadow-lg p-8 h-155 text-white">
    <div className="relative">

      {/* By Skill Submenu */}
      <div
        className="hover:bg-gray-900 h-30 w-130 pl-3 flex items-center"
        onMouseEnter={() => setOpenSubMenu("work-skill")}
        onMouseLeave={() => setOpenSubMenu("work-skill")}
      >
       <button className="flex flex-col items-start text-left">
                <h1 className="font-bold text-xl"> By Skill</h1>
                <p className="text-lg w-70">
                Search for work that requires a particular skill
                </p>
              </button>

        {openSubMenu === "work-skill" && (
          <div className="absolute top-0 left-80 rounded-xl w-250 h-120 bg-gray-900 flex items-center gap-10 text-white shadow-lg">
           <div className="grid grid-cols-3 gap-5 py-3">
                    <div>
                      <div>
                        <img src={byskill21} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Website jobs</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill22} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Graphic design</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill23} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Data entry jobs</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill24} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Mobile app development</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill25} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Internet marketing</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={byskill26} alt="" className="w-50 mx-auto rounded-t-lg"/>
                      </div>
                      <div className="bg-gray-800 w-50 h-15 mx-auto flex items-center justify-center rounded-b-lg">
                        <p className="text-white font-semibold">Local jobs</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col font-semibold space-y-5">
                    <p className="font-semibold text-lg">Other Popular Jobs</p>
                    <a href="#" className="font-semibold">Software development jobs</a>
                    <a href="#">Internet marketing jobs </a>
                    <a href="#">Data entry jobs</a>
                    <a href="#">SEO jobs</a>
                    <a href="#">Writing jobs</a>
                    <a href="#">Legal jobs</a>
                    <a href="#">Finance jobs</a>
                    <a href="#">Manufaturing jobs</a>
                    <a href="#">Logistics jobs</a>
                  
                    <a href="#" className="text-blue-500">View more</a>
                  </div>
  
          </div>
        )}
      </div>

      {/* By Category Submenu */}
      <div
        className="hover:bg-gray-900 h-30 w-130 pl-3 flex items-center mt-3"
        onMouseEnter={() => setOpenSubMenu("work-category")}
        onMouseLeave={() => setOpenSubMenu("work-category")}
      >
        <button className="flex flex-col items-start text-left">
                <h1 className="font-bold text-xl"> By Language</h1>
                <p className="text-lg w-70">
              Find projects that are in your language
                </p>
              </button>

        {openSubMenu === "work-category" && (
          <div className="absolute top-0 left-80 rounded-xl w-70 h-140 bg-gray-800 flex pt-10 justify-center gap-10 text-white shadow-lg p-5">
            <div className="flex flex-col font-semibold space-y-5">
              <h1 className="font-semibold text-lg w-50">Find work in different languages</h1>
              <a href="#">Jobs in English</a>
             <a href="#">Jobs in Spanish</a>
             <a href="#">Jobs in Portuguese</a>
              <a href="#">Jobs in French</a>
             <a href="#">Jobs in German </a>
             <a href="#">Jobs in Hindi</a>
             <a href="#">Jobs in Chinese</a>
             <a href="#">Jobs in Japanese</a>
              <a href="#" className="text-blue-500">View more</a>
            </div>
          </div>
        )}
      </div>

 <div
        className="hover:bg-gray-900 h-30 w-130 pl-3 flex items-center mt-3"
       
      >
        <button className="flex flex-col items-start text-left">
                <h1 className="font-bold text-xl"> Featured jobs</h1>
                <p className="text-lg w-70">
             Explore our current list of excited top featured projects
                </p>
              </button>

     
      </div>

 <div
        className="hover:bg-gray-900 h-30 w-130 pl-3 flex items-center mt-3"
      
      >
        <button className="flex flex-col items-start text-left">
                <h1 className="font-bold text-xl"> By Language</h1>
                <p className="text-lg w-70">
              Find projects that are in your language
                </p>
              </button>

       
      </div>
    </div>
  </div>


)}










      

      {/* Hero Main Content */}
      <main className="text-white lg:pt-90 md:pt-80 pt-30 lg:px-10 w-full space-y-20">
        <div>
          <h1 className="text-4xl md:text-5xl md:w-140 font-bold lg:w-190 w-80 px-3">
            Hire the best freelancers for any job, online.
          </h1>
        <ul className="list-disc list-outside pl-8 lg:mt-10 md:mt-5 mt-3">
  <li className="lg:text-2xl text-xl font-semibold">
    World's largest freelance marketplace
  </li>
  <li className="lg:text-2xl text-xl font-semibold">
    Any job you can possibly think of
  </li>
  <li className="lg:text-2xl text-xl font-semibold">
    Save up to 90% & get quotes for free
  </li>
  <li className="lg:text-2xl text-xl font-semibold">
    Pay only when you're 100% happy
  </li>
</ul>

          <div className="flex flex-col lg:flex-row md:flex-row md:px-3   lg:gap-5 gap-4 mt-60 md:mt-10 ">
            <button className="h-15 rounded lg:mx-auto md:mx-0 lg:mx-0 mx-auto bg-pink-600 hover:bg-pink-700 font-semibold w-80 md:w-60 text-xl">
              Hire a Freelancer
            </button>
            <button className="h-15 lg:mx-auto md:mx-0 lg:mx-0 rounded mx-auto border-white hover:text-gray-400 hover:border-gray-400 border font-semibold w-80 md:w-70 text-xl">
              Earn Money Freelancing
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
