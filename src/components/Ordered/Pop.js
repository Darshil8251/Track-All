import React from 'react';
import './Pop.css';

function Pop() {
  return (
    
    <div className='pop'>
      <div className="ordered">
      <p> 
       <span><h2>Orderd Alert</h2>#123465656</span> </p>
      </div>
      <div className="item">
        <span>Orderd From:Zomato</span>
        <hr style={{height:"20px"}} />
        <p>
           Dal_Bati(1) =200<br/>
           jeera-rice  =90 
        </p>
        <hr />
        <span>Total=200</span>
        </div>
        <hr />
        <button className='Rejected'>
            Rejected
        </button>
        <button className='Accepted'>
            Accepted
        </button>
      
    </div>
  );
}

export default Pop;
