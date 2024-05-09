import { theme } from '@styles/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    fontSize: typeof theme.fontSize;
  }
}
