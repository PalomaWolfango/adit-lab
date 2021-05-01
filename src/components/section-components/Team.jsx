import React from 'react';
import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'
import { useHistory } from "react-router-dom";

const Team = () => {
    const history = useHistory();

    const routeChange = () =>{
        history.push("/team");
    }
    
    let data = sectionData.team;
     return (
         <div>
                 {/* <!-- start team area --> */}
                <section className={`team p-120 ${window.location.pathname === "/team" ? "team-page" : 3}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                            {/* <SectionTitle subtitle ={data.sectionHeading.subtitle} title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/> */}
                                <div className="offset-lg-1">
                                    <button class="button" onClick={routeChange}>{data.sectionHeading.executiveBoard}</button>
                                    <button class="button">{data.sectionHeading.collaborator}</button>
                                    <button class="button">{data.sectionHeading.scholarshipHolder}</button>
                                </div>
                            </div>
                            
                            <div className="col-lg-12">
                                <div className="row justify-content-center">
                       
                                    {data.member.slice(0, (window.location.pathname === "/team" ? 6 : 3) ).map((item, i)=>{
                                        return (
                                            <div className={`col-lg-12 col-md-6 wow ${item.animation}`} data-wow-duration="1.5s" data-wow-delay=".4s" key={i}>
                                                <div className="item">
                                                        <div className="image">
                                                            <img src={item.image} className="img-fluid" alt="Team Member" />
                                                        </div>
                                                        <div className="container">
                                                        <div className="text" style={{margin: '10px'}}>
                                                            <span style={{fontSize:'20px', color: 'darkblue'}}><b>{item.name}</b></span>
                                                            <br></br>
                                                            <span style={{fontSize:'13px', color: 'GrayText'}}>{item.designation}</span>
                                                            <br></br>
                                                            <br></br>
                                                            <br></br>
                                                            <span>{sectionData.blogDetails.content3}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end team area --> */}
         </div>
     );
 }
 
 export default Team;
 