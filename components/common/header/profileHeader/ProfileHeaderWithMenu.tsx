'use client';

import Image from 'next/image';
import React from 'react';
import useStore from 'store/store';
import styled from 'styled-components';
import { ICONS } from 'constants/icon';
import ProfileHeaderLayout from './ProfileHeaderLayout';

interface ProfileHeaderWithMenuProps {
  userInfo: {
    userName: string;
    achievement: string;
  };
}

function ProfileHeaderWithMenu({ userInfo }: ProfileHeaderWithMenuProps) {
  const { setIsOpenMyPageEdit } = useStore();

  return (
    <ProfileHeaderLayout userInfo={userInfo}>
      <MenuBtn onClick={() => setIsOpenMyPageEdit(true)}>
        <Image src={ICONS.common.menu} alt='menu' width={26} height={20} />
      </MenuBtn>
    </ProfileHeaderLayout>
  );
}

export default ProfileHeaderWithMenu;

const MenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
