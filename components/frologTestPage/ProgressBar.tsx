import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const [prevProgress, setPrevProgress] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newProgress = (currentStep / totalSteps) * 100;
    setPrevProgress(progress);
    setProgress(newProgress);
  }, [currentStep, totalSteps]);

  return (
    <ProgressBarWrapper>
      <Progress $prevProgress={prevProgress} $progress={progress} />
    </ProgressBarWrapper>
  );
}

export default ProgressBar;

const ProgressBarWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 12px;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.input_gray};

  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
`;

const grow = (start: number, end: number) => keyframes`
  from {
    width: ${start}%;
  }
  to {
    width: ${end}%;
  }
`;

const Progress = styled.div<{ $prevProgress: number; $progress: number }>`
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.key_color};
  animation: ${({ $prevProgress, $progress }) => css`
    ${grow($prevProgress, $progress)} 0.8s ease-out;
  `};
`;
