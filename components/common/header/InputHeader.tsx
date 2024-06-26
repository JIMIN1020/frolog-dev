'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ICONS } from 'constants/icon';
import useStore from 'store/store';
import { usePathname, useRouter } from 'next/navigation';

function InputHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const {
    searchValue,
    searchForReviewValue,
    setSearchForReviewValue,
    setSearchValue,
  } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (pathname === '/search-for-review') {
      setSearchForReviewValue(e.target.value);
    } else {
      router.push('/search?searching=true');
      setSearchValue(e.target.value);
    }
  };

  const handleDelete = () => {
    if (pathname === '/search-for-review') {
      setSearchForReviewValue('');
    } else {
      setSearchValue('');
    }
  };

  return (
    <HeaderContainer>
      <SearchInput
        type='text'
        value={
          pathname === '/search-for-review' ? searchForReviewValue : searchValue
        }
        placeholder='책 제목, 작가 이름 등으로 검색해보세요!'
        onChange={(e) => handleChange(e)}
      />
      <SearchIcon
        src={ICONS.header.search}
        alt='search'
        width={24}
        height={24}
      />
      <CancelIcon onClick={handleDelete}>
        <Image
          src={ICONS.header.inputCancel}
          alt='cancel'
          width={24}
          height={24}
        />
      </CancelIcon>
    </HeaderContainer>
  );
}

export default InputHeader;

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 800;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.key_color};
  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text_white};
  padding: 0 40px;
  position: relative;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.text_white};
  }
`;

const SearchIcon = styled(Image)`
  position: absolute;
  left: 25px;
`;

const CancelIcon = styled.button`
  position: absolute;
  right: 25px;
  width: fit-content;
  height: 24px;
  cursor: pointer;
  background: none;
  border: none;
`;
