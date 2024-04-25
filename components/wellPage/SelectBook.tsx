'use client';

import Rating from '@components/common/Rating';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import checkIcon from 'public/icons/well/checked.svg';
import uncheckIcon from 'public/icons/well/unchecked.svg';

function SelectBook() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Container>
      <ImgWrapper>
        <BookImg src='' alt='' />
        <CheckButton onClick={() => setChecked((prev) => !prev)}>
          {checked ? (
            <Image src={checkIcon} alt='check' />
          ) : (
            <Image src={uncheckIcon} alt='check' />
          )}
        </CheckButton>
      </ImgWrapper>
      <Content>
        <TitleAndAuthor>노르웨이의 숲 / 무라카미 하루키</TitleAndAuthor>
        <Rating rating={5} starSize={12} gap={4} fontSize={10} />
      </Content>
    </Container>
  );
}

export default SelectBook;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const BookImg = styled(Image)`
  width: 160px;
  height: 230px;
  background-color: lightgray;
`;

const CheckButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleAndAuthor = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text_gray};
`;
