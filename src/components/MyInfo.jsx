import React from "react";
import styled from 'styled-components'

export function MyInfo ({info}) {
    const AddressSity = info&&info.adress ? info.adress.city : null;
    const AddressZip = info&&info.adress ? info.adress.zip : null;
    const AddressStreet = info&&info.adress ? info.adress.addressStreet : null;
    
    return(
       <StyledInfoData>
            <StyledTitle>Profile info:</StyledTitle>
            <StyledContent>
                <StyledP><b>Selected profile:</b>{info.firstName} {info.lastName}</StyledP>
                <StyledP><b>Description:</b>{info.description}</StyledP>
                <StyledP><b>Address:</b>{AddressZip} {AddressStreet}</StyledP>
                <StyledP><b>City:</b>{AddressSity}</StyledP>
            </StyledContent>
       </StyledInfoData>
    )
}

const StyledInfoData = styled.div`
    margin: 0 auto;
    width: 70%;
    border: solid 2px teal;
    background: #EAFAF8;
`

const StyledP = styled.p`
    margin: 5px;

`
const StyledTitle = styled.h2`
    margin: 5px;

`
const StyledContent = styled.div`
    margin: 20px 5px;

`