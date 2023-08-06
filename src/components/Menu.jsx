import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const preventClose = (e) => {
    e.stopPropagation();
  };

  return (
    <nav className="menu" onClick={closeMenu}>
      <div className={`burger-icon ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`menu-list ${showMenu ? "show" : ""}`} onClick={preventClose}>
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <div className="containerRea">
          <div className="dropdown">
            <li className="active">Réalisations
            </li>
            <div className="dropdown-content">
              <li>
                <Link to="/graphisme">Graphisme</Link>
              </li>
              <li>
                <Link to="/siteweb">Site web</Link>
              </li>
            </div>
          </div>
        </div>
        <li className="active">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
