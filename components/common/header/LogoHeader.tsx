'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ProgressBar from '@components/frologTestPage/ProgressBar';
import { ICONS } from 'constants/icon';

function LogoHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = parseInt(searchParams.get('step')!, 10);
  const pathname = usePathname();
  const totalSteps = pathname.includes('signup')
    ? 5
    : pathname.includes('password')
      ? 2
      : 8;

  return (
    <Header>
      <Title>
        {pathname.includes('frolog-test') && (
          <BackIcon
            src={ICONS.header.backCircle}
            alt='뒤로가기'
            onClick={() => router.back()}
            style={{ visibility: step > 1 ? 'visible' : 'hidden' }}
            width={28}
            height={28}
          />
        )}

        <h1>Frolog</h1>

        {(pathname.includes('signup') || pathname.includes('password')) && (
          <ExitImg
            src={ICONS.header.exit}
            alt='exit'
            width={28}
            height={28}
            onClick={
              searchParams.get('step') === '5'
                ? () => router.push('/')
                : () => router.push('/login')
            }
          />
        )}
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

const BackIcon = styled(Image)`
  position: absolute;
  left: 20px;
  top: 45%;
  transform: translateY(-50%);
`;

const ExitImg = styled(Image)`
  position: absolute;
  right: 20px;
  top: 45%;
  transform: translateY(-50%);
`;
