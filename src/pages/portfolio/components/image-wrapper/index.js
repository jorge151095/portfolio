import React from 'react';
import './image-wrapper.scss';
import { FaSearch } from 'react-icons/fa';


export const ImageWrapper = ({open, image}) => {
  return (
    <span className="image-wrapper" onClick={open}>
      <div className="mask" >
        <FaSearch/>
      </div>
      <img className="preview" src={image} alt=""/>
    </span>
  )
}
