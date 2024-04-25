'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import arrowLeft from 'public/icons/notice/arrow-left.svg';

function BackButton() {
  return (
    <BackBtn onClick={() => window.history.back()}>
      <Image src={arrowLeft} alt='back' />
    </BackBtn>
  );
}

export default BackButton;

const BackBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  cursor: pointer;
`;
