'use client';

import InputWithBtnHeader from '@components/common/header/InputWithBtnHeader';
import SelectBook from '@components/wellPage/SelectBook';
import React from 'react';
import styled from 'styled-components';

function page() {
  return (
    <Container>
      <InputWithBtnHeader />
      <BookContainer>
        <Wrapper>
          <SelectBook />
          <SelectBook />
          <SelectBook />
          <SelectBook />
        </Wrapper>
      </BookContainer>
    </Container>
  );
}

export default page;

const Container = styled.div`
  width: 100%;
  height: 100%;
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
