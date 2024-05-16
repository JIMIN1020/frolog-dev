import React from 'react';
import styled from 'styled-components';
import ProfileBarWithIcon from '@components/common/profileBar/ProfileBarWithIcon';
import BottomSheet from '@components/common/BottomSheet';
import { userDummy } from '@data/dummyData/userDummyData';

type LikeBottomSheet = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LikeBottomSheet({ setOpen }: LikeBottomSheet) {
  return (
    <BottomSheet title='좋아요' setOpen={setOpen}>
      <LikeList>
        <ProfileBarWithIcon user={userDummy[1]} />
        <ProfileBarWithIcon user={userDummy[2]} />
        <ProfileBarWithIcon user={userDummy[2]} />
        <ProfileBarWithIcon user={userDummy[1]} />
      </LikeList>
    </BottomSheet>
  );
}

const LikeList = styled.div`
  flex: 1;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
