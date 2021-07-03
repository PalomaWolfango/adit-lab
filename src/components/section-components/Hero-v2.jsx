import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

const HeroV2 = () => {
    const [isOpen, setOpen] = useState(false)
    let data = sectionData.banner
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
                    {/* <!-- start banner area --> */}
        <section className="banner" style={{background:`url(${publicUrl + data.background})`}}>
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="banner-text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <h1>{data.title}</h1>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                    <span className="line line4"></span>
                </div>
            </div>
        </section>
        {/* <!-- end banner area --> */}
        </>
    );
}

export default HeroV2;
