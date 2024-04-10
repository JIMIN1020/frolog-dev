'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

export const LogoAndMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 100px 0px 110px;
`;

export const Message = styled.div`
  color: ${({ theme }) => theme.colors.key_color};
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
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

  &:hover {
    background-color: #9abf9b;
  }

  &:active {
    box-shadow: none;
  }
`;
