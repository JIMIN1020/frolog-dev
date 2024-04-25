'use client';

import React from 'react';
import styled from 'styled-components';
import searchIcon from 'public/icons/header/search-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '../button/BackButton';

function InputWithBtnHeader() {
  return (
    <HeaderContainer>
      <BackButton />
      <InputWrapper>
        <SearchIcon src={searchIcon} alt='search' />
        <SearchInput
          type='text'
          placeholder='책 제목, 작가 이름 등으로 검색해보세요!'
        />
      </InputWrapper>
      <DoneBtn href='/well/1'>완료</DoneBtn>
    </HeaderContainer>
  );
}

export default InputWithBtnHeader;

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  padding-left: 40px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 800;
  gap: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.key_color};
  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text_white};
  padding-left: 40px;
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
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  z-index: 10;
`;

const DoneBtn = styled(Link)`
  background: none;
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  cursor: pointer;
  font-weight: 500;
`;