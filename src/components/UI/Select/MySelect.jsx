import React from 'react';
import styled from 'styled-components';

const MySelect = ({ defaultValue, value, filteredPosts, selectByState }) => {
    return (
        <StyledSelect value={value} onChange={selectByState}>
          <option disabled value="">{defaultValue}</option>
          <option value="">All</option>
          {filteredPosts.map((data) => 
            <option key={data.phone} value={data.adress.state}>{data.adress.state}</option>
            )}
        </StyledSelect>
    )
}

export default MySelect;

const StyledSelect = styled.select`
    margin: 10px;
    border: 1px solid teal;
`