'use client';

import React, { useState } from 'react';
import wellIcon from 'public/icons/well/well-icon.svg';
import likeIcon from 'public/icons/well/like.svg';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { WellDataType } from '@data/dummyData/wellDummy';
import { AnimatePresence } from 'framer-motion';
import LikeBottomSheet from './LikeBottomSheet';

interface WellItemProps {
  data: WellDataType;
}

export default function WellItem({ data }: WellItemProps) {
  const [likeOpen, setLikeOpen] = useState<boolean>(false);
  return (
    <Container>
      <Wrapper href={`/well/${data.id}`}>
        <WellIcon src={wellIcon} alt='well' />
        <InfoText>
          <h3>{data.title}</h3>
          <span>{data.description}</span>
        </InfoText>
      </Wrapper>
      <Button onClick={() => setLikeOpen(true)}>
        <Image src={likeIcon} alt='like' />
        <span>1,200</span>
      </Button>
      <AnimatePresence>
        {likeOpen && <LikeBottomSheet setOpen={setLikeOpen} />}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 22px;
  border: 2px solid ${({ theme }) => theme.colors.key_color};
  overflow: hidden;
  padding: 14px 10px;
  background: ${({ theme }) => theme.colors.bg_white};
  box-shadow: 0px 3px 0px 0px rgba(11, 36, 13, 0.15);
`;

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const WellIcon = styled(Image)`
  width: 60px;
  height: 60px;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  justify-content: space-around;
  align-items: start;
  color: ${({ theme }) => theme.colors.text_black};

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 300;
  }
`;

const Button = styled.button`
  width: fit-content;
  background: none;

  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;
  gap: 10px;
  cursor: pointer;

  & span {
    color: ${({ theme }) => theme.colors.text_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 300;
  }
`;
