import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';
import logoCima from '../../images/logoCima.png';

const NavigationMenu = () => {
    const [headerSearch, setHeaderSearch] = useState('');
    const [menuToggle, setMenuToggle] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    let data = sectionData.header;

    return (
        <>
        {/* <!-- Start menubar area --> */}
        <section className={`menubar`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-25">
                        <nav className="navbar p-0" style={{marginLeft: 'none'}}>
                            <Link to="/" style={{width:'24%'}}>
                                <img src={logoCima} alt="Logo"/>
                            </Link>
                            <div className={`header-menu ml-auto position-static ${menuToggle === true ? 'menuToggle' : ''}`}>
                            <div id="menu-button"  onClick={()=>{setMobileMenuToggle(!mobileMenuToggle)}}><i className="fas fa-bars"></i></div>
                                <ul className={`menu ${mobileMenuToggle === true ? 'open' : ''}`}>
                                    <li className="active">
                                        <Link to="/">home</Link>
                                        {/* <ul>
                                            <li><Link to="/">home 1</Link></li>
                                            <li><Link to="/home-v2">home 2</Link></li>
                                        </ul> */}
                                    </li>
                                    <li><Link to="/about">about us</Link></li>
                                    <li>
                                        {/* <Link to="#!">service</Link> */}
                                        {/* <Link to="/team">team</Link> */}
                                        <Link to="/team-executive-board">team</Link>
                                        <ul>
                                            {/* <li><Link to="/service">service</Link></li>
                                            <li>
                                                <Link to="/service-details">service details</Link>
                                            </li> */}
                                        </ul>
                                    </li>
                                    <li>
                                    {/* <Link to="/project">project</Link> */}
                                    <Link to="#">project</Link>
                                        {/* <ul>
                                            <li><Link to="/about">about us</Link></li>
                                            <li><Link to="/service">service</Link></li>
                                            <li>
                                                <Link to="/service-details">service details</Link>
                                            </li>
                                            <li><Link to="/project">project</Link></li>
                                            <li><Link to="/team">team</Link></li>
                                            <li><Link to="/team-details">team details</Link></li>
                                            <li><Link to="/pricing">pricing</Link></li>
                                            <li><Link to="/blog-details">blog details</Link></li>
                                            <li><Link to="/contact">contact</Link></li>
                                            <li><Link to="*">404</Link></li>
                                        </ul> */}
                                    </li>
                                    <li><Link to="#">publications</Link></li>
                                    <li><Link to="/news">news</Link></li>
                                    <li><Link to="/research-areas">research areas</Link></li>
                                    <li><Link to="/contact">contacts</Link></li>
                                </ul>
                            </div>
                            {/* <div className="right-part">
                                <button onClick={()=>{setMenuToggle(!menuToggle)}}><i className={`fas fa-${menuToggle === true ? 'times' : 'bars'}`}></i></button>
                            </div> */}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End menubar area --> */} 
        </>
    );
}

export default NavigationMenu;
