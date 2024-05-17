'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import Image from 'next/image';
import { ICONS } from 'constants/icon';

function Rating() {
  /* ----- form context 가져오기 ----- */
  const { setValue, watch } = useFormContext();
  const rating = watch('rating');

  /* ----- rating 처리 함수 ----- */
  const handleRating = (
    event: React.MouseEvent<HTMLImageElement>,
    index: number
  ) => {
    const star = event.currentTarget;
    const rect = star.getBoundingClientRect();
    const starHalf = rect.width / 2;
    const clickPosition = event.clientX - rect.left;

    const newRating = clickPosition < starHalf ? index + 0.5 : index + 1;
    setValue('rating', newRating);
  };

  return (
    <RatingContainer>
      <RatingText>
        <h4>{rating}점</h4>
        <span>별점을 남겨주세요</span>
      </RatingText>
      <StarContainer>
        {Array.from({ length: 5 }, (_, index) => {
          let src;
          if (index + 1 <= rating) {
            src = ICONS.home.star;
          } else if (index + 0.5 === rating) {
            src = ICONS.home.halfstar;
          } else {
            src = ICONS.home.nostar;
          }
          return (
            <Star
              key={index}
              src={src}
              alt='star'
              onClick={(event) => handleRating(event, index)}
              width={32}
              height={32}
            />
          );
        })}
      </StarContainer>
    </RatingContainer>
  );
}

export default Rating;

const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.key_color};
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
  padding: 30px 0;
`;

const Star = styled(Image)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const RatingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  & h4 {
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.key_color};
    font-size: ${({ theme }) => theme.fontSize.rating};
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.text_gray};
    font-weight: 400;
  }
`;

const StarContainer = styled.div`
  display: flex;
  gap: 10px;
`;
