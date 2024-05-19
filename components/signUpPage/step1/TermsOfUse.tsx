import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { modalBackgroundVariants } from '@styles/framer-motion/variants';
import TextRenderer from '../textRender';

interface TermsOfUseProps {
  closeModal: () => void;
  text: string;
}

function TermsOfUse({ closeModal, text }: TermsOfUseProps) {
  return (
    <ModalOverlay
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      onClick={closeModal}
    >
      <ModalContent
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, type: 'spring' }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <h2>이용약관</h2>
        </ModalHeader>
        <ModalBody>
          <TextRenderer text={text} />
        </ModalBody>
        <ModalButton onClick={closeModal}>확인</ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default TermsOfUse;

const ModalOverlay = styled(motion.div)`
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

const ModalContent = styled(motion.div)`
  width: 80%;
  height: 70%;
  background: ${({ theme }) => theme.colors.bg_white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text_black};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & h2 {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: normal;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.key_color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
