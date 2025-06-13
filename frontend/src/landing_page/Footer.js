import React from 'react';
function Footer() {
    return ( 
      <div className='conatiner mt-5'>
        <hr></hr>
        <div className='row'>
          <div className='col-3'>
            <img src='Assets/logo5.png' alt='Logo' style={{ width: "35%" }} />
            <p >-Smart Stock Selector And Trader</p>
            <a href='' className='mx-3 text-muted'><i class="fa-brands fa-square-instagram text-dark"></i></a>
            <a href='' className='mx-3 text-muted'><i class="fa-brands fa-square-facebook text-dark"></i></a>
            <a href='' className='mx-3 text-muted'><i class="fa-brands fa-linkedin text-dark"></i></a>
            <a href='' className='mx-3 text-muted'><i class="fa-brands fa-square-whatsapp text-dark"></i></a><br/>
            <a href='' className='mx-3 text-muted'><i class="fa-brands fa-square-x-twitter text-dark"></i></a>
            <a href='' className='mx-3 text-muted'><i class="fa-brands fa-telegram text-dark"></i></a>
            <a href='' className='mx-3 text-muted'><i class="fa-brands fa-youtube text-dark"></i></a>
          </div>
          <div className='col-3'>
            <h3>Company</h3>
            <ul>
              <li><a href='' className='text-muted'>About Us</a></li>
              <li><a href='' className='text-muted'>Careers</a></li>
              <li><a href='' className='text-muted'>Contact</a></li>
              <li><a href='' className='text-muted'>Pricing</a></li>
              <li><a href='' className='text-muted'>FAQ</a></li>
            </ul>
          </div>
          <div className='col-3'>
             <h3>Products</h3>
            <ul>
              <li><a href='' className='text-muted'>Stock Trading</a></li>
              <li><a href='' className='text-muted'>Mutual Funds</a></li>
              <li><a href='' className='text-muted'>Margin Trading Facility (MTF)</a></li>
              <li><a href='' className='text-muted'>Chatbot</a></li>
              <li><a href='' className='text-muted'>EduTrade-Learn to Trade</a></li>
            </ul>
          </div>
          <div className='col-3'>
             <h3>Legal & Policy Documents</h3>
            <ul>
              <li><a href='' className='text-muted'>Privacy Policy</a></li>
              <li><a href='' className='text-muted'>Terms of Use</a></li>
              <li><a href='' className='text-muted'>Disclaimer</a></li>
              </ul>
          </div>
        </div>
        <p className='text-center fs-5'><b> © 2025 Equinex- Smart Stock Selector And Trader. All rights reserved.</b></p>
      </div>
     );
}

export default Footer;
