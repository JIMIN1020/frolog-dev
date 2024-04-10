'use client';

import React from 'react';
import * as S from '@styles/pages/noticePage';
import arrowLeft from 'public/icons/notice/arrow-left.svg';
import AdBanner from '@components/common/AdBanner';
import NoticeItem from '@components/noticePage/NoticeItem';
import { noticeDummy } from '@data/dummyData/noticeDummy';
import Image from 'next/image';

function NoticePage() {
  return (
    <S.Container>
      <S.TopContainer>
        <S.Header>
          <S.BackBtn onClick={() => window.history.back()}>
            <Image src={arrowLeft} alt='back' />
          </S.BackBtn>
          <h1>알림</h1>
        </S.Header>
        <AdBanner />
      </S.TopContainer>
      <S.NoticeBox>
        {noticeDummy.map((data) => {
          return <NoticeItem key={data.id} noticeData={data} />;
        })}
      </S.NoticeBox>
    </S.Container>
  );
}

export default NoticePage;
