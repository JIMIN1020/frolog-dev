'use client';

import { getRouteByLabel } from '@data/navData';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import useStore from 'store/store';

interface DashboardItemProps {
  iconUrl: string;
  title: string;
  count: number;
}

export default function DashboardItem({
  iconUrl,
  title,
  count,
}: DashboardItemProps) {
  const { isEditing } = useStore();
  const pathname = usePathname().split('/').slice(-1);
  const route = getRouteByLabel(title);

  return (
    <Container $isEditing={isEditing} href={`${route}/${pathname}`}>
      <Image src={iconUrl} alt='icon' width={34} height={30} />
      <Content>
        <h5>{title}</h5>
        <span>{count}</span>
      </Content>
    </Container>
  );
}

const Container = styled(Link)<{ $isEditing: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 0 22px;
  gap: 14px;
  pointer-events: ${({ $isEditing }) => ($isEditing ? 'none' : 'all')};
  background-color: ${({ theme }) => theme.colors.key_color_light};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & h5 {
    color: ${({ theme }) => theme.colors.text_lightgray};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 500;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_black};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 500;
  }
`;
