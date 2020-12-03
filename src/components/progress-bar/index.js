import React from 'react';
import './progress-bar.scss';

export const ProgressBar = ({title, level}) => {
  return (
    <div className="progress-bar">
      <h6 className="description">
        {title}<span className="label">{level}<em>%</em></span>
      </h6>
      <div className="bar">
        <span className="progress" style={{width: `${level}%`}}></span>
      </div>
    </div>
  )
}