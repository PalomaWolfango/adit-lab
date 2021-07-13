import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { sectionData } from '../../data/section.json';
import { withRouter } from "react-router-dom";
import NumberFormat from 'react-number-format';

class SingleProjectInfo extends React.Component {

    constructor() {
        super();
    
        this.state = {
            project: [],
        };
    }

    componentDidMount = () => {
        
        try {
          axios.get("http://adit.ipvc.pt/backend/backend/api/project/single.php?id=" + this.props.location.state.projectID).then((response) => {
            this.setState({
                project: response.data,
            });
          });
        } catch (error) {
          console.error(error);
        }
      };

    render(){
        const data = sectionData.projectDetails;
        const { project } = this.state;
       
        return (
            
            <>
                <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <img src={project.imagem} className="img-fluid" alt="Team" />
                    <div className="fig-detail text-center">
                        <h3>{project.nome}</h3>
                        <p>{project.tipo}</p>
                        <p>{project.research_area}</p>
                        
                    </div>
                </div>
                 <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                 <div className="single-item mt-md-30 personal-info">
                        <div className="item-title">
                            <h4>State</h4>
                        </div> 
                         <ul>
                        <li>
                            <p><span>{project.estado}</span></p>
                        </li>
                        </ul> 
                     </div> 
                    <div className="single-item mt-md-30 personal-info">
                        <div className="item-title">
                            <h4>Funded By</h4>
                        </div> 
                         <ul>
                        <li>
                            <p><span>{project.funded_by}</span></p>
                        </li>
                        </ul> 
                     </div>  
                     <div className="single-item mt-md-30 personal-info">
                        <div className="item-title">
                            <h4>Duration</h4>
                        </div> 
                         <ul>
                        <li>
                        <label style={{fontSize:'15px', color: '#53565At'}}  for="FundeBy"><b>Start Date:</b></label>
                        <span style={{marginLeft:"10px"}}>{project.data_inicio}</span>
                        <br></br>
                        <label style={{fontSize:'15px', color: '#53565At'}}  for="FundeBy"><b>End Date:</b></label>
                        <span style={{marginLeft:"10px"}}>{project.data_fim}</span>
                        </li>
                        </ul> 
                     </div>   
                     <div className="single-item mt-md-30 personal-info">
                        <div className="item-title">
                            <h4>Budget</h4>
                        </div> 
                         <ul>
                        <li>
                            <p><NumberFormat value={project.budget} displayType={'text'} format={'#,###,###.###€'}/></p>
                            <br></br>
                        </li>
                        </ul> 
                     </div>   
                </div> 
                
            </>
        );}
}

export default withRouter(SingleProjectInfo);
