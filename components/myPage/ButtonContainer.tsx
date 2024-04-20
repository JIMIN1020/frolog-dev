'use client';

import { StyledButton } from '@styles/GlobalStyles';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

export default function ButtonContainer() {
  const router = useRouter();
  return (
    <Container>
      <StyledButton disabled={false} $color='key_color'>
        로그아웃
      </StyledButton>
      <StyledButton
        onClick={() => router.push('/delete-account')}
        disabled={false}
        $color='button_gray'
      >
        회원 탈퇴
      </StyledButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 30px 0;
`;
