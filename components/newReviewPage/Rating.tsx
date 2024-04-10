'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import starIcon from 'public/icons/home/star.svg';
import noStarIcon from 'public/icons/home/nostar.svg';
import halfStarIcon from 'public/icons/home/halfstar.svg';
import Image from 'next/image';

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
      <RatingText>{rating}점</RatingText>
      <StarContainer>
        {Array.from({ length: 5 }, (_, index) => {
          let src;
          if (index + 1 <= rating) {
            src = starIcon;
          } else if (index + 0.5 === rating) {
            src = halfStarIcon;
          } else {
            src = noStarIcon;
          }
          return (
            <Star
              key={index}
              src={src}
              alt='star'
              onClick={(event) => handleRating(event, index)}
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

const RatingText = styled.h4`
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.rating};
`;

const StarContainer = styled.div`
  display: flex;
  gap: 10px;
`;
