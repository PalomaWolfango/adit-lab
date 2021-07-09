import React from 'react'
import { Link } from 'react-router-dom';


export const Publication = ({publication, loading}) => {

    if(loading) {
        return (
            <ul className="item justify-content-center"> 
                <h3 style={{marginTop:'300px', height:"100%"}}>Loading...</h3>
            </ul>);
    }
    

    return (
        <div className="col-lg-12">
            <div className="row justify-content-center">
                       
                {publication.map(post => {
                    return (
                        <div className={`col-lg-12 col-md-6 wow `} data-wow-duration="1.5s" data-wow-delay=".4s">
                            <div className="item">
                              
                                    <div className="container">
                                    <div className="text mt-3 justify-content-center">

                                    <span style={{fontSize:'20px', color: 'darkblue'}}><b>{post.title}</b></span>
                                       {/*  <Link to={{ 
                                            pathname: "/project-details/" + post.id,
                                            state: {projectID: post.id}
                                        }}>
                                            <span style={{fontSize:'20px', color: 'darkblue'}}><b>{post.title}</b></span>
                                        </Link> */}
                                        <br></br>
                                        <br></br>
                                        <span style={{fontSize:'13px', color: 'GrayText'}}>{post.body}</span>
                                        <br></br>
                                       {/*  <br></br>
                                        <label style={{fontSize:'15px', color: '#53565At'}}  for="FundeBy"><b>Funded By:</b></label>
                                        <br></br>
                                        <label style={{fontSize:'15px', color: '#53565At'}} for="Duration"><b>Duration:</b></label>
                                        <br></br> */}
                                     
                                        </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
               
            </div>        
        </div>
    );

};

export default Publication;
