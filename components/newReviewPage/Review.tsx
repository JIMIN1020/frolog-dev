'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

function Review() {
  const { register, watch } = useFormContext();
  const reviewLength = watch('review').length;

  return (
    <Container>
      <Label>
        리뷰 작성 <strong>*</strong>
      </Label>
      <TextArea
        {...register('review', {
          required: true,
          minLength: {
            value: 10,
            message: '리뷰는 최소 10자 이상 작성해야 합니다',
          },
        })}
        maxLength={400}
        placeholder='리뷰를 10자 이상 입력해주세요! 주제와 무관한 글, 악플 등의 글은 임의 삭제 될 수 있어요!'
      />
      <CharacterCount $exceed={reviewLength >= 400}>
        {reviewLength}/400
      </CharacterCount>
    </Container>
  );
}

export default Review;

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

  & strong {
    color: ${({ theme }) => theme.colors.key_color};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #818181;
  padding: 10px;
  resize: none;
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
