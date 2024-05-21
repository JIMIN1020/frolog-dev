'use client';

import { StyledButton } from '@styles/GlobalStyles';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

function DeleteButtons() {
  const [pathname] = usePathname().split('/').slice(-1);
  const router = useRouter();
  return (
    <BtnContainer>
      <StyledButton
        disabled={false}
        onClick={() => router.push('/myPage/test-user')}
      >
        취소
      </StyledButton>
      <StyledButton
        disabled={false}
        $color='button_gray'
        onClick={() =>
          router.push(
            pathname === 'step1'
              ? '/delete-account/step2'
              : '/delete-account/confirm'
          )
        }
      >
        계속
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
