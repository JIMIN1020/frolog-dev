import React, { useCallback } from 'react';
import * as S from '@styles/components/common/rating';
import { ICONS } from 'constants/icon';

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
          <S.StarIcon
            $starSize={starSize}
            src={ICONS.home.star}
            alt='star'
            key={i}
            width={starSize}
            height={starSize}
          />
        );
        currentRating -= 1;
      } else if (currentRating > 0) {
        stars.push(
          <S.StarIcon
            $starSize={starSize}
            src={ICONS.home.halfstar}
            alt='half star'
            key={i}
            width={starSize}
            height={starSize}
          />
        );
        currentRating = 0;
      } else {
        stars.push(
          <S.StarIcon
            $starSize={starSize}
            src={ICONS.home.nostar}
            alt='no star'
            key={i}
            width={starSize}
            height={starSize}
          />
        );
      }
    }
    return stars;
  }, []);

  return (
    <S.RatingContainer $gap={gap}>
      {generateRatingStars(rating)}
      <S.RatingNumber $fontSize={fontSize}>{rating}</S.RatingNumber>
    </S.RatingContainer>
  );
}

export default Rating;
