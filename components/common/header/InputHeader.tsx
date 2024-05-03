'use client';

import React from 'react';
import styled from 'styled-components';
import searchIcon from 'public/icons/header/search-icon.svg';
import inputCancel from 'public/icons/header/input-cancel.svg';
import Image from 'next/image';

interface InputHeaderProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

function InputHeader({ searchValue, setSearchValue }: InputHeaderProps) {
  return (
    <HeaderContainer>
      <SearchInput
        type='text'
        value={searchValue}
        placeholder='책 제목, 작가 이름 등으로 검색해보세요!'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchIcon src={searchIcon} alt='search' />
      <CancelIcon onClick={() => setSearchValue('')}>
        <Image src={inputCancel} alt='cancel' />
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
