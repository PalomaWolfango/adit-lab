import React, { useState, useEffect} from "react";
import axios from "axios";
import {sectionData} from './../../data/section.json'
import SectionTitle from '../global-components/SectionTitle';
import Pagination from "../../data/PaginationFrame.js";
import Frame from "../../data/Frame.js";
import _ from "lodash";

const ProjectV2 = () => {

    let data = sectionData.projectV2;

    const [frames, setFrames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [framesPerPage] = useState(6);

    useEffect(() => {
        const fetchFrames = async () => {
          setLoading(true);
          const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

          setFrames(res.data);
          setLoading(false)

        }
        
        fetchFrames();
    }, []); 
    
    //Get current frames
    const indexOfLastFrame = currentPage * framesPerPage;
    const indexOfFirstFrame = indexOfLastFrame - framesPerPage;
    const currentFrames = frames.slice(indexOfFirstFrame, indexOfLastFrame);
  
  
    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
       
            {/* <!-- start project area --> */}
            <section className={`project p-120 ${window.location.pathname === "/project" ? "project-page" : 3}`}>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <SectionTitle subtitle ={data.sectionHeading.subtitle} title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/>
                        </div>
                        <Frame frames={currentFrames} loading={loading} />
                        <div className="col-lg-8 offset-lg-2">
                            <Pagination framesPerPage={framesPerPage} totalFrames={frames.length} paginate={paginate}/> 
                        </div>   
                    </div>
                </div>
            </section>
            {/* <!-- end project area --> */}
        </div>

        );
    }
    

export default ProjectV2;
