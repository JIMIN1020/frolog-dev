'use client';

import Image from 'next/image';
import React from 'react';
import { ICONS } from 'constants/icon';
import { userDummy } from '@data/dummyData/userDummyData';
import styled from 'styled-components';
import ProfileHeaderLayout from './ProfileHeaderLayout';

function ProfileHeaderWithRank({ userId }: { userId: string }) {
  const userData = userDummy.find((data) => data.id === userId)!;
  return (
    <ProfileHeaderLayout
      userInfo={{
        userName: userData.username,
        achievement: userData.achievement,
      }}
    >
      <MenuBtn>
        <Image src={ICONS.header.rank} alt='menu' width={32} height={32} />
      </MenuBtn>
    </ProfileHeaderLayout>
  );
}

export default ProfileHeaderWithRank;

const MenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
