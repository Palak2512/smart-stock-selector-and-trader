import React from 'react';
function Hero() {
    return ( 
       <section className='container-fluid' id='supportHero'>
          <div className='p-3 mt-3 mb-3' id='supportWrapper'>
            <a href='' className=' fs-5 text-white' >Support Portal</a>
            <a href='' className=' fs-5 text-white' >Equilearn-Chatbot</a>
          </div>
          <div className='row mt-3 mb-3 p-3 '>
              <div className='col-6'>
                <h3 className='fs-4'>Equinex Help Center</h3>
                <input type='text' className='form-control mb-3 p-3 ' placeholder='How to enable Margin Trading Facility (MTF)?' style={{width: '75%'}} />
                <a href=''className='text-white'>Track account setup</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href=''className='text-white'>Activate trading segments</a>&nbsp;&nbsp;&nbsp;
                <a href=''className='text-white'>Understanding MTF</a>&nbsp;&nbsp;&nbsp;<br></br>
                <a href=''className='text-white'>EquiLearn chatbot guide</a>&nbsp;
              
              </div>
                <div className='col-6'>
                    <h3 className='fs-5'>Featured</h3>
                    <ol>
                      <li><a href=''className='text-white ' >Latest MTF leverage changes & market timings</a></li>
                      <li><a href=''className='text-white '> New product launch: FinForge - Smart Trade Assistant</a></li>
                    </ol>
                   <br></br>
                </div>
          </div>
       </section>
    );
}

export default Hero;
