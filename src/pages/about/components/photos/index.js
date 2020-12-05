import React from 'react';
import './photos.scss';
import photo1 from './../../../../assets/images/photo1.jpg';
import photo2 from './../../../../assets/images/photo2.JPG';
import photo3 from './../../../../assets/images/photo3.jpg';
import photo4 from './../../../../assets/images/photo4.jpg';
import photo5 from './../../../../assets/images/photo5.jpg';
import photo6 from './../../../../assets/images/photo6.jpg';
import photo7 from './../../../../assets/images/photo7.jpg';
import photo8 from './../../../../assets/images/photo8.jpg';
import photo9 from './../../../../assets/images/photo9.jpg';
import photo10 from './../../../../assets/images/photo10.jpg';
import photo11 from './../../../../assets/images/photo11.jpg';


export const Photos = () => {
  return (
    <div className="photos-wrapper">
      <div className="photos">
        <picture className="photos__image1">
          <img src={photo1}  alt=""/>
        </picture>
        <picture className="photos__image2">
          <img src={photo2} alt=""/>
        </picture>
        <picture className="photos__image3">
          <img src={photo3} alt=""/>
        </picture>
        <picture className="photos__image4">
          <img src={photo4} alt=""/>
        </picture>
        <picture className="photos__image5">
          <img src={photo5} alt=""/>
        </picture>
        <picture className="photos__image6">
          <img src={photo6} alt=""/>
        </picture>
        <picture className="photos__image7">
          <img src={photo7} alt=""/>
        </picture>
        <picture className="photos__image8">
          <img src={photo8} alt=""/>
        </picture>
        <picture className="photos__image9">
          <img src={photo9} alt=""/>
        </picture>
        <picture className="photos__image10">
          <img src={photo10}alt=""/>
        </picture>
        <picture className="photos__image11">
          <img src={photo11} alt=""/>
        </picture>
      </div>
    </div>
  )
}
