'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.rating};
  margin-bottom: 48px;
`;

export const Logo = styled(Image)`
  width: 160px;
  height: 160px;
  flex-shrink: 0;
  margin-bottom: 56px;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 140px;
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.5;
  padding: 0 20px;
`;

export const lQuote = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 11px;
`;

export const rQuote = styled(Image)`
  width: 24px;
  height: 24px;
  margin-left: 11px;
`;

export const StartButton = styled.button`
  width: 288px;
  height: 44px;
  border-radius: 50px;
  margin-bottom: 94px;
  background: ${({ theme }) => theme.colors.key_color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
