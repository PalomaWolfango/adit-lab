import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'
import React, { useState, useEffect} from "react";
import axios from "axios";
import Pagination from "../../data/PaginationNews.js";
import News from "../../data/News.js";
import _ from "lodash";

const News2 = () => {

    let data = sectionData.news; 

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(15);

    useEffect(() => {
        const fetchNew = async () => {
          setLoading(true);
          const res = await axios.get("http://adit.ipvc.pt/backend/backend/api/article/simple/list.php");

          setNews(res.data.data);
          setLoading(false)

        }
        
        fetchNew();
    }, []); 
    
    //Get current frames
    const indexOfLastNew = currentPage * newsPerPage;
    const indexOfFirstNew = indexOfLastNew - newsPerPage;
    const currentNew = news.slice(indexOfFirstNew, indexOfLastNew);
  
  
    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
         <div>
            <section className={`news p-120 ${window.location.pathname === "/news" ? "news-page" : 3}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <SectionTitle title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/>
                        </div>
                        <News news={currentNew} loading={loading} />
                        <div className="col-lg-8 offset-lg-2">
                            <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate}/> 
                        </div>   
                    </div>
                </div>
            </section> 
        </div>
           
        </>
    );
}
 
export default News2;
