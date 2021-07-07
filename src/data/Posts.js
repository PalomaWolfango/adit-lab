import React from 'react'
import { Link } from 'react-router-dom';
import { $ }  from 'react-jquery-plugin'

export const Posts = ({posts, loading}) => {

    if(loading) {
        return (
            <ul className="item"> 
                <h3 style={{alignContent:'center', marginTop:'500px'}}>Loading...</h3>
            </ul>);
    }

    return (
        <div className="col-lg-12">
            <div className="row justify-content-center">
                       
                {posts.map(post =>{

                    return (
                        <div className={`col-lg-12 col-md-6 wow `} data-wow-duration="1.5s" data-wow-delay=".4s">
                            <div className="item">
                                <div className="image">
                                    <img src={post.imagem} className="img-fluid" alt="Team Member" />
                                </div>
                                <div className="container col-lg-10">
                                    <div className="text mt-3 justify-content-center" style={{margin: '10px'}}>
                                        <Link to={{ 
                                            pathname: "/team-details/" + post.id,
                                            state: {userID: post.id}
                                        }}>
                                            <span style={{fontSize:'20px', color: 'darkblue'}}><b>{post.nome}</b></span>
                                        </Link>
                                        {/* <span style={{fontSize:'20px', color: 'darkblue'}}><b>{post.nome}</b></span> */}
                                        <br></br>
                                        <span style={{fontSize:'13px', color: 'GrayText'}}>{post.cargo}</span>
                                        <br></br>
                                        <span>{post.biografia}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>        
        </div>
    )
}

export default Posts;
