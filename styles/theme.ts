import { Colors, Font } from 'styled-components';

const colors: Colors = {
  key_color: '#ACD1AD',
  key_color_light: '#DCE4DC',
  key_color_deep: '#2ba830',
  key_color_blue: '#ADBFC9',
  bg_white: '#ffffff',
  bg_popup: '#80808076',
  text_white: '#fff',
  text_black: '#000',
  text_darkgray: '#404040',
  text_gray: '#818181',
  text_lightgray: '#B1B1B1',
  text_red: '#DD4200',
  input_gray: '#D9D9D9',
  button_gray: '#c4c4c4',
  error_red: '#DB1D18',
};

const fontSize: Font = {
  xxs: '6px',
  xs: '8px',
  sm: '10px',
  base: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
  xxl: '20px',
  xxxl: '24px',
  title: '28px',
  rating: '40px',
  login: '64px',
};

export const theme = {
  colors,
  fontSize,
};
