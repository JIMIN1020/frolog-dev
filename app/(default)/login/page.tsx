'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@components/loginPage/LoginForm';
import * as S from '@styles/pages/loginPage';
import { ICONS } from 'constants/icon';

function Page() {
  const router = useRouter();

  const handleExitClick = () => {
    router.push('/');
  };
  return (
    <S.Container>
      <S.ExitImg
        src={ICONS.header.exit}
        alt='exit'
        width={28}
        height={28}
        onClick={handleExitClick}
      />
      <S.Title>Frolog</S.Title>
      <S.LogoImg
        src={ICONS.home.frologLogo}
        alt='Frolog Logo'
        width={109}
        height={139}
      />
      <LoginForm />
      <S.LinksContainer>
        <S.StyledLink href='/signup?step=1' passHref>
          회원가입
        </S.StyledLink>
        <S.Divider />
        <S.StyledLink href='/reset-password?step=1' passHref>
          비밀번호 찾기
        </S.StyledLink>
      </S.LinksContainer>
    </S.Container>
  );
}

export default Page;
