import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "../VideoCard";
import './Slider.css'
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  top: -100px;
  
`;

const StyledH2 = styled.h2`
  background-color: transparent;
`;

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
    };
    return (
      <StyledDiv>
        <StyledH2> Multiple items </StyledH2>
        <Slider {...settings}>
          <s>
            <VideoCard />
          </s>
          <div>
            <VideoCard/>
            
          </div>
          <div>
            
            <VideoCard/>
          </div>
          <div>
            <VideoCard/>            
          </div>
          <div>
            <VideoCard/>
            
          </div>
          <div>
            <VideoCard/>
            
          </div>
          <div>
            <VideoCard/>
          </div>
          <div>
            <VideoCard/>
            
          </div>
          <div>
            <VideoCard/>
            
          </div>
        </Slider>
      </StyledDiv>
    );
  }
}