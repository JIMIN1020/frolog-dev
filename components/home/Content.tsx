'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { BookReviewData } from '@data/dummyData/homeDummy';
import Rating from '../common/Rating';

interface ContentProps {
  reviewData: BookReviewData;
}

function Content({ reviewData }: ContentProps) {
  const [isExpanded, setIsExpanded] = useState(false); // 리뷰 텍스트의 "더보기"/"간략히" 기능을 토글

  return (
    <Container>
      <BookImage src={reviewData.bookImage} alt='Book' />
      <ContentRight>
        <ReviewSection>
          <OneLiner>{`‘ ${reviewData.oneLiner} ’`}</OneLiner>
          <Review $isExpanded={isExpanded}>{reviewData.review}</Review>
          <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '..간략히' : '..더보기'}
          </ToggleButton>
        </ReviewSection>
        <InfoWrapper>
          <BookInfo>{`${reviewData.bookName}  /  ${reviewData.bookAuthor}`}</BookInfo>
          <Rating
            rating={reviewData.rating}
            starSize={12}
            gap={2}
            fontSize={10}
          />
        </InfoWrapper>
        <TagsContainer>
          {/* <TagIcon src={proConTag} alt='Tag' /> */}
          {/* TODO: 장점과 단점 태그 대체. 현재는 임시 이미지로 대체 */}
          <Tag>재밌어요</Tag>
          <Tag>재밌어요재밌어요재밌어요</Tag>
          <Tag>재밌어요</Tag>
        </TagsContainer>
      </ContentRight>
    </Container>
  );
}

export default Content;

const Tag = styled.div`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.text_white};
  background-color: ${({ theme }) => theme.colors.key_color};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row; /* 가로 방향으로 요소를 배열 */
  width: 100%;
  align-items: flex-start; /* 상단 정렬 */
`;

const BookImage = styled.img`
  width: 110px;
  height: 140px;
  flex-shrink: 0;
  margin: 5px 16px 0px 16px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 요소를 배열 */
  margin-left: 5px; /* 이미지와 나머지 내용 사이의 간격 조정 */
`;

const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const OneLiner = styled.p`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  width: 270px;
  margin-bottom: 12px;
  line-height: 120%;
`;

const Review = styled.p<{ $isExpanded: boolean }>`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.sm};
  overflow: hidden;
  width: 100%;
  height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '45px')};
  margin-bottom: 6px;
  padding-right: 26px;
  line-height: 160%;
`;

const ToggleButton = styled.button`
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 400;
  align-self: flex-end;
  padding-right: 26px;
  margin-bottom: 5px;
`;

const BookInfo = styled.p`
  color: ${({ theme }) => theme.colors.text_gray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  padding: 2px;
`;

const TagsContainer = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 6px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
