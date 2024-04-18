'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import searchIcon from 'public/icons/header/search-icon.svg';
import { wellDummy } from '@data/dummyData/wellDummy';
import WellItem from './WellItem';

function WellList() {
  return (
    <Content>
      <ListTitleBar>
        <h2>내 우물 리스트</h2>
        <InputWrapper>
          <StyledInput type='text' />
          <SearchIcon src={searchIcon} alt='icon' />
        </InputWrapper>
      </ListTitleBar>
      <WellWrapper>
        {wellDummy.map((data) => {
          return <WellItem key={data.id} data={data} />;
        })}
      </WellWrapper>
    </Content>
  );
}

export default WellList;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10px;
`;

const ListTitleBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    color: #649b66;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    padding: 0 5px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 160px;
  background-color: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.base};
  border: none;
  padding: 10px 10px;
  padding-right: 40px;
  border-radius: 12px;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(Image)`
  position: absolute;
  top: 15%;
  right: 10px;
`;

const WellWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
