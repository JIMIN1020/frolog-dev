'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 800;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.key_color};
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const NotificationIcon = styled(Image)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const BottomBar = styled.div`
  width: 100%;
  height: 8px;
  flex-shrink: 0;
  background: #acd1ad;
  position: absolute;
  left: 0;
  bottom: 0;
`;
