'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface ReadingTempProps {
  temp: number;
}

export default function ReadingTemp({ temp }: ReadingTempProps) {
  return (
    <Container>
      <Title>독서 온도</Title>
      <Bar>
        <InnerBar>
          <TempBar
            $temp={temp}
            initial={{ width: 0 }}
            animate={{ width: `${temp}%` }}
            transition={{ duration: 0.7 }}
          />
        </InnerBar>
      </Bar>
      <Temp>{temp}°C</Temp>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h4`
  width: 70px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  margin-top: 4px;
`;

const Bar = styled.div`
  flex: 1;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 5px;
`;

const InnerBar = styled.div`
  width: 100%;
  height: 14px;
  border-radius: 16px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.3) inset;
  background-color: ${({ theme }) => theme.colors.input_gray};
`;

const TempBar = styled(motion.div)<{ $temp: number }>`
  width: ${({ $temp }) => $temp}%;
  height: 95%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.key_color};
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 0px;
`;

const Temp = styled.h4`
  width: 50px;
  text-align: end;
  padding-left: 12px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.key_color};
  margin-top: 4px;
`;
