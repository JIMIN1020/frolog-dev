'use client';

import React from 'react';
import Image from 'next/image';
import useStore from 'store/store';
import { deleteCookie } from 'cookies-next';
import { ICONS } from 'constants/icon';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import PopUpLayout from './PopUpLayout';

function MyPagePopUp() {
  const { clearStorage } = useStore.persist;
  const { setUser, setIsEditing, setIsOpenMyPageEdit } = useStore();
  const router = useRouter();

  /* ----- 로그아웃 함수 ----- */
  const handleLogOut = () => {
    setUser(null);
    setIsOpenMyPageEdit(false);
    clearStorage();
    deleteCookie('accessToken'); // redirect용 쿠키
    router.push(`/login`);
  };

  const handleClickEdit = () => {
    setIsEditing(true);
    setIsOpenMyPageEdit(false);
  };

  return (
    <PopUpLayout closePopUp={() => setIsOpenMyPageEdit(false)}>
      <MenuItem onClick={handleClickEdit}>프로필 수정</MenuItem>
      <MenuItem onClick={handleLogOut}>로그아웃</MenuItem>
      <MenuItem
        style={{ color: 'red' }}
        onClick={() => router.push('/delete-account/step1')}
      >
        회원탈퇴
      </MenuItem>
      <CancelBtn onClick={() => setIsOpenMyPageEdit(false)}>
        <Image src={ICONS.popUp.cancel} alt='cancel' width={24} height={24} />
        취소
      </CancelBtn>
    </PopUpLayout>
  );
}

export default MyPagePopUp;

const MenuItem = styled.button`
  width: 100%;
  padding: 16px 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  text-align: start;
  cursor: pointer;
  font-weight: 400;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const CancelBtn = styled.button`
  width: 100%;
  padding: 20px 0;
  text-align: start;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.lg};
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-top: 1px solid ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_black};

  display: flex;
  align-items: center;
  gap: 6px;

  & img {
    width: 22px;
    height: 22px;
  }
`;
