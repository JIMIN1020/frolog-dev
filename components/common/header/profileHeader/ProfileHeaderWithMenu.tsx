'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { ICONS } from 'constants/icon';
import MyPagePopUp from '../../popUp/MyPagePopUp';
import ProfileHeaderLayout from './ProfileHeaderLayout';

interface ProfileHeaderWithMenuProps {
  userInfo: {
    userName: string;
    achievement: string;
  };
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ProfileHeaderWithMenu({
  setIsEdit,
  userInfo,
}: ProfileHeaderWithMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickEdit = () => {
    setIsEdit!(true);
    setIsOpen(false);
  };

  return (
    <ProfileHeaderLayout userInfo={userInfo}>
      <MenuBtn onClick={() => setIsOpen(true)}>
        <Image src={ICONS.common.menu} alt='menu' width={26} height={20} />
      </MenuBtn>
      <AnimatePresence>
        {isOpen && (
          <MyPagePopUp setOpen={setIsOpen} onClickEdit={onClickEdit} />
        )}
      </AnimatePresence>
    </ProfileHeaderLayout>
  );
}

export default ProfileHeaderWithMenu;

const MenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
