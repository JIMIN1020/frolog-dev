'use client';

import styled from 'styled-components';

export const ReviewContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.bg_white};
  overflow: hidden; // 내부 컴포넌트가 ReviewContainer 넘지 않도록
`;

export const BottomGreenBar = styled.div`
  width: 100%;
  height: 8px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.key_color_light};
`;
