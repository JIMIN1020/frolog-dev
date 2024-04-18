'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { UserProfile } from '@data/dummyData/homeDummy';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import editIcon from 'public/icons/mypage/edit-icon.svg';
import editDone from 'public/icons/mypage/edit-done.svg';
import menuIcon from 'public/icons/home/menu.svg';
import FeedPopUp from './popUp/FeedPopUp';

interface ProfileBarProps {
  /** 프로필 유저 정보 */
  user: UserProfile;
  /** 팝업 메뉴 여부 (피드, 우물페이지) */
  popUp?: boolean;
  /** edit 버튼 여부 (마이페이지) */
  edit?: boolean;
  /** edit 중인지 여부 (마이페이지) */
  isEdit?: boolean;
  /** edit 버튼 클릭 시 핸들러 (마이페이지) */
  onClickEdit?: undefined | (() => void);
}

function ProfileBar({
  user,
  popUp = false,
  edit = false,
  isEdit = false,
  onClickEdit = undefined,
}: ProfileBarProps) {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  return (
    <BarContainer>
      <LeftSection>
        <ProfileImage
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
        />
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserNickname>{user.nickname}</UserNickname>
        </UserInfo>
      </LeftSection>
      {popUp && (
        <Button onClick={() => setOpenPopup(true)}>
          <MenuIcon src={menuIcon} alt='menu' />
        </Button>
      )}
      {edit && (
        <EditIcon onClick={onClickEdit}>
          {isEdit ? (
            <Image src={editDone} alt='done' />
          ) : (
            <Image src={editIcon} alt='edit' />
          )}
        </EditIcon>
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

const EditIcon = styled.button`
  width: fit-content;
  height: fit-content;
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
