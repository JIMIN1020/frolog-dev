'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import ReadingTemp from '@components/myPage/ReadingTemp';
import BadgeBar from '@components/myPage/badge/BadgeBar';
import OneLineMessage from '@components/myPage/OneLineMessage';
import Dashboard from '@components/myPage/Dashboard';
import ChangeClothesBtn from '@components/myPage/ChangeClothesBtn';
import ProfileHeader from '@components/common/header/profileHeader/ProfileHeaderWithMenu';
import { userDummy } from '@data/dummyData/userDummyData';
import { ICONS } from 'constants/icon';
import useStore from 'store/store';
import HeaderWithBtn from '@components/common/header/HeaderWithBtn';
import Link from 'next/link';

function ProfilePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { isEditing } = useStore();
  const { slug } = params;
  const data = userDummy.find((data) => data.id === slug)!;
  const isMyPage = slug === 'test-user'; // TODO: 추후 contextAPI로 유저 id와 직접 비교

  return (
    <Container>
      {isEditing ? (
        <HeaderWithBtn />
      ) : (
        <ProfileHeader
          userInfo={{ userName: data.username, achievement: data.achievement }}
        />
      )}
      <Wrapper>
        <OneLineMessage message={data.message} />
        <FrogWrapper>
          <MyPageIcon
            src={ICONS.myPage.frog}
            alt='임시'
            width={200}
            height={200}
          />
          {isEditing && <ChangeClothesBtn />}
        </FrogWrapper>
        <TempAndBadge>
          <ReadingTemp temp={data.temperature} />
          <BadgeBar />
          <MemoButton
            $isEditing={isEditing}
            href={isMyPage ? '/memo' : `/well/${slug}`}
          >
            {isMyPage ? '내 메모' : '우물 놀러가기'}
          </MemoButton>
        </TempAndBadge>
        <Dashboard data={data.stat} />
      </Wrapper>
    </Container>
  );
}

export default ProfilePage;

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const FrogWrapper = styled.div`
  position: relative;
`;

const MyPageIcon = styled(Image)`
  width: 200px;
  height: 200px;
  padding: 40px 0 20px 0;
`;

const TempAndBadge = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 30px 0;
`;

const MemoButton = styled(Link)<{ $isEditing: boolean }>`
  width: 100%;
  background: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.key_color};
  border-radius: 12px;
  padding: 16px 0;
  margin-top: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-align: center;
  pointer-events: ${({ $isEditing }) => ($isEditing ? 'none' : 'all')};

  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  cursor: pointer;
`;
