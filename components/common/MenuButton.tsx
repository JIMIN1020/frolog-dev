import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import menuIcon from 'public/icons/home/menu.svg';
import { AnimatePresence } from 'framer-motion';
import FeedPopUp from './popUp/FeedPopUp';
import WellPopUp from './popUp/WellPopUp';

interface MenuButtonProps {
  /* 피드 메뉴: feed / 우물 메뉴: well */
  type: 'feed' | 'well';
}

export default function MenuButton({ type }: MenuButtonProps) {
  const [feedPopUp, setFeedPopUp] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setFeedPopUp(true)}>
        <MenuIcon src={menuIcon} alt='menu' />
      </Button>
      <AnimatePresence>
        {feedPopUp && type === 'feed' && <FeedPopUp setOpen={setFeedPopUp} />}
        {feedPopUp && type === 'well' && <WellPopUp setOpen={setFeedPopUp} />}
      </AnimatePresence>
    </>
  );
}

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  background: none;
  border: none;
`; // 자연스럽게 오른쪽으로 정렬되도록 레이아웃 수정됨

const MenuIcon = styled(Image)`
  width: 22px;
  height: 22px;
`;
