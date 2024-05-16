'use client';

import { StyledButton } from '@styles/GlobalStyles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import styled from 'styled-components';
import cancelIcon from 'public/icons/common/cancel-x.svg';
import useClickOutside from '@hooks/useClickOutside';
import { modalBackgroundVariants } from '@styles/framer-motion/variants';

interface CommonPopUpProps {
  title: string;
  text: React.ReactNode; // <>제목<> 형태로 전달 -> 중간에 <br/> 태그로 줄바꿈 해야하는 경우가 있기 때문
  btnText: string;
  closePopup: () => void; // 팝업 닫힘 함수
  handleClick: () => void; // 팝업 버튼 클릭 핸들러 함수
}

function CommonPopUp({
  title,
  text,
  btnText,
  closePopup,
  handleClick,
}: CommonPopUpProps) {
  const ref = useRef<HTMLDivElement | null>(null); // 팝업에 대한 ref

  /* ----- 팝업 바깥 클릭 시 닫힘 hook ----- */
  useClickOutside(ref, () => closePopup());

  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <PopUp
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, type: 'spring' }}
      >
        <Icon src='' alt='' />
        <CancelButton type='button' onClick={() => closePopup()}>
          <Image src={cancelIcon} alt='cancel' />
        </CancelButton>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <StyledButton type='button' disabled={false} onClick={handleClick}>
          {btnText}
        </StyledButton>
      </PopUp>
    </Background>
  );
}

export default CommonPopUp;

const Background = styled(motion.div)`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.colors.bg_popup};
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 900;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 450px;
  }
`;

const PopUp = styled(motion.div)`
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme }) => theme.colors.text_black};
  border-radius: 12px;
  position: relative;
  padding: 70px 0 20px;
`;

const Icon = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.key_color};

  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 140%;
  text-align: center;
`;

const CancelButton = styled.button`
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.key_color};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 20px;
  right: 20px;
`;
