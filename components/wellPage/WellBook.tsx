'use client';

import { wellItemVariants } from '@styles/framer-motion/variants';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import styled from 'styled-components';

interface WellBookProps {
  bookData: {
    id: string;
    name: string;
  };
}

const WellBook = ({ bookData }: WellBookProps) => {
  const margin = useMemo(() => {
    const margins = [
      '0px 0px 0px 30px',
      '0px 20px 0px 0px',
      '0px 0px 0px 0px',
      '0px 30px 0px 0px',
    ];
    const randomIndex = Math.floor(Math.random() * margins.length);
    return margins[randomIndex];
  }, []);

  return (
    <Book variants={wellItemVariants} $margin={margin}>
      <span>{bookData.name}</span>
    </Book>
  );
};

export default WellBook;

const Book = styled(motion.div)<{ $margin: string }>`
  width: 180px;
  height: 40px;
  display: flex;
  margin: ${({ $margin }) => $margin};
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.key_color};

  & span {
    writing-mode: vertical-lr;
    text-orientation: upright;
    transform: rotate(270deg);
    font-size: ${({ theme }) => theme.fontSize.base};
    height: 170px;
    text-align: center;
  }
`;
