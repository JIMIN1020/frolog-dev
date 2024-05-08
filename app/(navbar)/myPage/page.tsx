'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import ReadingTemp from '@components/myPage/ReadingTemp';
import BadgeBar from '@components/myPage/badge/BadgeBar';
import OneLineMessage from '@components/myPage/OneLineMessage';
import Dashboard from '@components/myPage/Dashboard';
import ButtonContainer from '@components/myPage/ButtonContainer';
import frogImg from 'public/icons/mypage/frog.svg';
import ChangeClothesBtn from '@components/myPage/ChangeClothesBtn';
import ProfileHeader from '@components/common/header/profileHeader/ProfileHeaderWithMenu';

function MyPage() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <Container>
      <ProfileHeader setIsEdit={setIsEdit} />
      <Wrapper>
        <OneLineMessage isEdit={isEdit} />
        <FrogWrapper>
          <MyPageIcon src={frogImg} alt='임시' />
          {isEdit && <ChangeClothesBtn />}
        </FrogWrapper>
        <TempAndBadge>
          <ReadingTemp temp={72.8} />
          <BadgeBar />
          <MemoButton>내 메모</MemoButton>
        </TempAndBadge>
        <Dashboard />
        <ButtonContainer />
      </Wrapper>
    </Container>
  );
}

export default MyPage;

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
