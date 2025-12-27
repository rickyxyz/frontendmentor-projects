import useIsMobile from "../Hooks/useIsMobile";

function Header() {
  let isOpen = false;
  const isMobile = useIsMobile();

  return (
    <header className="header">
      <img src="/images/logo.svg" alt="LoopStudios" className="header__logo" />
      <button className="header__menu_button">
        <img src="/images/icon-hamburger.svg" alt="menu" />
      </button>
      <nav
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
      </nav>
    </header>
  );
}

export default Header;
