'use client';

import { StyledButton, StyledLink } from '@styles/GlobalStyles';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function DeleteConfirmPage() {
  const [email, setEmail] = useState<string>('');
  return (
    <Container>
      <Wrapper>
        <Message>
          탈퇴 후에는 동일 아이디로 다시 가입할 수 없으며 아이디와 데이터는
          복구할 수 없습니다. 게시판 서비스에 남아있는 게시글은 탈퇴 후 삭제할
          수 없습니다. 또한 프롤로그 계정으로 관련 서비스들을 이용할 수 없게
          됩니다.
        </Message>
        <InputWrapper>
          <span>계정탈퇴 확인을 위해 이메일 주소를 다시 입력해주세요.</span>
          <EmailInput
            type='text'
            value={email}
            placeholder='ex. abc@frolog.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <span>영구적으로 계정이 삭제됩니다. 이 동작은 취소할 수 없습니다.</span>
        <StyledLink href='/delete-account/confirm' passHref>
          <StyledButton disabled={email.trim().length === 0}>
            탈퇴하기
          </StyledButton>
        </StyledLink>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 140px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
  gap: 60px;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.text_red};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 180%;
  letter-spacing: -0.408px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & span {
    color: #0038ff;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.key_color};
  padding: 16px;

  & span {
    color: ${({ theme }) => theme.colors.text_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 300;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_black};
  padding: 8px 10px;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;
