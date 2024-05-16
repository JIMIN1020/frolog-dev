'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import ReadingTemp from '@components/myPage/ReadingTemp';
import BadgeBar from '@components/myPage/badge/BadgeBar';
import OneLineMessage from '@components/myPage/OneLineMessage';
import Dashboard from '@components/myPage/Dashboard';
import frogImg from 'public/icons/mypage/frog.svg';
import ChangeClothesBtn from '@components/myPage/ChangeClothesBtn';
import ProfileHeader from '@components/common/header/profileHeader/ProfileHeaderWithMenu';
import { userDummy } from '@data/dummyData/userDummyData';
import { useRouter } from 'next/navigation';

function ProfilePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false); // TODO: edit page 따로 만들것
  const router = useRouter();
  const { slug } = params;
  const data = userDummy.find((data) => data.id === slug)!;
  const isMyPage = slug === 'test-user'; // TODO: 추후 contextAPI로 유저 id와 직접 비교

  const handleClickBtn = () => {
    if (isMyPage) {
      router.push('/memo');
    } else {
      router.push(`/well/${slug}`);
    }
  };

  return (
    <Container>
      <ProfileHeader
        userInfo={{ userName: data.username, achievement: data.achievement }}
        setIsEdit={setIsEdit}
      />
      <Wrapper>
        <OneLineMessage message={data.message} isEdit={isEdit} />
        <FrogWrapper>
          <MyPageIcon src={frogImg} alt='임시' />
          {isEdit && <ChangeClothesBtn />}
        </FrogWrapper>
        <TempAndBadge>
          <ReadingTemp temp={data.temperature} />
          <BadgeBar />
          <MemoButton onClick={handleClickBtn}>
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

const MemoButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.key_color};
  border-radius: 12px;
  padding: 16px 0;
  margin-top: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  cursor: pointer;
`;
