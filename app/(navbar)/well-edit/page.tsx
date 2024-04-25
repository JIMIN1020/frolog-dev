'use client';

import HeaderWithBtn from '@components/common/header/HeaderWithBtn';
import NewWellItem from '@components/wellPage/NewWellItem';
import { StyledButton } from '@styles/GlobalStyles';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

// 우물 생성 혹은 편집 페이지. 쿼리 스트링 값에 따라 편집 혹은 생성 페이지로 사용될 예정
export default function WellEditPage() {
  const router = useRouter();
  const isNew = useSearchParams().get('new') === 'true'; // 생성 페이지인지에 대한 여부
  return (
    <Container>
      <HeaderWithBtn isNew={isNew} />
      <Wrapper>
        <WellInfoWrapper>
          <NewWellItem
            data={
              isNew
                ? {
                    id: 1,
                    title: '',
                    description: '',
                  }
                : {
                    id: 1,
                    title: '소설 모음',
                    description: '내가 책을 덮으면서 느낀 감정을 한마디로..',
                  }
            }
          />
          <ButtonContainer>
            <StyledButton
              disabled={false}
              $color='key_color'
              onClick={() => router.push('/well-book')}
            >
              {isNew ? '책 추가하기' : '책 수정하기'}
            </StyledButton>
            <StyledButton disabled={false} $color='button_gray'>
              취소하기
            </StyledButton>
          </ButtonContainer>
        </WellInfoWrapper>
        <BookContainer>
          {isNew ? (
            <></>
          ) : (
            <>
              <Book $margin='0px 0px 0px 30px'>
                <span>노르웨이의 숲</span>
              </Book>
              <Book $margin='0px 20px 0px 0px'>
                <span>노르웨이의 숲</span>
              </Book>
              <Book $margin='0px 0px 0px 0px'>
                <span>노르웨이의 숲</span>
              </Book>
              <Book $margin='0px 30px 0px 0px'>
                <span>노르웨이의 숲</span>
              </Book>
            </>
          )}
        </BookContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
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

const BookContainer = styled.div`
  width: 80%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
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
  padding: 20px 0;
`;

const Book = styled.div<{ $margin: string }>`
  width: 180px;
  height: 40px;
  display: flex;
  margin: ${({ $margin }) => $margin};
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.key_color};

  & span {
    writing-mode: vertical-lr;
    text-orientation: upright;
    transform: rotate(270deg);
    font-size: ${({ theme }) => theme.fontSize.base};
    height: 170px;
    text-align: center;
  }
`;
