'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { ICONS } from 'constants/icon';
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
            <Image
              src={ICONS.header.wellEdit}
              alt='edit'
              width={32}
              height={32}
            />
          </MenuBtn>
        )}
        <MenuBtn onClick={onClickShare}>
          <Image src={ICONS.header.share} alt='share' width={32} height={32} />
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
