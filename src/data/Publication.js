import React, { useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import PublicationAuthor from '../components/publications-components/Publications-authors';
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


export const Publication = ({publication, loading}) => {

    const [searchTerm, setSearchTerm] = useState([]);

    if (loading) {
        return (
            <ul className="item justify-content-center">
                <h3 style={{marginTop: '300px', height: "100%"}}>
                    Loading...
                </h3>
            </ul>
        );
    }

    return (
        <div className="col-lg-12">
            <div className="row justify-content-center">
            
            <FaSearch style={{color: '#192fab', fontSize:'30px', marginRight: '15px'}}/> <input style={{marginBottom: '50px', width:"90%"}} className="form-control" type="text" placeholder="Search by publication year or type..." onChange={(event) =>{
            setSearchTerm(event.target.value)
        } } />
        {/* <PublicationAuthor/> */}
        {publication.filter((val)=>{
            if (searchTerm == "") {
                return val
            } else{ 
                if (val.ano.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                } 
            } if (val.tipo.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val, key) => {
            if (val.jcr == null && val.sjr == null) {
                return (
                    <div className={`col-lg-12 col-md-6 wow `} data-wow-duration="1.5s" data-wow-delay=".4s">
                        <div className="item">
                            <div className="container">
                                <div className="text mt-3 justify-content-center">
                                    <span style={{fontSize: '20px',color: 'darkblue'}}>
                                        <b>{val.artigo}</b>
                                    </span>
                                    <br></br>
                                    <br></br>
                                    <span style={{fontSize: '15px', color: 'black'}}>
                                        {val.tipo}
                                    </span>
                                    <br></br>
                                    <span style={{fontSize: '13px', color: 'GrayText'}}>
                                        {val.ano}
                                    </span>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                if (val.jcr == null && val.sjr != null) {
                    return (
                        <div className={`col-lg-12 col-md-6 wow `} data-wow-duration="1.5s" data-wow-delay=".4s">
                            <div className="item">
                                <div className="container">
                                
                                    <div className="text mt-3 justify-content-center">
                                        <span style={{fontSize: '20px',color: 'darkblue'}}>
                                            <b>{val.artigo}</b>
                                        </span>
                                        <br></br>
                                        
                                        <span style={{fontSize: '15px', color: 'GrayText'}}>
                                        SJR: {val.sjr}
                                        </span>
    
                                        <br></br>
    
                                        <span style={{fontSize: '15px', color: 'black'}}>
                                            {val.tipo}
                                        </span>
                                        <br></br>
                                        <span style={{fontSize: '13px', color: 'GrayText'}}>
                                            {val.ano}
                                        </span>
                                        <br></br>
                                        <br></br> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    );
                } else {
                    if (val.sjr == null && val.jcr != null){
                        return (
                            <div className={`col-lg-12 col-md-6 wow `} data-wow-duration="1.5s" data-wow-delay=".4s">
                                <div className="item">
                                    <div className="container">
                                    
                                        <div className="text mt-3 justify-content-center">
                                            <span style={{fontSize: '20px',color: 'darkblue'}}>
                                                <b>{val.artigo}</b>
                                            </span>
                                            <br></br>
                                            
                                            <span style={{fontSize: '15px', color: 'GrayText'}}>
                                            JCR: {val.jcr}
                                            </span>
        
                                            <br></br>
        
                                            <span style={{fontSize: '15px', color: 'black'}}>
                                                {val.tipo}
                                            </span>
                                            <br></br>
                                            <span style={{fontSize: '13px', color: 'GrayText'}}>
                                                {val.ano}
                                            </span>
                                            <br></br>
                                            <br></br> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        );
                    }
                }
                return (
                    <div className={`col-lg-12 col-md-6 wow `} data-wow-duration="1.5s" data-wow-delay=".4s">
                        <div className="item">
                            <div className="container">
                            
                                <div className="text mt-3 justify-content-center">
                                    <span style={{fontSize: '20px',color: 'darkblue'}}>
                                        <b>{val.artigo}</b>
                                    </span>
                                    <br></br>
                                    
                                    <span style={{fontSize: '15px', color: 'GrayText'}}>
                                    JCR: {val.jcr} | SJR: {val.sjr}
                                    </span>

                                    <br></br>

                                    <span style={{fontSize: '15px', color: 'black'}}>
                                        {val.tipo}
                                    </span>
                                    <br></br>
                                    <span style={{fontSize: '13px', color: 'GrayText'}}>
                                        {val.ano}
                                    </span>
                                    <br></br>
                                    <br></br> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                );
            }
            
        })}
            </div>
        </div>
    );

};

export default Publication;
