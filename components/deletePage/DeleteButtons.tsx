'use client';

import { StyledButton } from '@styles/GlobalStyles';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

function DeleteButtons() {
  const router = useRouter();
  return (
    <BtnContainer>
      <StyledButton disabled={false} onClick={() => router.push('/myPage')}>
        취소
      </StyledButton>
      <StyledButton
        disabled={false}
        $color='button_gray'
        onClick={() => router.push('/delete-account/confirm')}
      >
        회원탈퇴
      </StyledButton>
    </BtnContainer>
  );
}

export default DeleteButtons;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
