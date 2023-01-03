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
            <p>I'm a passionate front-end developer with 6+ years of developing software in web and mobile environments.</p>
            <p>When I'm not programming, I'm playing football soccer or playing the guitar.
              I like to get in touch with my friends, travel around my country and taste new regional dishes.
              I love the nature, that's because I live near to a big lagoon.
            </p>
            <p>As co-founder of Acá entre devs, in my free time I like to bring new ideas for the business, create and implement new tools to improve our services.</p>
          </span>
          <span className="link"><a href="https://www.facebook.com/jorgeantonio.hernandez.77920"><FaFacebook/></a></span>
        </div>
      </div>
    </Element>
  )
}
