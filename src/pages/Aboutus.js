import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/monk-removebg-preview.png";

function Aboutus() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-items">
          <div className="div-1">
            <img src={logo} className="img-1" />
            <h3 className="text-1">Monk AI.</h3>
          </div>

          <div className="div-2">
            <Link to="/" className="text-4">
              Home
            </Link>

            <Link to="/aboutus" className="text-3">
              About Us
            </Link>
          </div>
        </div>
      </div>

      <div className="section-5">
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
            <br />
            Further more: Looking to bring some tranquility to the chaotic world
            of crypto, Monk AI is here to provide a spiritual and meme-filled
            twist to decentralized finance. Embracing the power of laughter and
            mindfulness, this project combines ancient wisdom with internet
            humor to create an unconventional yet delightful digital currency
            experience. In delightful Awe I hope you can now understand that
            Monk AI brings a touch of humor and mindfulness to the world of
            cryptocurrencies, proving that making gains can also be a source of
            joy and laughter. Join the Monk AI community for a comical journey
            as we soar higher and harder to get our aimed goals let’s have fun
            as we build a community together.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
