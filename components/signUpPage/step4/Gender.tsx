import { InputTitle } from '@styles/components/common/signUp';
import React from 'react';
import * as S from '@styles/components/common/signUp';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { SignUpFormValues } from '../form/SignupFormSchema';
import ToggleButton from './ToggleButton';

function Gender() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<SignUpFormValues>();
  const gender = watch('gender.name');
  const isDisabled = !watch('gender.isPublic');
  return (
    <S.InputContainer>
      <S.TitleWrapper>
        <InputTitle>성별</InputTitle>
        <ToggleButton name='gender' />
      </S.TitleWrapper>
      <GenderButtons>
        <GenChooseButton
          $selected={gender === '남자'}
          disabled={isDisabled}
          $radius='12px 0 0 12px'
          onClick={() => setValue('gender.name', '남자')}
        >
          남자
        </GenChooseButton>
        <GenChooseButton
          $selected={gender === '여자'}
          disabled={isDisabled}
          $radius='0 0 0 0'
          onClick={() => setValue('gender.name', '여자')}
        >
          여자
        </GenChooseButton>
        <GenChooseButton
          $selected={gender === '기타'}
          disabled={isDisabled}
          $radius='0 12px 12px 0'
          onClick={() => setValue('gender.name', '기타')}
        >
          기타
        </GenChooseButton>
      </GenderButtons>
      <S.Message $isError={true}>{errors.gender?.message}</S.Message>
    </S.InputContainer>
  );
}

export default Gender;

const GenderButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
`;

const GenChooseButton = styled.button<{
  disabled: boolean;
  $selected: boolean;
  $radius: string;
}>`
  padding: 16px 0px;
  border-radius: ${({ $radius }) => $radius};
  font-size: ${({ theme }) => theme.fontSize.md};
  background: ${({ theme }) => theme.colors.bg_white};
  cursor: pointer;

  ${({ $selected, disabled, theme }) => {
    if (disabled) {
      return {
        color: theme.colors.text_lightgray,
        border: `1px solid ${theme.colors.button_gray}`,
      };
    }

    if ($selected) {
      return {
        color: theme.colors.key_color_deep,
        border: `1px solid ${theme.colors.key_color_deep}`,
      };
    }

    return {
      color: theme.colors.text_lightgray,
      border: `1px solid ${theme.colors.button_gray}`,
    };
  }}
`;
