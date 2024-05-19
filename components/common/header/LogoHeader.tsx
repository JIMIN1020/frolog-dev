'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ProgressBar from '@components/frologTestPage/ProgressBar';
import { ICONS } from 'constants/icon';

function LogoHeader() {
  const router = useRouter();
  const step = parseInt(useSearchParams().get('step')!, 10);
  const totalSteps = usePathname().includes('signup') ? 5 : 8;

  return (
    <Header>
      <Title>
        <h1>Frolog</h1>
        <ExitImg
          src={ICONS.header.exit}
          alt='exit'
          width={28}
          height={28}
          onClick={() => router.push('/login')}
        />
      </Title>
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
    </Header>
  );
}

export default LogoHeader;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 800;
`;

const Title = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bg_white};

  & h1 {
    text-align: center;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.title2};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.key_color};
  }
`;

const ExitImg = styled(Image)`
  position: absolute;
  right: 20px;
  top: 45%;
  transform: translateY(-50%);
`;
