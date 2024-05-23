'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import AddBookButton from '@components/common/button/AddBookButton';
import { BookDataType } from '@data/dummyData/recommendDummy';
import Rating from '../common/Rating';

interface Props {
  bookData: BookDataType;
}

function BookInfoCard({ bookData }: Props) {
  const [add, setAdd] = useState<boolean>(false);
  const [addCount, setAddCount] = useState<number>(31);

  const toggleAdd = () => {
    setAdd(!add);
    setAddCount(add ? addCount - 1 : addCount + 1);
  };
  return (
    <Container>
      <BookImgWrapper>
        <BookImg src={bookData.img} alt='임시' />
      </BookImgWrapper>
      <Content>
        <BookInfo>
          <h2>{bookData.name}</h2>
          <span>{bookData.author}</span>
        </BookInfo>
        <ContentWrapper>
          <Rating
            rating={bookData.rating}
            starSize={22}
            gap={6}
            fontSize={12}
          />
          <ReviewText>{bookData.summary}</ReviewText>
        </ContentWrapper>
        <AddBookButton add={add} onClick={toggleAdd} addCount={addCount} />
      </Content>
    </Container>
  );
}

export default BookInfoCard;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BookImgWrapper = styled.div`
  width: 140px;
  height: 200px;
  display: flex;
`;

const BookImg = styled.img`
  width: 140px;
  height: 200px;
  border: 1px;
  background-color: lightgray;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
`;

const BookInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h2 {
    color: ${({ theme }) => theme.colors.text_black};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 400;
    line-height: 140%;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 400;
  }
`;

const ReviewText = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 300;
  line-height: 150%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
