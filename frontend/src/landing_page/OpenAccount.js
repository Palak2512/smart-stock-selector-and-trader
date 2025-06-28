import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');    // adjust path to your signup route
  };

  return (
    <div className='container mb-5'>
      <div className='row text-center'>
        <h1 className='mt-5'>Open an Equinex account</h1>
        <p>“Experience intelligent trading with zero hassle.”</p>
        <button
          className='btn btn-primary fs-5'
          style={{ width: "15%", margin: '0 auto' }}
          onClick={handleClick}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
