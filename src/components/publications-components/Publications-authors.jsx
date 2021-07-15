import React, { useState, useEffect} from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class PublicationsAuthors extends React.Component {
    constructor() {
        super();
    
        this.state = {
            publicationArticles: [],
        };
    }

    componentDidMount = () => {
        try {
          axios("http://adit.ipvc.pt/backend/backend/api/article/simple/list.php").then((response) => {
            this.setState({
                publicationArticles: response.data.data.team,
            });
          });
        } catch (error) {
          console.error(error);
        }
    };
    

    render(){
        const { publicationArticles } = this.state;

        return (
            <>
            <div>
            {/* {publicationArticles == null ? (
                <span>No authors at the moment.</span>
            ) : (
                publicationArticles.map(item => {
                    return(
                        <div>
                            <span style={{fontSize: '15px', color: 'black'}}>
                                <b>Authors: </b>{item.nome}
                            </span>
                            <br></br>
                            <br></br>
                        </div>
                    );
                })
            )} */}
            </div>                        
        </>);
    } 
}

export default withRouter(PublicationsAuthors);
