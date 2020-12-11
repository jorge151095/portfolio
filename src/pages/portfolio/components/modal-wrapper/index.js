import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import './modal-wrapper.scss';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export const  ModalWrapper = ({onCloseEvent, title, content, images, tags, link}) => {
  const getImage = (image) => {
    return  <img key={image} src={require(`./../../../../assets/images/${image}`).default} alt=""/>
 }
  return (
    <div className="modal-wrapper">
      <h3 className="name">{title}{
        link && <a href={link} className="link"><FiExternalLink/></a>
      }</h3>
      <div className="close" onClick={onCloseEvent}><AiOutlineClose/></div>
      <Carousel>
        {
          images.map((imageUrl) => 
            getImage(imageUrl)
          )
        }
      </Carousel>
      <p className="description">{content}</p>
      <span className="tags">
        { 
          tags &&
          tags.map((description) => 
            <span key={description} className="tag">{description}</span>
          )
        }
      </span>
      <div className="btnwrapper">
        <button className="closebtn" onClick={onCloseEvent}>CLOSE</button>
      </div>
    </div>
  )
}
