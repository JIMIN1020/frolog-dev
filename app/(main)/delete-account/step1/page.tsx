import Image from 'next/image';
import React from 'react';
import * as S from '@styles/pages/deleteStep1Page';
import { statDummy } from '@data/dummyData/statDummy';
import DeleteButtons from '@components/deletePage/DeleteButtons';
import { ICONS } from 'constants/icon';

function DeleteAccountPage() {
  return (
    <S.Container>
      <Image src={ICONS.myPage.frog} alt='frog' width={200} height={200} />
      <S.Message>
        탈퇴 후에는 ‘유저’ 님께서 열심히 획득하신 아래 업적들이 모두 삭제되어
        조회 및 사용할 수 없게 됩니다. 그래도 삭제하시겠습니까?
      </S.Message>
      <S.StatContainer>
        {statDummy.map((data) => {
          return (
            <S.Stat key={data.id}>
              <span>{data.name} :</span>
              <h5>{data.value}</h5>
            </S.Stat>
          );
        })}
      </S.StatContainer>
      <DeleteButtons />
    </S.Container>
  );
}

export default DeleteAccountPage;
