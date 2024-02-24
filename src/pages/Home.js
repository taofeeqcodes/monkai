import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/monk-removebg-preview.png";

function Home() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-items">
          <div className="div-1">
            <img src={logo} className="img-1" />
            <h3 className="text-1">Monk AI.</h3>
          </div>

          <div className="div-2">
            <Link to="/aboutus" className="text-3">
              Home
            </Link>

            <Link to="/aboutus" className="text-4">
              About Us
            </Link>
          </div>
        </div>
      </div>
      {/* SECTION-1 */}
      <div className="section-1">
        <div className="div-3">
          <h3 className="text-5">
            Monk <span>AI.</span>
          </h3>

          <a className="text-6">
            Innovative blockchain-based meme project inspired by <br /> the
            wisdom of ancient <span>monks</span>...
          </a>

          <div className="div-4">
            <Link to="https://t.me/MonkAI_eth" className="btn-1">
              Telegram
            </Link>

            <Link to="Http://www.x.com/MonkAIEth" className="btn-1">
              X
            </Link>
          </div>
        </div>

        <div className="div-5">
          <img src={logo} className="img-2" />
        </div>
      </div>
      {/* SECTION-2 */}
      <div className="section-2">
        <h2 className="text-7">Our RoadMap</h2>

        <h3 className="text-8">-Creation of socials-</h3>

        <h3 className="text-8">- Building of the community-</h3>

        <h3 className="text-8">- Smart contract development-</h3>

        <h3 className="text-8">-Introducing the utility (sneak peeks)-</h3>
      </div>

      {/* SECTION-3 */}

      <div className="section-3">
        <div className="div-6">
          <h3 className="text-9">About Us</h3>

          <a className="text-10">
            Monk AI is an innovative blockchain-based meme project inspired by
            the wisdom of ancient monks. It combines the principles of
            mindfulness, compassion, and decentralization to create a unique
            digital currency that puts the well-being of its users at the
            forefront. Through advanced artificial intelligence and
            community-driven decentralized governance, Monk AI strives to
            revolutionize the way we approach finance and transform the crypto
            world into a more mindful and sustainable ecosystem.
          </a>

          <Link to="/Aboutus" className="btn-2">
            More About Us
          </Link>
        </div>
      </div>

      {/* SECTION-4 */}

      <div className="section-4">
        <div className="div-7">
          <div className="div-8">
            <h3 className="text-11">
              Monk <span>AI.</span>
            </h3>

            <a className="text-12">
              Innovative blockchain-based meme project inspired by <br /> the
              wisdom of ancient <span>monks</span>...
            </a>

            <div className="div-11">
              <Link to="https://t.me/MonkAI_eth" className="btn-3">
                Telegram
              </Link>

              <Link to="Http://www.x.com/MonkAIEth" className="btn-3">
                X
              </Link>
            </div>
          </div>
          <div className="div-9">
            <h2 className="text-13">QUICK LINKS</h2>

            <Link to="/" className="text-14">
              Home
            </Link>

            <Link to="/aboutus" className="text-14">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
