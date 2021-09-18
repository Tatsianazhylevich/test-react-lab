import React, { } from "react";
import { TableBody } from "./TableBody";
import styled from 'styled-components';
import arrowUp from '../assets/up-arrow.png';
import arrowDown from '../assets/down-arrow.png';


export function MyTable({ data, sortedData, infoData, directionSort }) {

    const directionArrow = directionSort ? arrowUp : arrowDown

    return(
        <StyledTable  id="tableData">
            <StyledThead>
                <StyledTd onClick={() => sortedData('id')} >ID <StyledArrow src={directionArrow}></StyledArrow ></StyledTd>
                <StyledTd onClick={() => sortedData('firstName')}>First name <StyledArrow src={directionArrow}></StyledArrow></StyledTd>
                <StyledTd onClick={() => sortedData('lastName')}>Last name <StyledArrow src={directionArrow}></StyledArrow></StyledTd>
                <StyledTd onClick={() => sortedData('email')}>Email <StyledArrow src={directionArrow}></StyledArrow></StyledTd>
                <StyledTd onClick={() => sortedData('phone')}>Phone <StyledArrow src={directionArrow}></StyledArrow></StyledTd>
                <StyledTd onClick={() => sortedData('state')}>State <StyledArrow src={directionArrow}></StyledArrow></StyledTd>
            </StyledThead>

            {data.map((row) => 
                <TableBody data={row} key={row.phone} infoData={infoData}/>
            )}
            
      </StyledTable>
    )
}

const StyledArrow = styled.img`
    width: 10px;
    height: 12px;
    margin-left: 8px;
`

const StyledThead = styled.thead`
    font-size: 16px;
    font-weight: 700;
    background: #DCE9E8;
`
const StyledTable = styled.table`
    border: 2px solid grey;
    border-spacing: unset;
    margin: 20px auto 5px;
`

const StyledTd = styled.td`
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    min-width: 120px;
    font-family: sans-serif;
    text-align: center;
    border: 1px solid grey;
`