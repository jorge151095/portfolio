import React from 'react';
import { Element } from 'react-scroll';
import { AiOutlineGithub, AiFillLinkedin, AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import './contact.scss';

export const Contact = () => {
  return (
    <Element className="contact-wrapper" name="contact">
      <h2 className="title">Contact</h2>
      <p className="regards">Like my job? Feel free and write me.</p>
      <div className="data">
        <span className="info"><label className="name">E-mail</label><a className="link" href="mailto:jorgeantoniohernandezguzman@gmail.com">jorgeantoniohernandezguzman@gmail.com</a></span>
        <span className="info"><label className="name">Phone</label><a className="link" href="tel:+52729-239-3010">+52 729 239 3010</a></span>
        <span className="info"><label className="name">Social Media</label>
          <div className="socialmedia">
            <a className="medialink" href="https://github.com/jorge151095/"><AiOutlineGithub /></a>
            <a className="medialink" href="https://www.linkedin.com/in/jorge-antonio-hernandez-guzman/"><AiFillLinkedin /></a>
            <a className="medialink" href="mailto:jorgeantoniohernandezguzman@gmail.com"><AiFillMail /></a>
            <a className="medialink" href="https://telegram.me/jorge151095"><FaTelegramPlane /></a>
            <a className="medialink" href="https://api.whatsapp.com/send?phone=527292393010"><AiOutlineWhatsApp/></a>
          </div>
        </span>
      </div>
      <div className="autor"><p className="year">©2020</p> Jorge Antonio Hernández Guzmán. All Rights Reserved.</div>
    </Element>
  )
}
