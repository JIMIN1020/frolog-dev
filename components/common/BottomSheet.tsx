'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion, useAnimation, useDragControls } from 'framer-motion';
import { modalBackgroundVariants } from '@styles/framer-motion/variants';
import Line from 'public/icons/bottomSheet/Line.svg';
import { fadeUp } from '@styles/GlobalStyles';
import useClickOutside from '@hooks/useClickOutside';

interface BottomSheetProps {
  /** 바텀시트 안에 담길 요소들 */
  children: React.ReactNode;
  /** 바텀시트 제목 */
  title: string;
  /** 바텀시트 제어 함수 */
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BottomSheet({ children, title, setOpen }: BottomSheetProps) {
  const ref = useRef<HTMLDivElement | null>(null); // BottomSheet에 대한 ref
  const [sheetHeight, setSheetHeight] = useState<number>(0); // BottomSheet 높이
  const controls = useAnimation(); // BottomSheet 애니메이션 제어
  const dragControls = useDragControls(); // drag 제어

  /* ----- 바텀시트 닫는 함수 ----- */
  const closeBottomsheet = () => {
    controls.start({ y: sheetHeight + 1000 }); // BottomSheet를 애니메이션하여 화면 밖으로 내보냄
    setTimeout(() => setOpen(false), 300); // BottomSheet를 완전히 닫음
    document.body.style.overflow = 'auto';
  };

  /* ----- 바텀시트 바깥 클릭 시 닫힘 hook ----- */
  useClickOutside(ref, closeBottomsheet);

  /* ----- 마운트 시 초기 y 위치, botton sheet 높이 구하기 ----- */
  useEffect(() => {
    if (ref.current) {
      setSheetHeight(ref.current.offsetHeight);
    }
    document.body.style.overflow = 'hidden';
  }, []);

  /* ----- 바텀시트 drag 함수 (drag 속도 기반) ----- */
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: any
  ) => {
    const velocity = info.velocity.y; // y축에 대한 드래그 속도
    // 속도가 일정 값을 초과하면?
    if (velocity > 500) {
      closeBottomsheet();
    }
  };

  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <BottomSheetContainer
        ref={ref}
        drag='y'
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={{ top: 0.1, bottom: 1 }}
        onDragEnd={handleDragEnd} // 드래그 종료 이벤트 처리
        animate={controls} // 애니메이션 적용
        transition={{ duration: 0.5 }} // 애니메이션 지속 시간
      >
        <Header
          onPointerDown={(e) => dragControls.start(e)}
          onClick={closeBottomsheet}
        >
          <Image src={Line} alt='line' />
          <Title>{title}</Title>
        </Header>
        {children}
      </BottomSheetContainer>
    </Background>
  );
}

export default BottomSheet;

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

const BottomSheetContainer = styled(motion.div)`
  width: 100%;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 18px 18px 0 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  animation: ${fadeUp} 0.5s;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    height: 80%;
  }
`;

const Header = styled.button`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 18px 18px 0 0;
  color: ${({ theme }) => theme.colors.text_black};
`;

const Title = styled.h4`
  height: fit-content;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
`;
