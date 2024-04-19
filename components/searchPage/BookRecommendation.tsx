'use client';

import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { recommendBookDummy } from '@data/dummyData/recommendDummy';
import BookCardWithBtn from '@components/common/BookCardWithBtn';

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
            return <BookCardWithBtn key={data.id} bookData={data} />;
          })}
        </Wrapper>
      </BookContainer>
    </Container>
  );
}

export default BookRecommendation;

const Container = styled.div`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const Title = styled.h3`
  padding: 0 16px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_black};
`;

const BookContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  width: fit-content;
  gap: 20px;
  padding: 0 16px;
`;
