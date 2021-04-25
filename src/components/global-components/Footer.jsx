import React from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

const Footer =()=>{
    let data = sectionData.footer;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
                {/* <!-- start footer area --> */}
                <footer  style={{background:`url(${publicUrl + data.background})`, backgroundSize: "cover"}}>
                    <div className="overlay">
                        {/* <!-- start footer-top area --> */}
                        <section className="footer-top">
                            <div className="container">
                                <div className="row col-120">
                                        <img src={data.logos.logo1}/>
                                        <img src={data.logos.logo2}/>
                                        <div className="contacts col-3">
                                            <p>
                                                <Link  to="/contact">
                                                    <p><b>{data.contactUs}</b></p>
                                                </Link>
                                                <p>{data.titlePhone} {data.phoneNumber}</p>
                                                <p>{data.titleEmail} {data.email}</p>
                                            </p>
                                        </div>
                                </div>
                            </div> 
                        </section>
                        {/* <!-- end footer-top area --> */}

                        {/* <!-- start footer-bottom area --> */}
                        <section className="footer-bottom">
                            <div className="container">
                                <div className="footer-bottom-content">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5">
                                            <div className="copyright">
                                                <p>
                                                    Copyright &copy; {data.footerBottom.copyRightYear} <b>{data.footerBottom.copyRightFrom}</b>. All Rights
                                                    Reserved.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- end footer-bottom area --> */}
                    </div>
                </footer>
                {/* <!-- end footer area --> */}
        </>
        )
}
export default Footer;