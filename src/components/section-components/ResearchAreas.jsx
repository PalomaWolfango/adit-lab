import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {sectionData} from './../../data/section.json'
import SideBar from '../../components/blog-components/SideBar';

const ResearchAreas = () => {
    let data = sectionData.researchAreas;

    return (
        <>
            {/* <!-- start blog details area --> */}
            <section className="blog-detail pt-120">
        <div className="container">
            <div className="row">
                {/* <!-- start blog detail inner --> */}
                <div className="col-lg-8 order-1 order-lg-0" align="justify">
                    <div className="detail-inner">
                        <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.title1}</h3>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content1}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content2}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content3}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content4}</p>
                        <br></br>
                        <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.title2}</h3>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content1}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content2}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content3}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content4}</p>
                        <br></br>
                        <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.title3}</h3>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content1}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content2}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content3}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content4}</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                {/* <!-- end blog detail inner --> */}

                {/* <!-- start blog sidebar area --> */}
                <div className="col-lg-4 order-0 order-lg-1">
                   {/* <SideBar /> */}
                </div>
                {/* <!-- end blog sidebar area --> */}
            </div>
        </div>
    </section>
            {/* <!-- end blog details area --> */}

        </>
    );
}

export default ResearchAreas;
