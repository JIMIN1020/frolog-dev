'use client';

import InputWithBtnHeader from '@components/common/header/InputWithBtnHeader';
import SelectBook from '@components/wellPage/SelectBook';
import { bookDummy } from '@data/dummyData/bookDummy';
import React from 'react';
import styled from 'styled-components';

interface BookSelectionPageProps {
  handleDone: () => void;
}

function BookSelectionPage({ handleDone }: BookSelectionPageProps) {
  return (
    <Container>
      <InputWithBtnHeader handleDone={handleDone} />
      <BookContainer>
        <Wrapper>
          <p>내가 리뷰 쓴 도서 리스트</p>
          <BookWrapper>
            {bookDummy.map((book) => {
              return <SelectBook key={book.id} bookData={book} />;
            })}
          </BookWrapper>
        </Wrapper>
      </BookContainer>
    </Container>
  );
}

export default BookSelectionPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const BookContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  & p {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.text_lightgray};
    font-weight: 300;
  }
`;

const BookWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;
