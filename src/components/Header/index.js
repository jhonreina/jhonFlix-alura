import React from 'react'

import styled from 'styled-components'
import Boton from '../Boton';
import { Link } from 'react-router-dom';



const StyledHeader = styled.header`
  background: #000;
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
    <Link to='/'>
    <StyledImagen src='/img/Logo.png' alt='logo' />
    </Link>
    
    <Link to='/nuevovideo'>
    <Boton>Nuevo Video</Boton>
    </Link>
  </StyledHeader>
}

export default Header