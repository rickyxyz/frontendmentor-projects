function Footer() {
  return (
    <footer className="footer">
      <img src="/images/logo.svg" alt="LoopStudios" className="footer__logo" />
      <nav className="footer__navigation">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Event</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
      <ul className="footer__social">
        <li>
          <a href="#">
            <img src="/images/icon-facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/icon-twitter.svg" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/icon-pinterest.svg" alt="Pinterest" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/icon-instagram.svg" alt="Instagram" />
          </a>
        </li>
      </ul>
      <span className="footer__copyright">
        © 2021 Loopstudios. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
