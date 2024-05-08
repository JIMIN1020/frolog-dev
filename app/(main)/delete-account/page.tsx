'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import frogIcon from 'public/icons/mypage/frog.svg';
import { statDummy } from '@data/dummyData/statDummy';
import { StyledButton } from '@styles/GlobalStyles';
import { useRouter } from 'next/navigation';

function DeleteAccountPage() {
  const router = useRouter();
  return (
    <Container>
      <Image src={frogIcon} alt='frog' />
      <Message>
        탈퇴 후에는 ‘유저’ 님께서 열심히 획득하신 아래 업적들이 모두 삭제되어
        조회 및 사용할 수 없게 됩니다. 그래도 삭제하시겠습니까?
      </Message>
      <StatContainer>
        {statDummy.map((data) => {
          return (
            <Stat key={data.id}>
              <span>{data.name} :</span>
              <h5>{data.value}</h5>
            </Stat>
          );
        })}
      </StatContainer>
      <BtnContainer>
        <StyledButton disabled={false} onClick={() => router.push('/myPage')}>
          취소
        </StyledButton>
        <StyledButton
          disabled={false}
          $color='button_gray'
          onClick={() => router.push('/delete-account/confirm')}
        >
          회원탈퇴
        </StyledButton>
      </BtnContainer>
    </Container>
  );
}

export default DeleteAccountPage;

const Container = styled.div`
  width: 100%;
  padding: 60px;
  gap: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.text_red};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 180%;
  letter-spacing: -0.408px;
`;

const StatContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

const Stat = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text_black};

  & span {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 400;
  }

  & h5 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
