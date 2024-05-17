'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface FrologStartButtonProps {
  type: number;
}

function FrologStartButton({ type }: FrologStartButtonProps) {
  const router = useRouter();

  const handleClick = async () => {
    try {
      // API 연동(해당 사용자의 type을 서버로 보내도록 구현)
      // type 변수를 나중에 사용할 계획이라서, 아래 주석을 사용하여 eslint 경고 무시
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const userType = type; // 이 변수는 나중에 API 연동 시 사용할 것임.

      router.push('/');
    } catch (error) {
      console.error('Failed to save user type', error);
    }
  };

  return <Button onClick={handleClick}>Frolog 시작하기</Button>;
}

export default FrologStartButton;

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
