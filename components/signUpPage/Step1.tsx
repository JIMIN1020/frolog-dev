'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext, Controller } from 'react-hook-form';
import {
  SignUpFormValues,
  TermsKeys,
} from '@components/signUpPage/SignupFormSchema';
import NextButton from '@components/signUpPage/NextButton';
import { StyledCheckbox } from '@styles/GlobalStyles';
import ProgressBar from '@components/frologTestPage/ProgressBar';
import * as S from '@styles/pages/signUp-1';
import { termsOfUse } from '@data/termOfUseData';
import frologLogo from 'public/icons/signUp/frog.svg';
import leftq from 'public/icons/signUp/leftq.svg';
import rightq from 'public/icons/signUp/rightq.svg';
import exit from 'public/icons/signUp/exit.svg';
import TextRenderer from './textRender';

const termKeys: TermsKeys[] = [
  'age',
  'termsOfUse',
  'privacyPolicy',
  'marketing',
  'ads',
];

function Step1() {
  const router = useRouter();
  const { control, watch, setValue } = useFormContext<SignUpFormValues>();
  const terms = watch('terms');
  const [showModal, setShowModal] = useState<number | null>(null);

  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    termKeys.forEach((key) => {
      setValue(`terms.${key}` as const, isChecked);
    });
  };

  const handleViewClick = (index: number) => {
    setShowModal(index);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  const onClickNext = () => {
    router.push('/signup/step2');
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Frolog</S.Title>
        <S.ExitImg
          src={exit}
          alt='exit'
          onClick={() => router.push('/login')}
        />
      </S.Header>
      <ProgressBar currentStep={1} totalSteps={4} />
      <S.MessageContainer>
        <S.lQuote src={leftq} alt='Left quote' />
        <S.Message>
          서비스 이용약관에 <br />
          동의해주세요.
        </S.Message>
        <S.rQuote src={rightq} alt='Right quote' />
      </S.MessageContainer>
      <S.FrologLogo src={frologLogo} alt='Frolog Logo' />
      <S.TermsContainer>
        <S.CheckBoxWrapper>
          <StyledCheckbox
            type='checkbox'
            onChange={handleAllChecked}
            checked={Object.values(terms).every(Boolean)}
          />
          <span>모두 동의</span>
        </S.CheckBoxWrapper>
        <S.Divider />

        {termsOfUse.map((term, index) => (
          <S.TermsItem key={term.id}>
            <S.CheckBoxWrapper>
              <Controller
                control={control}
                name={`terms.${term.name}` as `terms.${TermsKeys}`}
                render={({ field }) => (
                  <StyledCheckbox
                    type='checkbox'
                    {...field}
                    checked={!!field.value}
                    value={String(field.value)}
                  />
                )}
              />
              <S.TermLabel>
                <TextRenderer text={term.label} />
              </S.TermLabel>
            </S.CheckBoxWrapper>
            {term.view && (
              <S.ViewButton onClick={() => handleViewClick(index)}>
                보기
              </S.ViewButton>
            )}
          </S.TermsItem>
        ))}
      </S.TermsContainer>
      <NextButton
        onClick={onClickNext}
        disabled={!terms.age || !terms.termsOfUse || !terms.privacyPolicy}
      >
        다음
      </NextButton>
      {showModal !== null && termsOfUse[showModal]?.view && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>이용약관</S.ModalTitle>
              <S.ModalExitImg src={exit} alt='exit' onClick={closeModal} />
            </S.ModalHeader>
            <S.ModalBody>
              <TextRenderer text={termsOfUse[showModal]?.view || ''} />
            </S.ModalBody>
            <S.ModalButton
              onClick={() => {
                setValue(
                  `terms.${termsOfUse[showModal]?.name as TermsKeys}`,
                  true
                );
                closeModal();
              }}
            >
              동의
            </S.ModalButton>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
}

export default Step1;
