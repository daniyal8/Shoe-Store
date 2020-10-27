import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.css'

function About() {
  return (
    <div>
      <h1 className="heading1">About Us</h1>
      <ScrollAnimation animateIn='fadeIn'>
      <p className="about">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<br/>
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore<br/>
      </p>
      </ScrollAnimation>
    </div>
  );
}

export default About;
