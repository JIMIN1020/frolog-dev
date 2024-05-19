'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 30px;
  padding: 50px 0;
`;

export const ExitImg = styled(Image)`
  position: absolute;
  top: 30px;
  right: 30px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.login};
  font-weight: 700;
`;

export const LogoImg = styled(Image)`
  width: 109px;
  height: 139px;
  margin: 20px 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text_gray};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  text-decoration: none;
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.text_gray};
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error_red};
`;
