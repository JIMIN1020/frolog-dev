'use client';

import React from 'react';
import Image from 'next/image';
import LoginForm from '@components/loginPage/LoginForm';
import * as S from '@styles/pages/loginPage';
import { ICONS } from 'constants/icon';

function Page() {
  return (
    <S.Container>
      <S.ExitButton href='/'>
        <Image src={ICONS.header.exit} alt='exit' width={28} height={28} />
      </S.ExitButton>
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
