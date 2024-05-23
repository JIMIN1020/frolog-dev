'use client';

import React from 'react';
import Image from 'next/image';
import { ICONS } from 'constants/icon';
import styled from 'styled-components';
import PopUpLayout from './PopUpLayout';

interface ImgChangePopUpProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setWellIcon: () => void;
}

function ImgChangePopUp({ setOpen, setWellIcon }: ImgChangePopUpProps) {
  return (
    <PopUpLayout closePopUp={() => setOpen(false)}>
      <MenuItem>앨범에서 사진 선택</MenuItem>
      <MenuItem onClick={() => setWellIcon()}>기본 이미지로 변경</MenuItem>

      <CancelBtn onClick={() => setOpen(false)}>
        <Image src={ICONS.popUp.cancel} alt='cancel' width={24} height={24} />
        취소
      </CancelBtn>
    </PopUpLayout>
  );
}

export default ImgChangePopUp;

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
