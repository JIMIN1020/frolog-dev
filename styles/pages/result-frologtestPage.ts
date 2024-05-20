import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px 50px 30px;
  gap: 50px;
`;

export const Logo = styled(Image)`
  width: 160px;
  height: 160px;
  flex-shrink: 0;
  margin: 40px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Quotes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Description = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;
  font-weight: 400;
  line-height: 35px;
  padding: 20px 0;

  border-top: 1px solid ${({ theme }) => theme.colors.key_color};
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
`;

export const Hashtag = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.key_color_deep};
  text-align: center;
`;

export const Details = styled.ul`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text_black};
  text-align: left;
  list-style-type: disc;
  padding-left: 20px;
  line-height: 200%;
  font-weight: 300;

  padding: 30px;
`;
