import React, { useState, useRef } from 'react';
import './Navbar.css';
import Logo1 from '../../assets/Logo1.png';
import underline from '../../assets/underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menu from '../../assets/menu.png';
import close from '../../assets/close.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef =useRef();
const openMenu = () => {
  menuRef.current.style.right = "0";
};

const closeMenu = () => {
  menuRef.current.style.right = "-350px";
};

  return (
    <div className='navbar'>
 <img src={Logo1} alt="Logo" />
      <div className='toggle'>   <img src={Menu} onClick={openMenu} alt="" className='nav-mob-open' /></div>
   
      <ul ref={menuRef}className='nav-menu'>
        <img src= {close} onClick={closeMenu}  alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#service'>
            <p onClick={() => setMenu("service")}>Services</p>
          </AnchorLink>
          {menu === "service" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="net-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
