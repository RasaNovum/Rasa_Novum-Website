import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <button className="minecraft-btn">Home</button>
      </Link>
      <Link to="/mods">
        <button className="minecraft-btn">Our Mods</button>
      </Link>
      <Link to="/team">
        <button className="minecraft-btn">The Team</button>
      </Link>
      <Link to="/philosophy">
        <button className="minecraft-btn">Thoughts</button>
      </Link>
      <Link to="/socials">
        <button className="minecraft-btn">Socials</button>
      </Link>
    </header>
  );
}

export default Header;