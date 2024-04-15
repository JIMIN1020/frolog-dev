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

export const fadeUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0%); }
`;

export const StyledButton = styled.button<{
  disabled: boolean;
  $color: string;
}>`
  width: 288px;
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
    disabled ? theme.colors.button_gray : theme.colors[$color]};
`;
