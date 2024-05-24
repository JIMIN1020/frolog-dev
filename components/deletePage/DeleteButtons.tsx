'use client';

import { StyledButtonLink } from '@styles/GlobalStyles';
import { usePathname } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

function DeleteButtons() {
  const [pathname] = usePathname().split('/').slice(-1);

  return (
    <BtnContainer>
      <StyledButtonLink $color='button_gray' href='/myPage/test-user'>
        취소
      </StyledButtonLink>
      <StyledButtonLink
        href={
          pathname === 'step1'
            ? '/delete-account/step2'
            : '/delete-account/confirm'
        }
      >
        계속
      </StyledButtonLink>
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
