'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { modalBackgroundVariants } from '@styles/framer-motion/modalBackground';
import Cancel from 'public/icons/popUp/Cancel.svg';
import styled from 'styled-components';
import { reportData } from '../../../data/reportData';
import useClickOutside from '../../../hooks/useClickOutside';

type FeedPopUpProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function FeedPopUp({ setOpen }: FeedPopUpProps) {
  const ref = useRef<HTMLDivElement | null>(null); // 팝업에 대한 ref
  const [openReport, setOpenReport] = useState<boolean>(false); // 신고 팝업
  const [openDone, setOpenDone] = useState<boolean>(false); // 신고 완료 팝업

  /* ----- 팝업 바깥 클릭 시 닫힘 hook ----- */
  useClickOutside(ref, () => setOpen(false));

  const report = () => {
    // 신고 함수 -> 추후 api 연동
    setOpenReport(false);
    setOpenDone(true);
  };
  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <PopUp
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
      >
        {/* 기본 팝업 */}
        {!openReport && !openDone && (
          <>
            <MenuItem>이 계정 보기</MenuItem>
            <MenuItem>숨기기</MenuItem>
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
              <Image src={Cancel} alt='cancel' />
              취소
            </>
          )}
        </CancelBtn>
      </PopUp>
    </Background>
  );
}

export default FeedPopUp;

const Background = styled(motion.div)`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.colors.bg_popup};

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 900;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 450px;
  }
`;

const PopUp = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  padding: 0 18px;
  padding-bottom: 16px;
`;

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
