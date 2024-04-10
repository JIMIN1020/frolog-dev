'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

function AdBanner() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => {
      setActiveSlide(next + 1); // 현재 슬라이드 번호
    },
  };
  return (
    <Container>
      <Slider {...settings}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
        <Slide>4</Slide>
        <Slide>5</Slide>
      </Slider>
      <SlideCount>{activeSlide} / 5</SlideCount>
    </Container>
  );
}

export default AdBanner;

const Container = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  position: relative;
`;

const Slide = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.key_color_light};
`;

const SlideCount = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text_white};
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
