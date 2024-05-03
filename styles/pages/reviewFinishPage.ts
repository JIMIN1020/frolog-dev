'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

export const LogoAndMessageContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Message = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;

  & h2 {
    color: ${({ theme }) => theme.colors.key_color};
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_lightgray};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const Logo = styled(Image)`
  width: 160px;
  height: 202px;
  flex-shrink: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Button = styled.button`
  width: 288px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.key_color};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  transition: background-color 0.3s;

  &:active {
    box-shadow: none;
  }
`;
