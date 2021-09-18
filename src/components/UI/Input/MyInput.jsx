import React from 'react';
import styled from 'styled-components'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <StyledInput ref={ref} {...props} />
    )
})

export default MyInput;

const StyledInput = styled.input`
    width: 20%;
    padding: 5px 15px;
    margin: 5px;
    border: 1px solid teal;

`