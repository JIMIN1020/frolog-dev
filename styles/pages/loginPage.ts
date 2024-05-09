'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.login};
  font-weight: 700;
  margin-top: 120px;
`;

export const LogoImg = styled(Image)`
  width: 109px;
  height: 139px;
  flex-shrink: 0;
  margin: 37px 0 60px 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledLink = styled.div`
  color: ${({ theme }) => theme.colors.text_gray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  margin: 0 20px;
`;

export const Divider = styled.div`
  width: 2px;
  height: 12px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.text_gray};
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error_red};
  margin-top: 20px;
`;
