import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import useIsMobile from "./Hooks/useIsMobile";

const cardArray = [
  {
    imgSrc: "/images/mobile/image-deep-earth.jpg",
    imgSrcDesktop: "/images/desktop/image-deep-earth.jpg",
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
    imgSrcDesktop: "/images/desktop/image-night-arcade.jpg",
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
    imgSrcDesktop: "/images/desktop/image-soccer-team.jpg",
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
    imgSrcDesktop: "/images/desktop/image-grid.jpg",
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
    imgSrcDesktop: "/images/desktop/image-from-above.jpg",
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
    imgSrcDesktop: "/images/desktop/image-pocket-borealis.jpg",
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
    imgSrcDesktop: "/images/desktop/image-curiosity.jpg",
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
    imgSrcDesktop: "/images/desktop/image-fisheye.jpg",
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
  const isMobile = useIsMobile();
  return (
    <>
      <Header></Header>
      <main className="main">
        <section className="section section-hero">
          <div className="section__container">
            <span className="section-hero__content">
              <h1>Immersive experiences that deliver</h1>
            </span>
          </div>
        </section>
        <section className="section section-about">
          <div className="section__container">
            {!isMobile && (
              <img src="/images/desktop/image-interactive.jpg" alt="" />
            )}
            {isMobile && (
              <img src="/images/mobile/image-interactive.jpg" alt="" />
            )}
            <span className="section__content">
              <h2>The leader in interactive VR</h2>
              <p>
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </span>
          </div>
        </section>
        <section className="section section-creations">
          <div className="section__container">
            <span className="section-creations__title">
              <h2>Our creations</h2>
              {!isMobile && (
                <button className="button" style={{ marginTop: "-1rem" }}>
                  See all
                </button>
              )}
            </span>
            <div className="section__cards">
              {cardArray.map((card, i) => (
                <Card
                  imgSrc={isMobile ? card.imgSrc : card.imgSrcDesktop}
                  key={`card-${i}`}
                >
                  {card.children}
                </Card>
              ))}
            </div>
            {isMobile && (
              <button className="button" style={{ marginTop: "-1rem" }}>
                See all
              </button>
            )}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
