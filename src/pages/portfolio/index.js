import React from 'react';
import { Element } from 'react-scroll';
import './portfolio.scss';
import bbvaSos from './../../assets/images/bbva_sos/img4.png';
import atria from './../../assets/images/atria/atria.png';
import dell from './../../assets/images/dell/dell.jpg';
import farmaciasH from './../../assets/images/farmacias_hernandez/login.png';
import portfolio from './../../assets/images/portfolio/home.png';
import petgram from './../../assets/images/petgram/petgram.png';
import resposive from './../../assets/images/responsive/responsive.png';
import netaflix from './../../assets/images/netaflix/netaflix.png';
import santander from './../../assets/images/santander/santander.png';
import { useModal } from './../../components';
import { ModalWrapper } from './components/modal-wrapper';
import { ImageWrapper } from './components/image-wrapper';

export const Portfolio = () => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: false
  });
  return (
    <Element name="portfolio" className="portfolio-wrapper">
      <h2 className="title">Portfolio</h2>
      <div className="projects">
        <ImageWrapper open={open} image={bbvaSos}/>
        <ImageWrapper open={open} image={atria}/>
        <ImageWrapper open={open} image={santander}/>
        <ImageWrapper open={open} image={petgram}/>
        <ImageWrapper open={open} image={portfolio}/>
        <ImageWrapper open={open} image={dell}/>
        <ImageWrapper open={open} image={farmaciasH}/>
        <ImageWrapper open={open} image={resposive}/>
        <ImageWrapper open={open} image={netaflix}/>
      </div>
      <Modal>
        <ModalWrapper onCloseEvent={close} title="test" content="test"/>
      </Modal>
    </Element>
  )
}
