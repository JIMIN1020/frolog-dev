'use client';

import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10px;
`;

export const ListTitle = styled.h2`
  color: #649b66;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  padding: 0 5px;
`;

export const WellWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
