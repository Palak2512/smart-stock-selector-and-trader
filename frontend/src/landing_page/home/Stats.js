import React from 'react';
function Stats() {
    return ( 
        <div className='container p-3 mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                <h1 className='mb-5 fs-2'>Grow Your Wealth Confidently</h1>
                <h2 className='fs-4'>🤝 Built for You</h2>
                <p className='text-muted'>Trusted by a growing community of investors who value clarity, control, and smart decisions — all in one place.</p>
                <h2 className='fs-4'>🚫 No Spam. No Noise</h2>
                <p className='text-muted'>No gimmicks. No clutter. Just a clean, ad-free experience that respects your focus — trade at your pace.</p>
                <h2 className='fs-4'>🔁 Smarter Ecosystem</h2>
                <p className='text-muted'>We're more than an app. We combine powerful stock tools, smart suggestions, real-time help, and margin flexibility — all backed by secure modern tech.</p>
                <h2 className='fs-4'>📘 Learn as You Trade</h2>
                <p className='text-muted'>With an in-app chatbot, you're never stuck. Get trading terms explained instantly, ask questions, and make informed moves.</p>
                <h2 className='fs-4'>📈 Invest Better, Grow Smarter</h2>
                <p className='text-muted'>Whether you're a beginner or a seasoned trader, our AI and research-backed tools help you optimize your portfolio with confidence.</p>
                </div>
                <div className='col-6 p-5'>
                  <img src='Assets/ecosystem.png' alt='ecosystem' width="100%" ></img>  
                  <a href='' style={{textDecoration: 'none'}} >Explore our products &nbsp; 
                    <i class="fa-solid fa-arrow-right"></i>&nbsp;
                  </a>
                  <a href='' style={{textDecoration: 'none'}}> Try it</a>
                </div>
            </div>
        </div>
     );
}

export default Stats;
