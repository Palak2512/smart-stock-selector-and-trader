import React from 'react';
function Hero() {
    return ( 
        <div className='container mb-5 mt-5 g-4'>
            {/*  g-4 adds horizontal spacing */}
            <div className='row text-center'>
               <h1 className='fs-2'>We simplified stock investing with intelligence.<br></br>
                   Now, Equinex is empowering traders with smart technology.
                </h1>    
            </div>

             <div className='row border-top mt-5 mb-5 '>
                <div className='col-6 p-5'>
                    <p className='text-muted mt-5  fs-5' style={{ textAlign: 'justify' }}>
                    At Equinex, we're not just building a platform — we're building confidence for every investor. 
                    </p>
                    <p className='text-muted fs-5' style={{ textAlign: 'justify' }}>Our mission is to eliminate complexity from stock trading and bring intelligent investing to everyone, whether you're a curious beginner or a seasoned trader.
                     </p>
                    <p className='text-muted fs-5 mb-5' style={{ textAlign: 'justify' }}>
                         With our Smart Stock Selector & Trader, you get personalized insights, AI-driven stock suggestions, and streamlined tools that help you make informed decisions — without the noise.
                    </p>
                </div>
                <div className='col-6 p-5'>
                  <p className='text-muted mt-5  fs-5' style={{ textAlign: 'justify' }}>
                    We combine cutting-edge technology, powerful analytics, and a deep understanding of the Indian stock market to deliver a trading experience that's fast, intuitive, and empowering.
                    </p >
                     <p className='text-muted fs-5' style={{ textAlign: 'justify' }}>From real-time support via our AI chatbot to advanced features like Margin Trading Facility (MTF), Equinex is your intelligent financial partner for every market move.

                     </p>
                     <p className='text-muted  mb-5 fs-5' style={{ textAlign: 'justify' }}>With Equinex, you don't just trade — you trade smarter, safer, and with complete confidence.
                     </p>
                </div>
             </div>
        </div>
        
     );
}

export default Hero;