import React from 'react';
import styled from 'styled-components';
import { FrologPickType } from '../../data/dummyData/frologPickDummy';

interface FrologPickCardProps {
  bookData: FrologPickType;
}

function FrologPickCard({ bookData }: FrologPickCardProps) {
  return (
    <BookContainer>
      <BookImg src={bookData.img} alt='임시' />
      <Content>
        <BookTitle>{bookData.name}</BookTitle>
        <Summary>{bookData.summary}</Summary>
      </Content>
    </BookContainer>
  );
}

export default FrologPickCard;

const BookContainer = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const BookImg = styled.img`
  width: 110px;
  height: 140px;
  border: 1px;
  background-color: lightgray;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const BookTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;
`;

const Summary = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 300;
  line-height: 140%;
  text-align: center;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
