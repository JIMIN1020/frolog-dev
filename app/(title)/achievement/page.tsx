'use client';

import BadgeList from '@components/myPage/badge/BadgeList';
import ChallengeList from '@components/myPage/badge/ChallengeList';
import React, { useState } from 'react';
import styled from 'styled-components';

function AchievementPage() {
  const [tap, setTap] = useState<number>(0);

  return (
    <Container>
      <TapBar>
        <TapWrapper>
          <TapButton $type='left' onClick={() => setTap(0)}>
            달성 업적
          </TapButton>
          <TapButton $type='right' onClick={() => setTap(1)}>
            도전 업적
          </TapButton>
          <CurrentTap $cur={tap}>
            {tap === 0 ? '달성 업적' : '도전 업적'}
          </CurrentTap>
        </TapWrapper>
        <TextBox>
          {tap === 0 ? (
            <Count>
              <h5>달성 업적 수 :</h5>
              <span>5</span>
            </Count>
          ) : (
            <CurrentHit>달성도 :</CurrentHit>
          )}
        </TextBox>
      </TapBar>
      {tap === 0 ? <BadgeList /> : <ChallengeList />}
    </Container>
  );
}

export default AchievementPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

const TapBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  gap: 16px;
`;

const Count = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;

const TapWrapper = styled.div`
  position: relative;
`;

const TextBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const TapButton = styled.button<{ $type: string }>`
  width: 120px;
  height: 34px;
  border: none;
  background-color: ${({ theme }) => theme.colors.key_color_light};
  border-radius: ${({ $type }) =>
    $type === 'left' ? '12px 0 0 12px' : '0 12px 12px 0'};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_lightgray};
  cursor: pointer;
`;

const CurrentTap = styled.div<{ $cur: number }>`
  width: 120px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_white};
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: ${({ $cur }) => ($cur === 0 ? '0px' : '120px')};
  transition: all 0.3s ease-in;
`;

const CurrentHit = styled.span`
  width: 100%;
  text-align: end;
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;
