'use client';

import HeaderWithBtn from '@components/common/header/HeaderWithBtn';
import NewWellItem from '@components/wellPage/NewWellItem';
import WellBook from '@components/wellPage/WellBook';
import { StyledButton } from '@styles/GlobalStyles';
import { useMockData } from 'mock/MockData';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import BookSelectionPage from '@components/wellPage/BookSelectionPage';
import { motion } from 'framer-motion';
import { bookContainerVariants } from '@styles/framer-motion/variants';
import { WellDataType } from '@data/dummyData/wellDummy';

// 우물 생성 혹은 편집 페이지. 쿼리 스트링 값에 따라 편집 혹은 생성 페이지로 사용될 예정
// 우물 정보 -> react hook form으로 관리
export default function WellEditPage() {
  const router = useRouter();
  const [isSelecting, setIsSelecting] = useState(false); // 책 선택 중인지 여부
  const { getWell, addWell, editWell } = useMockData();
  const isNew = useSearchParams().get('new') === 'true'; // 생성 페이지인지에 대한 여부
  const wellId = useSearchParams().get('wellId');
  const wellData = wellId ? getWell(wellId) : null;

  // react hook form
  const methods = useForm<WellDataType>({
    defaultValues: {
      id: wellId || `well-${Date.now()}`,
      owner: {
        id: 'test-user',
        username: '테스트',
        profile_url:
          'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
        achievement: '나는 프롤로그 테스터',
      },
      name: wellData ? wellData.name : '',
      desc: wellData ? wellData.desc : '',
      is_default: wellData ? wellData.is_default : false,
      stat: {
        like_cnt: wellData ? wellData.stat.like_cnt : 0,
      },
      books: wellData ? wellData.books : [],
    },
  });

  const { watch, handleSubmit } = methods;
  const books = watch('books');

  /* ----- 생성/편집 완료 핸들러 ----- */
  const onClickDone = (data: any) => {
    // 서버 요청
    if (isNew) {
      addWell(data);
    } else {
      editWell(wellId, data);
    }
    // 네비게이팅
    router.push(isNew ? '/well/test-user' : `/well/test-user/${wellId}`);
  };

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onClickDone)}>
        <HeaderWithBtn />
        <Wrapper>
          <WellInfoWrapper>
            <NewWellItem />
            <ButtonContainer>
              <StyledButton
                disabled={false}
                $color='key_color'
                type='button'
                onClick={() => setIsSelecting(true)}
              >
                {wellData ? '책 수정하기' : '책 추가하기'}
              </StyledButton>
              <StyledButton type='button' disabled={false} $color='button_gray'>
                취소하기
              </StyledButton>
            </ButtonContainer>
          </WellInfoWrapper>
          <BookContainer
            variants={bookContainerVariants}
            initial='in'
            animate='show'
          >
            {books.map((book: any) => (
              <WellBook key={book.id} bookData={book} />
            ))}
          </BookContainer>
        </Wrapper>
      </FormContainer>
      {isSelecting && (
        <BookSelectionPage handleDone={() => setIsSelecting(false)} />
      )}
    </FormProvider>
  );
}

const FormContainer = styled.form`
  width: 100%;
  height: calc(100dvh - 70px);
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  @media screen and (min-width: 430px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.input_gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const WellInfoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 10px 0 10px;
  position: absolute;
  top: 0;
  left: 0;
`;

const BookContainer = styled(motion.div)`
  width: 80%;
  min-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: end;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 50px;
`;
