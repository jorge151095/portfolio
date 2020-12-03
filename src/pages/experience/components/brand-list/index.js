import React from 'react';
import './brand-list.scss';
import DellLogo from './../../../../assets/images/Dell.png';
import BBVALogo from './../../../../assets/images/BBVA.png';
import SantanderLogo from './../../../../assets/images/Santander.png';
import AtriaLogo from './../../../../assets/images/atria.png';
import GlobantLogo from './../../../../assets/images/Globant.png';
import FarmaciasHLogo from './../../../../assets/images/FarmaciasH.png';

export const BrandList = () => {
  return (
    <div className="brand-list">
      <div className="column first">
        <img className="logo" src={DellLogo} alt="Logo" />
        <img className="image" src={AtriaLogo} alt="Logo" />
        <img className="image" src={SantanderLogo} alt="Logo" />
      </div>
      <div className="column">
        <img className="logo" src={BBVALogo} alt="Logo" />
        <img className="image" src={GlobantLogo} alt="Logo" />
        <img className="image" src={FarmaciasHLogo} alt="Logo" />
      </div>
    </div>
  )
}
