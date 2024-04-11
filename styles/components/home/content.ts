'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start; /* 상단 정렬 */
  padding: 0px 20px;
  gap: 16px;
`;

export const Tag = styled.div`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.text_white};
  background-color: ${({ theme }) => theme.colors.key_color};
`;

export const BookImage = styled.img`
  width: 110px;
  height: 140px;
  flex-shrink: 0;
  margin-top: 5px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 6px;
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OneLiner = styled.p`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  width: 100%;
  line-height: 140%;
`;

export const Review = styled.p`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.sm};
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-bottom: 6px;
  line-height: 160%;
`;

export const BookInfo = styled.p`
  color: ${({ theme }) => theme.colors.text_gray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  padding: 2px;
  line-height: 140%;
`;

export const TagsContainer = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 6px;
  flex-wrap: wrap;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
