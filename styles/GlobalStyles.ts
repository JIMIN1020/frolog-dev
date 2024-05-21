'use client';

import styled, { createGlobalStyle, keyframes } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  .slick-list {
    border-radius: 12px;
  }
  
  // 스크롤바 스타일 숨기기
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

/* ----- fade up 효과 ----- */
export const fadeUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0%); }
`;

/* ----- 피드 나열용 수직 컨테이너 ----- */
// gap이 8px씩 존재하여 중간중간 key color bar가 보임
export const GapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  height: fit-content;
  padding: 8px 0;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.key_color_light};
`;

export const StyledButton = styled.button<{
  disabled: boolean; // disabled 여부 값 -> disabled 이면 회색으로 클릭 안됨
  $color?: string; // color: disabled는 아니지만 색이 달라야 할 때 theme에 있는 키 값 전달
}>`
  width: 100%;
  height: 44px;
  flex-shrink: 0;
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.colors.text_white};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.lg};
  cursor: pointer;

  background-color: ${({ theme, disabled, $color }) =>
    disabled
      ? theme.colors.button_gray
      : theme.colors[($color as keyof typeof theme.colors) || 'key_color']};
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.text_black};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  margin-right: 7px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3px;

  &:checked {
    background-color: ${({ theme }) => theme.colors.key_color};
  }

  &:checked::after {
    content: '✓';
    font-size: 20px;
    color: ${({ theme }) => theme.colors.bg_white};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.text_lightgray};
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.lg};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_lightgray};
  }
`;
