import React from 'react';
import "./home.css";
import Me from "../../assets/myon.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Myon McGee</h1>
        <span className="home__education">Computer Science Graduate</
        span>
        <HeaderSocials/>
        <a href="#contact" className="btn">My wallet ain't got it</a>
        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home