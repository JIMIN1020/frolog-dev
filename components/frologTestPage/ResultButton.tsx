'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ResultButtonProps {
  type: number;
}

function ResultButton({ type }: ResultButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/frolog-test/result?type=${type}`);
  };

  return (
    <Button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      onClick={handleClick}
    >
      내 결과 확인하기
    </Button>
  );
}

export default ResultButton;

const Button = styled(motion.button)`
  width: 100%;
  height: 44px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.key_color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
