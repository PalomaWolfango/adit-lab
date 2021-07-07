import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {sectionData} from './../../data/section.json'
import SideBar from '../../components/blog-components/SideBar';

const ResearchAreas = () => {
    let data = sectionData.researchAreas;

    return (
        <>
            {/* <!-- start research areas details area --> */}
            <section className="blog-detail pt-121">
                <div className="container">
                    <div className="row">
                        {/* <!-- start research areas detail inner --> */}
                        {data.researchAreasDetails.map((item)=>{
                            return <div className="col-lg-20" align="justify">
                                        <div className="section-title wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
                                            <h2 style={{color: '#2a3bd8;'}}><span>{item.title}</span></h2>
                                            <p>{item.content}</p>
                                            <p>{item.content2}</p>
                                            <p>{item.content3}</p>
                                            <br></br>
                                        </div>
                                    </div>
                        })}
                        {/* <!-- end research areas detail inner --> */}
                    </div>
                </div>
            </section>
            {/* <!-- end research areas details area --> */}

        </>
    );
}

export default ResearchAreas;
