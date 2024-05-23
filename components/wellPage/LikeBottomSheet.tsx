import React from 'react';
import styled from 'styled-components';
import ProfileBarWithIcon from '@components/common/profileBar/ProfileBarWithIcon';
import BottomSheet from '@components/common/BottomSheet';
import { userDummy } from '@data/dummyData/userDummyData';
import useStore from 'store/store';

export default function LikeBottomSheet() {
  const { setIsOpenLike } = useStore();
  return (
    <BottomSheet title='좋아요' closeSheet={() => setIsOpenLike(false)}>
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
