import React, { useState, useEffect} from "react";
import axios from "axios";
import {sectionData} from './../../data/section.json'
import SectionTitle from '../global-components/SectionTitle';
import Pagination from "../../data/PaginationPublication.js";
import Publication from "../../data/Publication.js";
import SideBar from '../blog-components/SideBar';
import _ from "lodash";


const Publications = () => {

    let data = sectionData.publications; 

    const [publication, setPublication] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [publicationPerPage] = useState(20);

    useEffect(() => {
        const fetchPublication = async () => {
          setLoading(true);
          const res = await axios.get("http://adit.ipvc.pt/backend/backend/api/article/simple/list.php");

          setPublication(res.data.data);
          setLoading(false)

        }
        
        fetchPublication();
    }, []); 

     
    
    //Get current frames
    const indexOfLastPublication = currentPage * publicationPerPage;
    const indexOfFirstPublication = indexOfLastPublication - publicationPerPage;
    const currentPublication = publication.slice(indexOfFirstPublication, indexOfLastPublication);
  
  
    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber); 

    return (
        <>
         <div>
           {/* <!-- start project area --> */}
            <section className={`publications p-120 ${window.location.pathname === "/publications" ? "publications-page" : 3}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <SectionTitle subtitle ={data.sectionHeading.subtitle} title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/>
                        </div>
                        {/* <div className="blog-sidebar"><SideBar /></div> */}
                        <Publication publication={currentPublication} loading={loading} />
                         <div className="col-lg-8 offset-lg-2">
                            <Pagination count={100} publicationPerPage={publicationPerPage} totalPublication={publication.length} paginate={paginate}/> 
                        </div>   
                    </div>
                </div>
            </section>
            {/* <!-- end project area --> */}
        </div>
           
        </>
    );
}

export default Publications;