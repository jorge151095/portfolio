import React from 'react';
import { Element } from 'react-scroll';
import './experience.scss';
import { BrandList } from './components/brand-list';
import { Timeline } from './components/timeline';

export const Experience = () => {
  return (
    <Element className="experience-wrapper" name="experience">
      <h2 className="title">Experience</h2>
      <span className="brands">
        <BrandList/>
      </span>
      <span className="timelinebox">
        <span className="wrapper">
          <Timeline />
        </span>
      </span>
    </Element>
  )
}