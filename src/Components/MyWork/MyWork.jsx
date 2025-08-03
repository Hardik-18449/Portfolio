import React from 'react';
import './MyWork.css';
import Theme from '../../assets/Theme.svg';
import mywork_data from '../../assets/mywork_data';
import Arrow from '../../assets/Arrow.png';

const MyWork = () => {
  return (
    <div id='work' className="mywork">
    <div className="mywork-tittle">
      <h1>My Latest Work</h1>
      <img src={Theme} alt="" />
    </div>
    <div className="mywork-container">
      {mywork_data.map((work,index)=>{
        return <img key={index} src={work.w_img} alt=""className='work-img'/>
      })}
    </div>
    <div className="mywork-showmore">
      <p>Show more </p>
      <img src={Arrow} alt="" />
    </div>

      
    </div>
  );
};

export default MyWork;
