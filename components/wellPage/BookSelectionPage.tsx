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
          {bookDummy.map((book) => {
            return <SelectBook key={book.id} bookData={book} />;
          })}
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
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;
