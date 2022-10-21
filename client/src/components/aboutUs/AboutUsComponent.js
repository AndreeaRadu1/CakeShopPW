import React from 'react';

import './aboutUs.css';
import { useNavigate } from "react-router-dom";

function AboutUsComponent() {

  const navigate = useNavigate();
  const navigateToGallery = () => {
    navigate('/gallery');
  };

  return (
    <div>
      <div className='headerAboutUs'>
        <img src="https://www.rosalindmillercakes.com/wp-content/uploads/2020/10/header-our-cakes_2048x2048.jpg"></img>
        
        <div className='textHeader'>
          <p>Welcome to Sparkles! We are glad and grateful you're here!</p>
          <p> WE LOVE WHAT WE DO!</p>
        </div>

        <div className='paragrafe'>Sparkles specialises in exquisitely hand-crafted, premium celebration cakes for any occasion. We have a team of highly skilled cake designers and decorators who can create a truly personalised and memorable cake which is bound to delight at your special occasion.</div>   
        <div  className='paragrafe'>Our cakes are made from the highest quality ingredients sourced fresh from the best producers, many of which we have been working in partnership with since the business began. </div> 
        <div className='paragrafe'>Please visit our <span onClick={navigateToGallery} className="galerieAboutUs">gallery</span> of exquisite hand-crafted celebration cakes to see examples of our creations or order a celebration cake via our website. To discuss your requirements in more detail with our team of designers, please contact us or visit one of our shops.</div>    

        <div className='footer'>
          <div className='childrenOne'>
            <p>Phone: 0765678431 </p>
            <p>Email: sparkles@gmail.com</p>
            <p>Address: Meditation Lane 5</p>            
          </div>
          <div className='childrenTwo'>
            <p>Monday - Friday: 07:30 - 20:00</p>
            <p>Saturday - Sunday: 09:00 - 19:00</p>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default AboutUsComponent;