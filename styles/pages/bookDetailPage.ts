'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-top: 8px solid ${({ theme }) => theme.colors.key_color_light};
  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color_light};
`;

export const BookContainer = styled.div`
  width: 100%;
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px 0;
  padding-bottom: 30px;
  border-top: 1px solid ${({ theme }) => theme.colors.key_color};
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
`;

export const ProsAndConsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ReviewButton = styled.button`
  width: 288px;
  height: 44px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.key_color};
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;

  &:hover {
    scale: calc(1.03);
  }
`;

export const BestReview = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  padding: 16px 0;
`;

export const BestReviewList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
