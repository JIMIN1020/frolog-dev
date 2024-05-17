'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { User } from '@data/dummyData/userDummyData';
import { ICONS } from 'constants/icon';

interface ProfileBarProps {
  /** 프로필 유저 정보 */
  user: User;
}

export default function ProfileBarWithIcon({ user }: ProfileBarProps) {
  return (
    <BarContainer>
      <LeftSection>
        <ProfileImage
          src={user.profile_url}
          alt={`${user.username}'s profile`}
        />
        <UserInfo>
          <UserName>{user.username}</UserName>
          <UserNickname>{user.achievement}</UserNickname>
        </UserInfo>
      </LeftSection>
      <Image src={ICONS.common.wellMini} alt='well' width={36} height={36} />
    </BarContainer>
  );
}

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
