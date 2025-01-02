import { NavLink } from "react-router-dom";
import "../../style/globals.css";
import "./header.css";

function Header() {
  return (
    <header className="header-container-link">
      <a
        href="https://www.youtube.com/watch?v=oVcQTECY_ZQ&ab_channel=RADEGON"
        target="_blank"
        rel="noopener noreferrer"
        className="easter-egg"
      >
        <img
          src="/src/assets/images/Logo.png"
          alt="logo good vibes l'actualité qui fait du bien"
        />
      </a>

      <nav className="link-container-page">
        <ul>
          <li>
            <NavLink to="/accueil">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/societe">Société</NavLink>
          </li>
          <li>
            <NavLink to="/environnement">Environnement</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/Apropos">À propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
