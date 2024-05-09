'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0 40px 0;
`;

export const ItemList = styled.div`
  width: 100%;
  padding: 16px 0;
  border-top: 1.5px solid ${({ theme }) => theme.colors.key_color};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
