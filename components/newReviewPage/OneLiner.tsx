'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

function OneLiner() {
  const { register, watch } = useFormContext();
  const inputLength = watch('oneLiner').length;

  return (
    <Container>
      <Label>
        한줄평 작성 <EssencialMark>*</EssencialMark>
      </Label>
      <Input
        type='text'
        {...register('oneLiner', {
          required: true,
          minLength: {
            value: 3,
            message: '한줄평은 최소 3자 이상 작성해야 합니다',
          },
        })}
        maxLength={30}
        placeholder='한줄평을 남겨보세요! (최소 3자 이상)'
      />
      <CharacterCount $exceed={inputLength >= 30}>
        {inputLength}/30
      </CharacterCount>
    </Container>
  );
}

export default OneLiner;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #818181;
  padding: 0 10px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const CharacterCount = styled.span<{ $exceed: boolean }>`
  margin-top: 4px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ $exceed, theme }) =>
    $exceed ? theme.colors.key_color : theme.colors.text_black};
  align-self: flex-end;
`;

const EssencialMark = styled.span`
  color: ${({ theme }) => theme.colors.key_color};
`;
