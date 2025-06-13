import React from 'react';
function Hero() {
    return ( 
       <div className='container mb-5 p-5'>
             <div className='row text-center mb-5 mt-5 p-5'>
                  <h1 ><b>Complete Pricing & Tax Breakdown</b></h1>
                  <p className='text-muted fs-5'> All You Need to Know About Charges & Taxes</p>
             </div>
             <hr className='light-hr'></hr>
             <div className='row'>
                <div className='col-4'>
                    <img src='Assets/pricingEquity.svg'></img>
                    <h1 className='fs-3 mb-3 p-3'>Zero Brokerage Delivery</h1>
                    <p className='text-muted mt-3 mb-3 p-3 fs-5'>No charges on NSE/BSE stock delivery trades.</p>
                </div>
                <div className='col-4'>
                    <img src='Assets/intradayTrades.svg'></img>
                    <h1 className='fs-3 mb-3 p-3'>Flat Fee Trading</h1>
                    <p className='text-muted mt-3 mb-3 p-3 fs-5'>Intraday, F&O, commodities — ₹20 max per order..</p>
                </div>
                <div className='col-4'>
                     <img src='Assets/pricingEquity.svg'></img>
                     <h1 className='fs-3 mb-3 p-3'>Free Mutual Fund Investing</h1>
                     <p className='text-muted mt-3 mb-3 p-3 fs-5'>Direct MF investments with zero commission & DP charges.</p>
                </div>

             </div>
       </div>
    );
}

export default Hero;
