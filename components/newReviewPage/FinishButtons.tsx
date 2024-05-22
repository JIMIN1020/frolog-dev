'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

function FinishButtons() {
  const router = useRouter();
  return (
    <ButtonContainer>
      <Button onClick={() => router.push('/')}>홈 화면 가기</Button>
      <Button onClick={() => router.push('/review/1')}>
        내 리뷰 보러 가기
      </Button>
    </ButtonContainer>
  );
}

export default FinishButtons;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  position: absolute;
  bottom: 50px;
  left: 0;
`;

const Button = styled.button`
  width: 288px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.key_color};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  transition: background-color 0.3s;

  &:active {
    box-shadow: none;
  }
`;
