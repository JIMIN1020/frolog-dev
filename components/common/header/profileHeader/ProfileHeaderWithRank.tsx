'use client';

import Image from 'next/image';
import React from 'react';
import rankIcon from 'public/icons/header/rank-icon.svg';
import styled from 'styled-components';
import ProfileHeaderLayout from './ProfileHeaderLayout';

function ProfileHeaderWithRank() {
  return (
    <ProfileHeaderLayout>
      <MenuBtn>
        <Image src={rankIcon} alt='menu' />
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
