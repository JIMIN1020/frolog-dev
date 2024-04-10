'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const CloseButton = styled(Link)`
  margin-left: 20px;
  margin-top: 4px;
`;

export const CloseIcon = styled(Image)`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 800;
  margin-right: 50px;
  text-align: center;
  flex-grow: 1;
`;

export const Form = styled.form`
  padding: 10px 30px;
`;
