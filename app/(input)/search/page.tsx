'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import AdBanner from '@components/common/AdBanner';
import BookRecommendation from '@components/searchPage/BookRecommendation';
import FrologPick from '@components/searchPage/FrologPick';
import SearchResultList from '@components/searchPage/SearchResultList';
import { BookDataType } from '@data/dummyData/recommendDummy';
import { useRouter, useSearchParams } from 'next/navigation';
import BookRegister from '@components/searchPage/BookRegister';
import useStore from 'store/store';

function SearchPage() {
  const { searchValue, setSearchValue } = useStore();
  const searchParams = useSearchParams();
  const isSearching = searchParams.get('searching');
  const router = useRouter();

  /* ----- 상세 페이지로 이동하는 함수 ----- */
  const handleBookClick = (bookData: BookDataType) => {
    router.push(`/book-detail/${bookData.id}`);
  };

  useEffect(() => {
    if (!isSearching) {
      setSearchValue('');
    }
  }, [isSearching]);

  return (
    <Container>
      {isSearching && searchValue.length < 10 && (
        <SearchResultList handleClick={handleBookClick} />
      )}
      {isSearching && searchValue.length >= 10 && <BookRegister />}
      {!isSearching && (
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
