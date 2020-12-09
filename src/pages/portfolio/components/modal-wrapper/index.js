import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import './modal-wrapper.scss';
import acamica from './../../../../assets/images/acamica.jpeg';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export const  ModalWrapper = ({onCloseEvent, title, content, images}) => {
  
  return (
    <div className="modal-wrapper">
      <h3 className="name">{title}</h3>
      <div className="close" onClick={onCloseEvent}><AiOutlineClose /></div>
      <Carousel>
          <div>
              <img src={acamica} alt=""/>
          </div>
          <div>
              <img src={acamica} alt=""/>
          </div>
      </Carousel>
      <p className="description">{content}</p>
      <div className="btnwrapper">
        <button className="closebtn" onClick={onCloseEvent}>CLOSE</button>
      </div>
    </div>
  )
}
