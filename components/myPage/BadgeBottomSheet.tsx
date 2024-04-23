'use client';

import BottomSheet from '@components/common/BottomSheet';
import styled from 'styled-components';
import { badgeDummy } from '@data/dummyData/badgeDummy';
import React from 'react';
import BadgeListItem from './BadgeListItem';

interface BadgeBottomSheetProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BadgeBottomSheet({ setOpen }: BadgeBottomSheetProps) {
  return (
    <BottomSheet title='배지' setOpen={setOpen}>
      <BadgeWrapper>
        {badgeDummy.map((badge) => {
          return <BadgeListItem key={badge.id} badgeData={badge} />;
        })}
      </BadgeWrapper>
    </BottomSheet>
  );
}

export default BadgeBottomSheet;

const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;
