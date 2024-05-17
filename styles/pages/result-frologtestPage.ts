import { theme } from '@styles/theme';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled(Image)`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  margin: 40px 0;
`;

export const Quotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const lQuote = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 11px;
`;

export const rQuote = styled(Image)`
  width: 20px;
  height: 20px;
  margin-left: 11px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text_black};
  width: 264px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.5px;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.key_color_deep};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.4px;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
  width: 328px;
  margin: 25px 0;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;
  font-weight: 400;
  line-height: 35px;
  margin-bottom: 20px;
`;

export const Hashtag = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.key_color_deep};
  text-align: center;
  margin-bottom: 15px;
`;

export const Details = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  text-align: left;
  list-style-type: disc;
  padding-left: 20px;
  line-height: 30px;
  font-weight: 300;
  margin-bottom: 80px;
`;
