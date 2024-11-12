import React from 'react';
import "./home.css";
import Me from "../../assets/red-panda.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} width={250} height={250} alt="" className="home__img" />
        <h1 className="home__name">Myon McGee</h1>
        <span className="home__education">
          Rose-Hulman Institute of Technology Alumni <br />
          Computer Science Major <br />
          Japanese Minor <br />
          (219) 983-2741
        </span>
        <HeaderSocials/>
        <a href="#contact" className="btn">Contact Me</a>
        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home