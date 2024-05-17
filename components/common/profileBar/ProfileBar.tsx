'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { User } from '@data/dummyData/userDummyData';
import Image from 'next/image';
import { ICONS } from 'constants/icon';
import { AnimatePresence } from 'framer-motion';
import FeedPopUp from '../popUp/FeedPopUp';

interface ProfileBarProps {
  /** 프로필 유저 정보 */
  user: User;
  /** 팝업 메뉴 여부 (피드, 우물페이지) */
  popUp?: boolean;
}

function ProfileBar({ user, popUp = false }: ProfileBarProps) {
  const router = useRouter();
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <BarContainer>
      <LeftSection onClick={() => router.push(`/profile/${user.id}`)}>
        <ProfileImage
          src={user.profile_url}
          alt={`${user.username}'s profile`}
        />
        <UserInfo>
          <UserName>{user.username}</UserName>
          <UserNickname>{user.achievement}</UserNickname>
        </UserInfo>
      </LeftSection>
      {popUp && (
        <Button onClick={() => setOpenPopup(true)}>
          <MenuIcon src={ICONS.home.menu} alt='menu' width={22} height={22} />
        </Button>
      )}
      <AnimatePresence>
        {openPopup && <FeedPopUp setOpen={setOpenPopup} />}
      </AnimatePresence>
    </BarContainer>
  );
}

export default ProfileBar;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px 16px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-top: 5px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 44px;
  box-shadow: 1px 1px 1px grey;
  background: url(${(props) => props.src});
  margin-right: 16px;
  flex-shrink: 0;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2px;
`;

const UserNickname = styled.div`
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  line-height: normal;
`;

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  background: none;
  border: none;
`; // 자연스럽게 오른쪽으로 정렬되도록 레이아웃 수정됨

const MenuIcon = styled(Image)`
  width: 22px;
  height: 22px;
`;
