import React from 'react';
import './Services.css';
import Theme from '../../assets/Theme.svg';
import Service_data from '../../assets/service_data';
import Arrow from '../../assets/Arrow.png';

const Services = () => {
  return (
    <div id='service' className="services">
      <div className="services-tittle">
        <h1>My Services</h1>
        <img src={Theme} alt="" />
      </div>
      <div className="services-container">
        {Service_data.map((service, index) => {
          return (
            <div key={index} className="services-formate">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-read-more">
                <p>Read More</p>
                <img src={Arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
