import React from 'react';
import * as S from '@styles/components/home/content';
import { BookReviewData } from '@data/dummyData/homeDummy';
import Rating from '../common/Rating';

interface ContentProps {
  reviewData: BookReviewData;
}

function Content({ reviewData }: ContentProps) {
  return (
    <S.Container>
      <S.BookImage src={reviewData.bookImage} alt='Book' />
      <S.ContentRight>
        <S.ReviewSection>
          <S.OneLiner>{`‘ ${reviewData.oneLiner} ’`}</S.OneLiner>
          <S.Review>{reviewData.review}</S.Review>
        </S.ReviewSection>
        <S.InfoWrapper>
          <S.BookInfo>{`${reviewData.bookName}  /  ${reviewData.bookAuthor}`}</S.BookInfo>
          <Rating
            rating={reviewData.rating}
            starSize={12}
            gap={2}
            fontSize={10}
          />
        </S.InfoWrapper>
        <S.TagsContainer>
          {/* <TagIcon src={proConTag} alt='Tag' /> */}
          {/* TODO: 장점과 단점 태그 대체. 현재는 임시 이미지로 대체 */}
          <S.Tag>재밌어요</S.Tag>
          <S.Tag>재밌어요재밌어요</S.Tag>
          <S.Tag>재밌어요</S.Tag>
        </S.TagsContainer>
      </S.ContentRight>
    </S.Container>
  );
}

export default Content;
