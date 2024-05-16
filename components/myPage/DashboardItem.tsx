'use client';

import { getRouteByLabel } from '@data/navData';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

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
  const router = useRouter();
  const pathname = usePathname().split('/').slice(-1);

  /* ----- 클릭 시 상세페이지로 이동 함수 ----- */
  const handleClick = () => {
    const route = getRouteByLabel(title);
    router.push(`${route}/${pathname}`);
  };

  return (
    <Container onClick={handleClick}>
      <Image src={iconUrl} alt='icon' />
      <Content>
        <h5>{title}</h5>
        <span>{count}</span>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 0 22px;
  gap: 14px;
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
