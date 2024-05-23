'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import SearchResultList from '@components/searchPage/SearchResultList';
import { BookDataType } from '@data/dummyData/recommendDummy';
import useStore from 'store/store';
import BookRegister from '@components/searchPage/BookRegister';

function SearchForReviewPage() {
  const router = useRouter();
  const { searchForReviewValue, setSearchForReviewValue } = useStore();

  /* ----- 리뷰 작성 페이지로 이동하는 함수 ----- */
  const handleBookClick = (bookData: BookDataType) => {
    // query에 책 정보를 포함시켜서 NewReviwPage로 전달
    setSearchForReviewValue('');
    router.push(`/new-review?step=1&selectedBook=${JSON.stringify(bookData)}`);
  };

  return (
    <Container>
      {searchForReviewValue.length > 0 && searchForReviewValue.length < 10 && (
        <SearchResultList handleClick={handleBookClick} />
      )}
      {searchForReviewValue.length >= 10 && <BookRegister />}
    </Container>
  );
}

export default SearchForReviewPage;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
`;
