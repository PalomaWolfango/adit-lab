import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';
import { withRouter } from "react-router-dom";

class SingleMemberInfo extends React.Component {

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
                <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <img src={user.imagem} className="img-fluid" alt="Team" />
                    <div className="fig-detail text-center">
                        <h3>{user.nome}</h3>
                        <p>{user.cargo}</p>
                        
                    </div>
                </div>
                <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="single-item mt-md-30 personal-info">
                        <div className="item-title">
                            <h4>Contact</h4>
                        </div>
                        <ul>
                        <li>
                            <p><span>{user.email}</span></p>
                        </li>

                            {/* {data.personalInfo.singleInfo.map((item, i)=>{
                            
                                return (
                                    <li key={i}>
                                    <p><span>{item.name}</span>{item.no}</p>
                                </li>
                                )
                            })} */}
                        </ul>
                    </div>
                </div>
            </>
        );}
}

export default withRouter(SingleMemberInfo);
