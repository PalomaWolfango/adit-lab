import React, { useState, useEffect} from "react";
import axios from "axios";
import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json';
import Pagination from "../../data/Pagination.js";
import Posts from "../../data/Posts.js";
import _ from "lodash";
import Button from 'react-bootstrap/Button'

const TeamScholarshipHolder = () => {

    let data1 = sectionData.team;

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get("http://adit.ipvc.pt/backend/backend/api/user/list.php");
        
        //Aparecer apenas os collaborators
        const scholarshipHolder = _.filter(res.data, {cargo: 'Scholarship Holder'});

        setPosts(scholarshipHolder);
        setLoading(false)
      };
  
      fetchPosts();
    }, []);
  
    //console.log(posts);
  
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

        return (
            <div>
                 {/* <!-- start team area --> */}
                <section className={`team p-120 ${window.location.pathname === "/team-scholarship-holder" ? "team-page" : 3}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <SectionTitle subtitle ={data1.sectionHeading.subtitle} title={data1.sectionHeading.title} titleContent={data1.sectionHeading.content}/>
                                <div className="offset-lg-1">
                                    <Button href="/team-executive-board" variant="outline-primary" size="lg">Executive Board</Button>
                                    <Button href="/team-collaborator" variant="outline-primary" size="lg">Collaborator</Button>
                                    <Button href="/team-scholarship-holder" variant="outline-primary" size="lg" active>Scholarship Holder</Button>
                                </div>
                            </div>
                            <Posts posts={currentPosts} loading={loading} />
                            <div className="col-lg-8 offset-lg-2">
                                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> 
                            </div>   
                        </div>
                    </div>
                </section>
                {/* <!-- end team area --> */}
         </div>
        );
    }

 
 export default TeamScholarshipHolder;
 