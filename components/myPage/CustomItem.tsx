'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import checkedIcon from 'public/icons/common/checked.svg';
import uncheckedIcon from 'public/icons/common/unchecked.svg';

interface CustomItemProps {
  /** 해금 여부 */
  isLocked: boolean;
}

function CustomItem({ isLocked }: CustomItemProps) {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <Container>
      <ItemImg src='' alt='임시' />
      <Content>
        <h3>감성 왕관</h3>
        <span>
          아이템 설명 아이템 설명 아이템 설명 아이템 설명 아이템 설명 아이템
          설명
        </span>
        <RequireList>
          <h5>획득 조건 : </h5>
          <Required />
          <Required />
        </RequireList>
      </Content>
      <CheckBtn onClick={() => setSelected((prev) => !prev)}>
        <Image src={selected ? checkedIcon : uncheckedIcon} alt='check' />
      </CheckBtn>
      {isLocked && <LockCover>해금 필요</LockCover>}
    </Container>
  );
}

export default CustomItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;
`;

const ItemImg = styled(Image)`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 8px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text_black};
  gap: 8px;

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 300;
    letter-spacing: -0.06px;
    line-height: 140%;
  }
`;

const RequireList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  & h5 {
    color: ${({ theme }) => theme.colors.text_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const Required = styled.div`
  width: 32px;
  height: 32px;
  background-color: lightgray;
  border-radius: 50%;
`;

const CheckBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const LockCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 500;
`;
