'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3<{ $type: string }>`
  color: ${({ theme, $type }) =>
    $type === 'pros' ? theme.colors.key_color : theme.colors.key_color_blue};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: end;
  overflow: hidden;
`;

export const TagContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  position: relative;
`;

export const Tag = styled.span<{ $type: string }>`
  border-radius: 22px;
  padding: 6px 12px;
  background-color: ${({ theme, $type }) =>
    $type === 'pros' ? theme.colors.key_color : theme.colors.key_color_blue};
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.base};
`;
