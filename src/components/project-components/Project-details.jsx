import React, { useState, useEffect} from "react";
import axios from "axios";
import SingleProjectInfo from './SingleProject';
import Frame from '../../data/Frame';
import { sectionData } from '../../data/section.json';
import { Link, withRouter } from "react-router-dom";

class ProjectDetailsInner extends React.Component {
    constructor() {
        super();
    
        this.state = {
          project: [],
          projectTeam: []
        };
    }

    componentDidMount = () => {
        
        try {
          axios.get("http://adit.ipvc.pt/backend/backend/api/project/single.php?id="  + this.props.location.state.projectID).then((response) => {
            this.setState({
                project: response.data,
                projectTeam: response.data.team,
            });
            
            
          });
        } catch (error) {
          console.error(error);
        }
    };

    render(){
        const data = sectionData.projectDetails;
        const { project , projectTeam } = this.state; 
        
        return (
            <>
        {/* <!-- start team details area --> */}
        <section className="team-detail pt-120 mt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SingleProjectInfo />
                    </div>

                    <div className="col-lg-8">
                        <div className="team-inner right-part" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                            <div className="single-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>{data.aboutInfo.title}</h4>
                                    
                                </div>
                                <p className="item justify">
                                    {project.descr}
                                </p>
                            </div>
                             <div className="single-item mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>Team</h4>
                                </div>
                                {projectTeam.map(item => {
                                    return (<Link  to={{ 
                                        pathname: "/team-details/" + item.id,
                                        state: {userID: item.id}
                                    }}>
                                    <li className="item justify" style={{fontSize:'20px', color: 'darkblue'}}>
                                        <span style={{fontSize:'18px', color: 'black'}}>{item.nome}</span></li></Link>
                                    );
                                })}   
                            </div>
                           {/*  <div className="single-item mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>Publications</h4>
                                </div>
                                <p className="item justify">
                                    {project.body}
                                </p>  
                            </div>
                            <div className="single-item mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>Theses</h4>
                                </div>
                                <p className="item justify">
                                    {project.body}
                                </p>  
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end team details area --> */}

            </>
        );}
}

export default withRouter(ProjectDetailsInner);
