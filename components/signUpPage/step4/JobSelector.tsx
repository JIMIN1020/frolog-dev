import * as S from '@styles/components/common/signUp';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';
import { SignUpFormValues } from '../form/SignupFormSchema';

function JobSelector() {
  const {
    watch,
    formState: { errors },
  } = useFormContext<SignUpFormValues>();

  return (
    <S.InputContainer>
      <S.TitleWrapper>
        <S.InputTitle>직업</S.InputTitle>
        <ToggleButton name='job' />
      </S.TitleWrapper>

      <SelectBox disabled={!watch('job.isPublic')}>
        <option value='무직'>무직</option>
        <option value='학생'>학생</option>
        <option value='직장인'>직장인</option>
      </SelectBox>

      <S.Message $isError={true}>{errors.job?.name?.message}</S.Message>
    </S.InputContainer>
  );
}

export default JobSelector;

const SelectBox = styled.select<{ disabled: boolean }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  padding: 16px 10px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.text_gray : theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.md};
`;
