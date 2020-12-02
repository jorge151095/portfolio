import React from 'react';
import './skill.scss';

export const Skill = ({children, label}) => {
  return (
    <div className="skill-wrapper">
      <span className="icon">{children}</span>
      <p className="label">{label}</p>
    </div>
  )
}
