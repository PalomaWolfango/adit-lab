import React from 'react'

export const PaginationFrame = ({ framesPerPage, totalFrames, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalFrames / framesPerPage); i++){
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

export default PaginationFrame;