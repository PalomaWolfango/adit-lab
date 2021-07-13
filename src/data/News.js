import React from 'react'
import {Link} from 'react-router-dom';


export const News = ({news, loading}) => {

    if (loading) {
        return (
            <ul className="item justify-content-center">
                <h3 style={{marginTop: '300px', height: "100%"}}>
                    Loading...
                </h3>
            </ul>
        );
    }


    return (
        <div className="col-lg-12">
            <div className="row justify-content-center">
                {news.map(post => {
                    return (
                        <div className={`col-lg-12 col-md-6 wow `} data-wow-duration="1.5s" data-wow-delay=".4s">
                            <div className="item">
                                <div className="container">
                                    
                                    <div className="text mt-3 justify-content-center">
                                        <span style={{fontSize: '20px',color: 'darkblue'}}>
                                            <b>{post.artigo}</b>
                                        </span>
                                        <br></br>
                                        <br></br>
                                        <span style={{fontSize: '15px', color: 'black'}}>
                                            {post.tipo}
                                        </span>
                                        <br></br>
                                        <span style={{fontSize: '13px', color: 'GrayText'}}>
                                            {post.ano}
                                        </span>
                                        <br></br>
                                        <br></br>
                                      </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            } </div>
        </div>
    );

};

export default News;
