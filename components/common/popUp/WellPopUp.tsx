'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useMockData } from 'mock/MockData';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { modalBackgroundVariants } from '@styles/framer-motion/variants';
import Cancel from 'public/icons/popUp/Cancel.svg';
import styled from 'styled-components';
import useClickOutside from '../../../hooks/useClickOutside';

type WellPopUpProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  wellId: number;
};

function WellPopUp({ setOpen, wellId }: WellPopUpProps) {
  const router = useRouter();
  const { deleteWell } = useMockData();
  const ref = useRef<HTMLDivElement | null>(null); // 팝업에 대한 ref
  const [openDelete, setOpenDelete] = useState<boolean>(false); // 우물 삭제 팝업

  /* ----- 팝업 바깥 클릭 시 닫힘 hook ----- */
  useClickOutside(ref, () => setOpen(false));

  /* ----- 우물 삭제 핸들러 ----- */
  const onDeleteWell = () => {
    router.push('/well');
    setOpen(false);
    deleteWell(wellId);
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
        {!openDelete && (
          <>
            <MenuItem
              onClick={() =>
                router.push(`/well-edit?new=false&wellId=${wellId}`)
              }
            >
              편집하기
            </MenuItem>
            <MenuItem
              onClick={() => setOpenDelete(true)}
              style={{ color: 'red' }}
            >
              삭제
            </MenuItem>
          </>
        )}
        {/* 삭제 팝업 */}
        {openDelete && (
          <>
            <DeleteWarning>
              이 우물이 삭제됩니다. 이 동작은 취소할 수 없습니다.
            </DeleteWarning>
            <MenuItem style={{ color: 'red' }} onClick={onDeleteWell}>
              우물 삭제
            </MenuItem>
          </>
        )}
        <CancelBtn onClick={() => setOpen(false)}>
          <Image src={Cancel} alt='cancel' />
          취소
        </CancelBtn>
      </PopUp>
    </Background>
  );
}

export default WellPopUp;

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
  text-align: start;
  cursor: pointer;
  font-weight: 400;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
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

const DeleteWarning = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_gray};
  font-weight: 400;
  padding: 25px 0 10px 0;
`;
