import React from 'react';
import styled from 'styled-components'

const MyInput = (props) => {
    return (
        <StyledInput  {...props} />
    )
}

export default MyInput;

const StyledInput = styled.input`
    width: 20%;
    padding: 5px 15px;
    margin: 5px;
    border: 1px solid teal;

`