import React from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

const SingleMemberInfo = () => {
    let data = sectionData.teamDetails;
    return (
        <>
            <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <img src={data.memberInfo.image} className="img-fluid" alt="Team" />
                <div className="fig-detail text-center">
                    <h3>{data.memberInfo.name}</h3>
                    <p>{data.memberInfo.designation}</p>
                    <div className="social">
                        <ul className="d-flex justify-content-center">
                        <li>
                                    <Link to={data.memberInfo.socile.facebook}><i className="fab fa-facebook-f"></i></Link>
                                </li>
                            
                            <li>
                                <Link to={data.memberInfo.socile.twitter}><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link to={data.memberInfo.socile.insta}><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li>
                                <Link to={data.memberInfo.socile.linkdin}><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <div className="single-item mt-md-30 personal-info">
                    <div className="item-title">
                        <h4>{data.personalInfo.title}</h4>
                    </div>
                    <ul>
                        {data.personalInfo.singleInfo.map((item, i)=>{
                           
                            return (
                                <li key={i}>
                                <p><span>{item.name}</span>{item.no}</p>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SingleMemberInfo;
