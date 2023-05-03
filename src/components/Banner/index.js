import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
   background-image:url('/img/banner.png');
   background-size:cover;
   
   `


const StyledDiv = styled.div`
   background:rgba(0, 18, 51, 0.56);  
   width:100%;
   height:calc(100vh - 94px);

`
const Banner = () => {
    return <StyledMain>
      <StyledDiv></StyledDiv>
  </StyledMain>
}

export default Banner