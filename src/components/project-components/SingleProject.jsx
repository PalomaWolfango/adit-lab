import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { sectionData } from '../../data/section.json';
import { withRouter } from "react-router-dom";

class SingleProjectInfo extends React.Component {

    constructor() {
        super();
    
        this.state = {
          user: [],
        };
    }

    componentDidMount = () => {
        
        try {
          axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.location.state.projectID).then((response) => {
            this.setState({
                user: response.data,
            });
          });
        } catch (error) {
          console.error(error);
        }
      };

    render(){
        const data = sectionData.projectDetails;
        const { user } = this.state;
        /* console.log(user); */
        return (
            
            <>
                <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    {/* <img src={user.imagem} className="img-fluid" alt="Team" /> */}
                    <div className="fig-detail text-center">
                        <h3>{user.title}</h3>
                        
                    </div>
                </div>
                {/* <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="single-item mt-md-30 personal-info">
                        <div className="item-title">
                            <h4>Contact</h4>
                        </div> */}
                        {/* <ul>
                        <li>
                            <p><span>{user.email}</span></p>
                        </li>
                        </ul> */}
                    {/* </div>
                </div> */}
            </>
        );}
}

export default withRouter(SingleProjectInfo);
