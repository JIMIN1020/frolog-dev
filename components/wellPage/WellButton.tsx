'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

function WellButton() {
  const router = useRouter();
  return (
    <WellBtnContainer onClick={() => router.push('/well-edit?new=true')}>
      <WellImg src='' alt='임시' />
      <WellAddButton>우물 새로 파기</WellAddButton>
    </WellBtnContainer>
  );
}

export default WellButton;

const WellBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const WellImg = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  border: 9px solid ${({ theme }) => theme.colors.key_color};
  background-color: gray;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const WellAddButton = styled.button`
  width: 200px;
  padding: 12px 0;
  margin-left: -10px;
  border-radius: 0px 50px 50px 0;
  background-color: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
`;
