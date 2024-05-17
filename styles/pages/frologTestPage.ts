import { theme } from '@styles/theme';

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  height: fit-content;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 40px 50px 20px 50px;
`;

export const BackButton = styled(Image)`
  visibility: hidden;
`;

export const TitleWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const Title = styled.span`
  align-items: center;
  text-align: center;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.title2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.key_color};
`;
