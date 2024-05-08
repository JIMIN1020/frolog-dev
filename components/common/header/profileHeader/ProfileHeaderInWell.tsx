'use client';

import Image from 'next/image';
import React from 'react';
import shareIcon from 'public/icons/header/share-icon.svg';
import editIcon from 'public/icons/header/well-edit-icon.svg';
import styled from 'styled-components';
import ProfileHeaderLayout from './ProfileHeaderLayout';

interface ProfileHeaderInWellProps {
  onClickEdit: () => void;
  onClickShare: () => Promise<void>;
}

function ProfileHeaderInWell({
  onClickEdit,
  onClickShare,
}: ProfileHeaderInWellProps) {
  return (
    <ProfileHeaderLayout>
      <Wrapper>
        <MenuBtn onClick={onClickEdit}>
          <Image src={editIcon} alt='edit' />
        </MenuBtn>
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
