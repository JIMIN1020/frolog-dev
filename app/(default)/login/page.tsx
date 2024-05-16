import React from 'react';
import LoginForm from '@components/loginPage/LoginForm';
import * as S from '@styles/pages/loginPage';
import Link from 'next/link';
import frologLogo from 'public/icons/home/frologlogo.svg';

function Page() {
  return (
    <S.Container>
      <S.Title>Frolog</S.Title>
      <S.LogoImg src={frologLogo} alt='Frolog Logo' />
      <LoginForm />
      <S.LinksContainer>
        <Link href='/signup' passHref>
          <S.StyledLink>회원가입</S.StyledLink>
        </Link>
        <S.Divider />
        <Link href='/reset-password' passHref>
          <S.StyledLink>비밀번호 찾기</S.StyledLink>
        </Link>
      </S.LinksContainer>
    </S.Container>
  );
}

export default Page;
