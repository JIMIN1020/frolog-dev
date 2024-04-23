'use client';

import React from 'react';
import styled from 'styled-components';
import ProfileBarWithIcon from '@components/common/profileBar/ProfileBarWithIcon';
import BottomSheet from '@components/common/BottomSheet';

type LikeBottomSheet = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LikeBottomSheet({ setOpen }: LikeBottomSheet) {
  return (
    <BottomSheet title='좋아요' setOpen={setOpen}>
      <LikeList>
        <ProfileBarWithIcon
          user={{
            id: 'user1',
            name: '김혜나',
            nickname: '느긋한 돌맹이',
            profilePicture:
              'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
          }}
        />
        <ProfileBarWithIcon
          user={{
            id: 'user1',
            name: '김혜나',
            nickname: '느긋한 돌맹이',
            profilePicture:
              'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
          }}
        />
        <ProfileBarWithIcon
          user={{
            id: 'user1',
            name: '김혜나',
            nickname: '느긋한 돌맹이',
            profilePicture:
              'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
          }}
        />
        <ProfileBarWithIcon
          user={{
            id: 'user1',
            name: '김혜나',
            nickname: '느긋한 돌맹이',
            profilePicture:
              'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
          }}
        />
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
