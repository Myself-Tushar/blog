import React, { useState } from "react";
import "./Header.css"; // Import the custom CSS file

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleGetStartedClick = () => {
    setDrawerOpen(false);
  };

  // Scroll Function
  const smoothScroll = (event, targetId) => {
    event.preventDefault(); // Prevent default anchor behavior
  
    const targetElement = document.getElementById(targetId);
  
    // Get the height of the header
    const headerHeight = document.querySelector(".custom-header").offsetHeight;
  
    // Add 2px to the header height for extra space below the header
    const offsetPosition = targetElement.offsetTop - headerHeight - 2;
  
    // If the target element exists, scroll to it
    if (targetElement) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <header className="custom-header">
      <div className="custom-header-container">
      <a href="https://youtube.com/@tech-tsr?si=kHqX5hK8K1Iqawv6" className="no-style-link">
  <h1 className="custom-heading"><strong>Tech TSR</strong></h1>
</a>

        {/* Navbar Toggle for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <a href="#hero" className="nav-link" onClick={(e) => smoothScroll(e, "hero")}>Home</a>
          <a href="#sidebar" className="nav-link" onClick={(e) => smoothScroll(e, "sidebar")}>About</a>
          <a href="#posts" className="nav-link" onClick={(e) => smoothScroll(e, "posts")}>Posts</a>
          <a href="#gallery" className="nav-link" onClick={(e) => smoothScroll(e, "gallery")}>Gallery</a>
          <a href="#projects" className="nav-link" onClick={(e) => smoothScroll(e, "projects")}>Projects</a>
          <a href="#contact" className="nav-link" onClick={(e) => smoothScroll(e, "contact")}>Contact</a>
          <a
            href="#get-started"
            className="get-started-btn"
            onClick={(e) => {
              smoothScroll(e, "get-started");
              handleGetStartedClick();
            }}
          >
            Get Started
          </a>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {drawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      {/* Mobile Side Drawer Menu */}
      <div
        className={`fixed inset-y-0 left-0 bg-blue-900 text-white w-3/4 max-w-xs transform transition-transform duration-300 flex flex-col items-start pt-8 space-y-4 pl-6 z-50 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleDrawer}
          className="text-white text-2xl self-end pr-4"
        >
          &times;
        </button>
        <a href="#hero" className="nav-link-mobile" onClick={(e) => smoothScroll(e, "hero")}>Home</a>
        <a href="#sidebar" className="nav-link-mobile" onClick={(e) => smoothScroll(e, "sidebar")}>About</a>
        <a href="#posts" className="nav-link-mobile" onClick={(e) => smoothScroll(e, "posts")}>Posts</a>
        <a href="#gallery" className="nav-link-mobile" onClick={(e) => smoothScroll(e, "gallery")}>Gallery</a>
        <a href="#projects" className="nav-link-mobile" onClick={(e) => smoothScroll(e, "projects")}>Projects</a>
        <a href="#contact" className="nav-link-mobile" onClick={(e) => smoothScroll(e, "contact")}>Contact</a>
        <a
          href="#get-started"
          className="get-started-btn"
          onClick={(e) => {
            smoothScroll(e, "get-started");
            handleGetStartedClick();
          }}
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;