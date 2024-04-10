import React, { useCallback } from 'react';
import styled from 'styled-components';
import star from 'public/icons/home/star.svg';
import halfstar from 'public/icons/home/halfstar.svg';
import nostar from 'public/icons/home/nostar.svg';
import Image from 'next/image';

export interface RatingProps {
  /** 별점 */
  rating: number;
  /** 별 사이즈 */
  starSize: number;
  /** 별점 간의 거리 */
  gap: number;
  /** 별점 폰트 사이즈 */
  fontSize: number;
}

function Rating({ rating, starSize, gap, fontSize }: RatingProps) {
  // 별점을 생성하는 함수. 별점(rating) 값에 따라 적절한 별 이미지를 배열로 생성
  const generateRatingStars = useCallback((rate: number) => {
    const stars = [];
    let currentRating = rate;
    for (let i = 0; i < 5; i += 1) {
      if (currentRating >= 1) {
        stars.push(
          <StarIcon $starSize={starSize} src={star} alt='star' key={i} />
        );
        currentRating -= 1;
      } else if (currentRating > 0) {
        stars.push(
          <StarIcon
            $starSize={starSize}
            src={halfstar}
            alt='half star'
            key={i}
          />
        );
        currentRating = 0;
      } else {
        stars.push(
          <StarIcon $starSize={starSize} src={nostar} alt='no star' key={i} />
        );
      }
    }
    return stars;
  }, []);

  return (
    <RatingContainer $gap={gap}>
      {generateRatingStars(rating)}
      <RatingNumber $fontSize={fontSize}>{rating}</RatingNumber>
    </RatingContainer>
  );
}

export default Rating;

const RatingContainer = styled.div<{ $gap: number }>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap}px;
`;

const RatingNumber = styled.span<{ $fontSize: number }>`
  color: ${({ theme }) => theme.colors.text_black};
  text-align: right;
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04px;
  padding-left: 5px;
`;

const StarIcon = styled(Image)<{ $starSize: number }>`
  width: ${({ $starSize }) => $starSize}px;
  height: ${({ $starSize }) => $starSize}px;
`;
