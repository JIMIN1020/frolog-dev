'use client';

import React from 'react';
import styled from 'styled-components';
import frogLogo from 'public/icons/home/frologlogo.svg';
import Image from 'next/image';
import Link from 'next/link';

function LoginPrompt() {
  return (
    <PromptContainer>
      <FrogLogo src={frogLogo} alt='Frog Logo' />
      <TextAndButtonContainer>
        <PromptText>
          로그인을 하고
          <br />더 많은 기능을 체험해보세요!
        </PromptText>
        <LoginButton href='/login'>로그인하러가기</LoginButton>
      </TextAndButtonContainer>
    </PromptContainer>
  );
}

export default LoginPrompt;

const PromptContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  padding: 16px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const FrogLogo = styled(Image)`
  width: 88px;
  height: 112px;
  flex-shrink: 0;
`;

const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
`;

const PromptText = styled.p`
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm}; //너무 작은 것 같아요...!
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.05px;
  padding: 10px;
`;

const LoginButton = styled(Link)`
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.key_color_deep};
  flex-shrink: 0;
  text-align: center;
  padding: 8px 28px;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.sm};

  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    scale: calc(1.03);
  }
`;
