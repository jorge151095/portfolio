import React from 'react';
import './card.scss';

export const Card = ({icon, name, institution, date, id, link}) => {
  return (
    <div className="card-wrapper">
      <span className="icon">
        <img src={icon} alt=""></img>
      </span>
      <span className="data">
        <p className="name">{name}</p>
        <p className="institution">{institution}</p>
        { date && <p className="date">{date}</p>}
        { id && <p className="id">{id}</p>}
        { link && <a className="link" href={link}>see credential</a> }
      </span>
    </div>
  )
}
