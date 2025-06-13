import React from 'react';
function Education() {
    return ( 
        <div className='container mb-5 mt-5'>
          <div className='row'>
            <div className='col p-5'>
              <img src='Assets/education.svg' alt='education' style={{width: '70%'}}></img>
            </div>
            <div className='col p-5 mb-5'>
              <h1 className='mb-4 fs-2'>Learn. Trade. Grow.</h1>
              <h2 className='fs-4 mb-4 '>Our platform isn't just for investing — it's for learning too.</h2>
              <p className='text-muted'>💡<b>EduTrade: </b> Get bite-sized, beginner-to-advanced lessons on stocks, mutual funds, F&O, and more.</p>
              <p className='text-muted'>🤖<b>AskBot:</b>  Confused about a term or trade? Just ask! Our AI Chatbot explains everything — in real time, your way.</p>
               <a href='' style={{textDecoration: 'none'}}>Ask chatbot <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
           <p class="text-center fs-4 fw-semibold">
           <span class="text-secondary">We’re not just an investment platform</span> —
           <span class="text-primary fw-bold fst-italic">we're your intelligent financial partner.</span>
</p>

        </div>
     );
}

export default Education;
