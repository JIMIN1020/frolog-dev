'use client';

import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { recommendBookDummy } from '@data/dummyData/recommendDummy';
import BookCardHorizontal from '../common/BookCardHorizontal';

function BookRecommendation() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  return (
    <Container>
      <Title>오늘의 추천도서</Title>
      <BookContainer ref={sliderRef}>
        <Wrapper
          ref={slidesRef}
          drag='x'
          dragConstraints={sliderRef}
          dragElastic={0.2}
        >
          {recommendBookDummy.map((data) => {
            return <BookCardHorizontal key={data.id} bookData={data} />;
          })}
        </Wrapper>
      </BookContainer>
    </Container>
  );
}

export default BookRecommendation;

const Container = styled.div`
  width: 100%;
  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color_light};
  padding: 16px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h3`
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
  gap: 20px;
`;
