'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface ResultButtonProps {
  type: number;
}

function ResultButton({ type }: ResultButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/result-frologtest?type=${type}`);
  };

  return <Button onClick={handleClick}>내 결과 확인하기</Button>;
}

export default ResultButton;

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
