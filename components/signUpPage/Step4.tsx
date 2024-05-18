'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext, Controller } from 'react-hook-form';
import { SignUpFormValues } from '@components/signUpPage/SignupFormSchema';
import NextButton from '@components/signUpPage/NextButton';
import ProgressBar from '@components/frologTestPage/ProgressBar';
import * as S from '@styles/pages/signUp-4';
import exit from 'public/icons/signUp/exit.svg';

function Step4() {
  const {
    control,
    trigger,
    watch,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = useFormContext<SignUpFormValues>();
  const router = useRouter();

  const nickname = watch('nickname');
  const gender = watch('gender');
  const birthDate = watch('birthDate.date');
  const jobPublic = watch('job.isPublic');
  const genderPublic = watch('genderPublic');
  const birthDatePublic = watch('birthDate.isPublic');

  const [isNicknameValid, setIsNicknameValid] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (nickname && nickname.length > 0) {
        // TODO: 닉네임 유효성 검사를 위한 API 호출 로직 추가
        // 현재는 단순히 성공 메시지를 표시하도록 설정
        setIsNicknameValid(true);
      } else {
        setIsNicknameValid(false);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [nickname]);

  const onClickSubmit = async () => {
    const isValid = await trigger([
      'nickname',
      'job.name',
      'gender',
      'birthDate.date',
    ]);

    if (!isValid) {
      // 필요한 필드에 오류 메시지를 설정합니다.
      if (!nickname)
        setError('nickname', {
          type: 'manual',
          message: '닉네임을 입력해주세요.',
        });
      if (!gender)
        setError('gender', { type: 'manual', message: '성별을 선택해주세요.' });
      if (!birthDate)
        setError('birthDate.date', {
          type: 'manual',
          message: '생년월일을 선택해주세요.',
        });
      if (!watch('job.name'))
        setError('job.name', {
          type: 'manual',
          message: '직업을 선택해주세요.',
        });
      return;
    }

    if (isValid) {
      const allValues = getValues(); // 전체 폼 데이터 가져옴
      console.log('All form values:', allValues);
      // 서버로 데이터를 전송하는 로직 추가
      router.push('/signup-success');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Frolog</S.Title>
        <S.ExitImg src={exit} alt='exit' onClick={() => router.push('/')} />
      </S.Header>
      <ProgressBar currentStep={4} totalSteps={4} />
      <S.MainContent>
        <S.Label>
          맞춤 혜택을 받기 위한,
          <br />
          상세정보를 입력해주세요
        </S.Label>
        <S.InputWrapper>
          <S.LabelWrapper>
            <div>
              <S.Step4Label>닉네임</S.Step4Label>
              <S.RequiredMark>*</S.RequiredMark>
            </div>
          </S.LabelWrapper>
          <Controller
            name='nickname'
            control={control}
            render={({ field }) => (
              <S.Step4Input
                placeholder='닉네임을 입력하세요(한글, 영문 대소문자, 숫자 12자이내)'
                {...field}
              />
            )}
          />
          {errors.nickname && (
            <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>
        {nickname && !isNicknameValid && (
          <S.ErrorMessage>사용할 수 없는 닉네임입니다.</S.ErrorMessage>
        )}
        {nickname && isNicknameValid && (
          <S.SuccessMessage>유일무이한 닉네임이에요 🍀</S.SuccessMessage>
        )}
        <S.InputWrapper>
          <S.LabelWrapper>
            <div>
              <S.Step4Label>직업</S.Step4Label>
              <S.RequiredMark>*</S.RequiredMark>
            </div>
            <S.ToggleContainer>
              <S.ToggleText>직업 공개</S.ToggleText>
              <S.ToggleButton
                type='checkbox'
                checked={jobPublic}
                onChange={(e) => setValue('job.isPublic', e.target.checked)}
              />
            </S.ToggleContainer>
          </S.LabelWrapper>
          <Controller
            name='job.name'
            control={control}
            render={({ field }) => (
              <S.SelectBox {...field}>
                <option value=''>선택</option>
                <option value='무직'>무직</option>
                <option value='학생'>학생</option>
                <option value='직장인'>직장인</option>
              </S.SelectBox>
            )}
          />
          {errors.job?.name && (
            <S.ErrorMessage>{errors.job.name.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelWrapper>
            <div>
              <S.Step4Label>성별</S.Step4Label>
              <S.RequiredMark>*</S.RequiredMark>
            </div>
            <S.ToggleContainer>
              <S.ToggleText>성별 공개</S.ToggleText>
              <S.ToggleButton
                type='checkbox'
                checked={genderPublic}
                onChange={(e) => setValue('genderPublic', e.target.checked)}
              />
            </S.ToggleContainer>
          </S.LabelWrapper>
          <S.GenderButtons>
            <S.GenChooseButton
              selected={gender === '남자'}
              onClick={() => setValue('gender', '남자')}
            >
              남자
            </S.GenChooseButton>
            <S.GenChooseButton
              selected={gender === '여자'}
              onClick={() => setValue('gender', '여자')}
            >
              여자
            </S.GenChooseButton>
            <S.GenChooseButton
              selected={gender === '기타'}
              onClick={() => setValue('gender', '기타')}
            >
              기타
            </S.GenChooseButton>
          </S.GenderButtons>
          {errors.gender && (
            <S.ErrorMessage>{errors.gender.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelWrapper>
            <div>
              <S.Step4Label>생년월일</S.Step4Label>
              <S.RequiredMark>*</S.RequiredMark>
            </div>
            <S.ToggleContainer>
              <S.ToggleText>생년월일 공개</S.ToggleText>
              <S.ToggleButton
                type='checkbox'
                checked={birthDatePublic}
                onChange={(e) =>
                  setValue('birthDate.isPublic', e.target.checked)
                }
              />
            </S.ToggleContainer>
          </S.LabelWrapper>
          <Controller
            name='birthDate.date'
            control={control}
            render={({ field }) => <S.Step4Input type='date' {...field} />}
          />
          {errors.birthDate?.date && (
            <S.ErrorMessage>{errors.birthDate.date.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>
      </S.MainContent>
      <NextButton onClick={onClickSubmit}>가입완료</NextButton>
    </S.Container>
  );
}

export default Step4;
