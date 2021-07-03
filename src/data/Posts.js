import React from 'react'

export const Posts = ({posts, loading}) => {

    if(loading) {
        return <h2>Loading...</h2>
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
                                <div className="container">
                                    <div className="text" style={{margin: '10px'}}>
                                        <span style={{fontSize:'20px', color: 'darkblue'}}><b>{post.nome}</b></span>
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
