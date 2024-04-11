'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 22px;
  border: 2px solid ${({ theme }) => theme.colors.key_color};
  overflow: hidden;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.bg_white};
  box-shadow: 0px 3px 0px 0px rgba(11, 36, 13, 0.15);
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const WellInfoBox = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
  padding: 10px 0;
  justify-content: space-between;
`;

export const WellIcon = styled(Image)`
  width: 60px;
  height: 60px;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.text_black};

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 300;
  }
`;

export const MenuWrapper = styled.div`
  padding-top: 8px;
`;
