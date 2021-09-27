import React,{useState} from 'react';
import {sectionData} from './../../data/section.json'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import SectionTitle from '../global-components/SectionTitle';
import 'react-circular-progressbar/dist/styles.css';

const Count = () => {
    let data = sectionData.count;

    const percentage = 66;

    return ( 
        <div>
            {/* <!-- start count area --> */}
            <section className="count pt-90 bg-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <SectionTitle title={data.title} />
                        </div>
                        {data.singleCount.map((item)=>{
                                return (
                                    
                                    <div className="col-lg-3 col-md-6">
                                        <div className={`count-item text-center wow ${item.animation}`} data-wow-duration="1.5s" data-wow-delay={item.animationDelay}>
                                            <div className="counter">
                                                    <CircularProgressbar value={100} text={`${item.percent}`}/>
                                                    <h5>{item.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* <!-- end count area --> */}
        </div>
    );
}

export default Count;