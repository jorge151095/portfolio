import React from 'react';
import { Element } from 'react-scroll';
import { Photos } from './components/photos';
import './about.scss';

export const About = () => {
  return (
    <Element className="about-wrapper" name="about">
      <h2 className="title">About me</h2>
      <div className="about">
        <Photos />
        <div className="text">
          <span className="description"></span>
          <span className="link"></span>
        </div>
      </div>
    </Element>
  )
}
