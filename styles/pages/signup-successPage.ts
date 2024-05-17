import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.rating};
  margin-bottom: 48px;
`;

export const Logo = styled(Image)`
  width: 160px;
  height: 160px;
  flex-shrink: 0;
  margin-bottom: 70px;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 130px;
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.7;
  padding: 0 20px;
`;

export const lQuote = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 11px;
`;

export const rQuote = styled(Image)`
  width: 24px;
  height: 24px;
  margin-left: 11px;
`;
