'use client';

import styled from 'styled-components';

export const BookReviewListContainer = styled.div`
  width: 100%;
  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color_light};
  gap: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.key_color_light};
`;
