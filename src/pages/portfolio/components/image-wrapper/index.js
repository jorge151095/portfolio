import React from 'react';
import './image-wrapper.scss';
import { FaSearch } from 'react-icons/fa';


export const ImageWrapper = ({open, image, id, setProject}) => {
  const handleClick = () => {
    open();
    setProject(id);
  };
  return (
    <span className="image-wrapper" onClick={handleClick}>
      <div className="mask" >
        <FaSearch/>
      </div>
      <img className="preview" src={image} alt=""/>
    </span>
  )
}
