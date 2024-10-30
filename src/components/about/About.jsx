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
            I am a recent graduate with a B.S. in Computer Science and minor
            in Japanese. Currently, I am searching for a job relating to
            Software Engineering. In the meantime, I will be working on projects 
            and posting them on this site. Please feel free to check them out! 
            If you have any information about jobs or want to know more about me,
            please do not hesitate to download my resume or fill out a form to contact
            me below!
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