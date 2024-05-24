'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ICONS } from 'constants/icon';

function ChangeClothesBtn() {
  return (
    <Container href='/change-frog/1'>
      <ButtonText>외형 변경</ButtonText>
      <Image src={ICONS.myPage.clothes} alt='clothes' width={24} height={24} />
    </Container>
  );
}

export default ChangeClothesBtn;

const Container = styled(Link)`
  width: 120px;
  padding: 12px 0;
  background-color: ${({ theme }) => theme.colors.key_color};
  border: none;
  color: ${({ theme }) => theme.colors.text_white};
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  position: absolute;
  bottom: 0px;
  right: -40px;
  cursor: pointer;
`;

const ButtonText = styled.h5`
  color: ${({ theme }) => theme.colors.text_white};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
