import React from 'react';
import { useNavigate } from 'react-router-dom';
function Hero() {
    const navigate = useNavigate();
    const handleClick = () => {
    navigate('/signup');    
  };
    return ( 
 <div className='container mb-5'>
    <div className='row text-center '>
        <img src='Assets/homeHero.png' alt='Hero Image' className='p-5'></img>
        <h1 className='mt-5'>One Platform. Smarter, Complete Trading</h1>
        <p>All features of a top trading app — stocks, F&O, mutual funds — enhanced with AI suggestions, order help, and margin support.</p>
        <button className='btn btn-primary fs-5' style={{ width:"15%", margin: '0 auto' }}
        onClick={handleClick}>Signup Now</button>
    </div>
    

</div>
     );
}

export default Hero;
