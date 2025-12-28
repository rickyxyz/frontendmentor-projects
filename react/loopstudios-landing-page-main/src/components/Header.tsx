import { useState } from "react";
import useIsMobile from "../Hooks/useIsMobile";

const navItems = ["About", "Careers", "Events", "Products", "Support"];

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
      {isMobile && (
        <button className="header__menu_button" onClick={toggleMenu}>
          {!isOpen && <img src="/images/icon-hamburger.svg" alt="menu" />}
          {isOpen && <img src="/images/icon-close.svg" alt="close" />}
        </button>
      )}

      {/* Desktop navigation */}
      {!isMobile && (
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Mobile navigation overlay */}
      {isMobile && (
        <nav
          className={`header__mobile_overlay ${isOpen ? "visible" : "hidden"}`}
        >
          <ul>
            {navItems.map((item, index) => (
              <li
                key={item}
                style={{ "--i": index + 1 } as React.CSSProperties}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
