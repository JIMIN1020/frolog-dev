import React from 'react';
import * as S from '@styles/components/home/loginPrompt';
import { ICONS } from 'constants/icon';

function LoginPrompt() {
  return (
    <S.PromptContainer>
      <S.FrogLogo
        src={ICONS.home.frologLogo}
        alt='Frog Logo'
        width={88}
        height={112}
      />
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
