import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 40px 50px 20px 50px;
`;

export const Title = styled.span`
  align-items: center;
  text-align: center;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.title2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.key_color};
`;

export const ProgressBar = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 20px;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.key_color};
  margin-top: 46px;
`;

const growText = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const AnalysisCompleteText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.rating};
  color: ${({ theme }) => theme.colors.key_color};
  margin: 60px 0 40px 0;
  font-weight: 700;
  line-height: normal;
  animation: ${growText} 0.3s ease-in-out;
`;

export const Logo = styled(Image)`
  width: 160px;
  height: 160px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 170px;
  animation: ${fadeIn} 2s ease-in-out;
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.7;
  padding: 0 20px;
  width: 264px;
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
