import React from 'react';
import styled from 'styled-components';


const Pagination = ({dataPerPage, totalData, paginate}) => {
    let pageNumbers = [];

    for(let i =1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <StyledNav className="page__wrapper">
            {pageNumbers.map(num => (
                <StyledLi key={num} className='page-item'>
                    <StyledLink href='!#' onClick={() => paginate(num)} className='page-link'>
                        {num}
                    </StyledLink>
                </StyledLi>
            ))}
      </StyledNav>
    )
}

export default Pagination;

const StyledNav = styled.nav`
    margin-right: 70px;
    margin-bottom: 10px;
    display: flex;
    justify-content: right;
`
const StyledLi = styled.li`
    padding: 5px;
    cursor: pointer;
    list-style: none;
`
const StyledLink = styled.a`
    text-decoration: none;
    color: black;
    &:focus {
        text-decoration: none;
        color: rgb(235, 155, 8);
    }
`