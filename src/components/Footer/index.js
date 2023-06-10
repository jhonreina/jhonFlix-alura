import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #2a7ae4;
  `;

const StyledImg = styled.img`
    
    width:252.2px;
    height:60px;
    margin:20px 0 0 0;
    
`

const Footer = () => {
    return <StyledFooter>
        <StyledImg src='/img/Logo.png' alt='logo' />
    </StyledFooter>
}
export default Footer