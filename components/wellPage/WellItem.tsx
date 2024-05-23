'use client';

import React from 'react';
import { ICONS } from 'constants/icon';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { WellDataType } from '@data/dummyData/wellDummy';
import useStore from 'store/store';

interface WellItemProps {
  data: WellDataType;
}

export default function WellItem({ data }: WellItemProps) {
  const { setIsOpenLike } = useStore();
  if (!data) return <></>;

  return (
    <Container>
      <Wrapper href={`/well/${data.owner.id}/${data.id}`}>
        <WellIcon
          src={data.is_default ? ICONS.well.defaultWell : ICONS.well.well}
          alt='well'
          width={59}
          height={59}
        />
        <InfoText>
          <h3>{data.name}</h3>
          <span>{data.desc}</span>
        </InfoText>
      </Wrapper>
      <Button onClick={() => setIsOpenLike(true)}>
        <Image src={ICONS.well.like} alt='like' width={26} height={26} />
        <span>{data.stat.like_cnt}</span>
      </Button>
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
