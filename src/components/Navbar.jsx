import { useState } from 'react';
import { Link } from 'react-router-dom';
import cmuLogo from '../assets/cmu-logo.png';

const navItems = [
  { name: 'About Hazard World', path: '/about' },
  { name: 'Announcements', path: '/announcements' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar fixed-top ${menuOpen ? 'menu-open' : ''}`}>
            <div className="container d-flex align-items-center justify-content-between">
        <div className="logo-and-toggle d-flex align-items-center">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={cmuLogo} alt="Logo" />
            </Link>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
            <li key={index}>
                <Link className="nav-link" to={item.path} onClick={closeMenu}>
                {item.name}
                </Link>
            </li>
            ))}
            <li>
            <Link to="/login" onClick={closeMenu}>
                <button className="btn-login">Admin Login</button>
            </Link>
            </li>
        </ul>
        </div>

    </nav>
  );
};

export default Navbar;
