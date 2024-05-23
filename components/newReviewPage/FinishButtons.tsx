'use client';

import { StyledButton } from '@styles/GlobalStyles';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

function FinishButtons() {
  const router = useRouter();
  return (
    <ButtonContainer>
      <StyledButton disabled={false} onClick={() => router.push('/')}>
        홈 화면 가기
      </StyledButton>
      <StyledButton disabled={false} onClick={() => router.push('/review/1')}>
        내 리뷰 보러 가기
      </StyledButton>
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

  padding: 0 40px;
`;
