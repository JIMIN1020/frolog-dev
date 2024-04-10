import { createGlobalStyle, keyframes } from 'styled-components';
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

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const fadeUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0%); }
`;

export const fadeDown = keyframes`
  0% { transform: translateY(-100%);  }
  100% { transform: translateY(0%); }
`;
