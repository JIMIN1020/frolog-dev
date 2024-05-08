'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import menuIcon from 'public/icons/common/menu-bar.svg';
import styled from 'styled-components';
import MyPagePopUp from '../../popUp/MyPagePopUp';
import ProfileHeaderLayout from './ProfileHeaderLayout';

interface ProfileHeaderWithMenuProps {
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ProfileHeaderWithMenu({ setIsEdit }: ProfileHeaderWithMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickEdit = () => {
    setIsEdit!(true);
    setIsOpen(false);
  };

  return (
    <ProfileHeaderLayout>
      <MenuBtn onClick={() => setIsOpen(true)}>
        <Image src={menuIcon} alt='menu' />
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
