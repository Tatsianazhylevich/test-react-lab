import React, { } from "react";
import styled from 'styled-components';


export function ErrorPage({dataError}) {


    return(
        <StyledError>
            <StyledTitleEr>Oppsss! Something went wrong</StyledTitleEr>
            <p><b>There was:</b> ${dataError}</p>
        </StyledError>
    )
}

const StyledError = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`

const StyledTitleEr = styled.h2`
    font-size: 20px;
    color: red;
`
