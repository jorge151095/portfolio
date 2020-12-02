import React from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
import profileImage from './../../assets/images/main-profile.jpg'; 
import { FaAngleDown } from 'react-icons/fa';
import './home.scss';

export const Home = () => {
  return (
    <Element name="home" className="home-container">
      <span className="description">
        <p className="text">Hi, I'm <span className="name">Jorge Hernández</span>, nice to meet you. Please take a look around!</p>
        <Link activeClass="active" to="skills" smooth={true} offset={-60} duration={500} className="angleicon">
          <FaAngleDown className="icon"></FaAngleDown>
        </Link>
      </span>
      <img className="image" src={profileImage} alt="Logo" />
    </Element>
  )
}
