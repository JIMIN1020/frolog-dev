'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { frologPickDummy } from '../../data/dummyData/frologPickDummy';
import FrologPickCard from './FrologPickCard';

function FrologPick() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement | null>(null);
  return (
    <Container>
      <Title>프롤로그 운영진의 PICK</Title>
      <BookContainer ref={sliderRef}>
        <Wrapper
          ref={slidesRef}
          drag='x'
          dragConstraints={sliderRef}
          dragElastic={0.2}
        >
          {frologPickDummy.map((data) => {
            return <FrologPickCard key={data.id} bookData={data} />;
          })}
        </Wrapper>
      </BookContainer>
    </Container>
  );
}

export default FrologPick;

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg_white};
  padding: 16px 0px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h3`
  padding: 0px 16px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_black};
`;

const BookContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  width: fit-content;
  gap: 50px;
  padding: 0px 16px;
`;
