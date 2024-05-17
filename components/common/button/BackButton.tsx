'use client';

import { ICONS } from 'constants/icon';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

function BackButton() {
  return (
    <BackBtn onClick={() => window.history.back()}>
      <Image src={ICONS.notice.arrowLeft} alt='back' width={36} height={36} />
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
