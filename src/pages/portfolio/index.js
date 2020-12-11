import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './portfolio.scss';
import bbvaSos from './../../assets/images/bbva_sos/img1.png';
import atria from './../../assets/images/atria/atria.png';
import dell from './../../assets/images/dell/dell.jpg';
import farmaciasH from './../../assets/images/farmacias_hernandez/login.png';
import portfolio from './../../assets/images/portfolio/home.png';
import petgram from './../../assets/images/petgram/petgram.png';
import supernet from './../../assets/images/super-net/menu.png';
import netaflix from './../../assets/images/netaflix/netaflix.png';
import santander from './../../assets/images/santander/santander.png';
import { useModal } from './../../components';
import { ModalWrapper } from './components/modal-wrapper';
import { ImageWrapper } from './components/image-wrapper';
import { projectsList } from './projects';

export const Portfolio = () => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: false
  });
  const [project, setProject] = useState(0);
  return (
    <Element name="portfolio" className="portfolio-wrapper">
      <h2 className="title">Portfolio</h2>
      <div className="projects">
        <ImageWrapper open={open} id={0} image={bbvaSos} setProject={setProject}/>
        <ImageWrapper open={open} id={1} image={atria} setProject={setProject}/>
        <ImageWrapper open={open} id={2}image={santander} setProject={setProject}/>
        <ImageWrapper open={open} id={3} image={supernet} setProject={setProject}/>
        <ImageWrapper open={open} id={4} image={portfolio} setProject={setProject}/>
        <ImageWrapper open={open} id={5} image={dell} setProject={setProject}/>
        <ImageWrapper open={open} id={6} image={farmaciasH} setProject={setProject}/>
        <ImageWrapper open={open} id={7} image={petgram} setProject={setProject}/>
        <ImageWrapper open={open} id={8} image={netaflix} setProject={setProject}/>
      </div>
      <Modal>
        <ModalWrapper
          onCloseEvent={close}
          title={projectsList[project].title}
          content={projectsList[project].content}
          images={projectsList[project].imagesList}
          tags={projectsList[project].tags}
          link={projectsList[project].link}/>
      </Modal>
    </Element>
  )
}
