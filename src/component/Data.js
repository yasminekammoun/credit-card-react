import React from 'react'  
import vmcard from './vmcard.png';
import logo from './logo.png';

const Data=(props)=>
{ 
 return (
     
    <div className="main-sec" >

    <h1 className="card-name ">Credit card</h1>
    <img className="card-logo" src={logo} />
    <div className="card-info">
      <div className="column">


        <p className="card-glob-num">{props.num.padEnd(16,'*').replace(/(.{4})/g,"$1 ")}</p>
        
        <p className='label'>MONTH/YEAR</p>
        <div className="num-label" >
    
          <p id="num4" className="bold">5478</p>

          <div className="date" >

            <span>Valid<br /> thru  </span>
            <i class="fas fa-caret-right"></i>
            <p className="bold">{props.date.replace(/(.{2})/ ,"$1 / ")}</p>

          </div>

        </div>
        <p className="bold">{props.nom}</p>
      </div>

      <img className="card-logo2" src={vmcard} />
    </div>
  </div>
 )}
export default Data;