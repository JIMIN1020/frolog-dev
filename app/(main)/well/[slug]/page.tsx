'use client';

import NewWellItem from '@components/wellPage/NewWellItem';
import WellItem from '@components/wellPage/WellItem';
import { wellDummy } from '@data/dummyData/wellDummy';
import { StyledButton } from '@styles/GlobalStyles';
import React, { useState } from 'react';
import styled from 'styled-components';

// export async function generateStaticParams() {
//   const slugs = wellDummy.map((well) => ({
//     slug: well.id.toString(),
//   }));
//   return slugs;
// }

interface WellDetailPageProps {
  params: {
    slug: string;
  };
}

export default function WellDetailPage({ params }: WellDetailPageProps) {
  const [edit, setEdit] = useState<boolean>(false);
  const { slug } = params;
  const data = wellDummy.filter((well) => well.id === +slug)[0];

  return (
    <Container>
      <WellInfoWrapper>
        {edit ? (
          <>
            <NewWellItem data={data} />
            <ButtonContainer>
              <StyledButton
                disabled={false}
                $color='key_color'
                onClick={() => setEdit(false)}
              >
                수정하기
              </StyledButton>
              <StyledButton
                disabled={false}
                $color='button_gray'
                onClick={() => setEdit(false)}
              >
                취소하기
              </StyledButton>
            </ButtonContainer>
          </>
        ) : (
          <WellItem data={data} setEdit={setEdit} />
        )}
      </WellInfoWrapper>
      <BookContainer>
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
      </BookContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.input_gray};
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
