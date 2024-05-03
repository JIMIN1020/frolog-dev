'use client';

import BottomSheet from '@components/common/BottomSheet';
import styled from 'styled-components';
import React, { useState } from 'react';
import BadgeList from './BadgeList';
import ChallengeList from './ChallengeList';

interface BadgeBottomSheetProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BadgeBottomSheet({ setOpen }: BadgeBottomSheetProps) {
  const [tap, setTap] = useState<number>(0);
  return (
    <BottomSheet title='내가 모은 업적' setOpen={setOpen}>
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
        <Count>
          {tap === 0 ? (
            <>
              <h5>달성 업적 수 :</h5>
              <span>5</span>
            </>
          ) : (
            <></>
          )}
        </Count>
      </TapBar>
      {tap === 0 ? <BadgeList /> : <ChallengeList />}
    </BottomSheet>
  );
}

export default BadgeBottomSheet;

const TapBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 16px;
`;

const Count = styled.div`
  height: 16px;
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const TapWrapper = styled.div`
  position: relative;
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
