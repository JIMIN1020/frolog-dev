'use client';

import React from 'react';
import styled from 'styled-components';
import {
  BookDataType,
  recommendBookDummy,
} from '@data/dummyData/recommendDummy';
import BookResult from './BookResult';

interface SearchResultListProps {
  handleClick: (book: BookDataType) => void;
}

function SearchResultList({ handleClick }: SearchResultListProps) {
  return (
    <Container>
      <Wrapper>
        {recommendBookDummy.map((data) => {
          return (
            <Card key={data.id} onClick={() => handleClick(data)}>
              <BookResult bookData={data} />
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default SearchResultList;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;
  padding: 0px 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Card = styled.div`
  width: 100%;
  padding: 30px 0;

  display: flex;
  justify-content: center;
  cursor: pointer;
`;
