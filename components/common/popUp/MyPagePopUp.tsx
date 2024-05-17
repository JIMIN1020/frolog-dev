'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ICONS } from 'constants/icon';
import { useRouter } from 'next/navigation';
import { modalBackgroundVariants } from '@styles/framer-motion/variants';
import styled from 'styled-components';
import useClickOutside from '../../../hooks/useClickOutside';

type MyPagePopUpProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClickEdit: () => void;
};

function MyPagePopUp({ setOpen, onClickEdit }: MyPagePopUpProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null); // 팝업에 대한 ref

  /* ----- 팝업 바깥 클릭 시 닫힘 hook ----- */
  useClickOutside(ref, () => setOpen(false));

  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <PopUp
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
      >
        <MenuItem onClick={onClickEdit}>프로필 수정</MenuItem>
        <MenuItem onClick={() => router.push(`/login`)}>로그아웃</MenuItem>
        <MenuItem
          style={{ color: 'red' }}
          onClick={() => router.push('/delete-account/step1')}
        >
          회원탈퇴
        </MenuItem>
        <CancelBtn onClick={() => setOpen(false)}>
          <Image src={ICONS.popUp.cancel} alt='cancel' width={24} height={24} />
          취소
        </CancelBtn>
      </PopUp>
    </Background>
  );
}

export default MyPagePopUp;

const Background = styled(motion.div)`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.colors.bg_popup};

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 450px;
  }
`;

const PopUp = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  padding: 0 18px;
  padding-bottom: 16px;
`;

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
