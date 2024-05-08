'use client';

import TitleHeader from '@components/common/header/TitleHeader';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import frogIcon from 'public/icons/mypage/frog.svg';
import CustomItem from '@components/myPage/CustomItem';

function ChangeFrogPage() {
  return (
    <Container>
      <TitleHeader button={true} />
      <Wrapper>
        <IconWrapper>
          <Image src={frogIcon} alt='frog' />
        </IconWrapper>
        <ItemList>
          <CustomItem isLocked={false} />
          <CustomItem isLocked={false} />
          <CustomItem isLocked={true} />
        </ItemList>
      </Wrapper>
    </Container>
  );
}

export default ChangeFrogPage;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0 40px 0;
`;

const ItemList = styled.div`
  width: 100%;
  padding: 16px 0;
  border-top: 1.5px solid ${({ theme }) => theme.colors.key_color};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
