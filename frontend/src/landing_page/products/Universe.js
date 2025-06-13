import React from 'react';
function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center mb-5 mt-5'>
                  <h1 className="fw-bolder"><b>The Equinex Ecosystem</b></h1>
            </div>
            <div className='row'>
                <div className='col-6 mb-5 p-5'>
                   <img src='Assets/l1.png' className='mb-3 p-3 row 'style={{height:"22%"}}></img>
                   <p className='text-muted'>Craft and backtest trading strategies with zero coding — perfect for smart, data-driven traders.</p>
                   <img src='Assets/l2.png' className='mb-3 p-3 row'style={{height:"21%"}}></img>
                   <p className='text-muted'>Unlock powerful stock insights, market trends, and analytics to make sharper investment decisions.</p>
                </div>
                <div className='col-6 mb-5 p-5'>
                   <img src='Assets/l3.png' className='mb-3 p-3 row'style={{height:"18%"}}></img>
                   <p className='text-muted'>Invest in expert-curated, thematic baskets tailored to your goals — from growth to sustainability.</p>
                   <img src='Assets/l4.png' className='mb-3 p-3 row'style={{height:"25%"}}></img>
                   <p className='text-muted'>Your friendly AI chatbot that simplifies stock market terms and answers beginner queries in real time.</p>
                </div>
            </div>
        </div>
    );
}

export default Universe;