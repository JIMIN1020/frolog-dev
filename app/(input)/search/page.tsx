'use client';

import React, { useContext } from 'react';
import styled from 'styled-components';
import { InputContext } from '@components/layout/SearchLayout';
import AdBanner from '@components/common/AdBanner';
import BookRecommendation from '@components/searchPage/BookRecommendation';
import FrologPick from '@components/searchPage/FrologPick';
import SearchResultList from '@components/searchPage/SearchResultList';
import { BookDataType } from '@data/dummyData/recommendDummy';
import { useRouter } from 'next/navigation';

function SearchPage() {
  const router = useRouter();
  const { searchValue } = useContext(InputContext);

  /* ----- 상세 페이지로 이동하는 함수 -> 추후 id를 query string으로 넣을 예정 ----- */
  const handleBookClick = (bookData: BookDataType) => {
    router.push('/book-detail');
    console.log(bookData.id);
  };

  return (
    <Container>
      {searchValue.length > 0 ? (
        <SearchResultList handleClick={handleBookClick} />
      ) : (
        <>
          <AdContainer>
            <AdBanner />
          </AdContainer>
          <BookRecommendation />
          <FrologPick />
        </>
      )}
    </Container>
  );
}

export default SearchPage;

const Container = styled.div`
  width: 100%;
`;

const AdContainer = styled.div`
  width: 100%;
  padding: 16px 18px;
  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color_light};
`;