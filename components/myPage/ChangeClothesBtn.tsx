'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import clothesIcon from 'public/icons/mypage/clothes-icon.svg';
import { useRouter } from 'next/navigation';

function ChangeClothesBtn() {
  const router = useRouter();
  return (
    <Container onClick={() => router.push('/change-frog')}>
      <ButtonText>외형 변경</ButtonText>
      <Image src={clothesIcon} alt='clothes' />
    </Container>
  );
}

export default ChangeClothesBtn;

const Container = styled.button`
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
