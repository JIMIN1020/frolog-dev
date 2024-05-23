'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ICONS } from 'constants/icon';
import styled from 'styled-components';
import { reportData } from '../../../data/reportData';
import PopUpLayout from './PopUpLayout';

type FeedPopUpProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function FeedPopUp({ setOpen }: FeedPopUpProps) {
  const [openReport, setOpenReport] = useState<boolean>(false); // 신고 팝업
  const [openDone, setOpenDone] = useState<boolean>(false); // 신고 완료 팝업

  const report = () => {
    // 신고 함수 -> 추후 api 연동
    setOpenReport(false);
    setOpenDone(true);
  };
  return (
    <PopUpLayout closePopUp={() => setOpen(false)}>
      {/* 기본 팝업 */}
      {!openReport && !openDone && (
        <>
          <MenuItem
            onClick={() => setOpenReport(true)}
            style={{ color: 'red' }}
          >
            신고
          </MenuItem>
        </>
      )}
      {/* 신고 팝업 */}
      {openReport && (
        <>
          {reportData.map((data) => (
            <MenuItem key={data.id} onClick={report}>
              {data.title}
            </MenuItem>
          ))}
        </>
      )}
      {/* 신고 완료 팝업 */}
      {openDone && (
        <ReportBox>
          <ReportTitle>신고완료!</ReportTitle>
          <ReportContent>
            더 나은 서비스로 찾아뵙겠습니다.
            <br />
            감사합니다.
          </ReportContent>
        </ReportBox>
      )}
      <CancelBtn onClick={() => setOpen(false)}>
        {openDone ? (
          '확인'
        ) : (
          <>
            <Image
              src={ICONS.popUp.cancel}
              alt='cancel'
              width={24}
              height={24}
            />
            취소
          </>
        )}
      </CancelBtn>
    </PopUpLayout>
  );
}

export default FeedPopUp;

const MenuItem = styled.button`
  width: 100%;
  padding: 16px 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
  text-align: start;
  cursor: pointer;
  font-weight: 400;
`;

const CancelBtn = styled.button`
  width: 100%;
  padding: 20px 0;
  text-align: start;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.lg};
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-top: 1px solid ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_black};

  display: flex;
  align-items: center;
  gap: 6px;

  & img {
    width: 22px;
    height: 22px;
  }
`;

const ReportBox = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReportTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.key_color};
`;

const ReportContent = styled.p`
  width: 100%;
  text-align: center;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  font-weight: 400;
`;
