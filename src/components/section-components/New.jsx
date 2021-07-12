import React from 'react';
import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'
import {Link} from 'react-router-dom'
import { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";

class News2 extends Component {

    /* constructor() {
        super();

        this.state = {
            dados: [],
            dadosTeam: [],
            count: [],
        }
    }
    componentDidMount() {
        try {
            
            axios.get("http://adit.ipvc.pt/backend/backend/api/project/single.php?id=1").then((response) => {
                console.log(response);
                this.setState({
                    dados: response.data,
                    dadosTeam: response.data.team,
                  });
                });
        } catch (error) {
            console.error(error);
        }

        try {
            
            axios.get("http://adit.ipvc.pt/backend/backend/api/article/simple/list.php").then((response) => {
                this.setState({
                    count: response.data.count,
                  });
                });
        } catch (error) {
            console.error(error);
        }

            
    } */

    render() {

/* const News2 = () => { */
    /* let data = sectionData.news;   
    let publicUrl = process.env.PUBLIC_URL+'/' */

   /*  const { dados, dadosTeam, count} = this.state;
    console.log(dadosTeam[0]);
     */
   return(
        <>

        {/* {dadosTeam.map(item => {
            return (<h1>{item.email}</h1>);
        })} */}
           
        </>
    )

}}

export default withRouter(News2);
