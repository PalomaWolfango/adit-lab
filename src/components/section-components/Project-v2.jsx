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
    const [filteredFrames, setFilteredFrames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [framesPerPage] = useState(6);





    useEffect(() => {
        const fetchFrames = async () => {
          setLoading(true);
          const res = await axios.get("http://adit.ipvc.pt/backend/backend/api/project/list.php");

          setFrames(res.data);
          setFilteredFrames(res.data);
          setLoading(false)

        }
        
        fetchFrames();
    }, []); 
    
    //Get current frames
    const indexOfLastFrame = currentPage * framesPerPage;
    const indexOfFirstFrame = indexOfLastFrame - framesPerPage;
    const currentFrames = filteredFrames.slice(indexOfFirstFrame, indexOfLastFrame);
  
  
    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const [activeFilter, setActiveFilter] = useState('');
    const setFilter = (event) => {
        const filter = event.target.innerText;
        console.log(filter);
        let filterTemp = '';
   
        if(activeFilter === filter) {
            filterTemp ='';
        } else {
            filterTemp = filter;
        }

        console.log(activeFilter)
        console.log(frames)

       const framesTemp = frames.filter((frame) => {
            if(filterTemp === '') {
                return true;
            } else {
            return frame.tipo === filterTemp
            }
        });
        console.log(framesTemp) 
        setFilteredFrames(framesTemp)
        setActiveFilter(filterTemp)};  

        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 3
                }}
            />
        );



    return (
        <div>
       
            {/* <!-- start project area --> */}
            <section className={`project p-120 ${window.location.pathname === "/project" ? "project-page" : 3}`}>

                <div className="container">
                    <div className="row">
                    <div className="team-inner right-part" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                    <div className="item-title"> 
                        <h5>Filter:</h5>
                        <ColoredLine color="darkblue" />
                        <h2 onClick={setFilter} className="item justify" style={{fontSize:'20px', color: 'darkblue'}}>
                        <span style={{fontSize:'18px', color: 'black', 'fontWeight': activeFilter === 'National' ? 'bold' : 'normal'}}>National</span></h2>             
                        <h2 onClick={setFilter} className="item justify" style={{fontSize:'20px', color: 'darkblue'}}>
                        <span style={{fontSize:'18px', color: 'black', 'fontWeight': activeFilter === 'International' ? 'bold' : 'normal'}}>International</span></h2>                   
                        </div>
                         </div>

                        <div className="col-lg-8 offset-lg-1">
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
