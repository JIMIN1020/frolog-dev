import 'styled-components';

declare module 'styled-components' {
  export interface Colors {
    key_color: string;
    key_color_light: string;
    key_color_deep: string;
    key_color_blue: string;
    bg_white: string;
    bg_popup: string;
    text_white: string;
    text_black: string;
    text_darkgray: string;
    text_gray: string;
    text_lightgray: string;
    text_red: string;
    input_gray: string;
    button_gray: string;
    error_red: string;
  }
  export interface Font {
    xxs: string;
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    title: string;
    rating: string;
    login: string;
  }
}
