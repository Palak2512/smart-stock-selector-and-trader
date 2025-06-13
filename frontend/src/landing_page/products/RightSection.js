import React from 'react';
function RightSection({ imageurl,productName, infoParagraph, trymore, learnmore}) {
    return ( 
        
          <div className='container '>
           <div className='row mb-5'>
                <div className='col-6 mb-5 p-5'>
                    <h2 className='mt-5'><b>{productName}</b></h2>
                    <p className='text-muted'>{infoParagraph}</p>
                    <a href="/trymore">{trymore}</a>&nbsp; &nbsp;
                    <a href="/learnmore">{learnmore}</a>
                </div>
            <div className='col-6 '>
             <img src={imageurl} alt={productName}  />
            </div>
           </div>
          </div>
        
    );
}

export default RightSection;
