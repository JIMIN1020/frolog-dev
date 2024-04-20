'use client';

import { StyledButton } from '@styles/GlobalStyles';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function DeleteAccountPage() {
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
            placeholder='이메일을 입력해주세요'
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <span>안내 사항을 모두 확인하였으며, 이에 동의합니다.</span>
        <StyledButton disabled={email.trim().length === 0}>
          회원 탈퇴
        </StyledButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Message = styled.p`
  color: red;
  font-size: ${({ theme }) => theme.fontSize.base};
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
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & span {
    color: ${({ theme }) => theme.colors.text_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const EmailInput = styled.input`
  width: 100%;
  border: 1px solid #79797b;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_black};
  padding: 8px 10px;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;
