import React from 'react';
import styled, {keyframes} from 'styled-components'


export const Loader = () => {
    return (
        <StyledLoader>

        </StyledLoader>
    )
}

export default Loader;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
    margin: 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px dashed teal;
    animation: ${rotate} 1s infinite linear;

`

