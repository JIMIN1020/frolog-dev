'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { BadgeType } from '@data/dummyData/badgeDummy';
import { DraggableProvided } from 'react-beautiful-dnd';
import { ICONS } from 'constants/icon';

interface BadgeListItemProps {
  /** 배지 정보 */
  badgeData: BadgeType;
  provided: DraggableProvided;
}

export default function BadgeListItem({
  badgeData,
  provided,
}: BadgeListItemProps) {
  return (
    <BarContainer>
      <LeftSection>
        <ProfileImage src='' alt='badge' />
        <Content>
          <Name>{badgeData.name}</Name>
          <Desc>{badgeData.desc}</Desc>
        </Content>
      </LeftSection>
      <div {...provided.dragHandleProps}>
        <Image src={ICONS.myPage.list} alt='item' width={20} height={14} />
      </div>
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
