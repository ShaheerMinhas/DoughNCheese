import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="brand">
          <img src="/logo.webp" alt="logo" className="logo" />
          <h1>Dough & Cheese</h1>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          <div className={open ? "bar bar1 rotate1" : "bar bar1"}></div>
          <div className={open ? "bar bar2 fade" : "bar bar2"}></div>
          <div className={open ? "bar bar3 rotate3" : "bar bar3"}></div>
        </button>

        {/* Desktop + Mobile Menu */}
        <nav className={`nav-links ${open ? "show" : ""}`}>
          <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
          <a href="#map" onClick={() => setOpen(false)}>Map</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
