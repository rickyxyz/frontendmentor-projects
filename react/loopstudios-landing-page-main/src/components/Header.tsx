import { useState } from "react";
import useIsMobile from "../Hooks/useIsMobile";

const navItems = ["ABOUT", "CAREERS", "EVENTS", "PRODUCTS", "SUPPORT"];

function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((p) => {
      if (!p) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "unset";
      return !p;
    });
  }

  return (
    <header className="header">
      <img src="/images/logo.svg" alt="LoopStudios" className="header__logo" />
      <button className="header__menu_button" onClick={toggleMenu}>
        {!isOpen && <img src="/images/icon-hamburger.svg" alt="menu" />}
        {isOpen && <img src="/images/icon-close.svg" alt="close" />}
      </button>

      {/* Desktop navigation */}
      {/* <nav
        className={
          isMobile ? "header__navigation-mobile" : "header__navigation"
        }
        style={{ display: "none" }}
      >
        <ul>
          <li>ABOUT</li>
          <li>CAREERS</li>
          <li>EVENTS</li>
          <li>PRODUCTS</li>
          <li>SUPPORT</li>
        </ul>
      </nav> */}

      {/* Mobile navigation overlay */}
      <nav
        className={`header__mobile_overlay ${isOpen ? "visible" : "hidden"}`}
      >
        <ul>
          {navItems.map((item, index) => (
            <li key={item} style={{ "--i": index + 1 } as React.CSSProperties}>
              <a href="#">{item}</a>
            </li>
          ))}{" "}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
