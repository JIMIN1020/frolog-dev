'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import ReadingTemp from '@components/myPage/ReadingTemp';
import BadgeBar from '@components/myPage/badge/BadgeBar';
import OneLineMessage from '@components/myPage/OneLineMessage';
import Dashboard from '@components/myPage/Dashboard';
import ButtonContainer from '@components/myPage/ButtonContainer';
import MyPageProfile from '@components/myPage/MyPageProfile';
import frogImg from 'public/icons/mypage/frog.svg';
import ChangeClothesBtn from '@components/myPage/ChangeClothesBtn';

function MyPage() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <Container>
      <MyPageProfile
        user={{
          id: 'user1',
          name: '김혜나',
          nickname: '느긋한 돌맹이',
          profilePicture:
            'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
        }}
        isEdit={isEdit}
        onClickEdit={() => setIsEdit((prev) => !prev)}
      />
      <Wrapper>
        <OneLineMessage isEdit={isEdit} />
        <FrogWrapper>
          <MyPageIcon src={frogImg} alt='임시' />
          {isEdit && <ChangeClothesBtn />}
        </FrogWrapper>
        <TempAndBadge>
          <ReadingTemp temp={72.8} />
          <BadgeBar />
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 8px solid ${({ theme }) => theme.colors.key_color_light};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
`;

const FrogWrapper = styled.div`
  position: relative;
`;

const MyPageIcon = styled(Image)`
  width: 200px;
  height: 200px;
  padding-top: 40px;
`;

const TempAndBadge = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 30px 0;
`;
