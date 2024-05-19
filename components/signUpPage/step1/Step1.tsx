'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ICONS } from 'constants/icon';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { SignUpFormValues } from '@components/signUpPage/form/SignupFormSchema';
import NextButton from '@components/signUpPage/NextButton';
import { SignUpContainer, TopWrapper } from '@styles/components/common/signUp';
import Terms from './Terms';

function Step1() {
  const router = useRouter();
  const { watch } = useFormContext<SignUpFormValues>();
  const terms = watch('terms');

  return (
    <SignUpContainer>
      <TopWrapper>
        <MessageContainer>
          <LQuote
            src={ICONS.singUp.leftq}
            alt='Left quote'
            width={16}
            height={14}
          />
          <Message>
            서비스 이용약관에 <br />
            동의해주세요.
          </Message>
          <RQuote
            src={ICONS.singUp.rightq}
            alt='Right quote'
            width={16}
            height={14}
          />
        </MessageContainer>
        <FrologLogo
          src={ICONS.myPage.frog}
          alt='Frolog Logo'
          width={120}
          height={120}
        />
        <Terms />
      </TopWrapper>
      <NextButton
        onClick={() => router.push('/signup?step=2')}
        disabled={!terms.age || !terms.termsOfUse || !terms.privacyPolicy}
      >
        다음
      </NextButton>
    </SignUpContainer>
  );
}

export default Step1;

const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LQuote = styled(Image)`
  margin-right: 11px;
`;

const RQuote = styled(Image)`
  margin-left: 11px;
`;

const Message = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
  line-height: 140%;
`;

const FrologLogo = styled(Image)`
  height: 120px;
  width: 120px;
  margin: 50px 0;
`;
