import React, { useState, useEffect} from "react";
import axios from "axios";
import SingleMemberInfo from './SingleMember';
import Posts from '././../../data/Posts.js';
import { sectionData } from './../../data/section.json';
import { withRouter } from "react-router-dom";

class TeamDetailsInner extends React.Component {
    constructor() {
        super();
    
        this.state = {
          user: [],
        };
    }

    componentDidMount = () => {
        try {
          axios.get("http://adit.ipvc.pt/backend/backend/api/user/single.php?id=37").then((response) => {
            this.setState({
                user: response.data,
            });
          });
        } catch (error) {
          console.error(error);
        }
      };
    

    render(){
        const data = sectionData.teamDetails;
        const { user } = this.state;
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
                                {/* <p>
                                    {{nome}}
                                </p> */}
                                <p className="item justify">
                                {user.biografia}
                                </p>
                                {/* <p>{data.aboutInfo.content3}
                                </p> */}
                            </div>
                            <div className="single-item mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>Projects</h4>
                                </div>
                                
                            </div>
                            <div className="single-item mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>Publications</h4>
                                </div>
                                
                            </div>
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
