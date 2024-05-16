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
import BookRegister from '@components/searchPage/BookRegister';

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
      {searchValue.length > 0 && searchValue.length < 10 && (
        <SearchResultList handleClick={handleBookClick} />
      )}
      {searchValue.length >= 10 && <BookRegister />}
      {searchValue.length === 0 && (
        <Wrapper>
          <AdContainer>
            <AdBanner />
          </AdContainer>
          <BookRecommendation />
          <FrologPick />
        </Wrapper>
      )}
    </Container>
  );
}

export default SearchPage;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: calc(var(--vh, 1vh) * 100 - 140px);
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.key_color_light};
  padding-bottom: 8px;
`;

const AdContainer = styled.div`
  width: 100%;
  padding: 0px 18px 16px 18px;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;
