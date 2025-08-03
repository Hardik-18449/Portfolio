import React from 'react'
import './Hero.css'
import MyProfile from '../../assets/MyProfile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={MyProfile} alt="" />
      <h1><span>Hi, I'm Hardik Gurjar,</span> Web Developer Based in Indore.</h1>
      <p>Pursuing B.tech in Computer Science and Engineering from Shri Vaishnav Vidhyapeeth Vishwavidyalaya (SVVV), Indore.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <a href="/Hardik_Resume.pdf" download className="hero-resume">My Resume</a>
      </div>
    </div>
  )
}

export default hero
