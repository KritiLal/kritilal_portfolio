import React, { useState } from 'react'; // Import React and useState hook for state management

function Navbar() {
  // State to track if mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Switch between true/false
  };

  return (
    <header>
      {/* Logo section */}
      <div className="logo">
        <span>KL</span> KRITI LAL
      </div>

      {/* Navigation Links */}
      {/* Add 'show' class when isOpen is true to display menu on mobile */}
      <nav className={`nav-links ${isOpen ? 'show' : ''}`}>
        {/* Close menu when a link is clicked */}
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#certifications" onClick={() => setIsOpen(false)}>Certifications</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>

      {/* Hamburger Icon */}
      {/* Add 'active' class when isOpen is true for animation */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span> {/* top line */}
        <span></span> {/* middle line */}
        <span></span> {/* bottom line */}
      </div>
    </header>
  );
}

export default Navbar; // Export Navbar co
