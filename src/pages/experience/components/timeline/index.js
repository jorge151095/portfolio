import React from 'react';
import './timeline.scss';

export const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2 className="role">Web UI Developer</h2>
            <h3 className="company">Globant</h3>
            <p className="description">Design and develop web apps to differents clients as <b>Dell</b> and <b>Atria Wealth Solutions</b> (https://www.atriawealth.com).
              Work with global teams, propose software architecture, get in touch with new AI technologies, develop systems from scratch, propose UI solutions, build quality code using best code practices and high unit test coverage.
            </p>
            <p className="date">Feb 2020 – Present</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2 className="role">CTO - Web Developer</h2>
            <h3 className="company">Farmacias Hernández</h3>
            <p className="description">
              Design and develop web system to buy and sell pharmaceutical products. Control the inventory and the administration in general (inputs, outputs, sales, investment). 
              Design UX/UI, improve user experience. 
              Update project to new tools and FE/BE frameworks as well as integrate CI/CD in microsoft azure.
            </p>
            <p className="date">Jan 2017 – Present</p>  
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2 className="role">Frontend Developer</h2>
            <h3 className="company">GFT Group</h3>
            <p className="description">
            Create, fix, and optimize web componets for super mobile app in <b>Santander Bank</b>. Create the properly documentantion for web components exposed in a public catalog. This components are used by all teams in super mobile project.
            Implement new Super Net requirements, propose the architecture design.
            Create unit testing for each component and operative.
            Give trainings for news teammates.
            </p>
            <p className="date">Mar 2019 – Feb 2020</p>    
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2 className="role">Web Consultant</h2>
            <h3 className="company">BBVA Bancomer</h3>
            <p className="description">
              Desing and web development in CELLS framework (Core Polymer JS), create web components, integrate and use APIs and REST service. 
              Compile web apps to ios and android operating systems. Working at <b>SOS Seguros Bancomer</b>.
            </p>
            <p className="date">Mar 2018 – Mar 2019</p>   
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2 className="role">Fullstack Developer</h2>
            <h3 className="company">Edutec</h3>
            <p className="description">
            Develop web systems to provide solutions using information technologies.
            Design and create web system to request permission for building in the local geographic area of the municipality of Atlacomulco, Mexico State.
            </p>
            <p className="date">Sep 2017 – Dec 2017</p>   
          </div>
        </div>
      </div>
  </div>
  )
}
