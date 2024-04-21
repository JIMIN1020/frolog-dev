'use client';

import React from 'react';
import styled from 'styled-components';
import { UserProfile } from '@data/dummyData/homeDummy';
import Image from 'next/image';
import editIcon from 'public/icons/mypage/edit-icon.svg';
import editDone from 'public/icons/mypage/edit-done.svg';
import changeIcon from 'public/icons/common/change-icon.svg';

interface ProfileBarProps {
  /** 프로필 유저 정보 */
  user: UserProfile;
  /** edit 중인지 여부 (마이페이지) */
  isEdit: boolean;
  /** edit 버튼 클릭 시 핸들러 (마이페이지) */
  onClickEdit: () => void;
}

function MyPageProfile({ user, isEdit, onClickEdit }: ProfileBarProps) {
  return (
    <BarContainer>
      <LeftSection>
        <ImageWrapper>
          <ProfileImage
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
            width={44}
            height={44}
          />
          {isEdit && <ImgEdit src={changeIcon} alt='changeIcon' />}
        </ImageWrapper>

        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserNickname>{user.nickname}</UserNickname>
        </UserInfo>
      </LeftSection>
      <EditIcon onClick={onClickEdit}>
        {isEdit ? (
          <Image src={editDone} alt='done' />
        ) : (
          <Image src={editIcon} alt='edit' />
        )}
      </EditIcon>
    </BarContainer>
  );
}

export default MyPageProfile;

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

const ImageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const ProfileImage = styled(Image)`
  width: 44px;
  height: 44px;
  border-radius: 44px;
  box-shadow: 1px 1px 1px grey;
  margin-right: 16px;
  flex-shrink: 0;
`;

const ImgEdit = styled(Image)`
  position: absolute;
  bottom: -8px;
  right: 5px;
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
