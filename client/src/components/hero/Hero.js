import React from 'react'
import'./Hero.scss';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  return (
    <div className='Hero'>
       <div className="hero-content center">
        <h1 className='heading'>Exclusive Prints and ArtWork</h1>
        <p className="subheading">
          Exclusive arts Piceces, for the Exclusive You.</p>
        <button onClick={() => navigate("/category")} className="cta btn-primary" >Explore More</button>
       </div>
    </div>
  )
}

export default Hero
