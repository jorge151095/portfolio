import React from 'react';
import { Element } from 'react-scroll';
import './education.scss';
import { Card } from './components/card';
import uaemexIcon from './../../assets/images/uaemex.png';
import platziIcon from './../../assets/images/platzi.png';
import acamicaIcon from './../../assets/images/acamica.jpeg';
import bbvaIcon from './../../assets/images/bbva.jpg';
import datacampIcon from './../../assets/images/datacamp.png';
import udemyIcon from './../../assets/images/udemy.jpg';
import agileIcon from './../../assets/images/agile.png';

export const Education = () => {
  return (
    <Element className="education-wrapper" name="education">
      <h2 className="title">Education</h2>
      <span className="cards">
        <div className="column">
          <Card icon={uaemexIcon} name="Universidad Autónoma del Estado de México" institution="Computer Science Engineering" id="2013-2017"/>
          <Card 
            icon={platziIcon}
            name="React Js Avanzado"
            institution="Platzi"
            id="Credential ID 43d10f7c-69ba-4886-a469-6a12addc4ad3"
            link="https://platzi.com/@jorgeHG/curso/1601-react-avanzado/diploma/detalle/?fbclid=IwAR0c2F0pEyQ-8IRmcU__1mzLGvSzUcch5XVkXnNaJd_Vh7mgpYHPvOkZtZ8"/>
          <Card 
            icon={udemyIcon}
            name="Design Rules: Principles + Practices for great UI Design"
            institution="Udemy"
            date="Jun 2020 - No Expiration Date"
            id="UC-9d93c979-d845-4844-92ea-fccbd06da0d1"
            link="http://ude.my/UC-9d93c979-d845-4844-92ea-fccbd06da0d1"/>
          <Card 
            icon={datacampIcon}
            name="Intermediate Python"
            institution="Data Camp"
            date="Jun 2020 - No Expiration Date"
            id="a04d394e4c1e3cf4bb74a92ce1764ab1c7b7f5fb"
            link="http://ude.my/UC-9d93c979-d845-4844-92ea-fccbd06da0d1"/>
          <Card 
            icon={acamicaIcon}
            name="Programación Funcional"
            institution="Data Camp"
            date="Jun 2020 - No Expiration Date"
            id="5664a16e1cc386a2ca54caaa0178a9a11d1b9d90"
            link="https://globant.acamica.com/cert/5664a16e1cc386a2ca54caaa0178a9a11d1b9d90"/>
        </div>
        <div className="column">
          <Card 
            icon={udemyIcon}
            name="Angular: De cero a experto creando aplicaciones (Angular 8+)"
            institution="Udemy"
            date="Nov 2019 - No Expiration Date"
            id="UC-OM5OJYUB"
            link="http://ude.my/UC-OM5OJYUB"/>
          <Card 
            icon={datacampIcon}
            name="Introduction to Python"
            institution="Data Camp"
            date="Jul 2019 - No Expiration Date"
            id="4d07aeaf6ce9e1f6e71d84a5c3d064ab9666b3f7"
            link="https://www.datacamp.com/statement-of-accomplishment/course/4d07aeaf6ce9e1f6e71d84a5c3d064ab9666b3f7"/>
          <Card 
            icon={bbvaIcon}
            name="Cells Framework"
            institution="BBVA"
            date="Jul 2018 - No Expiration Date"/>
          <Card 
            icon={agileIcon}
            name="Scaled Agile Framework (SAFe)"
            institution="Scaled Agile, Inc"
            date="Feb 2019 - Expired Feb 2020"
            id="04865184-6669"
            link="https://community.scaledagile.com/apex/PrintAchievement?aid=a0td0000009DPASAA4&aaid=a0r0W00000Cr5kNQAR"/>
        </div>
      </span>
    </Element>
  )
}
