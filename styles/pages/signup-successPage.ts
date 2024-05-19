import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

export const Blank = styled.div`
  width: 1px;
  height: 1px;
`;

export const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.rating};
  font-weight: 600;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled(Image)`
  margin: 20px 0;
`;

export const MessageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.7;
  padding: 0 20px;
`;

export const lQuote = styled(Image)`
  margin-right: 11px;
`;

export const rQuote = styled(Image)`
  margin-left: 11px;
`;
