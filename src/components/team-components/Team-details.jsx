import React, { useState, useEffect} from "react";
import axios from "axios";
import SingleMemberInfo from './SingleMember';
import Posts from '././../../data/Posts.js';
import { sectionData } from './../../data/section.json';
import { Link, withRouter } from "react-router-dom";

class TeamDetailsInner extends React.Component {
    constructor() {
        super();
    
        this.state = {
          user: [],
          userArticles: [],
          userProjects: []
        };
    }

    componentDidMount = () => {
        try {
          axios("http://adit.ipvc.pt/backend/backend/api/user/single.php?id=" + this.props.location.state.userID).then((response) => {
            this.setState({
                user: response.data,
                userArticles: response.data.articles,
                userProjects: response.data.projects,
            });
          });
        } catch (error) {
          console.error(error);
        }
    };
    

    render(){
        const data = sectionData.teamDetails;
        const { user, userArticles, userProjects } = this.state;
        //console.log(userProjects.length);

        return (
            <>
        {/* <!-- start team details area --> */}
        <section className="team-detail pt-120 mt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SingleMemberInfo />
                    </div>

                    <div className="col-lg-8">
                        <div className="team-inner right-part" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                            <div className="single-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>{data.aboutInfo.title}</h4>
                                    
                                </div>
                                <p className="item justify">
                                    {user.biografia}
                                </p>
                            </div>
                            <div className="single-item mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>Projects</h4>
                                </div>
                                {userProjects == null ? (
                                    <span>None.</span>
                                ) : (
                                    userProjects.map(item => {
                                        return(<Link  to={{ 
                                            pathname: "/project-details/" + item.id,
                                            state: {projectID: item.id}
                                            }}>                        
                                            <li className="item justify" style={{fontSize:'20px', color: 'darkblue'}}>
                                                <span style={{fontSize:'18px', color: 'black'}}>{item.nome}</span></li></Link>
                                        );
                                    })
                                )}    
                            </div>
                            {/* <div className="single-item mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>Publications</h4>
                                </div>
                                    {userArticles.map(item => {
                                        return(<li className="item justify" style={{fontSize:'20px', color: 'darkblue'}}>
                                        <span style={{fontSize:'18px', color: 'black'}}>{item.artigo}</span></li>);
                                        
                                    })}
                                
                                
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

export default withRouter(TeamDetailsInner);
