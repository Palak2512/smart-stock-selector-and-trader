import React from 'react';

function LeftSection({imageurl,imageheight,productName, infoParagraph, trymore, learnmore}) {
    return ( 
       
           <div className='container'>
               <div className='row '>
                  <div className='col-6 p-5'>
                     <img src={imageurl} alt={productName} style={{ height: imageheight || "auto", width: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className='col-6 p-5 mt-5'>
                     <h2 className='mt-5'><b>{productName}</b></h2>
                     <p className='text-muted'>{infoParagraph}</p>
                    <a href="/trymore">{trymore}</a>&nbsp; &nbsp;
                    <a href="/learnmore">{learnmore}</a>
                  </div>
               </div>
           </div>
        
    );
}

export default LeftSection;
