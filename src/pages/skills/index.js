import React from 'react';
import { GrDiamond } from 'react-icons/gr';
import { FaPaintRoller } from 'react-icons/fa';
import { RiPencilRuler2Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import { Element } from 'react-scroll';
import { Skill, ProgressBar } from './../../components';
import './skills.scss';

export const Skills = () => {
  return (
    <Element className="my-skills" name="skills">
      <h2 className="title">My Skills</h2>
      <span className="list">
        <Skill label="World Class Apps">{<GrDiamond/>}</Skill>
        <Skill label="Tailored To Your Needs">{<FaPaintRoller/>}</Skill>
        <Skill label="Pixel-Perfect Code">{<RiPencilRuler2Line/>}</Skill>
        <Skill label="Built With Love">{<FiHeart/>}</Skill>
      </span>
      <span className="bars">
        <div className="column">
          <ProgressBar title="JavaScript" level="90"/>
          <ProgressBar title="CSS 3" level="90"/>
          <ProgressBar title="TypeScript" level="85"/>
          <ProgressBar title="Agile Methodologies" level="90"/>
        </div>
        <div className="column">
          <ProgressBar title="Html 5" level="90"/>
          <ProgressBar title="Angular 2+" level="90"/>
          <ProgressBar title="Python" level="45"/>
          <ProgressBar title="UI Design" level="50"/>
        </div>
        <div className="column">
          <ProgressBar title="React Js" level="60"/>
          <ProgressBar title="Node Js" level="45"/>
          <ProgressBar title="Unit Testing" level="85"/>
          <ProgressBar title=".NET Core 2" level="45"/>
        </div>
      </span>
    </Element>
  )
}
