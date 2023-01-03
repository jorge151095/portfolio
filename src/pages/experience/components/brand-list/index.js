import React from 'react';
import './brand-list.scss';
import DellLogo from './../../../../assets/images/Dell.png';
import BBVALogo from './../../../../assets/images/BBVA.png';
import SantanderLogo from './../../../../assets/images/Santander.png';
import AtriaLogo from './../../../../assets/images/atria.png';
import GlobantLogo from './../../../../assets/images/Globant.png';
import FarmaciasHLogo from './../../../../assets/images/FarmaciasH.png';
import IndeedLogo from './../../../../assets/images/indeed.png';
import AELogo from './../../../../assets/images/agile_engine.png';
import AcaentredevsLogo from './../../../../assets/images/aca_entre_devs.png';

export const BrandList = () => {
  return (
    <div className="brand-list">
      <div className="column with-padding">
        <img className="logo" src={DellLogo} alt="Logo" />
        <img className="image" src={AtriaLogo} alt="Logo" />
        <img className="image" src={SantanderLogo} alt="Logo" />
      </div>
      <div className="column with-padding">
        <img className="logo" src={BBVALogo} alt="Logo" />
        <img className="image" src={GlobantLogo} alt="Logo" />
        <img className="image" src={FarmaciasHLogo} alt="Logo" />
      </div>
      <div className="column">
        <img className="logo" src={IndeedLogo} alt="Logo" />
        <img className="image" src={AELogo} alt="Logo" />
        <img className="image" src={AcaentredevsLogo} alt="Logo" />
      </div>
    </div>
  )
}
