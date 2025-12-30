function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src="images/logo.svg" alt="LoopStudios" className="footer__logo" />
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
              <img src="images/icon-facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/icon-twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/icon-pinterest.svg" alt="Pinterest" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/icon-instagram.svg" alt="Instagram" />
            </a>
          </li>
        </ul>
        <span className="footer__copyright">
          © 2021 Loopstudios. All rights reserved.
        </span>
        {/* <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
