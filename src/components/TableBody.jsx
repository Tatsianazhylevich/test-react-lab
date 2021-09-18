import React from "react";
import styled from 'styled-components';

export function TableBody(props) {
    return(
        <tbody id="tbody">
            <StyledTr onClick={() => props.infoData(props.data)}>
            <StyledTd>{props.data.id}</StyledTd>
            <StyledTd>{props.data.firstName}</StyledTd>
            <StyledTd>{props.data.lastName}</StyledTd>
            <StyledTd>{props.data.email}</StyledTd>
            <StyledTd>{props.data.phone}</StyledTd>
            <StyledTd>{props.data.adress.state}</StyledTd>
            </StyledTr>
        </tbody>
    )
}

const StyledTr = styled.tr`
box-sizing: border-box;
padding: 0;
margin: 0;   
cursor: pointer;
    &:hover {
        background: #ECF6F5;
    }

`
const StyledTd = styled.td`
    border: 1px solid grey;
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    min-width: 120px;
    font-family: sans-serif;
    text-align: center;
`