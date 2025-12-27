import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";

const cardArray = [
  {
    imgSrc: "/images/mobile/image-deep-earth.jpg",
    children: (
      <h3>
        Deep
        <br />
        earth
      </h3>
    ),
  },
  {
    imgSrc: "/images/mobile/image-night-arcade.jpg",
    children: (
      <h3>
        Night
        <br />
        arcade
      </h3>
    ),
  },
  {
    imgSrc: "/images/mobile/image-soccer-team.jpg",
    children: (
      <h3>
        Soccer
        <br />
        team VR
      </h3>
    ),
  },
  {
    imgSrc: "/images/mobile/image-grid.jpg",
    children: (
      <h3>
        The
        <br />
        grid
      </h3>
    ),
  },
  {
    imgSrc: "/images/mobile/image-from-above.jpg",
    children: (
      <h3>
        From up
        <br />
        above VR
      </h3>
    ),
  },
  {
    imgSrc: "/images/mobile/image-pocket-borealis.jpg",
    children: (
      <h3>
        Pocket
        <br />
        borealis
      </h3>
    ),
  },
  {
    imgSrc: "/images/mobile/image-curiosity.jpg",
    children: (
      <h3>
        The
        <br />
        curiosity
      </h3>
    ),
  },
  {
    imgSrc: "/images/mobile/image-fisheye.jpg",
    children: (
      <h3>
        Make it
        <br />
        fisheye
      </h3>
    ),
  },
];

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <section className="section section-hero">
          <span className="josefin-sans">
            <h1>Immersive experiences that deliver</h1>
          </span>
        </section>
        <section className="section">
          <img src="/images/mobile/image-interactive.jpg" alt="" />
          <span className="section__content">
            <h2>The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </span>
        </section>
        <section className="section">
          <h2>Our creations</h2>
          <div className="section__cards">
            {cardArray.map((card, i) => (
              <Card imgSrc={card.imgSrc} key={`card-${i}`}>
                {card.children}
              </Card>
            ))}
          </div>
          <button className="button" style={{ marginTop: "-1rem" }}>
            See all
          </button>
        </section>
      </main>
      {/* <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div> */}
      <Footer></Footer>
    </>
  );
}

export default App;
