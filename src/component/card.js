import React from 'react';
import data  from '../data.json';
import logo from '../logo.svg';
 import logo1 from '../logo.svg';
import {Link} from 'react-router-dom';
let Cards=()=>{
    let cardsData=data.details;
    console.log(cardsData);
    let images=[logo,logo1];
    return(
        <div>            
                <h1 className="text-primary" >cards</h1>
                <div className="row">
                    {
                 cardsData.map((values,index)=>
                 (
                    
                    <div className="col-sm-10 col-md-4 col-lg-4" key={index}>
                      <div className="card ">
                        <img src={images[index]}/>
                        <h1>{values.card.name}</h1>
                        <a  href={"mailto:"+values.card.email}></a>
                        <h4>{values.card.mobile}</h4>
                        <p>{values.card.description}</p>
                        <p>{values.career}</p>
                        <Link to={{pathname:"/resume",personcard:{id:index}}} className="btn btn-info">click me</Link> 
                      </div>

                    </div>
                   
                 ))}
                 </div>
            
             
            
        </div>
    );
}
 
export default Cards;