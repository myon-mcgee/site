import React from 'react';
import "./about.css";
import Abouts from "../../assets/myon.png";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Abouts} width={200} height={200}alt="" className="about__img" />
        
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
            natoque penatibus et magnis dis parturient montes, nascetur 
            ridiculus mus.
            </p>
            {/*<a href="" className="btn">Download CV</a>*/}
          </div>
          {/*
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Machine Learning</h3>
                <span className="skills__number">10%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Automation</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
          </div>*/}
          <a href={resume} className="btn" download>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About