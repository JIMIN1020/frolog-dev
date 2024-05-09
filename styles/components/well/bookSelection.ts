'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.bg_white};
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const BookContainer = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  & p {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.text_lightgray};
    font-weight: 300;
  }
`;

export const BookWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;
