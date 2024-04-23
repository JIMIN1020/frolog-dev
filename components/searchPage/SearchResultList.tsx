'use client';

import React from 'react';
import styled from 'styled-components';

import BookCardHorizontal from '../common/bookCard/BookCardHorizontal';
import {
  BookDataType,
  recommendBookDummy,
} from '../../data/dummyData/recommendDummy';

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
              <BookCardHorizontal bookData={data} />
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
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};

  display: flex;
  justify-content: center;
  cursor: pointer;
`;
