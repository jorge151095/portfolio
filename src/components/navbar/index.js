import React,{ useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { VscMenu } from 'react-icons/vsc';
import './navbar.scss';
import { Link } from 'react-scroll';

export const NavBar = () => {
  const [isRightNavOpen, setRightNavOpenValue] = useState(false);
  const handleRightNav = () => setRightNavOpenValue(!isRightNavOpen);
  const closeMobileMenu = () => setRightNavOpenValue(false);

  return (
  <nav className={isRightNavOpen ? "navbar-container active" : "navbar-container"}>
    <div className="floatnav"></div>
    <div className={isRightNavOpen ? "background active" : "background"} onClick={closeMobileMenu}></div>
    <div className={isRightNavOpen ? "list active" : "list"}>
      <div className="link menu" onClick={handleRightNav}>
        {isRightNavOpen ? (
          <IoMdClose className="icon" />
        ) : (
          <VscMenu className="icon" />
        )}
      </div>
      <Link className='link' activeClass="active" to="home" smooth={true} offset={-60} duration={800} onClick={closeMobileMenu}>
        Home
      </Link>
      <Link className='link' activeClass="active" to="skills" smooth={true} offset={-60} duration={800} onClick={closeMobileMenu}>
        Skills
      </Link>
      <Link className='link' activeClass="active" to="experience" smooth={true} offset={-60} duration={800} onClick={closeMobileMenu}>
        Experience
      </Link>
      <Link className='link' activeClass="active" to="home" smooth={true} offset={-60} duration={800} onClick={closeMobileMenu}>
        Portfolio
      </Link>
      <Link className='link' activeClass="active" to="education" smooth={true} offset={-60} duration={800} onClick={closeMobileMenu}>
        Education
      </Link>
      <Link className='link' activeClass="active" to="about" smooth={true} offset={-60} duration={800} onClick={closeMobileMenu}>
        About me
      </Link>
      <Link className='link' activeClass="active" to="contact" smooth={true} offset={-60} duration={800} onClick={closeMobileMenu}>
        Contact
      </Link>
    </div>
  </nav>
)}