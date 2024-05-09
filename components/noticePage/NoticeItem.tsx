'use client';

import React from 'react';
import styled from 'styled-components';
import { NoticeDummyType } from '../../data/dummyData/noticeDummy';

interface NoticeItemProps {
  noticeData: NoticeDummyType;
}

function NoticeItem({ noticeData }: NoticeItemProps) {
  // TODO: 클릭 시 알림 확인 처리 -> api
  return (
    <Container>
      <ProfileImg />
      <Content>
        <NoticeContent>{noticeData.content}</NoticeContent>
        <TimeInfo>{noticeData.timeinfo}</TimeInfo>
      </Content>
    </Container>
  );
}

export default NoticeItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 20px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
`;

const ProfileImg = styled.div`
  // 임시 프로필 이미지
  background-color: lightgray;
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const NoticeContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.06px;
  padding-top: 6px;
  white-space: pre-wrap;
`;

const TimeInfo = styled.span`
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.06px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
