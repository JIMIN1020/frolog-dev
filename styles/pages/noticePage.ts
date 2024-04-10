'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  padding-top: 24px;

  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color_light};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 14px 0;
  position: relative;

  & h1 {
    width: 100%;
    color: ${({ theme }) => theme.colors.text_black};
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    letter-spacing: -0.07px;
    text-align: center;
  }
`;

export const BackBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
  cursor: pointer;
`;

export const NoticeBox = styled.div`
  flex: 1;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
