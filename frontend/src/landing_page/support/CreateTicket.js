import React from 'react';
function CreateTicket() {
    return ( 
       <div className='container mb-5 mt-5 p-5'>
           <h1 className='text-muted fs-5  mt-5'>Raise a support ticket by choosing a category that fits your issue.</h1>
               
            <div className='row mt-5'>
                <div className='col-4'>
                  <h4 style={{ fontWeight: '350' }}>➕Account Opening</h4>
                  <ul style={{ paddingLeft: '0' }}>
                    <a href=''>Resident Individual</a><br></br>
                     <a href=''>NRI / Corporate</a><br></br>
                      <a href=''>Minor / Joint accounts</a><br></br>
                       <a href=''>Required documents</a><br></br>
                       <a href=''>Glossary</a><br></br>
                    </ul>
               </div>
                   
               <div className=' col-4'>
                  <h4 style={{ fontWeight: '350' }}>👤Your Account</h4>
                  <ul style={{ paddingLeft: '0' }}>
                      <a href=''>Profile Management</a><br></br>
                     <a href=''>Modification Requests</a><br></br>
                      <a href=''>Depository Info (CMR, DP)</a><br></br>
                       <a href=''>Nomination</a><br></br>
                       <a href=''>Charges Summary</a><br></br>
                    </ul>
               </div>
               <div className='col-4'>
                   <h4 style={{ fontWeight: '350' }}>📈Trading</h4>
                  <ul style={{ paddingLeft: '0' }}>
                    <a href=''>Margin Trading Facility (MTF)</a><br></br>
                     <a href=''>Intraday Leverage & Square-off</a><br></br>
                      <a href=''>Order Types & Rejections</a><br></br>
                       <a href=''>Brokerage Plans</a><br></br>
                       <a href=''>Alerts & Notifications</a><br></br>
                    </ul>
               </div>
              
            </div>
            <div className='row mt-5'>
                
            
            <div className='col-4'>
               <h4 style={{ fontWeight: '350' }}>💳Funds & Payments</h4>
                <ul style={{ paddingLeft: '0' }}>
                    <a href=''>Add / Withdraw Money</a><br></br>
                    <a href=''>Pledging & Unpledging</a><br></br>
                    <a href=''>eMandates</a><br></br>
                    <a href=''>Refund Queries</a><br></br>
                </ul>
            </div>

             <div className='col-4'>
                <h4 style={{ fontWeight: '350' }}>📄Console / Reports</h4>
                <ul style={{ paddingLeft: '0' }}>
               <a href=''>Portfolio</a><br></br>
                <a href=''>P&amp;L Reports</a><br></br>
                <a href=''>Tax Statements</a><br></br>
             <a href=''>Corporate Actions</a><br></br>
              </ul>
            </div>

             <div className='col-4 '>
                <h4 style={{ fontWeight: '350' }} >🪙Mutual Funds</h4>

              <ul style={{ paddingLeft: '0' }}>
               <a href='' >Coin-equivalent Support</a><br></br>
               <a href=''>How to Invest</a><br></br>
               <a href=''>Fund Switching</a><br></br>
              </ul>
            </div>
            </div>
       </div>
    );
}

export default CreateTicket;
