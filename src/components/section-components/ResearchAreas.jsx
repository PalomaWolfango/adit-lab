import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {sectionData} from './../../data/section.json'
import SideBar from '../../components/blog-components/SideBar';

const ResearchAreas = () => {
    let data = sectionData.researchAreas;

    return (
        <>
            {/* <!-- start research areas details area --> */}
            <section className="blog-detail pt-120">
                <div className="container">
                    <div className="row">
                        {/* <!-- start research areas detail inner --> */}
                        {data.researchAreasDetails.map((item)=>{
                            return <div className="col-lg-8 order-1 order-lg-0" align="justify">
                                        <div className="detail-inner">
                                            <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{item.title}</h3>
                                            <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{item.content}</p>
                                            <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{item.content2}</p>
                                            <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{item.content3}</p>
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
