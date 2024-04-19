'use client';

import styled from 'styled-components';

export const ReviewContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.bg_white};
  overflow: hidden; // 내부 컴포넌트가 ReviewContainer 넘지 않도록
`;
