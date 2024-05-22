'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { StyledButton } from '@styles/GlobalStyles';

interface FrologStartButtonProps {
  type: number;
}

function FrologStartButton({ type }: FrologStartButtonProps) {
  const router = useRouter();

  const handleClick = async () => {
    try {
      // API 연동(해당 사용자의 type을 서버로 보내도록 구현)
      // type 변수를 나중에 사용할 계획이라서, 아래 주석을 사용하여 eslint 경고 무시
      // const userType = type; // 이 변수는 나중에 API 연동 시 사용할 것임.
      console.log(type);
      localStorage.setItem('type', `${type}`);
      router.push('/');
    } catch (error) {
      console.error('Failed to save user type', error);
    }
  };

  return (
    <StyledButton disabled={false} onClick={handleClick}>
      Frolog 시작하기
    </StyledButton>
  );
}

export default FrologStartButton;
