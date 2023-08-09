import React from 'react';
import './about.css'; 

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="aboutme">
        <img src="/assets/images/me.PNG" alt="Baily" className="image"/>
        <div className="info">
          <h2>Baily Locatelli</h2>
          <p>
            Hello my name is Baily Locatelli, I currently reside in the Bay Area, California. A little bit about me is I love to to interact and work with other people, working on hobbies outside of work, and i feel as I am a great leader when a task is at hand. For years i have been working in the construction industry but have always loved computers and anything tech so i decided to give web development a shot.
          </p>
          <p className='para'>
          I am Persuing a Career in Full stack web Development, in my portfolio I will encase some of the work that i am most proud of at this time. I am a beginner developer but have the drive and knwoledge to go long lenths. Some of the material I have learned are HTMl, CSS, JavaScript, Web-API, NodeJS, OOP, Express, SQL, ORM, MCV, NoSQL, and React. I am open and willing to contiunue to build upon the material i have been learning and studying, as well as be open to using any new material thrown at my way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;