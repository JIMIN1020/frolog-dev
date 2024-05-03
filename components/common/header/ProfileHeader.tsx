'use client';

import Image from 'next/image';
import React from 'react';
import menuIcon from 'public/icons/common/menu-bar.svg';
import styled from 'styled-components';

function ProfileHeader() {
  return (
    <HeaderContainer>
      <LeftSection>
        <ProfileImage
          src='https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg'
          alt={`user's profile`}
        />
        <UserInfo>
          <UserName>김혜나</UserName>
          <UserNickname>느긋한 돌멩이</UserNickname>
        </UserInfo>
      </LeftSection>
      <MenuBtn>
        <Image src={menuIcon} alt='menu' />
      </MenuBtn>
    </HeaderContainer>
  );
}

export default ProfileHeader;

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 800;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
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

const MenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
