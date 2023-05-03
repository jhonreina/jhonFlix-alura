import React from 'react'

import styled from 'styled-components'
import Boton from '../Boton';



const StyledHeader = styled.header`
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 94px;
  border-bottom: 2px solid #2A7AE4;
`;

const StyledImagen = styled.img`
   width:168.45px;
   height:40px;
   margin-left:40px;

`


const Header = () => {
  return <StyledHeader>
    <StyledImagen src='/img/Logo.png' alt='logo' />
    <Boton>Nuevo Video</Boton>
  </StyledHeader>
}

export default Header