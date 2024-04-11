'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '../common/Rating';
import LikeButton from '../common/button/LikeButton';

function BookInfoCard() {
  const [like, setLike] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);

  const toggleLike = () => {
    setLike(!like);
    setLikesCount(like ? likesCount - 1 : likesCount + 1);
  };
  return (
    <Container>
      <BookImgWrapper>
        <BookImg src='' alt='임시' />
      </BookImgWrapper>
      <Content>
        <BookInfo>
          <h2>해변의 카프카(상)</h2>
          <span>무라카미 하루키</span>
        </BookInfo>
        <Rating rating={4} starSize={22} gap={6} fontSize={12} />
        <ReviewText>
          정건우가 있다. 정건우가 있다. 정건우가 있다. 정건우가 있다. 정건우가
          있다. 정건우가 있다. 정건우가 있다정건우가 있다. 정건우가 있다.
          정건우가 있다. 정건우가 있다. 정건우가 있다. 정건우가 있다. 정건우가
          있다
        </ReviewText>
        <LikeButton
          like={like}
          toggleLike={toggleLike}
          likesCount={likesCount}
        />
      </Content>
    </Container>
  );
}

export default BookInfoCard;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  gap: 30px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  gap: 10px;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h2 {
    color: ${({ theme }) => theme.colors.text_black};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 400;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 400;
  }
`;

const ReviewText = styled.p`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 300;
  line-height: 150%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
