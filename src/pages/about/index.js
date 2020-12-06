import React from 'react';
import { Element } from 'react-scroll';
import { FaFacebook } from 'react-icons/fa';
import { Photos } from './components/photos';
import './about.scss';

export const About = () => {
  return (
    <Element className="about-wrapper" name="about">
      <h2 className="title">About me</h2>
      <div className="about">
        <Photos />
        <div className="text">
          <span className="description">
            <h4>Hi, I'm Jorge Hernández</h4>
            <p>I'm a passionate front end developer with 4+ years developing software under both web and mobile environments.</p>
            <p>When I'm not programming, I'm playing football soccer or playing the guitar.
              I like to get in touch with my friends, travel around my country and taste new regional dishes.
              I love the nature, that's because I live near to a big lagoon.
            </p>
            <p>As founder of Farmacias Hernández, in my free time I like to improve new solutions for my business, create and implement new tools to get new clients and provide excellent service.</p>
          </span>
          <span className="link"><a href="https://www.facebook.com/jorgeantonio.hernandez.77920"><FaFacebook/></a></span>
        </div>
      </div>
    </Element>
  )
}
