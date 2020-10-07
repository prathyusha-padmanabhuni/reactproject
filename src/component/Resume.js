import React from 'react';
import data from "../data.json";
import logo from '../logo.svg';
function Resume(props){
    let profile=data.details[props.location.personcard.id];
    console.log(profile);
    return(
    <div>
        <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 bg-secondary">
                <div className="card bg-secondary">
                    <img src={logo}></img>
                    <br></br>
                    <h1>{profile.card.name}</h1>
                    <br></br>
                    <a href={"mailto:"+profile.card.email}><h3>{profile.card.email}</h3></a>
                    <br></br>
                    <h4>{profile.card.mobile}</h4>
                    <br></br>
                    <h3>{profile.career}</h3>
                    <br></br>
                    
                </div>
   
            </div>
          
                 
                     
            <div className="col-sm-8 col-md-8 col-lg-8 bg-info" >
                <br></br>
                <h2>educational qualification</h2>
                 <div class="container">
                    <table   class="table table-striped table-bordered">
                       
                        <tr> 
                           <th>institute</th> 
                           <th>degree</th> 
                           <th>passout year</th> 
                           <th>percentage</th> 
                        </tr>
                        <tr> 
                            <td>{profile.educationalqualification[0].institute}</td>
                            <td> {profile.educationalqualification[0].degree}</td>
                            <td>{profile.educationalqualification[0].passoutyear}</td>
                            <td>{profile.educationalqualification[0].percentage}</td>
                        </tr>
                        <tr> 
                            <td>{profile.educationalqualification[1].institute}</td>
                            <td> {profile.educationalqualification[1].degree}</td>
                            <td>{profile.educationalqualification[1].passoutyear}</td>
                            <td>{profile.educationalqualification[1].percentage}</td>
                            
                        </tr>
                         <tr> 
                            <td>{profile.educationalqualification[2].institute}</td>
                            <td> {profile.educationalqualification[2].degree}</td>
                            <td>{profile.educationalqualification[2].passoutyear}</td>
                            <td>{profile.educationalqualification[2].percentage}</td>
                         </tr>
                </table>
                </div>  
                <h2>technical details</h2>  
                <dt>{profile.technicaldetails[0].title}</dt>
                     <dd>{profile.technicaldetails[0].info}</dd>
                <br></br>
                <dt>{profile.technicaldetails[1].title}</dt>
                     <dd>{profile.technicaldetails[1].info}</dd>
                <br></br>
                <dt>{profile.technicaldetails[2].title}</dt>
                     <dd>{profile.technicaldetails[2].info}</dd>

            </div>
                     
                
        </div>  
    </div> 
        
    );
}
export default Resume;