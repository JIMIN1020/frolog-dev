'use client';

import BookCardWithLike from '@components/common/bookCard/BookCardWithLike';
import { recommendBookDummy } from '@data/dummyData/recommendDummy';
import React from 'react';
import styled from 'styled-components';

function page() {
  return (
    <Container>
      {recommendBookDummy.map((data) => {
        return <BookCardWithLike key={data.id} bookData={data} />;
      })}
    </Container>
  );
}

export default page;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;
