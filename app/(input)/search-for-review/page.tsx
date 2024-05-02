'use client';

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { InputContext } from '@components/layout/SearchLayout';
import SearchResultList from '@components/searchPage/SearchResultList';
import { BookDataType } from '@data/dummyData/recommendDummy';

function SearchForReviewPage() {
  const router = useRouter();
  const { searchValue } = useContext(InputContext);

  /* ----- 리뷰 작성 페이지로 이동하는 함수 ----- */
  const handleBookClick = (bookData: BookDataType) => {
    // query에 책 정보를 포함시켜서 NewReviwPage로 전달
    router.push(`/new-review?selectedBook=${JSON.stringify(bookData)}`);
  };

  return (
    <Container>
      {searchValue.length > 0 && (
        <SearchResultList handleClick={handleBookClick} />
      )}
    </Container>
  );
}

export default SearchForReviewPage;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
`;
