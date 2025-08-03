import React from 'react'
import './About.css'
import Theme from '../../assets/Theme.svg'
import Hardik from '../../assets/Hardik.jpeg'
const About = () => {
  return (
    <div>
      <div id='about' className="about">
        <div className="about-tittle">
            <h1>About me</h1>
            <img src={Theme} alt="" />

        </div>
        <div className="about-section">  
            <div className="about-left">
                <img src={Hardik} alt="" />  
            </div>
             
             <div className="about-right">
            <div className="about-para">
                <p> I'm a passionate Web Developre with a strong foundation in HTML, CSS, JavaScript, and modern libraries like React Js. I have strong hand in building clean, responsive, attractive and user-friendly websites that not only look great but also perform smoothly across all devices.</p>
                <p>During my learing period I've worked on multiple projects including e-commerce platform, portfolio sites, and real-time appllication that have helped me strengthen both my frontend and backend skills. </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
       
      <div className="about_achievements">
        <div className="about-achievement">
            <h1>1</h1>
            <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
             <h1>10+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
             <h1>2</h1>
            <p>HAPPY CLIENTS</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
