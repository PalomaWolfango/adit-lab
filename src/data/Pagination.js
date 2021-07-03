import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
        window.scrollTo(0,0);
    }
    
    return (
        <nav class="nav justify-content-center">
            <ul className="pagination justify-content-center"> 
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link active">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;