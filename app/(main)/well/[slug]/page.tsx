'use client';

import WellItem from '@components/wellPage/WellItem';
import { wellDummy } from '@data/dummyData/wellDummy';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import settingIcon from 'public/icons/well/setting.svg';
import WellPopUp from '@components/common/popUp/WellPopUp';

// export async function generateStaticParams() {
//   const slugs = wellDummy.map((well) => ({
//     slug: well.id.toString(),
//   }));
//   return slugs;
// }

interface WellDetailPageProps {
  params: {
    slug: string;
  };
}

export default function WellDetailPage({ params }: WellDetailPageProps) {
  const [open, setOpen] = useState<boolean>(false);
  const { slug } = params;
  const data = wellDummy.filter((well) => well.id === +slug)[0];

  return (
    <Container>
      <WellInfoWrapper>
        <WellItem data={data} />
        <Setting onClick={() => setOpen(true)}>
          설정 <Image src={settingIcon} alt='setting' />
        </Setting>
      </WellInfoWrapper>
      <BookContainer>
        <Book $margin='0px 0px 0px 30px'>
          <span>노르웨이의 숲</span>
        </Book>
        <Book $margin='0px 20px 0px 0px'>
          <span>노르웨이의 숲</span>
        </Book>
        <Book $margin='0px 0px 0px 0px'>
          <span>노르웨이의 숲</span>
        </Book>
        <Book $margin='0px 30px 0px 0px'>
          <span>노르웨이의 숲</span>
        </Book>
      </BookContainer>
      {open && <WellPopUp wellId={data.id} setOpen={setOpen} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.input_gray};
`;

const WellInfoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 10px 0 10px;

  position: absolute;
  top: 0;
  left: 0;
`;

const BookContainer = styled.div`
  width: 80%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const Book = styled.div<{ $margin: string }>`
  width: 180px;
  height: 40px;
  display: flex;
  margin: ${({ $margin }) => $margin};
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.key_color};

  & span {
    writing-mode: vertical-lr;
    text-orientation: upright;
    transform: rotate(270deg);
    font-size: ${({ theme }) => theme.fontSize.base};
    height: 170px;
    text-align: center;
  }
`;

const Setting = styled.button`
  background-color: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  display: flex;
  border: none;
  align-items: center;
  padding: 6px;
  border-radius: 8px;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  float: right;
  margin: 12px 0;
  cursor: pointer;
`;
