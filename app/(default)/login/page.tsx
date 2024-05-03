'use client';

import React, { useState } from 'react';
import LoginForm from '@components/loginPage/LoginForm';
import * as S from '@styles/pages/loginPage';
import Link from 'next/link';
import frologLogo from 'public/icons/home/frologlogo.svg';

function Page() {
  const [error, setError] = useState('');

  const handleLoginSubmit = async (data: {
    username: string;
    password: string;
    rememberMe: boolean;
  }) => {
    console.log(data); // TODO: 로그인 API 호출 로직 처리
  };

  return (
    <S.Container>
      <S.Title>Frolog</S.Title>
      <S.LogoImg src={frologLogo} alt='Frolog Logo' />
      <LoginForm onSubmit={handleLoginSubmit} onError={setError} />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.LinksContainer>
        <Link href='/find-id' passHref>
          <S.StyledLink>아이디 찾기</S.StyledLink>
        </Link>
        <S.Divider />
        <Link href='/reset-password' passHref>
          <S.StyledLink>비밀번호 찾기</S.StyledLink>
        </Link>
        <S.Divider />
        <Link href='/signup' passHref>
          <S.StyledLink>회원가입</S.StyledLink>
        </Link>
      </S.LinksContainer>
    </S.Container>
  );
}

export default Page;
