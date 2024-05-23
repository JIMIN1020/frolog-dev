'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ICONS } from 'constants/icon';

interface InputWithBtnHeaderProps {
  handleDone: () => void;
}

function InputWithBtnHeader({ handleDone }: InputWithBtnHeaderProps) {
  return (
    <HeaderContainer>
      <BackBtn type='button' onClick={handleDone}>
        <Image src={ICONS.notice.arrowLeft} alt='back' width={36} height={36} />
      </BackBtn>
      <InputWrapper>
        <SearchIcon
          src={ICONS.header.search}
          alt='search'
          width={24}
          height={24}
        />
        <SearchInput
          type='text'
          placeholder='책 제목, 작가 이름 등으로 검색해보세요!'
        />
      </InputWrapper>
      <DoneBtn type='button' onClick={handleDone}>
        완료
      </DoneBtn>
    </HeaderContainer>
  );
}

export default InputWithBtnHeader;

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  padding-left: 40px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

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
  left: 10px;
  z-index: 10;
`;

const DoneBtn = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  cursor: pointer;
  font-weight: 500;
`;

const BackBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 4px;
  cursor: pointer;
`;
