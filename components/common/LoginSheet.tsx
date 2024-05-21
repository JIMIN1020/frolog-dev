'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion, useAnimation, useDragControls } from 'framer-motion';
import { modalBackgroundVariants } from '@styles/framer-motion/variants';
import { StyledButton, fadeUp } from '@styles/GlobalStyles';
import useClickOutside from '@hooks/useClickOutside';
import { ICONS } from 'constants/icon';
import useStore from 'store/store';
import { useRouter } from 'next/navigation';

function LoginSheet() {
  const router = useRouter();
  const { setIsOpenLoginPopUp } = useStore();
  const ref = useRef<HTMLDivElement | null>(null); // BottomSheet에 대한 ref
  const [sheetHeight, setSheetHeight] = useState<number>(0); // BottomSheet 높이
  const controls = useAnimation(); // BottomSheet 애니메이션 제어
  const dragControls = useDragControls(); // drag 제어

  const handleClickLogin = () => {
    closeBottomsheet();
    router.push('/login');
  };

  /* ----- 바텀시트 닫는 함수 ----- */
  const closeBottomsheet = () => {
    controls.start({ y: sheetHeight + 1000 }); // BottomSheet를 애니메이션하여 화면 밖으로 내보냄
    setTimeout(() => setIsOpenLoginPopUp(false), 300); // BottomSheet를 완전히 닫음
    document.body.style.overflow = 'auto';
    setIsOpenLoginPopUp(false);
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
          <Image
            src={ICONS.bottomSheet.line}
            alt='line'
            width={36}
            height={4}
          />
        </Header>
        <Content>
          <Wrapper>
            <Logo
              src={ICONS.home.frologLogo}
              alt='logo'
              width={120}
              height={120}
            />
            <TextBox>
              <h4>아직 계정이 없습니다...</h4>
              <p>
                해당 기능은 로그인 이후에
                <br />
                이용이 가능해요!
              </p>
            </TextBox>
          </Wrapper>
          <StyledButton disabled={false} onClick={handleClickLogin}>
            로그인하러 가기
          </StyledButton>
        </Content>
      </BottomSheetContainer>
    </Background>
  );
}

export default LoginSheet;

const Background = styled(motion.div)`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.colors.bg_popup};

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;

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
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 18px 18px 0 0;

  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  animation: ${fadeUp} 0.5s;
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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & h4 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    font-weight: 500;
  }

  & p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 140%;
  }
`;

const Logo = styled(Image)`
  margin: 0;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
  gap: 30px;
`;
