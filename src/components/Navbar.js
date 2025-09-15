import React from 'react';

function Navbar() {
  return (
    <header>
      {/* Logo section */}
      <div className="logo">
        <span>KL</span> KRITI LAL
      </div>

      {/* Navigation links */}
      <nav>
        <a href="#about">About</a>        {/* Link to About section */}
        <a href="#skills">Skills</a>      {/* Link to Skills section */}
        <a href="#projects">Projects</a>  {/* Link to Projects section */}
        <a href="#certifications">Certifications</a>  {/* Link to Projects section */}
        <a href="#contact">Contact</a>    {/* Link to Contact section */}
      </nav>
    </header>
  );
}

export default Navbar;
