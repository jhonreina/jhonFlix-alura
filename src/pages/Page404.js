import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
    width:40vw;
    height:40vh;
    background-size:cover;

`
const StyledDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const Page404 = () => {
    return <StyledDiv>
      <StyledImg src='/img/404.png' alt='404'></StyledImg>
  </StyledDiv>
  
}

export default Page404