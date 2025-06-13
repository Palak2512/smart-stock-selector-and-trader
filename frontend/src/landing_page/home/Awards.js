import React from 'react';
function Awards() {
    return ( 

        <div className='container mb-5 mt-5'>
            <div className='row mt-5 p-5'>
                <div className='col-6 p-5'>
                    <img src='Assets/largestBroker.svg' alt='Award 1'></img>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-2'>All-in-One Platform for Smart Investing & Trading</h1>
                    <p className='mb-5'>A full-stack investment platform packed with essential trading features — now enhanced with AI tools, smart guidance, and modern tech.</p>
                    <div className='row'>
                        <div className='col-6 text-start'>
                           <ul>
                            <li>Invest in Stocks, Mutual Funds, IPOs</li>
                             <li>Chatbot Assistant- For understanding Trading terms</li>
                           </ul>
                        </div>
                        <div className='col-6 text-start'>
                            <li>Margin Trading Support to Boost Your Potential Returns</li>
                            <li>Built with MERN Stack for Performance & Scale</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;
