'use client';

import Image from 'next/image';
import React from 'react';
import shareIcon from 'public/icons/header/share-icon.svg';
import editIcon from 'public/icons/header/well-edit-icon.svg';
import styled from 'styled-components';
import { userDummy } from '@data/dummyData/userDummyData';
import ProfileHeaderLayout from './ProfileHeaderLayout';

interface ProfileHeaderInWellProps {
  userId: string;
  onClickEdit: () => void;
  onClickShare: () => Promise<void>;
}

function ProfileHeaderInWell({
  userId,
  onClickEdit,
  onClickShare,
}: ProfileHeaderInWellProps) {
  const userData = userDummy.find((data) => data.id === userId)!;
  return (
    <ProfileHeaderLayout
      userInfo={{
        userName: userData.username,
        achievement: userData.achievement,
      }}
    >
      <Wrapper>
        {userId === 'test-user' && (
          <MenuBtn onClick={onClickEdit}>
            <Image src={editIcon} alt='edit' />
          </MenuBtn>
        )}
        <MenuBtn onClick={onClickShare}>
          <Image src={shareIcon} alt='share' />
        </MenuBtn>
      </Wrapper>
    </ProfileHeaderLayout>
  );
}

export default ProfileHeaderInWell;

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const MenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
