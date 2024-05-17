'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

function StartButton() {
  const router = useRouter();

  const goToTest = () => {
    router.push('/frolog-test?step=1');
  };

  return <Button onClick={goToTest}>내 독서 성향 알아보기</Button>;
}

export default StartButton;

const Button = styled.button`
  width: 288px;
  height: 44px;
  border-radius: 50px;
  margin-bottom: 94px;
  background: ${({ theme }) => theme.colors.key_color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
