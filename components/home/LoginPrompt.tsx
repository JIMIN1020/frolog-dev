import React from 'react';
import * as S from '@styles/components/home/loginPrompt';
import frogLogo from 'public/icons/home/frologlogo.svg';

function LoginPrompt() {
  return (
    <S.PromptContainer>
      <S.FrogLogo src={frogLogo} alt='Frog Logo' />
      <S.TextAndButtonContainer>
        <S.PromptText>
          로그인을 하고
          <br />더 많은 기능을 체험해보세요!
        </S.PromptText>
        <S.LoginButton href='/login'>Frolog 로그인</S.LoginButton>
      </S.TextAndButtonContainer>
    </S.PromptContainer>
  );
}

export default LoginPrompt;
