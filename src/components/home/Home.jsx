import React from 'react';
import "./home.css";
import Me from "../../assets/myon.png";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Myon McGee</h1>
        <span className="home__education">I am a Computer Scientist</span>
      </div>
    </section>
  )
}

export default Home