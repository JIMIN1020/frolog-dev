'use client';

import useClickOutside from '@hooks/useClickOutside';
import { modalBackgroundVariants } from '@styles/framer-motion/variants';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface PopUpProps {
  children: React.ReactNode;
  closePopUp: () => void;
}

function PopUpLayout({ children, closePopUp }: PopUpProps) {
  const ref = useRef<HTMLDivElement | null>(null); // 팝업에 대한 ref

  /* ----- 팝업 바깥 클릭 시 닫힘 hook ----- */
  useClickOutside(ref, () => {
    document.body.style.overflow = 'auto';
    closePopUp();
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='no-doc-scroll'
    >
      <PopUp
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
      >
        {children}
      </PopUp>
    </Background>
  );
}

export default PopUpLayout;

const Background = styled(motion.div)`
  width: 100%;
  height: calc(100dvh * 100);
  background-color: ${({ theme }) => theme.colors.bg_popup};

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
    height: 100vh;
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
  padding: 14px 18px;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  gap: 6px;
`;
