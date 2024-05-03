'use client';

import React from 'react';
import styled from 'styled-components';
import { ChallengeType } from '@data/dummyData/badgeDummy';

interface ChallengeListItemProps {
  /** 도전 업적 정보 */
  challengeData: ChallengeType;
}

export default function ChallengeListItem({
  challengeData,
}: ChallengeListItemProps) {
  return (
    <BarContainer>
      <LeftSection>
        <ProfileImage src='' alt='badge' />
        <Content>
          <Name>{challengeData.name}</Name>
          <Desc>{challengeData.desc}</Desc>
        </Content>
      </LeftSection>
      <Status>
        {challengeData.current}/{challengeData.total}
      </Status>
    </BarContainer>
  );
}

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-top: 5px;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 44px;
  box-shadow: 1px 1px 1px grey;
  background-color: lightgray;
  margin-right: 16px;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2px;
`;

const Desc = styled.span`
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;
  line-height: normal;
`;

const Status = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;
