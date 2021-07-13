import React from 'react'



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
                                            <b>{post.titulo}</b>
                                        </span>
                                        <br></br>
                                        <span style={{fontSize: '13px', color: 'GrayText'}}>
                                            {post.data}
                                        </span>
                                        <br></br>
                                        <br></br>
                                        <span style={{fontSize: '15px', color: 'black', textAlign:'justify'}}>
                                            {post.descr}
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
