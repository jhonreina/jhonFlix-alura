import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 5px;
  border-color: #fff;
  padding: 10px 20px;
  margin-right: 40px;
  cursor: pointer;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 21px;
  font-weight: 600;
  line-height: 24px;
  font-style: normal;
  background: rgba(0, 0, 0, 0.9);
  color:#fff
`;

const Boton = (props) => {
    return <StyledButton>{props.children}</StyledButton>
}

export default Boton