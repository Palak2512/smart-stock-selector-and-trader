import React from 'react';
import {Link} from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container mb-5 mt-5 p-5'>
            <div className='row text-center'>
               <h3>Smart Speedy Seamless</h3>
                <p><b className='text-muted'>Your intelligent trading companion, built with AI, analytics, and real-time precision.</b></p>
                <p>Check out our <Link to=''>investment offerings → </Link> </p>
            </div>
        </div>
    );
}

export default Hero;
