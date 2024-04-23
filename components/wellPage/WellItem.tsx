'use client';

import React, { useState } from 'react';
import wellIcon from 'public/icons/well/well-icon.svg';
import BottomBar from '@components/common/BottomBar';
import menuIcon from 'public/icons/home/menu.svg';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { WellDataType } from '@data/dummyData/wellDummy';
import { AnimatePresence } from 'framer-motion';
import WellPopUp from '@components/common/popUp/WellPopUp';

interface WellItemProps {
  data: WellDataType;
  setEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WellItem({ data, setEdit }: WellItemProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Container>
      <WellInfoBox>
        <Wrapper href={`/well/${data.id}`}>
          <WellIcon src={wellIcon} alt='well' />
          <InfoText>
            <h3>{data.title}</h3>
            <span>{data.description}</span>
          </InfoText>
        </Wrapper>
        <Button onClick={() => setOpen(true)}>
          <MenuIcon src={menuIcon} alt='menu' />
        </Button>
      </WellInfoBox>
      <BottomBar commentsCount={12} isLikeList={true} />
      <AnimatePresence>
        {setEdit && open && (
          <WellPopUp wellId={data.id} setEdit={setEdit} setOpen={setOpen} />
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 22px;
  border: 2px solid ${({ theme }) => theme.colors.key_color};
  overflow: hidden;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.bg_white};
  box-shadow: 0px 3px 0px 0px rgba(11, 36, 13, 0.15);
`;

const Wrapper = styled(Link)`
  display: flex;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const WellInfoBox = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
  padding: 14px 0;
  justify-content: space-between;
`;

const WellIcon = styled(Image)`
  width: 60px;
  height: 60px;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
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
  height: fit-content;
  background: none;
  padding-top: 8px;
  border: none;
`;

const MenuIcon = styled(Image)`
  width: 22px;
  height: 22px;
`;
