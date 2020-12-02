import React from 'react';
import { GrDiamond } from 'react-icons/gr';
import { FaPaintRoller } from 'react-icons/fa';
import { RiPencilRuler2Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import { Element } from 'react-scroll';
import { Skill } from './../../components/skill';
import './skills.scss';

export const Skills = () => {
  return (
    <Element className="my-skills" name="skills">
      <h2 className="title">My Skills</h2>
      <span className="list">
        <Skill label="World-Class Apps">{<GrDiamond/>}</Skill>
        <Skill label="Tailored To Your Needs">{<FaPaintRoller/>}</Skill>
        <Skill label="Pixel-Perfect Code">{<RiPencilRuler2Line/>}</Skill>
        <Skill label="Built With Love">{<FiHeart/>}</Skill>
      </span>
    </Element>
  )
}
